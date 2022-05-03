import { Card, Col, Container, Row } from "react-bootstrap";

//essa função vai renderizar e mostrar as propriedades do obj.
export default function Post(props) {
  // props.listagem.[propriedade do obj]

  //  O 'listagem' contem os dados pego da Api atraves do setState
  return (
    <>
      <Container sm>
        <Card style={{ marginTop: "40px" }}>
            <Card.Text  style={{
              textAlign: "center",
              backgroundColor: "#999999",
            }}>
               Git Repositorie
            </Card.Text>
          <Card.Header
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {props.listagem.name}
          </Card.Header>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Text>Id: {props.listagem.id}</Card.Text>
            <Card.Text> Owner: {props.listagem.owner.login}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
