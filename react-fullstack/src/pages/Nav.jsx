import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import Post from './Post';
import Login from './Login';
import Registration from './Registration';

function Nav() {



    return (
        <nav className="nav">

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/createpost" exact element={<CreatePost />} />
                <Route path="/post/:id" exact element={<Post />} />
                <Route path="login" exact element={<Login />} />
                <Route path="registration" exact element={<Registration />} />
            </Routes>

        </nav>
    );
}

export default Nav;