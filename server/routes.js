const express = require('express')
const routes = express.Router()


//tabelas com coluna normal//
//cadastra uma carta normal

routes.post('/cadastrar', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO card_normal set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('card added')

        })
    })
})



//consulta uma carta_normal
routes.get('/getCard/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM card_normal WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send(rows)

        })
    })
})


//consulta lista do carta_normal
routes.get('/listCard', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM card_normal', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

//delete uma carta_normal

routes.delete('/deleteCard/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM card_normal WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send(`card with the  id ${[req.params.id]} was deleted`)

        })
    })
})

//alteração de cartas_normal

routes.put('/updateCard/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE card_normal set ? WHERE id= ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send(`card with the  id ${[req.params.id]} was updated`)

        })
    })
})


////////////////----------tabelas  com coluna JSON--------------//////////////

routes.post('/cadastro', (req, res) => {

    //name
    const { nome_card } = req.body
    //attributes
    const { hp } = req.body.attribute
    const { attack } = req.body.attribute
    const { defense } = req.body.attribute
    const { special_attack } = req.body.attribute
    const { special_defense } = req.body.attribute
    const { speed } = req.body.attribute

    
    let attribute = { hp: hp, attack: attack, defense: defense, special_attack: special_attack, special_defesnse: special_defense, speed: speed }
    
    //JSON attribute

    attribute = JSON.stringify(attribute)
      
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO card set ?', { nome_card: nome_card, attribute: attribute }, (err, rows) => {
            if (err) return res.send(err)

            res.send('cadastro added')

        })

    })
})


//consulta uma carta
routes.get('/get/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM card WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send(rows)

        })
    })
})


//consulta lista do carta
routes.get('/lista', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM card', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

//delete uma carta

routes.delete('/delete/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM card WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send(`card with the  id ${[req.params.id]} was deleted`)

        })
    })
})

//alteração de cartas

routes.put('/update/:id', (req, res) => {
    //name
    const { nome_card } = req.body
    //attributes
    const { hp } = req.body.attribute
    const { attack } = req.body.attribute
    const { defense } = req.body.attribute
    const { special_attack } = req.body.attribute
    const { special_defense } = req.body.attribute
    const { speed } = req.body.attribute

  
    let attribute = { hp: hp, attack: attack, defense: defense, special_attack: special_attack, special_defesnse: special_defense, speed: speed }
    
    //JSON attribute
    attribute = JSON.stringify(attribute)

    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE card set ? WHERE id= ?', [{ nome_card: nome_card, attribute: attribute }, req.params.id] ,(err, rows) => {
            if (err) return res.send(err)

            res.send(`card with the  id ${[req.params.id]} was updated`)

        })
    })
})










module.exports = routes