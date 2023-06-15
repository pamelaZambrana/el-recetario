import {Routes, Route} from 'react-router-dom';
import PrincipalPage from './pages/principalPage.js';
import Dashboard from './pages/dashboard.js';
import GlobalProvider from './Contexts/globalContext.jsx';
import RecipePage from './pages/recipePage.js';
import LayoutPage from './pages/LayoutPage.js';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Routes>
          <Route element = <LayoutPage/>>
            <Route
              path='/' 
              element=<PrincipalPage/>
            />
            <Route
              path = "recipes/:filter" 
              element = <Dashboard/>
            />
             <Route
              path = "recipes/:filter/:filter2" 
              element = <Dashboard/>
            />
            <Route
              path = "recipe/:filter/:recipe"
              element = <RecipePage/>
            />
            <Route
              path = "recipe/:recipe"
              element = <RecipePage/>
            />
          </Route>
        </Routes>
      </GlobalProvider>
    </div>

  );
}

export default App;
