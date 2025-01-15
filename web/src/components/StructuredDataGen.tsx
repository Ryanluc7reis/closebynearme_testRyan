import themeConfig from '@configs/themeConfig'
import { FindLocationBySlugQuery } from '@graphql'
import { BreadcrumbList, WithContext, FAQPage, LocalBusiness } from 'schema-dts'

type StructuredDataGenType = 'faq' | 'breadcrumb' | 'organization'

interface Props {
  path: string
  urlPath: string
  title: string
}

interface FaqProps {
  faqs: FindLocationBySlugQuery['findOneLocationBySlug']['faqs']
}
interface LocalBusinessProps extends Props {
  category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
}

const breadcrumbListDataGen = ({ path, urlPath, title }: Props): WithContext<BreadcrumbList> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    name: title,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: themeConfig.templateName,
        item: path
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `${path}${urlPath}`
      }
    ]
  }
}

const faqPageDataGen = ({ faqs }: FaqProps): WithContext<FAQPage> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.docs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

const companyDataGen = ({ urlPath, path, category, location }: LocalBusinessProps): WithContext<LocalBusiness> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${path}${urlPath}`,
    name: `${category.name} - ${location.name}`,
    alternateName: `${location.name} - ${category.name}`,
    description: `Discover hassle-free ${category.name} with Close By Near Me in ${location.name}. With Close By Near Me, there's no need to worry about size restrictions - we've got options for every event, big or small. Our rentals lets you have worry-free ${category.name} fun. Book your ${category.name} instantly with Close By Near Me for a safe, reliable, and affordable solution to your event entertainment needs.`,
    image: location.image,
    email: 'hello@closebynearme.com',
    telephone: '(424) 346-0591',
    logo: 'https://closebynearme.com/_next/image?url=%2Fassets%2Flogo.png&w=640&q=75',
    url: path,
    parentOrganization: {
      '@type': 'Organization',
      logo: 'https://closebynearme.com/_next/image?url=%2Fassets%2Flogo.png&w=640&q=75',
      name: 'Close By Near Me',
      url: path,
      sameAs: 'https://www.instagram.com/closebynearme'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: {
        '@type': 'Country',
        name: 'US'
      },
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10018',
      streetAddress: '519 8th ave'
    }
  }
}

export const structuredDataGen = (type: StructuredDataGenType, data: any) => {
  switch (type) {
    case 'faq':
      return faqPageDataGen(data)
    case 'breadcrumb':
      return breadcrumbListDataGen(data)

    case 'organization':
      return companyDataGen(data)
    default:
      return
  }
}
