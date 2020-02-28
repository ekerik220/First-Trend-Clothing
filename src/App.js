import React from "react";
import "./App.css";
import men_clothing_bg from "./img/men_clothing.jpg";
import { Navbar, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import Slider from '@material-ui/core/Slider';

const MEN_CLOTHING_CATEGORIES = [
  "Men's Wear",
  [
    "Accessories",
    "Bags",
    "Belts",
    "Hats",
    "Hoodies",
    "Jackets",
    "Jeans",
    "Jumpers & Cardigans",
    "Leather",
    "Long Sleeve Shirts",
    "Lounge wear",
    "Pyjamas",
    "Polo Shirts",
    "Shoes",
    "Sports Clothing",
    "Suits",
    "T-Shirts",
    "Watches"
  ]
];

function App() {
  return (
    <div className="app">
      <Navigation />
      <CategoryDisplay
        img={men_clothing_bg}
        categories={MEN_CLOTHING_CATEGORIES}
      />
      <section className="shopping-area">

      </section>
    </div>
  );
}

function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand>
        <span className="brand">First<span style={{ color: "red" }}>Trend</span></span>
      </Navbar.Brand>
        <DropdownButton>
            {MEN_CLOTHING_CATEGORIES[1].map(category => 
            <Dropdown.Item>{category}</Dropdown.Item>)}
        </DropdownButton>
    </Navbar>
  );
}

function CategoryDisplay(props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.img})`
      }}
      className="category-display"
    >
      <h2>{props.categories[0]}</h2>
      <div className="category-area">
        <ul>
          {props.categories[1].map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FilterControls() {
  const handleSelect = eventKey => {

  }

  return (
    <div className="filter-controls">
      <div className="type-filter">
        <h4>Type:</h4>
        <div className="type-flex-box">
          <label><input type="checkbox" name="" id="" />Temp</label>
          <label><input type="checkbox" name="" id="" />Temp</label>
          <label><input type="checkbox" name="" id="" />Temp</label>
          <label><input type="checkbox" name="" id="" />Temp</label>
          <label><input type="checkbox" name="" id="" />Temp</label>
        </div>
      </div>
      <div className="color-filter">
        <h4>Color:</h4>
        <div className="color-flex-box">
          <div className="color-select"></div>
          <div className="color-select"></div>
          <div className="color-select"></div>
          <div className="color-select"></div>
          <div className="color-select"></div>
          <div className="color-select"></div>
          <div className="color-select"></div>
        </div>
      </div>
      <div className="size-filter">
        <h4>Size:</h4>
        <div className="size-flex-box">
          <Nav variant="pills" activeKey="all" onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="all">
                ALL
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="xs">
                XS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="s">
                S
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="m">
                M
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="l">
                L
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="xl">
                XL
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="price-filter">
        <h4>Price:</h4>
        <div>
          <Slider
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

function ShopItem() {

}

export default App;
