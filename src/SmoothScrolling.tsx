"use client";

import { ReactLenis } from "lenis/react";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

// export default function SmoothScrolling({ children }: SmoothScrollingProps) {
//   return (
//     <ReactLenis
//       root
//       options={{
//         lerp: 0.1, // Smoothness (0.1 = very smooth)
//         duration: 1.2, // Animation duration
//         smoothWheel: true,
//         wheelMultiplier: 1,
//         touchMultiplier: 2,
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// }

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}
