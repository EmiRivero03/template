import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export const SignupForm = () => {
  return (
    <Card className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" placeholder="******" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex w-full flex-col gap-4">
          {/* TODO: add sign up action */}
          <Button className="w-full">Sign Up</Button>

          <Separator className="my-1.5" />

          {/* TODO: replace with google sign in button */}
          <Button variant="outline" className="w-full">
            Sign Up with Google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
