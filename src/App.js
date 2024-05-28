
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import SignUpForm from './components/SignUpForm';
import Tempelate from './components/Tempelate';
import {Route,Routes, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <>
    <Header/>
   
    <div className="App">
       <Routes>
        <Route element={<Tempelate/>}>
            <Route index element={<LoginForm/>}/>
            <Route path='/signup' element={<SignUpForm/>}/>
          </Route>
        <Route path='/dashboard' element={
          <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>}/>
       </Routes>
    </div>
  
    </>
  );
}

export default App;
