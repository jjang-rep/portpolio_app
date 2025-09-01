"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, Code, X, Download } from "lucide-react";

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
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    
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

    // 초기 상태 설정
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 하이드레이션 전까지 기본 상태 유지
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                개발자 포트폴리오
              </span>
            </Link>

            {/* 데스크톱 메뉴 - 중간 크기 화면에서도 표시 */}
            <nav className="hidden lg:flex gap-2 items-center flex-shrink-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-xl transition-all text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:scale-105 text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="ml-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
                <Download className="h-4 w-4 mr-2" />
                이력서
              </Button>
              <ThemeToggle />
            </nav>

            {/* 중간 크기 화면용 메뉴 */}
            <nav className="hidden md:flex lg:hidden gap-1 items-center flex-shrink-0">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 rounded-xl transition-all text-muted-foreground hover:text-foreground hover:bg-muted/30 hover:scale-105 text-xs font-medium whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="ml-1 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
                <Download className="h-3 w-3 mr-1" />
                <span className="text-xs">이력서</span>
              </Button>
              <ThemeToggle />
            </nav>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/30">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <Code className="h-6 w-6" />
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              개발자 포트폴리오
            </span>
          </Link>

          {/* 데스크톱 메뉴 - 중간 크기 화면에서도 표시 */}
          <nav className="hidden lg:flex gap-2 items-center flex-shrink-0">
            {navItems.map((item) => {
              const isActive = `#${activeSection}` === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium whitespace-nowrap ${
                    isActive 
                      ? "text-foreground font-semibold bg-gradient-to-r from-primary/20 to-primary/10 shadow-lg" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button className="ml-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
              <Download className="h-4 w-4 mr-2" />
              이력서
            </Button>
            <ThemeToggle />
          </nav>

          {/* 중간 크기 화면용 메뉴 */}
          <nav className="hidden md:flex lg:hidden gap-1 items-center flex-shrink-0">
            {navItems.slice(0, 2).map((item) => {
              const isActive = `#${activeSection}` === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-xs font-medium whitespace-nowrap ${
                    isActive 
                      ? "text-foreground font-semibold bg-gradient-to-r from-primary/20 to-primary/10 shadow-lg" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button className="ml-1 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
              <Download className="h-3 w-3 mr-1" />
              <span className="text-xs">이력서</span>
            </Button>
            <ThemeToggle />
          </nav>

          {/* 모바일 메뉴 */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <div className="flex items-center gap-2 flex-shrink-0">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/30 hover:scale-105 transition-all duration-300">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴</span>
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-border/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-xl">메뉴</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl hover:bg-muted/30 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = `#${activeSection}` === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-base font-medium ${
                        isActive 
                          ? "text-foreground font-semibold bg-gradient-to-r from-primary/20 to-primary/10 shadow-lg" 
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
                <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Download className="h-4 w-4 mr-2" />
                  이력서
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
