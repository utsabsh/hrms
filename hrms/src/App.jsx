import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Loginpage";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import Category from "./Components/Category";
import Profile from "./Components/Profile";
import Attandence from "./Components/Attandence";
import AddCategory from "./Components/AddCategory"; // Assuming you have an AddCategory component
import EditEmployee from "./Components/EditEmployee"; 
import AddEmployee from "./Components/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/category" element={<Category />} />
          <Route path="/dashboard/attandence" element={<Attandence />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/add_category" element={<AddCategory />} />
          <Route path="/dashboard/add_employee" element={<AddEmployee />} />
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

