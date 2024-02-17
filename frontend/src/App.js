
import Navbar from "./Components/Navbar";
import RenderCard from "./RenderCard";
import Pagination from "./Components/Pagination";
// import { ThemeProvider } from "./Context/ThemeContext";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
    <div style={{ background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>

   
    
     <Navbar/>
    <RenderCard/>
    <Pagination/>
  
    </div>
    </>
 
  );
}

export default App;
