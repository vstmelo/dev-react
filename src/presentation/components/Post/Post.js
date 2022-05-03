import { Card, Col, Row } from "react-bootstrap";

//essa função vai renderizar e mostrar as propriedades do obj.
export default function Post(props) {
  // props.listagem.[propriedade do obj]

  //  O 'listagem' contem os dados pego da Api atraves do setState
  return (
    <>
      <Row>
        <Card style={{ marginTop: "40px" }}>
          <Card.Header style={{ textAlign: "center" }}>
            {props.listagem.name}
          </Card.Header>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Text>
              {props.listagem.id}
              {props.listagem.owner.login}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
