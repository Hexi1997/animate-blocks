"use client"

import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { BlurFade } from "@/components/magicui/blur-fade"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <RetroGrid />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <BlurFade delay={0.25} inView>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Beautiful{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Animated Blocks
            </span>
            <br />
            for Modern Web
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            A collection of <strong>copy-paste</strong> ready animated UI components built with React, Next.js,
            Tailwind CSS, Motion, and GSAP. Create stunning websites with interactive sections
            that engage your users.
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <ShimmerButton className="h-12 px-8 text-base">
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShimmerButton>
          </div>
        </BlurFade>

        <BlurFade delay={1} inView>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">MIT</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    </section>
  )
}
