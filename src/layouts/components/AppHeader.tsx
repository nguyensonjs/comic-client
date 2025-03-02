import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  const { t } = useTranslation()
  return (
    <header className="h-[86px] pt-2.5 pb-2.5">
      <div className="mx-auto flex h-full w-7xl items-center justify-between">
        <Link to="/">
          <img src="/logo-2.png" alt="Htruyen-logo" />
        </Link>
        <input
          className="h-[40px] max-w-sm flex-grow rounded-lg border border-blue-400 px-3 py-2 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          placeholder="Search..."
        />

        <div>
          <Button type="primary" className="mr-2">
            {t('Sign Up')}
          </Button>
          <Button type="primary">{t('Sign In')}</Button>
        </div>
      </div>
    </header>
  )
}
export { AppHeader }
