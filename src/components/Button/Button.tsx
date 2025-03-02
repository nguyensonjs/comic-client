import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> {
  children: ReactNode | string
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  htmlType?: 'submit' | 'reset' | 'button'
}

export const Button: FC<ButtonProps> = ({ children, type, htmlType, ...rest }) => {
  return (
    <button className={`button btn-${type}`} type={htmlType} {...rest}>
      {children}
    </button>
  )
}
