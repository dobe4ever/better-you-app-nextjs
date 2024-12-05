// import { ChevronRight } from 'lucide-react'
// import { Widget } from '../../../common/widget'

// export function HabitsWidget() {
//   return (
//     <Widget title="Today's Habits" rightIcon={<ChevronRight className="h-5 w-5 text-orange-400" />}>
//       <div className="flex items-center justify-between">
//         <div className="my-2">
//           <p className="text-sm text-gray-400">Completed</p>
//           <p className="text-md font-bold">8/10</p>
//         </div>
//         <p className="text-2xl font-bold">80%</p>
//       </div>
      
//       <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
//         <div
//           className="h-full rounded-full bg-black"
//           style={{ width: '80%', transition: 'width 1s ease-in-out' }} 
//         />
//       </div>
//     </Widget>
//   )
// }



import { Widget } from '../../../common/widget'

export function HabitsWidget() {
  return (
    <Widget title="Today's Habits" onClick={() => {}}>
      <div className="flex items-end justify-between mb-2">
        <div>
          <p className="text-sm text-gray-400">Completed</p>
          <p className="text-xl font-bold">8/10</p>
        </div>
        <p className="text-4xl font-bold">80%</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"
          style={{ width: '80%', transition: 'width 1s ease-in-out' }}
        />
      </div>
    </Widget>
  )
}


