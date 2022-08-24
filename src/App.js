import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'
import PetAdoption from "./pages/Adoption";
import PetHealth from "./pages/Adoption";
import PetHome from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<PetHome />}/>
        <Route path="adoption" element={<PetAdoption />}/>
        <Route path="health" element={<PetHealth />}/>
        <Route path="*" element={<h1>Sorry this page does not exist</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
