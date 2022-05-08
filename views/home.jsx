const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>Rrest-Rant</h1>
    <div>
      <img class="center" className="typical" src="/images/typical.jpg" alt="Breakfast"/>
      <div class='center'>
       Photo by <a href="https://unsplash.com/@nils_b?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nils Bokobza</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )
}

module.exports = home

