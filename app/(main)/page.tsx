import { Button } from "@/components/ui/button";
import { starterConfig } from "@/starter.config";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-1">
      <div id="hero" className="max-w-5xl mx-auto my-20 flex flex-col gap-14">
        <h1 className="text-7xl font-light text-center leading-relaxed">
          {starterConfig.description}
        </h1>
        <div className="flex justify-center">
          <Button size="lg" className="text-lg" asChild>
            <Link href="/editor">Get started</Link>
          </Button>
        </div>
      </div>
      <div>
        <p>TODO explain stuff with cards</p>
      </div>
    </main>
  );
}
