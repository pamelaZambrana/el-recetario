import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Containers/Principals/navbar.jsx';
import Footer from './Components/Containers/Principals/Footer.jsx';
import PrincipalPage from './pages/principalPage.js';
import Dashboard from './pages/dashboard.js';
import GlobalProvider from './Contexts/globalContext.jsx';
import RecipePage from './pages/recipePage.js';

function App() {
  return (
    <div>
    <GlobalProvider>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
        <Routes>
          <Route
            path='/' 
            element=<PrincipalPage/>
          />
          <Route
            path = "recipes/:filter" 
            element = <Dashboard/>
          />
          <Route
            path = "recipe/:id"
            element = <RecipePage/>
          />
        </Routes>
    </body>
    <footer>
      <Footer></Footer>
    </footer>
    </GlobalProvider>
    </div>
  );
}

export default App;
