import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> {
  children: ReactNode | string
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  htmlType?: 'submit' | 'reset' | 'button'
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'default',
  htmlType = 'button',
  className = '',
  ...rest
}) => {
  const colorVariants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    dashed: 'border border-gray-400 text-gray-700 hover:border-gray-600',
    link: 'text-blue-500 hover:underline',
    text: 'text-gray-700 hover:text-gray-900',
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  } as const

  return (
    <button
      className={`cursor-pointer rounded px-4 py-2 ${colorVariants[type]} ${className}`}
      type={htmlType}
      {...rest}
    >
      {children}
    </button>
  )
}
