// import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import {
  FindProductDetailsQuery,
  ListReviewsForCompanyQuery,
  StatusAllowed,
  useListReviewsForCompanyQuery
} from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'
import ReviewCardComponent from './components/ReviewCardComponent'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

interface IProps {
  data: ListReviewsForCompanyQuery['listReviewsForCompany']['docs']
}

const ReviewsItems = ({ data }: IProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 my-8 sm:my-20 gap-5'>
      {data.map((item) => (
        <ReviewCardComponent key={item._id} item={item} />
      ))}
    </div>
  )
}

function Reviews({ className, data: { companyId } }: Props) {
  const { data, loading } = useListReviewsForCompanyQuery({
    variables: {
      companyId: companyId._id,
      search: {
        all: true,
        status: StatusAllowed.Active
      }
    }
  })

  //   const [showAll, setShowAll] = useState(false)

  return (
    <div className={`${className}`}>
      <div className='flex flex-col items-center justify-center gap-4 mb-24'>
        <Image
          src='/assets/icons/crown.svg'
          width={117}
          height={117}
          alt='crown review icon'
          className='select-none w-[92px] h-[92px] sm:h-[117px] sm:w-[117px]'
          draggable={false}
        />
        <TitleComponent
          title={`${companyId.reviewsRating}`}
          textSize=''
          weight='font-extrabold'
          className='text-[80px] leading-[93.75px] sm:text-[128px] sm:leading-[150px] text-center'
        />
        <TitleComponent
          title='Overall Rating'
          textSize=''
          weight='font-semibold'
          className='text-[28px] leading-[33.89px] sm:text-[45px] sm:leading-[54.46px] text-center'
        />

        <TitleComponent
          title='One of the most loved based on ratings, reviews, and reliability'
          textSize=''
          className='text-[15px] leading-[18.15px] sm:text-[30px] sm:leading-[36.31px] text-center sm:max-w-[690px]'
        />
      </div>
      <hr />
      {!loading && data?.listReviewsForCompany && <ReviewsItems data={data.listReviewsForCompany.docs} />}
      {/* {!showAll && (
        <div className=''>
          <Button
            label='Read All Reviews'
            onClick={() => {
              setShowAll(true)
            }}
            weight='font-medium'
            textSize=''
            textClassName='text-[15px] leading-[18p.15x] sm:text-[20px] sm:leading-[24.2px] text-center'
            className='border border-[#CBCBCB] rounded-lg hover:border-secondary'
          />
        </div>
      )} */}
    </div>
  )
}

export default Reviews
