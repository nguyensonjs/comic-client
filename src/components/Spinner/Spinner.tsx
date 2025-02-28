export const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative grid h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-gray-300">
        <div className="absolute inset-0 m-0.5 animate-spin rounded-full border-4 border-transparent border-t-red-500 [animation-direction:reverse] [animation-duration:0.5s]"></div>
        <div className="absolute inset-0 m-2 rounded-full border-4 border-transparent border-t-gray-300"></div>
      </div>
    </div>
  )
}
