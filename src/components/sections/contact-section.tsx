"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageSquare, SendHorizontal } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해 주세요.",
  }),
  message: z.string().min(10, {
    message: "메시지는 10글자 이상이어야 합니다.",
  }),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // 실제 구현에서는 여기에서 API를 호출하여 폼 데이터를 제출합니다.
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">연락하기</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">함께 일해요</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 max-w-6xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-muted/10 h-fit">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="inline-block h-1 w-6 bg-primary rounded-full"></span>
              연락 정보
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">주소</h4>
                  <p className="text-muted-foreground mt-1">서울특별시, 대한민국</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">이메일</h4>
                  <p className="text-muted-foreground mt-1">
                    <a href="mailto:example@example.com" className="hover:underline hover:text-primary transition-colors">
                      example@example.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">전화</h4>
                  <p className="text-muted-foreground mt-1">
                    <a href="tel:+821012345678" className="hover:underline hover:text-primary transition-colors">
                      010-1234-5678
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-muted/10">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="inline-block h-1 w-6 bg-primary rounded-full"></span>
              메시지 보내기
            </h3>
            
            {isSubmitted ? (
              <div className="bg-primary/10 text-foreground rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  <SendHorizontal className="h-8 w-8" />
                </div>
                <h4 className="font-medium text-xl mb-2">메시지가 전송되었습니다!</h4>
                <p className="text-muted-foreground mb-6">빠른 시일 내에 답변 드리겠습니다.</p>
                <Button 
                  className="rounded-full px-6" 
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  새 메시지 작성
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">이름</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="이름을 입력하세요" 
                              className="bg-background/60 border-muted/30 focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">이메일</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="이메일을 입력하세요" 
                              className="bg-background/60 border-muted/30 focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">메시지</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="메시지를 입력하세요" 
                            className="min-h-[180px] bg-background/60 border-muted/30 focus:border-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="rounded-full px-8 py-6 shadow-lg shadow-primary/10"
                  >
                    <SendHorizontal className="h-5 w-5 mr-2" />
                    {isSubmitting ? "전송 중..." : "메시지 보내기"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
