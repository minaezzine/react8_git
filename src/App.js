import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import './App.css';
class App extends Component {
  render() {

   
    const FNum = () => {
      let x = document.getElementById("Num").value;
      let y=16-(x.length);
      let ch="";
      let i;
    for (i=0;i<y;i++)
    ch=ch+".";
    
      document.getElementById("num2").innerHTML = x + ch;
  }

    const FDate = () => {
      let x = document.getElementById("Date").value;
      let y= 4-(x.length);
      let ch2="";
      let i;
      let a;
      let b ; 
      let c ; 
   
  

        for (i=0;i<y;i++)
    {
        ch2=ch2+".";
    }
    a=x.slice(0,2),
    b="/",
    c=x.slice(2,4)
      document.getElementById("date2").innerHTML = a+b+c+ch2;
      
     
      }
    


    const FNom = () => {
      
      let x = document.getElementById("Nom").value;
      document.getElementById("nom2").innerHTML = x;

    }


    return (


      <Grid>
        <Row >
          <Col className="respondi" xs={6} md={6} lg={6}>

            <div className="card">
              <br />
              <h2><spam className="title">Company name</spam></h2>
              <img className="img" src="https://www.ekit.com/default/images/ug_nano_sim.png" />
              <p className="point" id="num2">................</p>
              <p className="points" id="date2">../..</p>
              <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/280px-Mastercard-logo.svg.png" />
              <p id="nom2" className="nom"></p>
            </div>
          </Col>
          <Col className="respondi" xs={6} md={6} lg={6}>
           <FormControl type="text"  className="for" id="Num" onKeyUp={FNum}  maxLength="16"/><br />
           <FormControl type="text"  className="for" id="Date" onKeyUp={FDate} maxLength="4"  /><br />
           <FormControl type="text" className="for" id="Nom" onKeyUp={FNom} /><br />
            

          </Col>
        </Row>
      </Grid>
    );

  }
}



export default App;
