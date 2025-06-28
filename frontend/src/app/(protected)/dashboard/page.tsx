import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div>
      <pre className="font-mono">{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          'use server';
          await signOut({ redirect: true, redirectTo: '/' });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
