import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Sidebar from './components/Sidebar';
import CreatePost from './pages/CreatePost';
import "./styles/App.css"
import IndividualPost from './pages/IndividualPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<IndividualPost/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
