import '../index.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='post-container'>
                <div className='userarea-img'></div>
                <h3 className='userarea-un'>@User</h3>
                <textarea type='text' name='post' className='postbox' placeholder='Tell the world...'/>
                <button className='postbtn'>Post</button>
            </div>
        </div>
    );
}
 
export default Home;