import React from 'react';



const Cadastro_Card = () => {


    return (
        <form >
            <div className='mb-4'>
                <label htmlFor='nomeCard' className='form-label'>Nome do Card</label>
                <input  name='nome'  type='text' id='nomeCard' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='hpValue' className='form-label'>hp</label>
                <input  name='hp'  type='text' id='hpValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='attackValue' className='form-label'>attack</label>
                <input  name='attack'  type='text' id='attackValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='defenseValue' className='form-label'>defense</label>
                <input  name='defense'  type='number' id='defenseValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='speedValue' className='form-label'>speed</label>
                <input name='speed' type='number' id='speedValue' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='specialAttack' className='form-label'>special attack</label>
                <input name='specialA' type='number' id='specialAttack' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='specialDefense' className='form-label'>special defense</label>
                <input name='specialD' type='number' id='specialDefense' className='form-control' />
            </div>

           
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default Cadastro_Card;