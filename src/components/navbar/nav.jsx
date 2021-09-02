import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container} from 'react-bootstrap';

function Navigation()
{
  return(
   
  <Navbar  bg="dark" variant="dark" >
    <Container  >
      <Navbar.Brand className="m-auto">
      
      RIVERT.JAVASCRIPT
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
export default Navigation;