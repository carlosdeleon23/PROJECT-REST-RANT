const router = require('express').Router()

// GET /places
router.get("/", (req, res) => {
  res.render("/places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("/places/new");
});

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }

  places.push(req.body)
  res.redirect('/places')
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

