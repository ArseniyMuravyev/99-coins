import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../screens/home/Home"
import Settings from "../screens/settings/Settings"
import Wallet from '../screens/wallet/Wallet'
import { ThemeProvider } from './Theme/ThemeProvider'

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>  
          <Route element={<Wallet/>} path='/wallet' /> 
          <Route element={<Home/>} path='/' />  
          <Route element={<Settings/>} path='/settings' />  
          <Route path='*' element={<div>Not found</div>}/> 
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Router