import dayjs from 'dayjs'
import { navLinks, navIcons } from '@/lib/constants'
import useWindowStore from '@/store/window'

const Navbar = () => {
    const { openWindow } = useWindowStore()
    return (
        <nav className='gap-5'>
            <div>
                <img src="/icons/logo.svg" alt="logo" className="w-4 h-4"/>
                <p className='font-bold z-1000'>
                  <a href="#" onClick={() => openWindow("contact")}> Dami K </a> 
                </p>
                <ul>
                    {
                        navLinks.map(({ id, name, type }) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({ id, img }) => (
                            <li key={id}>
                                <img src={img} alt={`icon-${id}`} className='icon-hover' />
                            </li>
                        ))
                    }
                </ul>
                <time suppressHydrationWarning>
                    {dayjs().format("ddd MMM D | h:mm A")}
                </time>
            </div>
        </nav>
    )
}

export default Navbar