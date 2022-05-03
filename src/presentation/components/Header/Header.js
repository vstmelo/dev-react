import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";
import "./Header.css";
import Icon from '@mdi/react'
import { mdiMagnifyPlusOutline } from '@mdi/js';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark"  style={{justifyContent:" center"}}>
        <NavItem style={{marginTop: "auto"}}>
          <InputGroup>
            <FormControl placeholder="Pesquisar" />
          </InputGroup>
        </NavItem>
      </Navbar>
          
    </>
  );
}
