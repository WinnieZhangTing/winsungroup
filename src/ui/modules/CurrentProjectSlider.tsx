'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'
import moduleProps from '@/lib/moduleProps'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

type ProjectType = {
  title: string
  description: string
  image: Sanity.Image
}

export default function CurrentProjectSlider({
  projects,
  imageOnLeft,
  ...props
}: Partial<{
  projects: ProjectType[]
  imageOnLeft: boolean
}> & Sanity.Module) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (projects?.length || 0))
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? (projects?.length || 0) - 1 : prev - 1
    )
  }

  return (
    <div className="bg-bgPrimary">
      <section
        className="section py-0 relative overflow-hidden bg-flameLight"
        {...moduleProps(props)}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out">


          <AnimatePresence mode="wait">
            <motion.div

              key={currentIndex}
              // initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid min-h-[500px] items-center gap-12 md:grid-cols-2"
            >
              <div className={cn('space-y-6', imageOnLeft && 'md:order-last')}>
                <h3 className="text-3xl font-bold text-ink md:text-4xl">
                  {projects?.[currentIndex]?.title}
                </h3>
                <p className="text-balance text-lg leading-relaxed text-ink/90">
                  {projects?.[currentIndex]?.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <Img
                  image={projects?.[currentIndex]?.image}
                  className="h-96 w-full object-cover"
                  alt={projects?.[currentIndex]?.title}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 right-16 flex gap-4">
          <button
            onClick={prev}
            className="flex size-12 items-center justify-center rounded-lg bg-black text-flameDark transition-colors hover:bg-white"
            aria-label="Previous project"
          >
            <CgChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="flex size-12 items-center justify-center rounded-lg bg-black text-flameDark transition-colors hover:bg-white"
            aria-label="Next project"
          >
            <CgChevronRight className="size-6" />
          </button>
        </div>
      </section>
    </div>
  )
}