import Breadcrumbs from './Breadcrumbs'
import { cn } from '@/lib/utils'

export default function PageTitle({
  title,
  // breadcrumbs,
  // background,
  // currentPage,
}: Partial<{
  title: string
  // breadcrumbs: Partial<{
  //   crumbs: Sanity.Link[]
  //   hideCurrent: boolean
  // }>
  //background: boolean
  // currentPage: Sanity.Page | Sanity.BlogPost
}>) {
  return (
    <section className={cn(
      'relative overflow-hidden bg-accent',
      // background && 'bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200'
    )}>

      
      <div className="section py-12">
        <h1 className="h1 text-balance text-center text-4xl md:text-5xl lg:text-6xl font-bold text-canvas">
          {title}
        </h1>
      </div>
    </section>
  )
}