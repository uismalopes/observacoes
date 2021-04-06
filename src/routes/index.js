const { Router } = require('express')
const data = require('../data')
const { v4: uuidv4 } = require('uuid')

const router = Router()

router.get('/lembretes/:id/observacoes', (req, res) => {
    res.status(200).send(data[req.params.id] || [])
})

router.post('/lembretes/:id/observacoes', (req, res) => {
    const id = uuidv4()
    const { texto } = req.body

    const observacoesDoLembrete =
    data[req.params.id] || [];
    observacoesDoLembrete.push({ id, texto });
    data[req.params.id] =
    observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
})

module.exports = router
