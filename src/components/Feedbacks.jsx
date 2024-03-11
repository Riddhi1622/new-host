import React from 'react'
import { useState, useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../style';
import {SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';

const Feedbacks = () => {
  return (
    
    <div className='xl: mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-0.75 bg-black-100,
      p-8
      rounded-2xl'>
        <p className={styles.sectionSubText}>More Projects On Blockchain...</p>
        <h3 className={styles.sectionHeadText}>Coming soon</h3>
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Feedbacks, "");