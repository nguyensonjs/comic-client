import React, { useState } from 'react'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const Image: React.FC<ImageProps> = ({ alt = 'Image', src, className, ...props }) => {
  const [imgSrc] = useState(src || '/placeholder.jpg')

  return <img loading="lazy" alt={alt} src={imgSrc} className={`object-cover ${className}`} {...props} />
}

export default Image
