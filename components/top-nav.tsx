import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { poppins } from "@/lib/fonts";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserButton } from "./user-button";

export const TopNav = ({
  title,
  slot,
}: {
  title: string;
  slot?: React.ReactNode;
}) => {
  return (
    <header className="px-8 py-4 border-b dark:border-b-white/20 border-b-black/20 flex flex-row justify-between items-center">
      <Link
        href="/"
        className={cn(
          poppins.className,
          "text-3xl font-medium uppercase hover:underline underline-offset-8",
        )}
      >
        {title}
      </Link>
      {slot}
      <div className="flex flex-row gap-2 items-center">
        <ThemeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};
