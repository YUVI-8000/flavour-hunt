import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import RecipeDetails from './components/RecipeDetails';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
  );
}

export default App;

