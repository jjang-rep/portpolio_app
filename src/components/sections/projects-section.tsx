"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, PenTool, MessageCircle } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS를 활용한 반응형 개인 포트폴리오 웹사이트입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: <Code />
  },
  {
    id: "project-2",
    title: "이커머스 플랫폼",
    description: "React와 Node.js를 사용하여 개발한 풀스택 이커머스 웹 애플리케이션입니다.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com",
    icon: <PenTool />
  },
  {
    id: "project-3",
    title: "실시간 채팅 앱",
    description: "Socket.io와 React를 활용한 실시간 채팅 애플리케이션입니다.",
    tech: ["React", "Socket.io", "Express", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    icon: <MessageCircle />
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-blue-900/10 to-indigo-900/5"></div>
      
      {/* 추가 그래픽 요소 */}
      <div className="absolute -left-20 top-40 w-64 h-64 bg-blue-600/5 blur-3xl rounded-full"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-indigo-600/5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-20">
          <div className="inline-flex items-center gap-2 text-blue-400 mb-4">
            <Code className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">포트폴리오</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-50">최근 프로젝트</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="flex flex-col h-full overflow-hidden group glassmorphism border border-blue-700/20 hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover-lift"
            >
              <div className="relative h-56 overflow-hidden">
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/60 to-transparent z-10"></div>
                
                {/* 아이콘 배지 */}
                <div className="absolute top-4 left-4 z-30">
                  <div className="p-3 rounded-xl glassmorphism border border-blue-400/20 shadow-lg">
                    <div className="text-blue-200 h-7 w-7">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                {/* 배경 애니메이션 효과 */}
                <div className="w-full h-full bg-gradient-to-br from-blue-700/40 via-indigo-600/30 to-purple-600/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center relative">
                  {/* 움직이는 배경 패턴 */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="absolute w-full h-full bg-grid-pattern"></div>
                  </div>
                  
                  {/* 중앙 아이콘 */}
                  <div className="relative z-20 flex items-center justify-center">
                    <div className="text-blue-100/80 h-20 w-20 opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow">
                      {project.icon}
                    </div>
                    <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                  </div>
                </div>
                
                {/* 빛 효과 */}
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/30 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-100">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-blue-200/80">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-800/40 text-blue-200 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-3 border-t border-blue-800/30">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full border-blue-700/40 text-blue-200 hover:bg-blue-800/40 hover:text-blue-100">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-blue-700/60 hover:bg-blue-700/80 text-blue-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
