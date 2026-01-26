import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { locations } from '@/lib/constants'

const DEFAULT_LOCATION = locations.work;

// Using any to accommodate various specific constraints of location objects and children without complex refactoring
type Location = any;

interface LocationState {
    activeLocation: Location;
    setActiveLocation: (location?: Location) => void;
    resetActiveLocation: () => void;
}

const useLocationStore = create<LocationState>()(
    immer((set) => ({

    activeLocation: locations.work,
    setActiveLocation: (location = null) => set((state) => {
        state.activeLocation = location
    }),

    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })

})))

export default useLocationStore