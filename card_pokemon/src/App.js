import React,{ Fragment } from 'react';
import Cadastro_Card from './Components/Cadastro_Card';
import ListCard from './Components/List_cards';



function App() {
  return (
    <Fragment>
      
      <div className='container'>
        <div className='row'>
        <div className='col-5'>
          <h2 style={{ textAlign: "center" }}>Adicionar Cartas</h2>
          <Cadastro_Card />
        </div>
       </div>
        <div >
          <h2 style={{ textAlign: "center" }}>Cartas Disponíveis</h2>
          <ListCard />
        </div>
        
        </div>
      


    </Fragment>
  );
}

export default App;
