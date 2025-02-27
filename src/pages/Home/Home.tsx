import { useQuery } from '@tanstack/react-query'
import { fetchHomeApi } from 'apis'
import { Helmet } from 'components/Helmet'
import { APP_TILE, HOME_URL } from 'defines'

export const Home = () => {
  const { data } = useQuery({
    queryKey: ['HOME'],
    queryFn: async () => {
      const data = await fetchHomeApi(HOME_URL)
      // eslint-disable-next-line no-console
      console.log('🚀 ~ Home ~ data:', data)
      return data || {}
    }
  })

  return (
    <div>
      <Helmet title={data?.data?.seoOnPage?.titleHead ?? APP_TILE} />
      Home
    </div>
  )
}
