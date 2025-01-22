// components/ui/modal/ModalExamples.tsx

import { ModalFull } from "./ModalFull"
import ModalFullRounded from "./ModalFullRounded"
import ModalPopUp from "./ModalPopUp"

export function ModalExamples({}) {
  return (
    <>
      <div className="clipping-container">
        <ModalPopUp  />
      </div>

      <div className="clipping-container">
        <ModalFull />
      </div>
            
      <div className="clipping-container">
        <ModalFullRounded />
      </div>
    </>
  )
}
