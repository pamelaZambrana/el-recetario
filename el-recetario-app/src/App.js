import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Containers/Principals/navbar.jsx';

function App() {
  return (
    <Routes>

      <Route
            path='/'
            element = {<Navbar/>}
      >

      </Route>
    </Routes>
  );
}

export default App;
