"use client"

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card" // import mantido

type SectionCarouselProps =
  | {
      title: string
      type: "favorite"
    }
  | {
      title: string
      type: "store"
      storeType: string
    }

const SectionCarousel = ({ title }: SectionCarouselProps) => {
  return (
    <section className="py-6 h-[40vh]">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <Carousel className="w-full max-w-[90%] mx-auto h-full">
        <CarouselContent>
          <Card className="mx-4 h-60 w-60">
            <p>1</p>
          </Card>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default SectionCarousel