
import Homepage from "./pages/Homepage";
import SignUp from "./Components/SignUp";
import TransactionPage from "./pages/TransactionPage";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
