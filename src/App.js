import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import './css/main.css';
//import Dashboard from './components/Dashboard';


function App() {

  //Brukt Kode fra tidligere innlevering som inspirasjon https://github.com/joafjell/uin23ak4_moviesearch_fjell.git

  const [games, setGames] = useState([])


  const getGames = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=f7bfdc433f98433daef4f8460903a106&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
    const data = await response.json()
    console.log(data);
  }

  useEffect(() => {
    getGames()
  },[])

  return (
    <Routes>
      <Route element={<Layout/>}>
      </Route>
    </Routes>
  );
}

export default App;
