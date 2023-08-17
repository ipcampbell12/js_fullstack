import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';

function Nav() {



    return (
        <nav className="nav">

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/createpost" exact element={<CreatePost />} />
            </Routes>

        </nav>
    );
}

export default Nav;