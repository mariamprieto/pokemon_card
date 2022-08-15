const express = require('express')
const routes = express.Router()

//cadastra uma carta
routes.post('/cadastro', (req, res) => {

    //name
    const { nome_card } = req.body
    //attributes
    const { hp } = req.body
    const { attack } = req.body
    const { defense } = req.body
    const { special_attack } = req.body
    const { special_defense } = req.body
    const { speed } = req.body

    let attribute = { "hp": hp, "attack": attack, "defense": defense, "special_attack": special_attack, "special_defesnse": special_defense, "speed": speed }

    //JSON attribute

    attributo = JSON.stringify(attribute)

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO card_combinada set ?', { nome_card: nome_card, attribute: attribute }, (err, rows) => {
            if (err) return res.send(err)

            res.send('cadastro added')

        })

    })
})

//cadastra uma carta
routes.post('/cadastro2', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO card_combinada set ? ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('cadastro added')

        })
    })
})
//consulta uma carta
routes.get('/get/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM carta_combinada WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('carta delete')

        })
    })
})


//consulta lista do carta
routes.get('/lista', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM carta_combinada', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

//delete uma carta

routes.delete('/delete/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM carta_combinada WHERE id= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('carta delete')

        })
    })
})













module.exports = routes