import useWindowStore from '@/store/window'
import { locations } from '@/lib/constants'
import { useGSAP } from '@gsap/react'
import { Tooltip } from 'react-tooltip'
import clsx from 'clsx'
import { Draggable } from "gsap/all";
import { dockApps } from '@/lib/constants'
import useLocationStore from '@/store/location'

const projects = locations.work?.children ?? []

const Room = () => {
    const { setActiveLocation } = useLocationStore()
    const { openWindow, closeWindow, windows } = useWindowStore()

    const handleOpenProjectFinder = (project: any) => {
        setActiveLocation(project)
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create(".folder")
        Draggable.create(".dock-icon")
    }, [])

    const toggleApp = (app) => {
        if (!app.canOpen) return
        const window = windows[app.id]

        if (app.id === 'trash') {
            setActiveLocation(locations.trash)
            openWindow('finder')
        }

        if (!window) {
            console.error(`Window ${app.id} not found`)
            return;
        }
        if (window.isOpen) {
            closeWindow(app.id)
        } else {
            openWindow(app.id)
        }
    }

    return (
        <section id='home' className='z-1000'>
            <div className="small-screen">
                <p>This website provides a good user experience on desktop screens.</p>
            </div>
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                        onClick={() => handleOpenProjectFinder(project)}
                        aria-label={project.name}
                        data-tooltip-id="dock-tooltip"
                        data-tooltip-content={project.name}
                        data-tooltip-delay-show={50}
                    >
                        <img
                            src={project.icon}
                            alt={project.name}
                            className="w-24 h-24"
                            loading="lazy"
                            />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>

            <ul>
                {dockApps.map(({ id, name, icon, canOpen, windowPosition }) => (
                    <li key={id} className={clsx("group folder", windowPosition)}>
                        <button
                            type='button'
                            className='dock-icon'
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={50}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`${icon}`}
                                alt={name}
                                loading="lazy"
                                className={`
                                 ${id === 'safari' ? 'w-30 h-24'
                                            // : id === 'contact' ? 'w-42 h-30'
                                            : id === 'contact' ? 'w-42 h-30'
                                            : id === 'terminal' ? 'w-50 h-44'
                                            : id === 'trash' ? 'w-35 h-28'
                                            : ' w-42 h-48!'}
                                 ${canOpen ? "" : "opacity-60"}
                                `}
                            />
                            <p className='w-fit mx-auto'>{name}</p>
                        </button>
                    </li>
                ))}
                <Tooltip id="dock-tooltip" place="top" className='tooltip z-1500!'/>
            </ul>
        </section>
    )
}

export default Room