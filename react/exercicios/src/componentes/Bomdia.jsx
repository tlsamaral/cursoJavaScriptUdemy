import React from "react";
//import React, { Fragment } from "react";

const Bomdia = props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>
    
export default Bomdia

/* Outra maneira, utilizando array
Obs: devemos usar keys!
export default props => [
        <h1 key="h1">Bom dia {props.nome}!</h1>,
        <h2 key="h2">Até breve!</h2>
    ]
*/

/* Neste caso temos o conteudo envolvido por uma tag que não será renderizada
export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>
*/   