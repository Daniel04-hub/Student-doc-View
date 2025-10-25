import { BookOpen } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">DocExplainer AI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" data-testid="link-how-it-works">
            How It Works
          </Button>
          <Button variant="ghost" data-testid="link-features">
            Features
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
