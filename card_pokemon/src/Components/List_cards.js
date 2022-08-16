import React from 'react'




const ListCard = ({ cards, setcardUpdated, card, setCard }) => {

    const handleDelete = id => {

        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:9000/api/deleteCard/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setcardUpdated(true)
    }

    let { nome_card, hp, attack, defense, speed, special_attack, special_defense } = card
    const handleUpdate = id => {


        //validacion de los inputs
        hp = parseInt(hp)
        attack = parseInt(attack)
        defense = parseInt(defense)
        speed = parseInt(speed)
        special_attack = parseInt(special_attack)
        special_defense = parseInt(special_defense)
        if (nome_card === '' || hp <= 0 || attack <= 0 || defense <= 0 || speed <= 0 || special_attack <= 0 || special_defense <= 0) {
            alert('Todas as informações são obrigatórias')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(card)
        }

        fetch('http://localhost:9000/api/updateCard/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

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

        setcardUpdated(true)
    }


    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID Card</th>
                    <th>Nome do Card</th>
                    <th>hp</th>
                    <th>attack</th>
                    <th>defense</th>
                    <th>speed</th>
                    <th>special-attack</th>
                    <th>special-defense</th>
                </tr>
            </thead>
            <tbody>
                {cards.map(card => (
                    <tr key={card.id} >
                    <td>{card.id}</td>
                    <td>{card.nome_card}</td>
                    <td>{card.hp}</td>
                    <td>{card.attack}</td>
                    <td>{card.defense}</td>
                    <td>{card.speed}</td>
                    <td>{card.special_attack}</td>
                    <td>{card.special - defense}</td>
                    <td>
                        <div className='mb-3'>
                         <button className='btn btn-danger'>Delete</button>
                        </div>
                    </td>
                    <td>
                        <div className='mb-3'>
                            <button className='btn btn-dark'>Update</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListCard;
