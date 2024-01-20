import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './components/register';
import HomePage from './pages/homePage';
import Login from './components/login';
import Forgot from './components/forgot';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/forgot' element={<Forgot/>}/>
            </Routes>
        </Router>
    )
}

export default App
