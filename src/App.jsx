import {Routes,Route,Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import "./App.css"



export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

console.log('Backend URL:', VITE_BACKEND_URL);


function App() {


  

  return (
    <div className='app-css'>
      
      <nav className="bg-gray-800">
        <div className='container mx-auto p-2'>
          <Link to="/"><h2 className='text-white font-bold text-2xl'>React App</h2></Link>

        </div>
      </nav>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/edit/:id" element={<EditPage />}></Route>
      </Routes>
    </div>
  );
}

export default App
