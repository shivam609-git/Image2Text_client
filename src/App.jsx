import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
const Loader = lazy(() => import("./components/Loader.jsx"));
const Upload = lazy(() => import("./components/Upload.jsx"));
import LoginForm from "./components/LoginForm.jsx";
import Signup from "./components/Signup.jsx";

const App = () => {


  return (
    // <>
    // <Header/>
    // <div className="container">
    //   <Suspense fallback={<Loader />}>
    //         <Upload/>
    //   </Suspense>
    // </div>
    // <Footer/>
    // </>
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/signup" element={<Signup />} />
          {/* Not Logged in Route */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}



export default App
