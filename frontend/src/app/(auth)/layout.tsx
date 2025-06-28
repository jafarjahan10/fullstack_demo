import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen h-full flex items-center justify-center">
      <div className="flex-1 bg-foreground h-screen text-background flex items-center justify-center">
        HELLO
      </div>
      <div className="flex-1 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
