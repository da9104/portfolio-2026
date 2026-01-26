import { WINDOW_CONFIG, INITIAL_Z_INDEX } from '@/lib/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface WindowState {
    windows: typeof WINDOW_CONFIG;
    nextZIndex: number;
}

interface WindowActions {
    openWindow: (windowKey: string, data?: any) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowState & WindowActions>()(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,
        openWindow: (windowKey: string, data = null) => set((state) => {
            if (!state.windows[windowKey as keyof typeof WINDOW_CONFIG]) {
                console.error(`Window ${windowKey} not found`);
                return;
            }
            const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data
            state.nextZIndex++;

        }),

        closeWindow: (windowKey: string) => set((state) => {
            if (!state.windows[windowKey as keyof typeof WINDOW_CONFIG]) {
                console.error(`Window ${windowKey} not found`);
                return;
            }
            const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusWindow: (windowKey: string) => set((state) => {
            if (!state.windows[windowKey as keyof typeof WINDOW_CONFIG]) {
                console.error(`Window ${windowKey} not found`);
                return;
            }
            const win = state.windows[windowKey as keyof typeof WINDOW_CONFIG];
            if (!win.isOpen) return;
            win.zIndex = state.nextZIndex;
        }),
    }))
);

export default useWindowStore