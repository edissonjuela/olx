import { Button, Form } from "react-bootstrap";
import "../styles/stylesSessionStart.css";
export const Login = ()=>{
    return(
        <div className="center "  >        
         <h1 className="centerTitulo ">Inicio de Session</h1>
     
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo electronico</Form.Label>
    <Form.Control type="email" placeholder="algien122@gmail.com" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="algien123" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Infromacion correcta" />
  </Form.Group>
   <Button href="/home"  className="centerbtn" type="submit">Submit</Button>
   <hr />
    <p><a  href="/registro">Resgistrarme</a></p>
</Form>
        </div>
    );
};