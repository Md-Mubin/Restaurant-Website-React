// ==================== All Import
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

  // ==================== For keep scroll up
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [useLocation()])

  return null;
}

export default ScrollToTop