import moduleProps from '@/lib/moduleProps'
import { PortableText } from 'next-sanity'
import Img from '@/ui/Img'
import CTAList from '@/ui/CTAList'
import { cn } from '@/lib/utils'

export default function ShowcaseCard({
  title,
  description,
  content,
  image,
  ctas,
  imageOnLeft,
  ...props
}: Partial<{
  title: string
  description: string
  content: any
  image: Sanity.Image
  ctas: Sanity.CTA[]
  imageOnLeft: boolean
}> & Sanity.Module) {
  return (
    <section 
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className="section" 
      {...moduleProps(props)}
    >
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className={cn('space-y-6 px-8', imageOnLeft && 'md:order-last')}>
          <div className="space-y-4">
            <h2 className="h2">{title}</h2>
          </div>

          {description && <p className="text-lg">{description}</p>}

          {content && (
            <div className="richtext">
              <PortableText value={content} />
            </div>
          )}

          <CTAList
            ctas={ctas}
            className={cn('!mt-8', {
              'justify-start': true,
            })}
          />
        </div>

        {image && (
          <figure>
            <Img
              image={image}
              className="w-full rounded-lg shadow-lg hover:scale-[.9] transition-transform duration-[900ms] ease-in-out"
              imageWidth={800}
            />
          </figure>
        )}
      </div>
    </section>
  )
}
