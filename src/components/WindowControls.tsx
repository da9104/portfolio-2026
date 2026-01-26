import useWindowStore from '@/store/window'

const WindowControls = ({ target }: { target: string }) => {
    const { closeWindow } = useWindowStore()
    return <div id='window-controls' onClick={() => closeWindow(target)}>
        <div className='close' onClick={() => closeWindow(target)} />
        <div className='minimize' />
        <div className='maximize' />
    </div>
}

export default WindowControls;