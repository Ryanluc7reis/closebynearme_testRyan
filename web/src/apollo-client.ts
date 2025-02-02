// import { useMemo } from 'react'
// import { ApolloClient, HttpLink, InMemoryCache, NormalizedCache, NormalizedCacheObject  } from '@apollo/client'

// type newApolloClient = ApolloClient<NormalizedCache>

// let apolloClient: newApolloClient

// export default function client(token?: string) {
//   return new ApolloClient({
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     }),
//     ssrMode: typeof window === 'undefined',
//     cache: new InMemoryCache()
//   })
// }

// // export function initializeApollo(initialState: newApolloClient | null = null, token?: string) {
// //   const _apolloClient = apolloClient ?? client(token)

// //   // If your page has Next.js data fetching methods that use Apollo Client,
// //   // the initial state gets hydrated here
// //   if (initialState) {
// //     // Get existing cache, loaded during client side data fetching
// //     const existingCache = _apolloClient.extract()

// //     // Restore the cache using the data passed from
// //     // getStaticProps/getServerSideProps combined with the existing cached data
// //     _apolloClient.cache.restore({ ...existingCache, ...initialState })
// //   }

// //   // For SSG and SSR always create a new Apollo Client
// //   if (typeof window === 'undefined') return _apolloClient

// //   // Create the Apollo Client once in the client
// //   if (!apolloClient) apolloClient = _apolloClient

// //   return _apolloClient
// // }
// export function initializeApollo(initialState: NormalizedCacheObject  | null = null, token?: string) {
//   const _apolloClient = apolloClient ?? client(token)

//   if (initialState) {
//     _apolloClient.cache.restore(initialState)
//   }

//   if (typeof window === 'undefined') return _apolloClient

//   if (!apolloClient) apolloClient = _apolloClient

//   return _apolloClient
// }

// export function useApollo(initialState?: newApolloClient, token?: string): ApolloClient<NormalizedCache> {
//   const store = useMemo(() => initializeApollo(initialState ?? null, token), [initialState, token])

//   return store
// }
import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

// Função que cria o Apollo Client
export default function client(token?: string) {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }),
      ssrMode: typeof window === 'undefined',
      cache: new InMemoryCache()
    })
  }

  return apolloClient
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null, token?: string) {
  const _apolloClient = apolloClient ?? client(token)

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState?: NormalizedCacheObject, token?: string): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState ?? null, token), [initialState, token])

  return store
}
