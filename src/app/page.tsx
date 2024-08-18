import { LoginForm } from "@/components";

export default async function Home() {
  return (
    <main className="w-full flex min-h-dvh items-center justify-center">
      <LoginForm />
    </main>
  );
}
