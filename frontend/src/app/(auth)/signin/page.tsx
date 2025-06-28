import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default async function SignInPage() {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await signIn('credentials', {
      email,
      password,
      redirect: true,
      redirectTo: '/dashboard',
    });
  };

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col justify-center gap-4 w-[500px] mx-auto"
      >
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
