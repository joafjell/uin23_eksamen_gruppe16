import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import './css/main.css';
//import Dashboard from './components/Dashboard';


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
      </Route>
    </Routes>
  );
}

export default App;
