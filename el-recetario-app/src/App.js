import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Containers/Principals/navbar.jsx';
import Footer from './Components/Containers/Principals/Footer.jsx';
import PrincipalPage from './pages/principalPage.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route
            path='/' element=<PrincipalPage/>
          />
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
