import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import PrincipalPage from './pages/principalPage.js';
import Dashboard from './pages/dashboard.js';
import GlobalProvider from './Contexts/globalContext.jsx';
import RecipePage from './pages/recipeDetailPage.js';
import LayoutPage from './pages/LayoutPage.js';
import RecipesLayout from './pages/recipesLayout.js';
import NotFoundPage from './pages/NotFoundPage.js';
import LoginPage from './pages/loginPage.js';
import RegistePage from './pages/registePage.js';
import FavoritesPage from './pages/FavoritesPage.js';
import { authFunction, loginFunction } from './functions/authFunction.js';

const router = createBrowserRouter(createRoutesFromElements(
          <Route element = <LayoutPage/>>
            <Route
              path='/' 
              element=<PrincipalPage/>
            />
            <Route path="recipes" element={<RecipesLayout/>}>
              <Route
                index
                element = <Dashboard/>
              />
              <Route
                path = "recipe/:recipeName"
                element = <RecipePage/>
              />
              <Route
                path='favorites'
                element = <FavoritesPage/>
                loader={ async () => await authFunction()}
                  
              />

            </Route>

            <Route 
              path='login' 
              element = { <LoginPage/> }
              loader={ async () => await loginFunction()}
              />
            <Route path='registro' element = { <RegistePage/> }/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
  ));
function App() {
  return (
    <>
      <GlobalProvider>
        <RouterProvider router={ router }/>
      </GlobalProvider>
    </>

  );
}

export default App;
