const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
      <img className="error" src="/images/404.jpg" alt="no404" />
      <div className='center'>
        Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Erik Mclean</a>
      </div>
      </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404