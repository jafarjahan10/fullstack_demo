import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/signin');
  }
  return <div>{children}</div>;
}
