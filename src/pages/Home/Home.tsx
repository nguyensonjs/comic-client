import { useQuery } from '@tanstack/react-query'
import { fetchHomeApi } from 'apis'
import { Image } from 'components'
import { HOME_URL, IMAGE_URL } from 'defines'
import { AppHeader } from 'layouts/components'
import { IComic } from 'models'
import Slider from 'react-slick'

export const Home = () => {
  const { data, isLoading, isError } = useQuery<IComic>({
    queryKey: ['HOME'],
    queryFn: () => fetchHomeApi(HOME_URL)
  })

  const listImage = data?.data?.seoOnPage?.og_image ?? []

  if (isLoading) return <p>Đang tải...</p>
  if (isError) return <p>Đã có lỗi xảy ra!</p>

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: true,
    swipe: true,
    swipeToSlide: true
  }

  return (
    <>
      <AppHeader />
      {listImage.length > 0 ? (
        <Slider {...settings} className="mx-auto w-full max-w-7xl overflow-hidden">
          {listImage.map((src, index) => (
            <div key={index} className="p-2">
              <Image
                className="h-56 w-full cursor-pointer rounded-lg object-cover"
                src={`${IMAGE_URL}${src}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">Không có ảnh nào để hiển thị</p>
      )}
    </>
  )
}
