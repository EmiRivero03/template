import { LoginForm } from "@/components";
import { RegisterForm } from "@/components/auth/RegisterForm/RegisterForm";

export default async function Home() {
  return (
    <main className="w-full gap-2 flex min-h-dvh items-center justify-center">
      <LoginForm />
      <RegisterForm />
    </main>
  );
}
