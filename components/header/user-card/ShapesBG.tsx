// components/header/user-card/ShapesBG.tsx

// Diagonal lines BG
export function ShapesBG() {
  return (
    <div className="absolute top-[50%] right-0 left-0 bottom-0 -z-10">
      <div className="flex">
        <div className="relative h-[100vh] w-[50%] bg-white origin-top-left transform -skew-y-12"></div>
        <div className="relative h-[100vh] w-[50%] bg-white origin-top-right transform skew-y-12"></div>
      </div>
    </div>
  )
}