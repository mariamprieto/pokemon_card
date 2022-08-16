import React,{ Fragment, useState,useEffect } from 'react';
import Cadastro_Card from './Components/Cadastro_Card';
import ListCard from './Components/List_cards';



function App() {


  //Conexion bd courses
  //---Get card
  const [ cards, setCards] = useState([])
  const [cardUpdated, setcardUpdated] = useState(false);


  const [ card, setCard] = useState({

    nome: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    specialA: 0,
    specialD: 0

  });

  useEffect(() => {
    const getCard = () => {
      fetch('http://localhost:9000/api/listCard')
        .then(res => res.json())
        .then(res => setCards(res))
    }
    getCard()
    setcardUpdated(false)
  }, [cardUpdated]);

  return (
    <Fragment>
      
      <div className='container'>
        <div className='row'>
        <div className='col-5'>
          <h2 style={{ textAlign: "center" }}>Adicionar Cartas</h2>
            <Cadastro_Card card={card} setCard={setCard} />
        </div>
       </div>
        <div >
          <h2 style={{ textAlign: "center" }}>Cartas Disponíveis</h2>
          <ListCard card={card} setCard={setCard} cards={cards} setcardUpdated={ setcardUpdated} />
        </div>
        
        </div>
      


    </Fragment>
  );
}

export default App;
