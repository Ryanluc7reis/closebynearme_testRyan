// Next imports
import dynamic from 'next/dynamic'

// Graphql
import { FindLocationBySlugQuery } from '@graphql'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import CategoryAndLocationSection from './sections/CategoryAndLocationSection'
import RentalsNearMeSection from './sections/RentalsNearMeSection'
import ReviewsSection from './sections/ReviewsSection'

const FindCategoryInLocationSection = dynamic(() => import('./sections/FindCategoryInLocationSection'), {
  ssr: true
})
const HowItWorksSection = dynamic(() => import('./sections/HowItWorksSection'), {
  ssr: true
})
const CategoryGuidesSection = dynamic(() => import('./sections/CategoryGuidesSection'), {
  ssr: true
})
const TrustedBySection = dynamic(() => import('./sections/TrustedBySection'), {
  ssr: true
})
const DownloadSection = dynamic(() => import('@components/DownloadSection'), {
  ssr: true
})
const FaqsSection = dynamic(() => import('./sections/FaqsSection'), {
  ssr: true
})
const RentCategoryInLocationSection = dynamic(() => import('./sections/RentCategoryInLocationSection'), {
  ssr: true
})
const ArticlesSection = dynamic(() => import('./sections/ArticlesSection'), {
  ssr: true
})
const FooterSection = dynamic(() => import('./sections/FooterSection'), {
  ssr: true
})

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
}

function CityComponentView({ data }: Props) {
  const { isMobile } = useMediaQueryContext()

  return (
    <main>
      <CategoryAndLocationSection
        isMobile={isMobile}
        data={data}
        className='container mx-auto mt-8 sm:mt-12 mb-4 px-5 xl:px-0'
      />
      <RentalsNearMeSection isMobile={isMobile} data={data} className='container mx-auto my-2 sm:my-16 px-5 xl:px-0' />
      <ReviewsSection isMobile={isMobile} className='container mx-auto my-2 sm:my-16 px-5 xl:px-0' />
      <FindCategoryInLocationSection
        isMobile={isMobile}
        data={data}
        className='container mx-auto my-2 sm:my-16 px-5 xl:px-0'
      />
      <HowItWorksSection isMobile={isMobile} className='bg-[#FAFAFA] py-5 sm:py-10 my-2 sm:my-16' />
      <CategoryGuidesSection isMobile={isMobile} data={data} className='container mx-auto my-2 px-5 xl:px-0' />
      <TrustedBySection isMobile={isMobile} className='container mx-auto my-2 sm:my-16 px-5 xl:px-0' />
      {!isMobile && <DownloadSection className='block sm:my-16 relative' />}
      <FaqsSection isMobile={isMobile} data={data} className='my-2 sm:my-16 px-5 xl:px-0' />
      <RentCategoryInLocationSection data={data} className='container mx-auto my-4 sm:my-16 px-5 xl:px-0' />
      <ArticlesSection data={data} className='container mx-auto my-2 sm:my-16 px-5 xl:px-0' />
      <FooterSection isMobile={isMobile} />
    </main>
  )
}

export default CityComponentView
