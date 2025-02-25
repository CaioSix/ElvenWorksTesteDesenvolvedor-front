import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
