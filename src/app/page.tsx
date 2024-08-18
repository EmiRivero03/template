import { LoginForm, SignupForm } from "@/components";

export default async function Home() {
  return (
    <main className="w-full gap-2 flex min-h-dvh items-center justify-center">
      <LoginForm />
      <SignupForm />
    </main>
  );
}
