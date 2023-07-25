import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Register, ErrorPage } from '.';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          progressStyle={{ backgroundColor: 'yellow' }}
          toastStyle={{
            color: '#FFFF00',
            background: '#222',
            borderBottomColor: 'yellow',
          }}
        />
      </Router>
    </>
  );
};

export default Layout;
