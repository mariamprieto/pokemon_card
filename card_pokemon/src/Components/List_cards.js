import React from 'react'




const ListCard = () => {



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
                <tr >
                    <td>ID Card</td>
                    <td>Nome do Card</td>
                    <td>hp</td>
                    <td>attack</td>
                    <td>defense</td>
                    <td>speed</td>
                    <td>special_attack</td>
                    <td>special-defense</td>
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

            </tbody>
        </table>
    );
}

export default ListCard;
