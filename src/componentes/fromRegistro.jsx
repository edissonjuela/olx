import { Button, Form, FormGroup } from "react-bootstrap";
import { Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/stylesSessionStart.css";

export const Fregisto = (


) => {

  return (
    <div className="center ">
      <Form >
        <FormGroup>
          <Label for="exampleEmail">Correo</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="exaple@gmail.com"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Contraseña</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="algien123"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Pais</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>Ecuador</option>
            <option>Peru</option>
            <option>Colombia</option>
            <option>Brasil</option>
            <option>Argentina</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Objetivos</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Ubicacion</Label>
          <Input id="exampleFile" name="file" type="file" />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Estado civil</legend>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Femenino</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Maculino</Label>
          </FormGroup>
     
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" />{" "}
          <Label check>Acepto los terminos y condiciones</Label>
        </FormGroup>
        <Button href="/home" type="submit">
          Registrarme
        </Button>
      </Form>
    </div>
  );
};
