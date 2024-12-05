// Westpack BG
// export function ShapesBackground() {
//   return (
//     <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
//       <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 800">
//         <path d="M0 0 H400 V800 H0 Z" fill="#f97316" />
//         <path d="M250 0 L400 0 L400 300 Z" fill="#404040" />
//         <path d="M0 750 L400 75 L400 800 Z" fill="#fb9a47" />
//       </svg>
//     </div>
//   )
// }

// Diagonal lines BG
export function ShapesBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom- -z-10">
      <div className="top-0 left-0 right-0 bottom- -z-10">
        <div className="absolute top-0 left-0 h-[24vh] w-1/2 bg-orange-400 origin-top-left transform -skew-y-12"></div>
        <div className="absolute top-0 right-0 h-[24vh] w-1/2 bg-orange-400 origin-top-right transform skew-y-12"></div>
      </div>
    </div>
  )
}

