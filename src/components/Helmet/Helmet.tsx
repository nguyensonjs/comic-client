import { Helmet as Hm } from 'react-helmet-async'

interface Props {
  title: string
}

export const Helmet = (props: Props) => {
  const { title } = props
  return (
    <Hm>
      <title>{title}</title>
    </Hm>
  )
}
