const router = require('express').Router()

//ALL GETs
router.get('/', (req, res) => {
    res.send('GET/places/index')
});

router.get('/new', (req, res) => {
    res.send('GET NEW/places/new')
});

router.get('/:id', (req, res) => {
    res.send('GET ID/places/${req.paramas.id}')
});

router.get('/:id/edit', (req, res) => {
    res.send('GET EDIT/places/${req.paramas.id}/edit')
});

router.get('*', (req, res) => {
    res.send('GET 404/*')
});

//ALL POSTs
router.post('/', (req, res) => {
    res.send('POST/places/index')
});

router.post('/:id/rant', (req, res) => {
    res.send('POST/places/index/${req.params.id}/rant')
});

//PUT
router.put('/:id/', (req, res) => {
    res.send('PUT/index/${req.params.id}')
});

//ALL DELETEs
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('Delete/index/${req.params.id}/rant${req.params.rantId')
});


module.exports = router

