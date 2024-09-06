import { create } from "zustand"

const useTime = create((set) => ({
    time: "year",
    setTime: (time) => set({time})
}))


export default useTime