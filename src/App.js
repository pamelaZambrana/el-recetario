import {Routes, Route} from 'react-router-dom';
import PrincipalPage from './pages/principalPage.js';
import Dashboard from './pages/dashboard.js';
import GlobalProvider from './Contexts/globalContext.jsx';
import RecipePage from './pages/recipeDetailPage.js';
import LayoutPage from './pages/LayoutPage.js';
import RecipesLayout from './pages/recipesLayout.js';
import RecipeDetailPage from "./pages/recipeDetailPage";

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
            <Route path="recipes" element={<RecipesLayout/>}>
              <Route
                index
                element = <Dashboard/>
              />
              <Route
                path = ":filter/:filter2" 
                element = <Dashboard/>
              />
              <Route
                path = ":filter/recipe/:recipeName"
                element = <RecipePage/>
              />
              <Route
                path = ":filter/:filter2/recipe/:recipeName"
                element = <RecipePage/>
              />
            </Route>
            <Route
              path = "recipe/:recipeName"
              element = <RecipeDetailPage/>
            />
          </Route>
        </Routes>
      </GlobalProvider>
    </div>

  );
}

export default App;
