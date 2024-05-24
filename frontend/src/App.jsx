import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Calendari from './pages/Calendari';
import Preus from './pages/Preus';
import Users from './pages/Users';
import ActivityCategories from './pages/ActivityCategories';
import ActivityBookings from './pages/ActivityBookings';
import ManageActivities from './pages/ManageActivities';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/activities" element={<Layout><Activities /></Layout>} />
      <Route path="/calendari" element={<Layout><Calendari /></Layout>} />
      <Route path="/preus" element={<Layout><Preus /></Layout>} />
      <Route path="/users" element={<Layout><Users /></Layout>} />
      <Route path="/activityCategories" element={<Layout><ActivityCategories /></Layout>} />
      <Route path="/activityBookings" element={<Layout><ActivityBookings /></Layout>} />
      <Route path="/manageActivities" element={<Layout><ManageActivities /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
    </Routes>
  );
};

export default App;
