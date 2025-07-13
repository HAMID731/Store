# Animation Documentation

## Overview
This document outlines the animation patterns and best practices used in the SuperMarket application.

## Animation Constants
Located in `src/constants/animations.js`, these predefined animations ensure consistency across components:
- `pageTransition`: Smooth transitions between routes
- `cardAnimation`: Interactive card animations
- `listItemAnimation`: Staggered list item animations
- `buttonAnimation`: Interactive button effects
- `formFieldAnimation`: Form field transitions
- `containerAnimation`: Container with staggered children

## Custom Hooks
Located in `src/hooks/useAnimation.js`:
- `useCustomAnimation`: Basic fade and slide animations
- `useStaggerAnimation`: Staggered animations for lists
- `useHoverAnimation`: Interactive hover effects

## Utility Functions
Located in `src/utils/animationUtils.js`:
- `useAnimationCallback`: Performance optimization
- `createStaggerVariants`: Staggered animation helper
- `createLayoutVariants`: Layout animation helper
- `createHoverVariants`: Hover animation helper

## Error Handling
The `ErrorBoundary` component (`src/components/ErrorBoundary.js`) gracefully handles animation-related errors.

## Best Practices
1. **Performance**
   - Use `AnimatePresence` for exit animations
   - Implement `layoutId` for smooth transitions
   - Avoid heavy animations on mobile devices

2. **Accessibility**
   - Respect user's reduced motion preferences
   - Ensure animations don't interfere with screen readers
   - Keep animations subtle and purposeful

3. **Maintenance**
   - Use predefined animation constants
   - Implement custom hooks for complex animations
   - Document new animation patterns

4. **Testing**
   - Test animations across different devices
   - Verify animation performance
   - Check accessibility compliance

## Component Examples

### Page Transitions
```jsx
<AnimatePresence mode="wait">
  <motion.div {...pageTransition}>
    {children}
  </motion.div>
</AnimatePresence>
```

### Interactive Cards
```jsx
<motion.div {...cardAnimation}>
  <Card>{content}</Card>
</motion.div>
```

### Staggered Lists
```jsx
<motion.div {...containerAnimation}>
  {items.map(item => (
    <motion.div key={item.id} {...listItemAnimation}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```