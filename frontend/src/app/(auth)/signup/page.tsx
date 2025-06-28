'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';

export default function SignUpPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + '/auth/register',
      {
        email,
        password,
      }
    );

    if (res.status !== 201) {
      throw new Error('Failed to create user');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 w-[500px] mx-auto"
      >
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
