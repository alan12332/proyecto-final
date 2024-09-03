import { useEffect, useRef, useState } from 'react'
import { data } from './data';
import './carru_img.css'
import { NavLink } from 'react-router-dom';
export function Carru_img() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(currentIndex + 1)
            }

        }
    }

    return (
        <>
            <div className='containe'>
                <div className='slider_containe'>
                    <div className='izquierda' onClick={() => scrollToImage('prev')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                    </svg>

                    </div>
                    <div className='derecha' onClick={() => scrollToImage('next')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>

                    </div>
                    <div className='contaimer_img'>
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} alt="" width={500} height={280} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}