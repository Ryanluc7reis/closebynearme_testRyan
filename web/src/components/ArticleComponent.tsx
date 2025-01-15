import TitleComponent from '@core/components/title'
import { FindArticlesByLocationSlugQuery } from '@graphql'
import React from 'react'
import { dateFormat } from 'src/utils/dateFormat'
import { MarkdownRenderComponent } from './MarkdownRenderComponent'

interface Props {
  data: FindArticlesByLocationSlugQuery['findOneLocationBySlug']['articles']['docs'][0]
  lastItem: boolean
}

function ArticleComponent({ data, lastItem }: Props) {
  return (
    <div className={`flex flex-col ${lastItem ? '' : 'mb-5 sm:mb-10'}`}>
      <TitleComponent
        color='text-text'
        textSize='text-xl'
        weight='font-black'
        title={data.title}
        className='lg:text-5xl sm:mb-3'
      />
      <TitleComponent
        color='text-text'
        textSize='text-sm'
        weight='font-thin'
        fontFamily='font-intertight'
        title={`Posted on ${dateFormat(data.createdAt, 'DD MMM')}`}
        className='mb-3 lg:text-2xl italic'
      />

      <MarkdownRenderComponent
        text={data.description}
        className='text-text text-xs font-roboto font-medium sm:text-base lg:text-2xl text-justify'
      />
    </div>
  )
}

export default ArticleComponent
