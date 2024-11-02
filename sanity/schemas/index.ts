// documents
import site from './documents/site'
import page from './documents/page'
import blogPost from './documents/blog.post'
import blogCategory from './documents/blog.category'
import navigation from './documents/navigation'
import announcement from './documents/announcement'
import redirect from './documents/redirect'
import logo from './documents/logo'
import person from './documents/person'
import pricing from './documents/pricing'
import reputation from './documents/reputation'
import testimonial from './documents/testimonial'
import newsPost from './documents/news.post'
import newsCategory from './documents/news.category'

// objects
import cta from './objects/cta'
import uid from './objects/uid'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import accordionList from './modules/accordion-list'
import blogFrontpage from './modules/blog-frontpage'
import blogList from './modules/blog-list'
import blogPostContent from './modules/blog-post-content'
import breadcrumbs from './modules/breadcrumbs'
import callout from './modules/callout'
import cardList from './modules/card-list'
import creativeModule from './modules/creative'
import customHtml from './modules/custom-html'
import flagList from './modules/flag-list'
import hero from './modules/hero'
import heroSaas from './modules/hero.saas'
import heroSplit from './modules/hero.split'
import logoList from './modules/logo-list'
import pricingList from './modules/pricing-list'
import richtextModule from './modules/richtext-module'
import statList from './modules/stat-list'
import stepList from './modules/step-list'
import tabbedContent from './modules/tabbed-content'
import testimonialFeatured from './modules/testimonial.featured'
import testimonialList from './modules/testimonial-list'
import showcaseCard from './modules/showcase-card'
import currentProjectSlider from './modules/current-project-slider'
import pageTitle from './modules/page-title'
import newsList from './modules/news-list'
import newsFrontpage from './modules/news-frontpage'
import newsPostContent from './modules/news-post-content'
import caseStudyPost from './documents/case-study.post'
import caseStudyPostContent from './modules/case-study-post-content'
import map from './modules/map'

export const schemaTypes = [
	// documents
	site,
	page,
	blogPost,
	blogCategory,
	newsPost,
	newsCategory,
	caseStudyPost,
	navigation,
	announcement,
	redirect,
	logo,
	person,
	pricing,
	reputation,
	testimonial,

	// objects
	cta,
	uid,
	link,
	linkList,
	metadata,

	// modules
	accordionList,
	blogFrontpage,
	blogList,
	blogPostContent,

	newsFrontpage,
	newsList,
	newsPostContent,

	caseStudyPostContent,

	breadcrumbs,
	callout,
	cardList,
	creativeModule,
	customHtml,
	flagList,
	hero,
	heroSaas,
	heroSplit,
	logoList,
	pricingList,
	richtextModule,
	statList,
	stepList,
	tabbedContent,
	testimonialFeatured,
	testimonialList,
	showcaseCard,
	currentProjectSlider,
	pageTitle,
	map,
]
