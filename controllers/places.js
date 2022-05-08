const router = require('express').Router()

// GET /places
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'The Committed Pig',
        city: 'Manasquan',
        state: 'NJ',
        cuisines: 'American',
        pic: '/images/committedpig.png'
      }, {
        name: 'Kim Maries Eat And Drink Away',
        city: 'Asbury Park',
        state: 'NJ',
        cuisines: 'American',
        pic: '/images/kimmaries.png'
      }]
      
      res.render('places/index', { places })

  })
  


module.exports = router

