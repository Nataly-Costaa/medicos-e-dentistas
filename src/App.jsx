import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Inscricao from "./pages/Inscricao/Inscricao";
import { Routes, Route } from "react-router-dom"; 
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Routes>

      <Footer/>
    </>
  )
}
