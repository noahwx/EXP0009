import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Account from './pages/Account';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pages/Trending' element={<Trending />} />
            <Route exact path='/pages/Messages' element={<Messages />} />
            <Route exact path='/pages/Notifications' element={<Notifications />} />
            <Route exact path='/pages/Account' element={<Account />} />
        </Routes>
    );
}
 
export default Main;