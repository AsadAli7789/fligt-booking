import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer'
import Navbar from './component/nav-bar'
import Example from './component/nav-bar'
import Sec1 from './component/sec1'
import Asad from './component/Datepicker'
import Sec2 from './component/sec2'
import Sec3 from './component/sec3'
import Sec4 from './component/sec4'
import Sec5 from './component/sec5'
import Sec6 from './component/sec6'
import Dropdown from './component/dropdown'
import Sllider from './component/slider'
import Sort from './component/sort'
import Card from './component/card'
import Image_galery from './component/image_gallery'
import Input from './component/input'
import Card_2 from './component/card_2'
import Card_2_part_1 from './component/card_2part_1'
import Card_2_part_2 from './component/card_2_part2'
import Moddal from './component/modal'
import Last_sec from './component/last_sec'
import Example2 from './component/nav-bar-2'

import { AuthContext } from "./context/UserContext";






import LoginPage from './component/login'
import Page5 from './pages/page5'
import { AuthContextProvider} from './context/UserContext'
import LoginPage2 from './component/loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page4 from './pages/page4'
import Page3 from './pages/page3'
import Page6 from './pages/page6'
import EmailForm from './component/sendmail'
import CreditCard from './component/creditcard'
 function  App() {
 
  const {user1,setUser1} = useContext(AuthContext)
console.log(user1)
const length = Object.keys(user1).length;




  return (
    <>



{/* <Example2/>   */}
{/* <Dropdown/> */}
{/* <Card/> */}
{/* <Sllider /> */}
{/* <Page5/> */}
<<<<<<< Updated upstream
<CreditCard/>
{/* <BrowserRouter>
=======
<BrowserRouter>
>>>>>>> Stashed changes
<Routes>

  <Route path='/' element={ length==0?<Page1/>: 
  <Page2/>} ></Route>
  <Route path='/page2' element={<Page2/>} ></Route>
  <Route path='/page2/signup' element={<LoginPage/>}></Route>
  <Route path='/page2/login' element={<LoginPage2/>}></Route>
   <Route path='/page2/Page6' element={<Page6/>}></Route>

  <Route path="/page2/Page6/:id" element={<Page3/>} />
  <Route path='/page2/Page6/:id/:id' element={<Page4/>}></Route>
  <Route path='/page2/Page6/:id/:id/:id' element={<Page5/>}></Route>




</Routes>
</BrowserRouter>

  {/* <EmailForm/> */}
 
  
      </>
  )
}

export default App
