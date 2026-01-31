
import './App.css'
import { Analytics } from "@vercel/analytics/next"
import useWindowStore from "@/store/window";
import Navbar from "@/components/Navbar";
import Room from "@/components/Room";
import Finder from "@/windows/Finder";
import Photos from "@/windows/Photos";
import Text from "@/windows/Text";
import Terminal from "@/windows/Terminal";
import Contact from "@/windows/Contact";
import Resume from "@/windows/Resume";
import Image from "@/windows/Image";
import Safari from "@/windows/Safari";
import Dialog from "@/windows/Dialog"
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

function App({ initialPosts }: { initialPosts: any[] }) {

  const { openWindow } = useWindowStore()

  const handleOpenDialog = () => {
    openWindow("dialog")
  }

  return (
    <main>
      <Navbar />
      <Analytics />
      <div className="relative w-full h-screen overflow-hidden">
        <Room />
        <Finder />
        <Photos />
        <Text />
        <Terminal />
        <Contact />
        <Resume />
        <Image />
        <Safari initialPosts={initialPosts} />
        <Dialog />
        <h1 className="text-4xl font-bold text-white text-center mt-50 font-georama">
          DAMI PORTFOLIO
        </h1>
        <video
          autoPlay loop muted playsInline
          className="absolute -bottom-10 md:bottom-0! md:left-1/2 md:-translate-x-1/2 w-[500px] h-[500px] object-cover cursor-pointer"
          onClick={handleOpenDialog}
        >
          <source
            src="/files/0124.mov"
            type='video/mp4; codecs="hvc1"' />
          <source
            src="/files/0124.webm"
            type="video/webm" />
        </video>
      </div>
    </main>
  )
}

export default App
