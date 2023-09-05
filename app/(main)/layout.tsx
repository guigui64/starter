import { TopNav } from "@/components/top-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TopNav title="[starter]" />
      {children}
    </main>
  );
}
