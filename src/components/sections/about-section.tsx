"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/5"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-400/5 to-transparent"></div>
      
      {/* 추가 그래픽 요소 */}
      <div className="absolute left-0 top-20 w-1/3 h-1/3 bg-blue-500/5 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-20 w-1/4 h-1/4 bg-indigo-500/5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-20">
          <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
            <Code className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">소개</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-50">개발자에 대하여</h2>
        </div>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center relative">
            {/* 장식 요소 */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 -z-10 blur-2xl"></div>
            
            <div className="relative animate-float" style={{animationDelay: '0.5s'}}>
              {/* 3D 효과를 위한 다중 그라데이션 레이어 */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/10 blur-xl"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-md"></div>
              
              {/* 아바타 테두리 효과 */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-blue-500/50 via-indigo-500/30 to-purple-500/50 blur-sm"></div>
              
              {/* 아바타 */}
              <Avatar className="h-56 w-56 border-[6px] border-blue-900/20 shadow-2xl relative">
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-blue-800/70 to-indigo-900/70 text-blue-50">풀</AvatarFallback>
              </Avatar>
              
              {/* 부동 장식 요소들 */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500/40 animate-pulse-slow"></div>
              <div className="absolute -bottom-2 -left-1 w-6 h-6 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-indigo-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-5">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-14 w-14 rounded-full glassmorphism shadow-lg hover:shadow-xl hover:shadow-blue-500/20 text-blue-300 hover:text-blue-100 hover-lift"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Github className="h-6 w-6 relative z-10" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center h-14 w-14 rounded-full glassmorphism shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 text-blue-300 hover:text-blue-100 hover-lift"
                style={{animationDelay: '0.2s'}}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Linkedin className="h-6 w-6 relative z-10" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:example@example.com"
                className="group flex items-center justify-center h-14 w-14 rounded-full glassmorphism shadow-lg hover:shadow-xl hover:shadow-purple-500/20 text-blue-300 hover:text-blue-100 hover-lift"
                style={{animationDelay: '0.4s'}}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail className="h-6 w-6 relative z-10" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-900/20 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-blue-700/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-100">
              <span className="inline-block h-1 w-8 bg-blue-400 rounded-full"></span>
              풀스택 개발자
            </h3>
            <p className="mb-8 text-blue-200 leading-relaxed text-lg">
              웹 개발에 대한 열정을 가지고 있으며, 사용자 경험을 향상시키는 인터랙티브한 
              웹 애플리케이션을 만드는 것을 즐깁니다. React, Next.js, TypeScript를 활용하여 
              모던하고 확장 가능한 웹 애플리케이션을 개발합니다.
            </p>
            
            <Separator className="my-8 bg-blue-700/30" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-3 text-lg text-blue-100">
                  <div className="p-2 bg-blue-800/50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-blue-300" />
                  </div>
                  경력
                </h4>
                <ul className="space-y-5 text-blue-200">
                  <li className="pl-5 border-l-2 border-blue-400/50">
                    <span className="block font-medium text-blue-50 text-lg">시니어 프론트엔드 개발자</span>
                    <span className="text-blue-300">2020-현재</span>
                  </li>
                  <li className="pl-5 border-l-2 border-blue-400/50">
                    <span className="block font-medium text-blue-50 text-lg">주니어 프론트엔드 개발자</span>
                    <span className="text-blue-300">2018-2020</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-3 text-lg text-blue-100">
                  <div className="p-2 bg-blue-800/50 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-blue-300" />
                  </div>
                  학력
                </h4>
                <ul className="space-y-5 text-blue-200">
                  <li className="pl-5 border-l-2 border-blue-400/50">
                    <span className="block font-medium text-blue-50 text-lg">컴퓨터 공학 학사</span>
                    <span className="text-blue-300">2014-2018</span>
                  </li>
                  <li className="pl-5 border-l-2 border-blue-400/50">
                    <span className="block font-medium text-blue-50 text-lg">웹 개발 전문 교육과정</span>
                    <span className="text-blue-300">2017</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
