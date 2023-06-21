
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import { Layout } from 'antd';
import HeaderComp from './containers/HeaderComp';
import LoginPage from './pages/Authentication/LoginPage';
import './index.css'
import FooterComp from './containers/FooterComp';
function App() {
 

  return (
    
      <div className="create-account-desktop">
        <HeaderComp/>
      <HomePage/>
      <FooterComp/>
      </div>
  
    
    
  )
}

export default App
