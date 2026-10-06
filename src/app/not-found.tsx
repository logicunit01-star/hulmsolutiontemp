import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist or has been moved.",
}

export default function NotFound() {
  return (
    <div className="bg-white py-24 md:py-32 flex-1 flex flex-col items-center justify-center min-h-[60vh]">
      <Container>
        <div className="max-w-[600px] mx-auto text-center flex flex-col items-center space-y-6">
          
          <div className="text-8xl font-semibold text-[#167c70]/20 leading-none">
            404
          </div>
          
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0F2A26]">
              Page not found.
            </h1>
            <p className="text-lg text-text-muted">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link href="/blogs">
                Read our Blog
              </Link>
            </Button>
          </div>

        </div>
      </Container>
    </div>
  )
}
