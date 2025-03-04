import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Privacy from "./pages/Privacy";

const App = () => {
    return (
      <div className="flex flex-col h-screen w-screen bg-white">
        <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
        </div>
    );
};
export default App;