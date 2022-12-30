import './index.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
    return (
        <div className='Nav'>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt='' className='Navlogo'/>
                </NavLink>
            </div>
            <div className='NavLinks'>
                <NavLink to='/' className='NavLink'>Home</NavLink>
                <NavLink to='/pages/Trending' className='NavLink'>Trending</NavLink>
                <NavLink to='/pages/Messages' className='NavLink'>Messages</NavLink>
                <NavLink to='/pages/Notifications' className='NavLink'>Notifications</NavLink>
                <NavLink to='/pages/Account' className='NavLink'>Account</NavLink>
            </div>
        </div>
    );
}
 
export default Navbar;