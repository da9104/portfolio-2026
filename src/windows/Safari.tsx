import WindowControls from '@/components/WindowControls'
import WindowWrapper from '@/hoc/WindowWrapper'
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    PanelLeft,
    Plus,
    Search,
    CircleSmall,
    Share,
} from 'lucide-react'
import { blogPosts } from '@/lib/constants'

const Safari = ({ initialPosts }: { initialPosts: any[] }) => {
    const postsArray = Array.isArray(initialPosts) ? initialPosts : [];

    const getTitle = (item: any) => item?.properties?.Title?.title?.[0]?.plain_text || 'Untitled'


    return (
        <>
            <div id='window-header'>
                <WindowControls target='safari' />
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className='flex-1 flex flex-row flex-center gap-3'>
                    <Search className='icon' />
                    <input type='text' placeholder='search' className='flex-1 border-none outline-none' />
                </div>

                <div className='flex items-center gap-5' >
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>
            </div>

            <div className='blog' >
                <div className='flex flew-row justify-between'>
                    <h2>My blog</h2>
                    <span className='text-xs flex flex-row justify-center'>
                        {postsArray.length > 0 ? (
                            <>
                                Notion Connection on <CircleSmall size={14} className='rounded-full bg-green-500 ml-1 mt-[0.1rem] text-green-500' />
                            </>
                        ) : (
                            <>
                                Notion Connection off <CircleSmall size={14} className='rounded-full bg-red-500 ml-1 mt-[0.1rem] text-red-500' />
                            </>
                        )}
                    </span>
                </div>

                <div className='space-y-8'>

                    {postsArray.length > 0 ? (
                        postsArray.map((item) => {
                            const publishedDate = item.properties?.PublishedDate?.date?.start || '--'
                            return (
                                <div key={item.id} className='blog-post'>
                                    <div className='content'>
                                        <p className='text-xs'>{publishedDate}</p>
                                        <a href={item.public_url ?? '#'} target="_blank" rel="noopener noreferrer">
                                            <h3>{getTitle(item)}</h3>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        blogPosts.map(({ id, image, title, date, link }) => (
                            <div key={id} className='blog-post'>
                                <div className='col-span-2'>
                                    <img src={image} alt={title} className="w-full h-auto object-cover rounded-md mb-2" />
                                </div>
                                <div className='content'>
                                    <p className='text-xs'>{date}</p>
                                    <h3>{title}</h3>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </>
    )
}

export default WindowWrapper(Safari, 'safari')