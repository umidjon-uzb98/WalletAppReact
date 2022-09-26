import './App.css';
import Nav from './components/shared/Nav';
import Dashboard from './components/dashboard/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './components/Welcome';
import { Route, Routes } from 'react-router-dom';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux'
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes >
        <Route path='/' element={<Welcome />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createwallet' element={<CreateWallet />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
