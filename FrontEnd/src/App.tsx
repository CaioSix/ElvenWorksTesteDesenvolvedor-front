import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
