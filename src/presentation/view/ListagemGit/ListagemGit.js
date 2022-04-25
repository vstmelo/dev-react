import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_AMBIENTE === "dev"
      ? process.env.REACT_APP_BASE_URL_DEV
      : process.env.REACT_APP_BASE_URL_PROD,
});

export default function PostView(props) {
  const [listagem, setListagem] = useState([]);

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setListagem(res.data.item);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  });

  return (
    listagem.map((item)=>{
        console.log(`item ${JSON.stringify(item)}`);
    })
  )

}