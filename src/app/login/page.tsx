import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import LoginForm from "./components/login-form";

export const metadata: Metadata = {
    title: "Login | nxtbn",
    description: "Example music app using the components.",
  }

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export const iframeHeight = "600px";

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4";

export default function Login() {
  return (
    <div className="h-[calc(100vh-7vh)] overflow-y-hidden flex items-center justify-center">
      <Card className="mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
            <LoginForm />
          
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
