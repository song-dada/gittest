import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.css';

const Home = () => {
    const images = [
        { src: 'img1.jpg', title: "Hello1" },
        { src: 'img2.jpg', title: "Hello2" },
        { src: 'img3.jpg', title: "Hello3" }
    ]

    const [imgIndex, setImgIndex] = useState(0);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setImgIndex(prev => (prev === images.length - 1) ? 0 : prev + 1)
        }, 5000);

        const API_KEY = "f5a22e5cabdbcc7a8fb2fc0c905176cd";
        const CITY = "ansan-si";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`
        const fetchWeather = async () => {
            try {
                const res = await axios.get(URL)
                // .then(res => {console.log(res); return res.data})

                setWeather(
                    {
                        temp: res.data.main.temp,
                        descriptron: res.data.weather[0].descriptron,
                        icon: res.data.weather[0].icon
                    }
                )
            } catch (error) {
                console.error(error)
            }
        }
        fetchWeather();

        return () => clearInterval(timer);

    }, [])

    return (
        <div className="homeOutbox">
            {
                images.map((img, idx) => (
                    <div key={idx}
                        className={`img ${imgIndex === idx ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL || '.'}/asset/${img.src})` }} >
                        <h1 className={`title ${imgIndex === idx ? 'on' : ''}`}> {img.title} </h1>
                    </div>

                ))
            }
            {
                // && 앞이 존재 하면 실행하고 아니면 하지마
                weather && (
                    <div className="weather">
                        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.descriptron}
                            referrerPolicy='no-referrer' /> {/* 외부주소에서 가져올때는 이거 있어야댐.*/}
                        <div>{weather.temp} ℃</div>
                        <div>{weather.description}</div>
                    </div>
                )
            }
        </div>
    )
}

// process.env.Public_URL 절대 경로 설정
export default Home
