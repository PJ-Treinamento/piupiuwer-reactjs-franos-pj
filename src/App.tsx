import React, { useEffect, useState, useContext, createContext } from "react";
import api from "./config/api";
import user from "./config/userinfo";
import login from "./config/userlogin";

import "./App.css";

import Sidebar from "./components/Sidebar";
import PiuCard from "./components/PiuCard";
import PiuWriter from "./components/PiuWriter";



function App() {

  // Funcao que pega pius da API, e coloca dentro da variavel piu_list
  async function getPiuList() {
    
    const resp = await api.get('/pius');
    update_piu_list(resp.data);

    console.log(piu_list);
  }


  // Funcao que loga usuario na API
  async function logUser(userInfo: object, loginInfo: object) {

    try {
      api.post('/register', userInfo);
      api.post('/sessions/login', loginInfo);
    } catch (err) {
        console.error(err);
    }
  }


  // Inicia piu_list como vazio, e determina a interface dela
  const [piu_list, update_piu_list] = useState([])

  // Na renderizacao inicial: loga usuario e carrega pius
  useEffect(() => {

    logUser(user, login);
    getPiuList();

  }, []);





  return (

    <div className="App">

      <Sidebar></Sidebar>

      <div className = "MainPage">
        <PiuWriter userPhoto={user.photo}></PiuWriter>

        <div className = "feed">
          {
            piu_list.map((piu: any) => (
            <PiuCard key = {piu.id} id = {piu.id} user = {piu.user} likes = {piu.liked}
            text = {piu.text} created_at = {piu.created_at} updated_at = {piu.updated_at}></PiuCard>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
