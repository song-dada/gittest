import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Gallery from './pages/Gallery';
import ScrollText from './pages/ScrollText';
import GuestBook from './pages/GuestBook.jsx';
import Navbar from './com/Navbar';
// 해시브라우저-> 새로고침해도 문제 없으나 뒤로가기/앞으로 가기시 오류가 종종 생김.
// 브라우저 라우터-> 해시브라우저 반대.
// PUBLIC이 root
function App() {
    return (
    <>
        <Router basename='/gittest'>
            {/* basename='/front'git의 레포지토리를 위치 잡기위함. */}
            <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/gallery" element={<Gallery/>} />
                        <Route path="/scrolltext" element={<ScrollText/>} />
                        <Route path="/guestbook" element={<GuestBook/>} />
                    </Routes>
            </div>

        </Router>
    </>
    );
}

export default App;
