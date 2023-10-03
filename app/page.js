"use client"

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'


import { Home } from "app/Home/Home.js"
const index = () => {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Home />
    </main>
  )
}

export default index;
