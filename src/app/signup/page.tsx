import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import RegisterForm from "./components/register-form";

export const metadata: Metadata = {
  title: "Signup | nxtbn",
  description: "Example music app using the components.",
}

export default function Login() {
  return (
    <div className="h-[calc(100vh-7vh)] overflow-y-hidden flex items-center justify-center">
      <Card className="mx-auto max-h-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
