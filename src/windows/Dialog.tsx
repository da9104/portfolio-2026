import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from '@/components/WindowControls'
import useWindowStore from '@/store/window'


const Dialog = () => {
    const { closeWindow } = useWindowStore()

    return (
        <>
            <div id='window-header'>
                <WindowControls target='dialog' />
                <h2>Hello!</h2>
            </div>

            <div className='p-6 space-y-4'>
                <div>
                    <h2 className="text-3xl font-bold mb-1 font-georama">Hi I'm Dami</h2>
                    <p className='text-gray-500'>Welcome to my portfolio!</p>
                </div>

                <div className="no-scrollbar max-h-[50vh] overflow-y-auto">
                    <p className="leading-relaxed">
                        I'm a Full Stack Developer with a passion for creating engaging
                        and interactive user experiences.
                        My expertise lies in building responsive and accessible web applications using modern technologies.
                        This website built with Google Gemini Pro, Antigravity
                        Please be my guest! feel free to play around with the website. and contact me if you have any questions.
                    </p>
                </div>

                <button
                    onClick={() => closeWindow('dialog')}
                    className="w-full py-2 text-lg font-medium text-white rounded-lg bg-orange-400 hover:bg-orange-600 transition-colors cursor-pointer"
                >
                    Close
                </button>
            </div>
        </>
    )
}

export default WindowWrapper(Dialog, 'dialog')