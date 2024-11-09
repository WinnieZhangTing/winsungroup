import AccordionList from './AccordionList'
import BlogFrontpage from './blog/BlogFrontpage'
import BlogList from './blog/BlogList'
import Breadcrumbs from './Breadcrumbs'
import Callout from './Callout'
import CardList from './CardList'
import CreativeModule from './CreativeModule'
import CustomHTML from './CustomHTML'
import FlagList from './FlagList'
import Hero from './Hero'
import HeroSplit from './HeroSplit'
import HeroSaaS from './HeroSaaS'
import LogoList from './LogoList'
import PostContent from './blog/PostContent'
import PricingList from './PricingList'
import RichtextModule from './RichtextModule'
import StatList from './StatList'
import StepList from './StepList'
import TabbedContent from './TabbedContent'
import TestimonialList from './TestimonialList'
import TestimonialFeatured from './TestimonialFeatured'
import ShowcaseCard from './ShowcaseCard'
import CurrentProjectSlider from './CurrentProjectSlider'
import PageTitle from './PageTitle'
import NewsFrontpage from './news/NewsFrontpage'
import NewsList from './news/NewsList'
import NewsPostContent from './news/PostContent'
import CaseStudyPostContent from './CaseStudy/PostContent'
import MapModule from './Map'
import HeroSlider from './HeroSlider'
import CertificateGrid from './CertificateGrid'
export default function Modules({
	modules,
	page,
	post,
}: {
	modules?: Sanity.Module[]
	page?: Sanity.Page
	post?: Sanity.BasePost
}) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'accordion-list':
						return <AccordionList {...module} key={module._key} />
					case 'blog-frontpage':
						return <BlogFrontpage {...module} key={module._key} />
					case 'blog-list':
						return <BlogList {...module} key={module._key} />
					case 'blog-post-content':
						return <PostContent {...module} post={post} key={module._key} />
					case 'news-post-content':
						return <NewsPostContent {...module} post={post} key={module._key} />
					case 'news-frontpage':
						return <NewsFrontpage {...module} key={module._key} />
					case 'news-list':
						return <NewsList {...module} key={module._key} />
					case 'case-study-post-content':
						return <CaseStudyPostContent {...module} post={post} key={module._key} />
					case 'breadcrumbs':
						return (
							<Breadcrumbs
								{...module}
								currentPage={post || page}
								key={module._key}
							/>
						)
					case 'callout':
						return <Callout {...module} key={module._key} />
					case 'card-list':
						return <CardList {...module} key={module._key} />
					case 'creative-module':
						return <CreativeModule {...module} key={module._key} />
					case 'custom-html':
						return <CustomHTML {...module} key={module._key} />
					case 'flag-list':
						return <FlagList {...module} key={module._key} />
					case 'hero':
						return <Hero {...module} key={module._key} />
					case 'hero.split':
						return <HeroSplit {...module} key={module._key} />
					case 'hero.saas':
						return <HeroSaaS {...module} key={module._key} />
					case 'hero.slider':
						return <HeroSlider {...module} key={module._key} />
					case 'logo-list':
						return <LogoList {...module} key={module._key} />
					case 'pricing-list':
						return <PricingList {...module} key={module._key} />
					case 'richtext-module':
						return <RichtextModule {...module} key={module._key} />
					case 'stat-list':
						return <StatList {...module} key={module._key} />
					case 'step-list':
						return <StepList {...module} key={module._key} />
					case 'tabbed-content':
						return <TabbedContent {...module} key={module._key} />
					case 'testimonial-list':
						return <TestimonialList {...module} key={module._key} />
					case 'testimonial.featured':
						return <TestimonialFeatured {...module} key={module._key} />
					case 'showcase-card':
						return <ShowcaseCard {...module} key={module._key} />
					case 'current-project-slider':
						return <CurrentProjectSlider {...module} key={module._key} />
					case 'page-title':
						return <PageTitle {...module} key={module._key} />
					case 'map':
						return <MapModule {...module} key={module._key} />
					case 'certificate-grid':
						return <CertificateGrid {...module} key={module._key} />
					default:
						return <div data-type={module._type} key={module._key} />
				}
			})}
		</>
	)
}
