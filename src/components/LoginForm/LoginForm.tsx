import { signOut, signIn } from "@/auth";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const LoginForm = async () => {
  return (
    // <div className="flex flex-col border border-zinc-500 rounded-md p-4 ">
    //   <form
    //     action={async (formData) => {
    //       "use server";
    //       await signIn("credentials", {
    //         email: formData.get("email"),
    //         password: formData.get("password"),
    //       });
    //     }}
    //   >
    //     <input type="text" placeholder="Email" name="email" />
    //     <input type="password" placeholder="Password" name="password" />
    //     <button type="submit">Login</button>
    //   </form>
    //   <form
    //     action={async () => {
    //       "use server";
    //       await signIn("google");
    //     }}
    //   >
    //     <button type="submit">SignIn with google</button>
    //   </form>

    //   <form
    //     action={async () => {
    //       "use server";
    //       await signOut();
    //     }}
    //   >
    //     <button type="submit">Sign Out</button>
    //   </form>
    // </div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>
          Enter your email and password below to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="John" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" placeholder="******" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>

        <Link href=""></Link>
      </CardFooter>
    </Card>
  );
};
