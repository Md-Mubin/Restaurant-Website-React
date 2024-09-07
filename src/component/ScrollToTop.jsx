// ==================== All Import
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

  const {pathname} = useLocation()

  // ==================== For keep scroll up
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <></>
  )
}

export default ScrollToTop