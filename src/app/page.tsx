import { LoginForm } from "@/components";

export default async function Home() {
  return (
    <main className="flex justify-center w-full min-h-dvh">
      <div className="w-64 pt-36">
        <LoginForm />
      </div>
    </main>
  );
}
