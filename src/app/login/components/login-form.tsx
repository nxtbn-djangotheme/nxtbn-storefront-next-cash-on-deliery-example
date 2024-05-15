"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useApiHelper from "@/lib/api";
import { useUserStore } from "@/lib/store";
import { setCookie } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

function LoginForm() {
  const router = useRouter();
  const { addUser, user } = useUserStore();
  const { login } = useApiHelper();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const { data } = await login(values);

      if (data) {
        toast.success("Logged in successfully", {
          theme: "dark",
        });

        addUser({
          id: data.user.id,
          isAuthenticated: true,
          email: data.user.username,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
        });

        // saving the access and refresh token in cookie
        setCookie("accessToken", data.token.access);
        setCookie("refreshToken", data.token.refresh);
        // naviagating to home
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.detail) {
        toast.error(error.response.data.detail);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[30rem] space-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Password</FormLabel>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage className="text-wrap max-w-[35rem]" />
            </FormItem>
          )}
        />
        <div className="grid gap-4">
          <Button type="submit" className="w-full">
            Login
          </Button>

          <Button asChild variant="outline">
            <Link href={"#"} className="w-full">
              Login with Google
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LoginForm;
