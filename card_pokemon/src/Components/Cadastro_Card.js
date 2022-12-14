import React from 'react';
import Swal from "sweetalert2";


const Cadastro_Card = ({card, setCard}) => {


    const changeHandler = e => {
        setCard({
            ...card,
            [e.target.name]: e.target.value
        })

    }

    let { nome_card, hp,attack,defense, speed, special_attack, special_defense } = card

    const onSubmit = () => {
        //validacion de los inputs
        hp = parseInt(hp)
        attack = parseInt(attack)
        defense = parseInt(defense)
        speed = parseInt(speed)
        special_attack = parseInt(special_attack)
        special_defense = parseInt(special_defense)
        if (nome_card=== '' || hp <= 0 || attack <= 0 || defense <= 0 || speed <= 0 || special_attack <= 0 || special_defense <= 0 ) {
            alert('Todas as informações são obrigatórias')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(card)
        }

        fetch('http://localhost:9000/api/cadastrar', requestInit)
            .then(res => res.text())
            .then((res) => {

                Swal.fire(
                    'adicionado!',
                    'O curso  foi adicionado com sucesso!',
                    'success'
                )
            })




        //reiniciar el state
        setCard({
            nome_card: '',
            hp: 0,
            attack: 0,
            defense: 0,
            special_attack: 0,
            special_defense: 0,
            speed: 0

        })

    }

    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeCard' className='form-label'>Nome do Carta</label>
                <input value={nome_card} name='nome_card' onChange={changeHandler} type='text' id='nomeCard' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='hpValue' className='form-label'>hp</label>
                <input value={hp} name='hp' onChange={changeHandler} type='number' id='hpValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='attackValue' className='form-label'>attack</label>
                <input value={attack} name='attack' onChange={changeHandler} type='number' id='attackValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='defenseValue' className='form-label'>defense</label>
                <input value={defense} name='defense' onChange={changeHandler} type='number' id='defenseValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='speedValue' className='form-label'>speed</label>
                <input value={speed} name='speed' onChange={changeHandler} type='number' id='speedValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='specialAttack' className='form-label'>special attack</label>
                <input value={special_attack} name='special_attack' onChange={changeHandler} type='number' id='specialAttack' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='specialDefense' className='form-label'>special defense</label>
                <input value={special_defense} name='special_defense' onChange={changeHandler} type='number' id='specialDefense' className='form-control' />
            </div>

           
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default Cadastro_Card;