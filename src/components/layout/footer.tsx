import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-muted/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">개발자 포트폴리오</h3>
            <p className="text-muted-foreground text-sm">
              창의적이고 직관적인 웹 경험을 만드는 프론트엔드 개발자입니다. 사용자 중심의 디자인과 성능 최적화에 집중합니다.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">바로가기</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">소개</Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">프로젝트</Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">기술</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">연락처</Link>
            </nav>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">연락처</h3>
            <address className="not-italic text-muted-foreground space-y-2 text-sm">
              <p>서울특별시, 대한민국</p>
              <p>
                <a href="mailto:example@example.com" className="hover:text-primary transition-colors">
                  example@example.com
                </a>
              </p>
              <p>
                <a href="tel:+821012345678" className="hover:text-primary transition-colors">
                  010-1234-5678
                </a>
              </p>
            </address>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">소셜 미디어</h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:example@example.com"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" className="rounded-full w-full">
                이력서 다운로드
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-muted-foreground">
            © {currentYear} 개발자 포트폴리오. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
