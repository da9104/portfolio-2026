import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useWindowStore from '@/store/window'
import { WINDOW_CONFIG } from '@/lib/constants';
import { useLayoutEffect, useRef, type ComponentType } from 'react'

import { Draggable } from "gsap/all";

const WindowWrapper = (Component: ComponentType<any>, windowKey: keyof typeof WINDOW_CONFIG) => {

    const Wrapped = (props: any) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex } = windows[windowKey]

        const ref = useRef<HTMLElement>(null)
        const [mounted, setMounted] = useState(false)

        useEffect(() => {
            setMounted(true)
        }, [])

        useGSAP(() => {
            if (!mounted) return

            const el = ref.current
            if (!el || !isOpen) return

            el.style.display = 'block'

            gsap.fromTo(el, {
                scale: 0.8,
                opacity: 0,
                y: 40
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: .4,
                ease: 'power3.out',
            })
        }, [mounted, isOpen])

        useGSAP(() => {
            if (!mounted) return

            const el = ref.current
            if (!el) return

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
            })

            return () => instance.kill()
        }, [mounted])

        useLayoutEffect(() => {
            if (!mounted) return

            const el = ref.current
            if (!el) return

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen, mounted])

        if (!mounted) {
            // SSR + first client render: nothing, so no mismatch
            return null
        }

        return (
            <section id={windowKey} ref={ref} style={{ zIndex: zIndex }} className='absolute window'>
                <Component {...props} />
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`
    return Wrapped
}

export default WindowWrapper
