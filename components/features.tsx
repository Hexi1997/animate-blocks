"use client"

import { BlurFade } from "@/components/magicui/blur-fade"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Zap,
  Palette,
  Code,
  Layers,
  Sparkles,
  Rocket,
  Copy,
  GitBranch,
  Smartphone
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Ready-to-Use Components",
    description: "Copy and paste beautiful animated components directly into your project. No complex setup required.",
    icon: Copy,
    delay: 0.2
  },
  {
    title: "Modern Animation Libraries",
    description: "Built with Motion, GSAP, and Three.js for smooth, performant animations that delight users.",
    icon: Zap,
    delay: 0.3
  },
  {
    title: "Fully Customizable",
    description: "Every component comes with full TypeScript support and customizable props to fit your design system.",
    icon: Palette,
    delay: 0.4
  },
  {
    title: "Production Ready",
    description: "Battle-tested components optimized for performance and accessibility in real-world applications.",
    icon: Rocket,
    delay: 0.5
  },
  {
    title: "Developer Experience",
    description: "TypeScript-first development with excellent documentation and examples for every component.",
    icon: Code,
    delay: 0.6
  },
  {
    title: "Open Source",
    description: "MIT licensed and community-driven. Contribute, learn, and build together with developers worldwide.",
    icon: GitBranch,
    delay: 0.7
  },
]

export function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to build{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                amazing interfaces
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A comprehensive collection of animated components designed for modern web development.
              Built with the latest technologies and best practices.
            </p>
          </div>
        </BlurFade>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BlurFade key={feature.title} delay={feature.delay} inView>
              <Card className="relative h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border-border/50 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
