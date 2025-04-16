import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './gallery.css';


const Gallery = () => {

    const [dataImg, setdataImg] = useState([]);
    useEffect(() => {
        const fetchImg = async () => {
            try {
                const res = await fetch(`${process.env.PUBLIC_URL || '.'}/data/data.json`);
                const data = await res.json();
                setdataImg(data)

            } catch (error) {
                console.error('Error', error)
            }
        }
        fetchImg();

    }, [])

    const positions = [
        { x: -80, y: -80 },
        { x: -80, y: 80 },
        { x: 80, y: -80 },
        { x: 80, y: 80 }
    ]

    return (
        <>
            <div className="galleryOutbox">
                {/* 흐르는 이미지 시작 */}
                <div className="scroll-img">
                    <div className="scroll-track">
                        {
                            dataImg.concat(dataImg).map((item, index) => (
                                <div className="scroll-in-box" key={index}>
                                    <div>{item.title}</div>
                                    <img src={(process.env.PUBLIC_URL || '') + item.src}
                                        alt={item.dis}
                                        className="scroll-box" />
                                    <div>{item.dis}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* 페이드 이미지 */}
                <motion.div
                    className='fade-section'
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}>
                    {/* 불러온 motion 라이브러리 사용. 서비스 해주는 것들 initial: 초기값 / */}
                    <div className='img-box'>
                        <img src={`${process.env.PUBLIC_URL || '.'}/asset/img1.jpg`} alt="gallery-image-1" />
                    </div>
                    <div className='text-box'>
                        <h2>Hello</h2>
                        <h4>wlecome to Gallery!</h4>
                    </div>
                </motion.div>
                <motion.div
                    className='fade-section'
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
                    viewport={{ once: true, amount: 0.4 }} >
                    <div className='img-box'>
                        <img src={`${process.env.PUBLIC_URL || '.'}/asset/img2.jpg`} alt="gallery-image-2" />
                    </div>
                    <div className='text-box'>
                        <h2>Gallery</h2>
                        <h4>Gallery page was created React App</h4>
                    </div>
                </motion.div>

                {/* 모아지는 이미지? */}
                <div className="group-imgs">
                    {
                        [0, 1, 2, 3].map((i) => (
                            <motion.img
                                key={i}
                                className='group-img'
                                src={`${process.env.PUBLIC_URL || '.'}/asset/img${i + 1}.jpg`}
                                initial={{ opacity: 0, y: positions[i].y, x: positions[i].x }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1, delay: (i + 2) }}
                                viewport={{ once: true, amount: 0.2 }}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default Gallery