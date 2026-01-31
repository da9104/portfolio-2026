import { FileType, Mail, Search } from 'lucide-react'
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from '@/components/WindowControls'
import { photos, photoLinks } from '@/lib/constants'
import useWindowStore from '@/store/window'


const Photos = () => {
    const { openWindow } = useWindowStore()
    const images = photos.filter(item => item.type === 'image');
    const videos = photos.filter(item => item.type === 'video');

    return (
        <>
            <div id='window-header'>
                <WindowControls target='photos' />

                <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
                    <Mail className='icon' />
                    <Search className='icon' />
                    <FileType className='icon' />
                </div>
            </div>

            <div className='flex w-full'>
                <div className="hidden md:block sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photoLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} loading="lazy" />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {photos.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => openWindow(
                                    item.type === 'image' ? "imgfile" : "videofile",
                                    {
                                        id: item.id,
                                        name: item.type === 'image' ? `${item.subtitle}` : `Gallery Video`,
                                        icon: `/images/${item.type}.png`,
                                        kind: 'file',
                                        fileType: item.type,
                                        ...(item.type === 'image' ? { imageUrl: item.url } : { videoUrl: item.url })
                                    }
                                )}
                                 className='h-30'
                                >
                                {item.type === 'image' ? (

                                    <img 
                                    src={item.url} 
                                    alt={`Gallery ${item.type} ${item.id}`}
                                   
                                    />
                                ) : (
                                    <video src={item.url} controls muted autoPlay playsInline loop width="200" className='rounded-lg' />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WindowWrapper(Photos, 'photos')