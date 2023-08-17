import { useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import { DownCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
//import HandleModal from "./UI/HandleModal";


const items = [

  {
    label: 'Home',
    key: '/',
    icon: <DownCircleOutlined />
  },
  {
    label: 'About',
    key: '/about',
    icon: <DownCircleOutlined />
  },
  {
    label: 'Create post',
    key: '/createpost',
    icon: <DownCircleOutlined />
  }
];

function App() {

  const navigate = useNavigate();
  const handleClick = (kp) => navigate(kp);

  return (
    <div className="App">
      <Menu
        theme="light"
        mode="horizontal"
        style={{ justifyContent: 'right' }}
        items={items}
        onClick={({ key }) => {

          handleClick(key)
        }}
      />


      <Nav />


    </div>
  );
}

export default App;
