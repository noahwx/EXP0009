import '../../index.css';
import { NavLink } from 'react-router-dom';

const Entertainment = () => {
    return (
        <div className='container'>
            <div className='trendNav'>
                <div className='trendNavLinks'>
                    <NavLink to='/pages/Trending' className='trendNavLink'>Current</NavLink>
                    <NavLink to='/pages/trending/News' className='trendNavLink'>News</NavLink>
                    <NavLink to='/pages/trending/Sports' className='trendNavLink'>Sports</NavLink>
                    <NavLink to='/pages/trending/Entertainment' className='trendNavLink'>Entertainment</NavLink>
                </div>
            </div>
            <h1>Entertainment</h1>
        </div>
    );
}
 
export default Entertainment;