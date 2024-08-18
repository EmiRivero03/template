import { LoginForm, SignupForm } from '@/components';

export default async function Home() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center gap-2">
      <LoginForm />
      <SignupForm />
    </main>
  );
}
