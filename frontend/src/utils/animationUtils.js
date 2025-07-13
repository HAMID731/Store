import { useCallback } from 'react';

// Utility to optimize animation performance by reducing re-renders
export const useAnimationCallback = (callback, dependencies = []) => {
  return useCallback(callback, dependencies);
};

// Helper to create staggered animation variants
export const createStaggerVariants = ({
  staggerChildren = 0.1,
  delayChildren = 0,
  initialY = 20,
  initialX = 0,
}) => ({
  hidden: {
    opacity: 0,
    y: initialY,
    x: initialX,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Helper to create layout animation variants
export const createLayoutVariants = ({
  duration = 0.3,
  ease = 'easeInOut',
}) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration, ease },
});

// Helper to create hover animation variants
export const createHoverVariants = ({
  scale = 1.05,
  duration = 0.2,
}) => ({
  whileHover: { scale },
  whileTap: { scale: 0.95 },
  transition: { duration },
});