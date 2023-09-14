
import "./App.css"
function App() {
  return (
    <div>
      <nav>
        <h1>WatchBox</h1>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="pg0">
        <h2>The Pursuit Of Perfection</h2>
        <h4>
          in the modern era of independent watchmaking, every step forward is
          centuries in the making.
        </h4>
        <button>SHOP NOW</button>
      </div>
        <h1 className="head-s2">All Watches</h1>
        <p>
          With thousands of pre-owned luxury watches from the best brands around
          the world, we are dedicated to bringing collectors and enthusiasts an
          unrivaled selection of timepieces. Our in-house team of Swiss-trained
          watchmakers, technicians, and refinishers are highly skilled and have
          a passion for quality, authenticity, and craftsmanship—so you never
          have to worry about compromising value or provenance. Explore our
          expansive selection of authentic pre-owned watches from top brands
          like Rolex, Patek Philippe, Breitling, and Omega. Or, discover
          something new designed by an independent watchmaker—we have exactly
          what you've been searching for.
        </p>

        <div className="cards">
          <div className="c">
            <img src={require("./pg1.png")} alt="watch"/>
            <h5>PATEK PHILIPPE</h5>
            <h6>Complications, 5231G-001</h6>
            <div class="price">$129,950</div>
          </div>
          <div className="c">
            <img src={require("./pg2.png")} alt="watch" />
            <h5>PATEK PHILIPPE</h5>
            <h6>Complications, 5130R-001</h6>
            <div class="price">$36,900</div>
          </div>
          <div className="c">
            <img src={require("./pg3.png")} alt="watch" />
            <h5>AUDEMARS PIGUET</h5>
            <h6>Royal oak, 26586IP.oo.1240IP.01</h6>
            <div class="price">$219,950</div>
          </div>
        </div>
        <div className="pg9">
          <h3>Why Choose Watchbox?</h3>
          <h4>As watch enthusiasts and experts ourselves, we are committed to the integrity and innovation of the luxury watch industry-which is why we invest in our processes, services, and team.</h4>

        </div>
      </div>
  );
}

export default App;
