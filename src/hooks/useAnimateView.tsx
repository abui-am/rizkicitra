import { useEffect } from 'react'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useAnimateView = () => {
  const { inView, ref } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('enter')

    if (!inView) controls.start('hidden')
  }, [inView, controls])

  return { ref, controls }
}

export default useAnimateView
