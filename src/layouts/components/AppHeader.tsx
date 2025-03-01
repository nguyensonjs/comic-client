import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  const { t } = useTranslation()
  return (
    <header className="h-[86px] pt-2.5 pb-2.5">
      <div className="mx-auto flex h-full w-7xl">
        <Link to="/">
          <img src="/logo-2.png" alt="Htruyen-logo" />
        </Link>
        <div>
          <Button type="primary">{t('Sign Up')}</Button>
          <button>{t('Sign In')}</button>
        </div>
      </div>
    </header>
  )
}
export { AppHeader }
