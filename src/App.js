import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>


        <Router>
              <Header/>
              <Sidebar>
                <Routes>
                  <Route path="/" elament ={<Home/>} />
                  <Route path="*" element={<> not found</>} />
                </Routes>
              </Sidebar>
        </Router>
    </>
  );
}

export default App;
