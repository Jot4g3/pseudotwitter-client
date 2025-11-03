import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import IndividualPost from './pages/IndividualPost';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from "./pages/Logout"
import "./styles/App.css"
import { useEffect, useState } from 'react';
import { getLoggedUser } from './services/api';


function App() {

  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      const u = await getLoggedUser();
      setUser(u);
    };

    fetchUser();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<IndividualPost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
