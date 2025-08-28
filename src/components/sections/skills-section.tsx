import { Separator } from "@/components/ui/separator";
import { Code, Database, Workflow } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 1-10 scale
  category: "frontend" | "backend" | "other";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 9, category: "frontend" },
  { name: "JavaScript", level: 9, category: "frontend" },
  { name: "TypeScript", level: 8, category: "frontend" },
  { name: "React", level: 9, category: "frontend" },
  { name: "Next.js", level: 8, category: "frontend" },
  { name: "Tailwind CSS", level: 9, category: "frontend" },
  { name: "Node.js", level: 7, category: "backend" },
  { name: "Express", level: 7, category: "backend" },
  { name: "MongoDB", level: 6, category: "backend" },
  { name: "SQL", level: 6, category: "backend" },
  { name: "Git", level: 8, category: "other" },
  { name: "AWS", level: 5, category: "other" },
];

export function SkillsSection() {
  // 카테고리별로 스킬 그룹화
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  return (
    <section id="skills" className="py-24 relative">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-muted/20"></div>
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">역량</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">기술 스택</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <SkillCategory 
            title="프론트엔드" 
            icon={<Code className="h-5 w-5" />} 
            skills={frontendSkills} 
            className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5"
          />

          <SkillCategory 
            title="백엔드" 
            icon={<Database className="h-5 w-5" />} 
            skills={backendSkills}
            className="bg-gradient-to-br from-green-500/5 to-teal-500/5"
          />

          <SkillCategory 
            title="기타" 
            icon={<Workflow className="h-5 w-5" />} 
            skills={otherSkills}
            className="bg-gradient-to-br from-amber-500/5 to-orange-500/5"
          />
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: Skill;
}

function SkillBar({ skill }: SkillBarProps) {
  // 0-10 scale을 0-100% 로 변환
  const progressPercent = `${skill.level * 10}%`;
  
  return (
    <div className="group">
      <div className="flex justify-between mb-1.5">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-sm">{skill.level}/10</span>
      </div>
      <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary/80 rounded-full transition-all duration-500 group-hover:bg-primary"
          style={{ width: progressPercent }}
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
}

function SkillCategory({ title, icon, skills, className = "" }: SkillCategoryProps) {
  return (
    <div className={`bg-background/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-muted/10 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-primary/10 rounded-full text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      
      <div className="space-y-5">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
