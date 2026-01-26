import WindowControls from '@/components/WindowControls'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Tooltip } from 'react-tooltip'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const RESUME_PATH = 'files/resume.pdf'

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [pdfError, setPdfError] = useState(null)
    const [precheckDone, setPrecheckDone] = useState(false)

    useEffect(() => {
        // this runs only in browser
        console.log(window.innerWidth);

    }, []);

    useEffect(() => {
        let cancelled = false
        fetch(RESUME_PATH, { method: 'HEAD' })
            .then(res => {
                if (cancelled) return
                if (!res.ok) {
                    setPdfError('Resume file not found. You can download it using the link below.')
                    setIsLoading(false)
                } else {
                    setPrecheckDone(true)
                    setIsLoading(true)
                }
            }).catch(() => {
                if (cancelled) return;
                setPrecheckDone(true)
                setIsLoading(true)
            })
        return () => { cancelled = true }
    }, [])

    const onDocumentLoadSuccess = () => {
        setIsLoading(false)
        setPdfError(null)
    }

    const onDocumentLoadError = (error) => {
        console.error('Failed to load PDF', error)
        setPdfError('unable to display the file')
        setIsLoading(false)
    }

    return (
        <>
            <div id='window-header'>
                <WindowControls target='resume' />
                <h2>Resume.pdf</h2>

                <a href={RESUME_PATH} download className='cursor-pointer!' id='download-resume' title='download my resume'>
                    <Download className='icon' />
                </a>
                <Tooltip anchorSelect="#download-resume" content="Download my resume" />
            </div>

            {isLoading && <p>Loading...</p>}

            {pdfError && (
                <div className="pdf-error">
                    <p>{pdfError}</p>
                    <a href={RESUME_PATH} download className='cursor-pointer'>Download CV</a>
                </div>
            )}

            {precheckDone && !pdfError && (
                <Document
                    file={RESUME_PATH}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                >
                    {!isLoading && !pdfError && <Page pageNumber={1} />}
                </Document>
            )}
        </>
    )
}


export default WindowWrapper(Resume, 'resume')