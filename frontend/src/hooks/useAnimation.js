import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useCustomAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return controls;
};

export const useStaggerAnimation = (staggerDelay = 0.1) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * staggerDelay }
    }));
  }, [controls, staggerDelay]);

  return controls;
};

export const useHoverAnimation = () => {
  const controls = useAnimation();

  const handleHover = async () => {
    await controls.start({ scale: 1.05 });
  };

  const handleHoverEnd = async () => {
    await controls.start({ scale: 1 });
  };

  return { controls, handleHover, handleHoverEnd };
};