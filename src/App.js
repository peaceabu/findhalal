import logo from './logo.svg';
import './App.css';
import LocationDetector from './LocationDetector';
import { BrowserRouter as Router, Route,Routes, Link  } from 'react-router-dom';
import Register from './frontend/UserRegister.js';
import Login from './frontend/UserLogin.js';
import GLogin from './frontend/GLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routes = [
    // { path: '/', component: Home, exact: true },
    // { path: '/about', component: About, exact: true },
    // Add more routes as needed
];
  return (
    
    <div className="App">
            <Router>
            <nav className="navbar">
                <ul>
                  <li>
                  <img src={process.env.PUBLIC_URL + '/fh_logo.jpg'} alt="My Image" className="resized-image_head" />
                  </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/glogin">Login Using Google</Link>
                    </li>
                    
                </ul>
            </nav>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/glogin" element={<GLogin />} />
                
            </Routes>
            
        </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={process.env.PUBLIC_URL + '/fh_logo.jpg'} alt="My Image" className="resized-image" />

        <p>
          Find H
        </p>
        
        <p>Powered By</p>
        <a
          className="App-link"
          href="https://akhidawah.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akhi
        </a>
      </header>

    </div>
  );
}

export default App;
