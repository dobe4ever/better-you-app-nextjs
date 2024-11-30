// components/layout/background/shapes-background.tsx
export function ShapesBackground() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
          <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
          <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
          <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
        </svg>
      </div>
    )
  }