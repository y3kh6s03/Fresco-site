"use client"

import { motion } from "framer-motion"

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'


import { Home } from "app/Home/Home"
const index = () => {


  return (
    <main>
      <motion.div
        initial={{ clipPath: "polygon(0 0,100% 0,100% 0,0 0)" }}
        animate={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
        transition={{ duration: 5}}
      >
        <Home />
      </motion.div>
    </main>
  )
}

export default index;
