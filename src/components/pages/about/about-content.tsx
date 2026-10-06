import React from "react"
import { Container } from "@/components/ui/container"

interface AboutContentProps {
  mission: {
    title: string;
    description: string;
  };
  story: {
    title: string;
    content: string[];
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export function AboutContent({ mission, story, stats }: AboutContentProps) {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Story Section */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h2 className="text-3xl font-semibold text-[#0F2A26] mb-2">{story.title}</h2>
          <div className="prose prose-lg prose-p:text-text-muted prose-p:leading-relaxed max-w-none">
            {story.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Mission & Stats Sidebar */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col space-y-12">
          
          <div className="bg-[#F7F6F2] p-8 rounded-2xl border border-gray-200/80">
            <h3 className="text-2xl font-semibold text-[#0F2A26] mb-4">{mission.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {mission.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-4xl font-semibold text-[#167c70]">{stat.value}</span>
                <span className="text-sm font-medium text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </Container>
  )
}
