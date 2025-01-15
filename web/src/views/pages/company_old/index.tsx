import React, { HTMLProps, useState } from 'react'
import CompanyHeader from './sections/CompanyHeaderSection'
import CompanyStatsSection from './sections/CompanyStatsSection'
import CompanyReviewsSection from './sections/CompanyReviewsSection'
import CompanyOnboardingInfoSection from './sections/CompanyOnboardingInfoSection'
import { FindOneCompanyBySlugQuery } from '@graphql'
import { useMediaQueryContext } from 'src/hooks/useMediaQuery'
import ActivateFloatButton from '@components/ActivateFloatButton'
import dynamic from 'next/dynamic'

const OnboardinStepsMobile = dynamic(() => import('./sections/OnboardinStepsMobile'), { ssr: false })

type ViewType = 'onboarding' | 'normal'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function CompanyLanding({ data, className }: Props) {
  const { isMobile } = useMediaQueryContext()
  const [view, setView] = useState<ViewType>('onboarding')

  if (isMobile && view === 'onboarding') {
    return <OnboardinStepsMobile handlePress={() => setView('normal')} className='container mx-auto' />
  }

  return (
    <>
      <div className={className}>
        <CompanyHeader isMobile={isMobile} data={data} className='my-5 sm:my-10' />
        <CompanyStatsSection
          isMobile={isMobile}
          data={data}
          className={`${isMobile ? 'bg-[#F9F9F9]' : ''} relative mb-5 sm:mb-10`}
        />
        <CompanyReviewsSection data={data} className={`${isMobile ? 'bg-[#F9F9F9]' : ''}  mb-20 sm:mb-10`} />
        {!isMobile && <CompanyOnboardingInfoSection data={data} className='mb-10' />}
      </div>
      {isMobile && (
        <ActivateFloatButton className='z-20 bg-background flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 rounded-lg w-[100%] p-4' />
      )}
    </>
  )
}

export default CompanyLanding
