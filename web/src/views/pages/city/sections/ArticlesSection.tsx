import {
  ArticlesTypeAllowed,
  FindLocationBySlugQuery,
  StatusAllowed,
  useFindArticlesByLocationSlugQuery
} from '@graphql'
import React, { HTMLProps } from 'react'
import ArticleComponent from '@components/ArticleComponent'

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function ArticlesSection({ data: _data, className }: Props) {
  const { data } = useFindArticlesByLocationSlugQuery({
    variables: {
      search: { perPage: 2, status: StatusAllowed.Active, type: ArticlesTypeAllowed.Default },
      slug: _data.location.slug,
      categorySlug: _data.category.slug
    }
  })

  return (
    <div className={className}>
      {data?.findOneLocationBySlug.articles.docs.map((item, idx) => (
        <ArticleComponent
          key={item._id}
          data={item}
          lastItem={idx + 1 === data.findOneLocationBySlug.articles.docs.length}
        />
      ))}
    </div>
  )
}

export default ArticlesSection
