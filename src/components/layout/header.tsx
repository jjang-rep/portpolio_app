"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "소개", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "기술", href: "#skills" },
  { label: "연락처", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // 현재 활성화된 섹션 파악
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-muted/20 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <Code className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">개발자 포트폴리오</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => {
            const isActive = `#${activeSection}` === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-all ${
                  isActive 
                    ? "text-foreground font-medium bg-muted/50" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Button className="ml-2 rounded-full" size="sm">
            이력서
          </Button>
        </nav>

        {/* 모바일 메뉴 */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-muted/20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-4 w-4" />
                </div>
                <span className="font-bold">메뉴</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={() => setIsSheetOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = `#${activeSection}` === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg transition-all ${
                      isActive 
                        ? "text-foreground font-medium bg-muted/50" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8">
              <Button className="w-full rounded-lg">이력서</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
