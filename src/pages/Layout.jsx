import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Register, ErrorPage, PrivateRoute } from '.';
import {
  AddQuest,
  AllQuests,
  Profile,
  Stats,
  ParallelLayout,
} from './dashboard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <ParallelLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-quest" element={<AddQuest />} />
            <Route path="all-quests" element={<AllQuests />} />
          </Route>
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
