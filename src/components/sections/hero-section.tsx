"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* 배경 패턴과 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-background to-purple-50/20 dark:from-blue-950/10 dark:via-background dark:to-purple-900/5"></div>
      
      {/* 데코레이션 요소 - 모던한 그래픽 요소들 */}
      <div className="absolute top-[20%] -left-20 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-[20%] -right-20 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      
      {/* 포트폴리오 모던 3D 그래픽 */}
      <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 w-96 h-96 hidden lg:block animate-float">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-3xl glassmorphism shadow-2xl shadow-blue-500/10 border-2 border-blue-500/20"></div>
          <div className="absolute -inset-4 rounded-3xl glassmorphism opacity-40 scale-90 -z-10 blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-blue-600/70 dark:text-blue-100/70 tracking-wide animate-pulse-slow">Portfolio</span>
          </div>
          {/* 부동 원형 요소들 */}
          <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-blue-500/30 blur-sm animate-pulse-slow"></div>
          <div className="absolute bottom-14 right-12 w-6 h-6 rounded-full bg-indigo-500/30 blur-sm animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-5 w-4 h-4 rounded-full bg-purple-500/30 blur-sm animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="mb-8 relative">
          <div className="inline-block rounded-full bg-primary/10 p-2 backdrop-blur-sm mb-4">
            <span className="text-sm font-semibold px-3 py-1 text-primary dark:text-blue-100">풀스택 개발자 [백엔드, 프론트엔드, 데이터 분석, 데이터 모델링]</span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-foreground leading-tight">
          안녕하세요, <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">풀스택 개발자</span>입니다
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-medium">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-300 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
            혁신적인 웹 솔루션을 통해 비즈니스 문제를 해결하는 풀스택 개발자입니다.
          </span>
          <br className="hidden sm:block" /> 
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
            프론트엔드와 백엔드 기술을 모두 활용하여 사용자 중심의 웹 애플리케이션을 구축합니다.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="#projects">
            <Button size="lg" className="rounded-2xl px-12 py-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <span>포트폴리오 보기</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M17 9L21 13M21 13L17 17M21 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="rounded-2xl px-12 py-8 text-lg font-semibold border-2 border-border/50 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <span>연락하기</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V16M10 14L20 4M20 4H15M20 4V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Button>
          </Link>
        </div>
        
        {/* 스크롤 다운 아이콘 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-3 font-medium">스크롤</span>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
            <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
