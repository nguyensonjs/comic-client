import { useQuery } from '@tanstack/react-query'
import { fetchHomeApi } from 'apis'
import { Helmet, Image } from 'components'
import { APP_TILE, HOME_URL, IMAGE_URL } from 'defines'
import { IComic } from 'models'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export const Home = () => {
  const { data, isLoading, isError } = useQuery<IComic>({
    queryKey: ['HOME'],
    queryFn: () => fetchHomeApi(HOME_URL)
  })

  const listImage = data?.data?.seoOnPage?.og_image || []

  if (isLoading) return <p>Đang tải...</p>
  if (isError) return <p>Đã có lỗi xảy ra!</p>

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600
  }

  return (
    <div>
      <Helmet title={APP_TILE} />
      <Slider {...settings} className="mx-auto w-full max-w-7xl">
        {listImage.map((src, index) => (
          <div key={index} className="p-2">
            <Image className="h-56 w-full rounded-lg" src={`${IMAGE_URL}${src}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
