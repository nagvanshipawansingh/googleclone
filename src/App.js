
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import SearchPage from './Component/SearchPage';


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
    <Route exat path='/searchpage' element={ <SearchPage/>}/>
    <Route exat path='/' element={ <Home/>}/>
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
