// src/components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.1,
  stagger = 0,
  spring = false
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: amount,
  });

  // Advanced animation directions with more options
  const directions = {
    up: { opacity: 0, y: 60, scale: 0.95 },
    down: { opacity: 0, y: -60, scale: 0.95 },
    left: { opacity: 0, x: -60, scale: 0.95 },
    right: { opacity: 0, x: 60, scale: 0.95 },
    scale: { opacity: 0, scale: 0.7 },
    scaleUp: { opacity: 0, scale: 1.2 },
    rotate: { opacity: 0, rotate: -15, scale: 0.9 },
    rotateLeft: { opacity: 0, rotate: -25, x: -30 },
    rotateRight: { opacity: 0, rotate: 25, x: 30 },
    flip: { opacity: 0, rotateY: 90, scale: 0.8 },
    flipX: { opacity: 0, rotateX: 90, scale: 0.8 },
    zoom: { opacity: 0, scale: 0.5, blur: 10 },
    slide: { opacity: 0, x: -100, y: -100 },
    bounce: { opacity: 0, y: -50, scale: 0.8 },
    fade: { opacity: 0 },
    blur: { opacity: 0, filter: 'blur(10px)' },
    perspective: { opacity: 0, rotateY: -45, rotateX: 15, scale: 0.8 }
  };

  // Spring animation configuration
  const springConfig = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 0.5
  };

  // Smooth easing curves
  const easings = {
    smooth: [0.25, 0.4, 0.25, 1],
    snappy: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
    sharp: [0.4, 0, 0.6, 1]
  };

  const variants = {
    hidden: directions[direction] || directions.up,
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: spring ? {
        ...springConfig,
        delay: delay,
      } : {
        duration: duration,
        delay: delay,
        ease: easings.smooth,
        staggerChildren: stagger,
      }
    },
  };

  // Container animation for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger > 0 ? containerVariants : variants}
      className={`py-16 sm:py-24 ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {stagger > 0 ? (
        <motion.div variants={variants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
};

// Export with additional utility component for individual items
export const AnimatedItem = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className = ''
}) => {
  const directions = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    scale: { opacity: 0, scale: 0.8 },
    fade: { opacity: 0 }
  };

  const variants = {
    hidden: directions[direction] || directions.up,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;