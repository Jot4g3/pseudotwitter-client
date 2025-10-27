import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Sidebar from './components/Sidebar';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
        <CreatePost/>
      </BrowserRouter>
    </div>
  );
}

export default App;
