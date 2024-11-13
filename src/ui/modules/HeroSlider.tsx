'use client'
import Img from '@/ui/Img'
import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'
import { cn } from '@/lib/utils'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef, useState, useEffect } from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

export default function HeroSlider({
	pretitle,
	content,
	slides,
}: Partial<{
	pretitle: string
	content: any
	slides: Sanity.Image[]
}>) {
	const hasSlides = slides && slides.length > 0
	const sliderRef = useRef<Slider>(null)
	const [activeSlide, setActiveSlide] = useState(0);
	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInitialLoad(false);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext()
		}
	}

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev()
		}
	}

	const handleBeforeChange = (current: number, next: number) => {
		setActiveSlide(next);
	};

	return (
		<div className={cn('hero-slides', { 'has-slides': hasSlides })}>
			{/* {pretitle && <Pretitle>{pretitle}</Pretitle>} */}
			{hasSlides && (
				<div className="relative">
					<Slider ref={sliderRef} {...settings} beforeChange={handleBeforeChange}>
						{slides.map((slide, index) => (
							<div key={index} className="relative">
								<Img image={slide} className="w-full h-full object-cover" />
								{index === 0 && (
									<div className="absolute inset- top-1/2 left-1/4 -ml-28 -mt-4 items-center justify-center text-white text-lg w-2/3 text-left hidden md:block">
										{content && (
											<div
												className={`section flex w-full flex-col ${initialLoad ? 'opacity-0 translate-y-8' :
													activeSlide === 0 ? 'opacity-100 translate-y-0' :
														'opacity-0 translate-y-8'
													}`}
												style={{
													transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
												}}
											>
												<div
													className={cn(
														'richtext relative isolate [&_:is(h1,h2)]:text-balance',
														'text-shadow',
														'w-full',
													)}
												>
													<PortableText value={content} />
												</div>
											</div>
										)}
									</div>
								)}
								{index === 1 && (
									<div
										className={`absolute inset-0 flex-col justify-center text-white text-base top-1/2 mt-20 w-2/5 text-left ml-32 hidden md:block ${activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
										style={{
											transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
										}}
									>
										<p>Partner with WINSUN GROUP INC and look forward to receiving customized business strategies, expert guidance, and innovative solutions tailored to your specific needs. </p>
										<p className="mt-8">Our team is dedicated to supporting your business through comprehensive consulting services aimed at ensuring sustainable growth and successful global expansion. Expect a commitment to excellence and a focus on achieving long-term success as we help transform your business into a competitive force in the marketplace.</p>
									</div>
								)}
							</div>
						))}
					</Slider>
					<button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:bg-opacity-70 transition text-white ml-4 md:ml-6 justify-items-center">
						<CgChevronLeft size={24} className="md:size-8" />
					</button>
					<button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:bg-opacity-70 transition text-white mr-4 md:mr-6 justify-items-center">
						<CgChevronRight size={24} className="md:size-8" />
					</button>
				</div>
			)}
		</div>
	)
}
