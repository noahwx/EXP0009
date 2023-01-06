import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Account from './pages/Account';
import News from './pages/trending/News';
import Sports from './pages/trending/Sports';
import Entertainment from './pages/trending/Entertainment';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pages/Trending' element={<Trending />} />
            <Route exact path='/pages/Messages' element={<Messages />} />
            <Route exact path='/pages/Notifications' element={<Notifications />} />
            <Route exact path='/pages/Account' element={<Account />} />
            <Route exact path='/pages/trending/News' element={<News />} />
            <Route exact path='/pages/trending/Sports' element={<Sports />} />
            <Route exact path='/pages/trending/Entertainment' element={<Entertainment />} />
        </Routes>
    );
}
 
export default Main;