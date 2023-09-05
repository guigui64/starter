"use client";

import { UserButton as ClerkUserButton } from "@clerk/nextjs";
import useClerkAppearance from "@/lib/hooks/use-clerk-appearance";

export const UserButton = () => {
  const appearance = useClerkAppearance();

  return (
    <ClerkUserButton
      appearance={{
        ...appearance,
        userProfile: appearance,
      }}
    />
  );
};
