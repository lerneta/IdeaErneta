import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide from './images/slide1.png';
import slide2 from './images/slide2.png';
import foto2 from './images/foto2.png'

const slideImages = [
    {
        url: slide,
        caption: ""
    },
    {
        url: slide2,
        caption: ''
    }
];

function Home() {
    return (
        <div>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ width: "100%", height: "100vh", 'backgroundImage': `url(${slideImage.url})`, backgroundSize: "cover" }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
            <img src={foto2} style={{ width: "100%", height: "100vh" }} />
        </div>
    )
}

export default Home
