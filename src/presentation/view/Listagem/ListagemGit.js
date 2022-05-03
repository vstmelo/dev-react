import "./ListagemGit.css";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
export default function ListagemGit() {

  const [listagem, setListagem] = useState([]);

  const api = axios.create({
    baseURL:
      process.env.REACT_APP_AMBIENTE === "dev"
        ? process.env.REACT_APP_BASE_URL_DEV
        : process.env.REACT_APP_BASE_URL_PROD,
  });

  useEffect(() => {
    api
      .get("https://api.github.com/repositories")
      .then((res) => {
        setListagem(res.data);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  });

  return (
    <>
      <Header />
            <ListGroup>
        {
           listagem.map((item)=>{
            return(
                // listagem vai receber os valores contidos em Item
                // que nos permite renderizar no component Post com os dados que queremos
                
                <Post 
                key={item.id}
                listagem = {item}
                />
                )
            })            
        }   
            </ListGroup>
    </>
  );
}
