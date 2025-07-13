import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useCustomAnimation, useStaggerAnimation, useHoverAnimation } from '../hooks/useAnimation';
import { createStaggerVariants, createLayoutVariants, createHoverVariants } from '../utils/animationUtils';
import ErrorBoundary from '../components/ErrorBoundary';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  useAnimation: () => ({
    start: jest.fn(),
  }),
  AnimatePresence: ({ children }) => children,
}));

// Test Custom Hooks
describe('Animation Hooks', () => {
  it('useCustomAnimation should initialize controls', () => {
    const TestComponent = () => {
      const controls = useCustomAnimation();
      return <div data-testid="test-element" />;
    };
    render(<TestComponent />);
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
  });

  it('useStaggerAnimation should handle stagger delay', () => {
    const TestComponent = () => {
      const controls = useStaggerAnimation(0.2);
      return <div data-testid="test-element" />;
    };
    render(<TestComponent />);
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
  });

  it('useHoverAnimation should handle hover events', () => {
    const TestComponent = () => {
      const { controls, handleHover, handleHoverEnd } = useHoverAnimation();
      return (
        <div
          data-testid="hover-element"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        />
      );
    };
    render(<TestComponent />);
    const element = screen.getByTestId('hover-element');
    fireEvent.mouseEnter(element);
    fireEvent.mouseLeave(element);
  });
});

// Test Animation Utilities
describe('Animation Utilities', () => {
  it('createStaggerVariants should return correct variants', () => {
    const variants = createStaggerVariants({
      staggerChildren: 0.1,
      delayChildren: 0.2,
    });
    expect(variants).toHaveProperty('hidden');
    expect(variants).toHaveProperty('visible');
  });

  it('createLayoutVariants should return correct variants', () => {
    const variants = createLayoutVariants({
      duration: 0.3,
      ease: 'easeInOut',
    });
    expect(variants).toHaveProperty('initial');
    expect(variants).toHaveProperty('animate');
    expect(variants).toHaveProperty('exit');
  });

  it('createHoverVariants should return correct variants', () => {
    const variants = createHoverVariants({
      scale: 1.1,
      duration: 0.2,
    });
    expect(variants).toHaveProperty('whileHover');
    expect(variants).toHaveProperty('whileTap');
  });
});

// Test Error Boundary
describe('ErrorBoundary', () => {
  it('should render children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div data-testid="test-child">Test Content</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('should render error UI when error occurs', () => {
    const ThrowError = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
    expect(
      screen.getByText('We encountered an error while rendering animations.')
    ).toBeInTheDocument();
  });
});