import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext } from './context/FlightContext.jsx'
import AuthContextProvider from './context/UserContext.jsx'
import ThemeContextProvider from './context/FlightContext'
import { MyProvider } from './context/emailContext.jsx'
import CardContextProvider from './context/cardContext.jsx'
import HistoryContextProvider from './context/History.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>
<MyProvider>
<HistoryContextProvider>
<CardContextProvider>


<ThemeContextProvider>
<AuthContextProvider>  
      <App />
</AuthContextProvider>
</ThemeContextProvider> 
</CardContextProvider>
</HistoryContextProvider>
</MyProvider>    
    </StrictMode>
)
