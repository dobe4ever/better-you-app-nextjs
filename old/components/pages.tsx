// // components/layout/widgets-container/pages.tsx
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// // import { FloatingChatBtn } from '../components/layout/floating-chat-btn'
// // import { Header } from '../components/layout/header'
// // import { StickyTop } from '../components/layout/sticky-top'
// import { WidgetsArea } from '../components/layout/widgets-area'

// // Home component
// export function Home() {
//   const [fadePercentage, setFadePercentage] = useState(0)
//   const headerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current) {
//         const scrollPosition = window.scrollY
//         const headerHeight = headerRef.current.offsetHeight
//         const newFadePercentage = Math.max(0, Math.min(100, (scrollPosition / headerHeight) * 100))
//         setFadePercentage(newFadePercentage)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     // <div className="bg-gradient-to-r from-orange-main via-orange-300 to-orange-main min-h-screen w-full">
//     // <div className="relative min-h-screen min-w-screen bg-white">
//     <div className="flex flex-col overflow-hidden w-full"> 

//         <FloatingChatBtn />

//         <div ref={headerRef} className="relative z-10">
//             <Header />
//             <div 
//             className="absolute top-0 w-full h-[450px] bg-white pointer-events-none" 
//             style={{ opacity: fadePercentage / 100, zIndex: 20 }} 
//             />
//         </div>

//         <div className="sticky top-0 z-30">
//             <StickyTop />
//         </div>

//         <div className="relative z-20">
//             <WidgetsArea />
//         </div>
        
//     </div>
//   )
// }

// export function AnalyticsPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Analytics Page
//             </div>
//         </div>
//     )
// }

// export function AnnouncementPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Announcement Page
//             </div>
//         </div>
//     )
// }

// export function BadgesPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Badges Page
//             </div>
//         </div>
//     )
// }

// // export function HabitsPage() {
// //     return (
// //         <div className="flex flex-col gap-2 z-100">
// //             <div>
// //                  Habits Page
// //             </div>
// //         </div>
// //     )
// // }
// export function HabitsPage() {
//     return (
//       // <div className="min-h-screen bg-white p-4">
//       <div className="fixed inset-0 bg-white p-4 z-100">
//         <div className="flex-col">
//           <h1 className="text-2xl font-bold mb-4">Habits Dashboard</h1>
//           <p>This is where all your habits details would go. Stay tuned for more awesomeness!!</p>
//           {/* Add more habit-related content here */}
//         </div>
//       </div>
//     )
//   }

// export function LifeScorePage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Life Score Page
//             </div>
//         </div>
//     )
// }

// export function ShopPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Shop Page
//             </div>
//         </div>
//     )
// }

// export function CoursesPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Courses Page
//             </div>
//         </div>
//     )
// }

// export function SuccessCoachPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Success Coach Page
//             </div>
//         </div>
//     )
// }

// export function TodosPage() {
//     return (
//         <div className="flex flex-col gap-2 z-100">
//             <div>
//                 Todos Page
//             </div>
//         </div>
//     )
// }