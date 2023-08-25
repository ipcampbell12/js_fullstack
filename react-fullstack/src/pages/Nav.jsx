import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import Post from './Post';

function Nav() {



    return (
        <nav className="nav">

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/createpost" exact element={<CreatePost />} />
                <Route path="/post/:id" exact element={<Post />} />
            </Routes>

        </nav>
    );
}

export default Nav;