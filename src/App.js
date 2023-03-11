import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import News from './components/News';
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Signup/>}/>
         <Route path="/News" element={<News/>}/>
       </Routes>
       </BrowserRouter>
  )
}

export default App;
