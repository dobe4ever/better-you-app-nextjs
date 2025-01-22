// components2/header/user-card/ShapesBG.tsx

// Diagonal lines BG
export function ShapesBG() {
  return (
    <div className="relative -top-10 left-0 right-0 bottom- -z-10">
      <div className="z-10">
        <div className="absolute -top-10 left-0 h-[50vh] w-1/2 bg-white origin-top-left transform -skew-y-12"></div>
        <div className="absolute -top-10 right-0 h-[50vh] w-1/2 bg-white origin-top-right transform skew-y-12"></div>
      </div>
    </div>
  )
}