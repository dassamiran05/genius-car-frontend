import { Routes, Route} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Services from './pages/Home/Services/Services';
import Experts from "./pages/Home/Experts/Experts";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Register from "./pages/Login/Register";
import Checkout from "./pages/Checkout/Checkout";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import AddService from "./pages/AddService/AddService";
import ManageServices from "./pages/ManageServices/ManageServices";
import NotFound from "./NotFound/NotFound";
import { ToastContainer } from 'react-toastify';
import Order from "./pages/Order/Order";

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path="/checkout/:serviceId" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
        }>
        </Route>
      <Route path="/addservice" element={
        <RequireAuth>
          <AddService></AddService>
        </RequireAuth>
        }>
        </Route>
      <Route path="/manage" element={
        <RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>
        }>
        </Route>
      <Route path="/orders" element={
        <RequireAuth>
          <Order></Order>
        </RequireAuth>
        }>
        </Route>
      <Route path="*" element={<NotFound></NotFound>}>
      </Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
