import { ReactNode } from 'react'
import './GlobalStyles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface GlobalStylesProps {
  children: ReactNode
}

export const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return children
}
