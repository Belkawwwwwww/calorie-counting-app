import { useState } from "react"

export const useAdditionalContentState = () => {
    const [modalState, setModalState] = useState({ search: false, info: false })
    const resetModalState = () => {
        setModalState({ search: false, info: false });
      };
    return { modalState, setModalState, resetModalState }
}