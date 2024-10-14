import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext } from './context/FlightContext.jsx'
import AuthContextProvider from './context/UserContext.jsx'
import ThemeContextProvider from './context/FlightContext'
import { MyProvider } from './context/emailContext.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>
<MyProvider>


<ThemeContextProvider>
<AuthContextProvider>  
      <App />
</AuthContextProvider>
</ThemeContextProvider> 

</MyProvider>    
    </StrictMode>
)
