import React from 'react'
import { useState, useEffect } from 'react';
import './ScrollText.css'

const ScrollText = () => {

    const [index, setIndex] = useState(0);

    const textScroll = () => {
        const scrollY = window.scrollY;
        const viewPortHeight = window.innerHeight;

        if( scrollY < viewPortHeight * 0.5){
            setIndex(0);
        }else if(scrollY < viewPortHeight * 1.8){
            setIndex(1);
        }else{
            setIndex(2);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", textScroll);
        textScroll();
        return () => window.removeEventListener("scroll", textScroll);
        // 메모리를 위해서라도 가능하면 리턴을 때려주는게 좋음
    },[])


    return (
        <div className='scrollTextOutbox'>
            <section className={`scrollText ${index === 0 ? 'active' : null }`}>
                <h1>page number one</h1>
            </section>
            <section className={`scrollText ${index === 1 ? 'active' : null }`}>
                <h1>page number two</h1>
            </section>
            <section className={`scrollImg ${index === 2 ? 'active' : null }`}>
                <img src={`${process.env.PUBLIC_URL || '.'}/asset/img4.jpg`} alt="lastImg" />
            </section>
        </div>
    )
}

export default ScrollText