import React, { useState } from "react";
import "./App.css";
import men_clothing_bg from "./img/men_clothing.jpg";
import { Navbar, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartCount,
  decrementCartCount,
  showItemPopup,
  hideItemPopup,
  setSelectedItem,
  toggleTypeFilter,
  toggleColorFilter
} from "./actions";

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

const CLOTHING_DATA = [
  {
    name: "Red Shirt",
    sizes: ["S", "M"],
    price: "12",
    img: "./img/stock-shirt.jpg",
    color: "red",
    type: "shirt"
  },
  {
    name: "Yellow Polo",
    sizes: ["S", "M"],
    price: "12",
    img: "./img/stock-shirt.jpg",
    color: "yellow",
    type: "polo"
  },
  {
    name: "Green Long Sleeve",
    sizes: ["S", "M", "L"],
    price: "12",
    img: "./img/stock-shirt.jpg",
    color: "green",
    type: "longSleeve"
  }
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
        <FilterControls />
        <ItemsArea />
      </section>
      <ItemPopUp />
      <ShoppingCart />
    </div>
  );
}

function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand>
        <span className="brand">
          First<span style={{ color: "red" }}>Trend</span>
        </span>
      </Navbar.Brand>
      <DropdownButton>
        {MEN_CLOTHING_CATEGORIES[1].map(category => (
          <Dropdown.Item>{category}</Dropdown.Item>
        ))}
      </DropdownButton>
      <ShoppingCartIcon />
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
  return (
    <div className="filter-controls">
      <TypeFilter />
      <ColorFilter />
      <SizeFilter />
      <PriceFilter />
    </div>
  );
}

function TypeFilter() {
  const dispatch = useDispatch();

  const typeInputHandler = event => {
    dispatch(toggleTypeFilter(event.target.name));
  };

  return (
    <div className="filter-box type-filter">
      <h4>Type:</h4>
      <div className="type-flex-box">
        <label>
          <input
            type="checkbox"
            name="shirt"
            onChange={typeInputHandler}
            defaultChecked="true"
          />
          Shirt
        </label>
        <label>
          <input
            type="checkbox"
            name="polo"
            onChange={typeInputHandler}
            defaultChecked="true"
          />
          Polo
        </label>
        <label>
          <input
            type="checkbox"
            name="longSleeve"
            onChange={typeInputHandler}
            defaultChecked="true"
          />
          Long Sleeve
        </label>
        <label>
          <input
            type="checkbox"
            name="sweater"
            onChange={typeInputHandler}
            defaultChecked="true"
          />
          Sweater
        </label>
        <label>
          <input
            type="checkbox"
            name="jacket"
            onChange={typeInputHandler}
            defaultChecked="true"
            s
          />
          Jacket
        </label>
      </div>
    </div>
  );
}

function ColorFilter() {
  const dispatch = useDispatch();
  const colorFilter = useSelector(state => state.colorFilter);

  const handleChange = (event) => {
    dispatch(toggleColorFilter(event.target.style.backgroundColor));
  };

  const red_class = colorFilter.red ? 'color-select-on' : 'color-select-off';
  const orange_class = colorFilter.orange ? 'color-select-on' : 'color-select-off';
  const yellow_class = colorFilter.yellow ? 'color-select-on-yellow' : 'color-select-off';
  const green_class = colorFilter.green ? 'color-select-on' : 'color-select-off';
  const blue_class = colorFilter.blue ? 'color-select-on' : 'color-select-off';
  const purple_class = colorFilter.purple ? 'color-select-on' : 'color-select-off';
  const pink_class = colorFilter.pink ? 'color-select-on' : 'color-select-off';


  return (
      <div className="filter-box color-filter">
        <h4>Color:</h4>
        <div className="color-select-box">
          <div className={red_class} style={{ background: "red" }} onClick={handleChange}></div>
          <div className={orange_class} style={{ background: "orange" }} onClick={handleChange}></div>
          <div className={yellow_class} style={{ background: "yellow" }} onClick={handleChange}></div>
          <div className={green_class} style={{ background: "green" }} onClick={handleChange}></div>
          <div className={blue_class} style={{ background: "blue" }} onClick={handleChange}></div>
          <div className={purple_class} style={{ background: "purple" }} onClick={handleChange}></div>
          <div className={pink_class} style={{ background: "pink" }} onClick={handleChange}></div>
        </div>
      </div>
  );
}

function SizeFilter() {
  const sizeFilter = useSelector(state => state.sizeFilter);
  
  const handleSelect = event => {
    return;
  };

  return (
    <div className="filter-box size-filter">
        <h4>Size:</h4>
        <Nav
          className="size-grid"
          variant="pills"
          activeKey="all"
          onSelect={handleSelect}
        >
          <Nav.Item>
            <Nav.Link eventKey="all">ALL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="xs">XS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="s">S</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="m">M</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="l">L</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="xl">XL</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  );
}

function PriceFilter() {
  const priceFilter = useSelector(state => state.priceFilter);

  return (
    <div className="filter-box price-filter">
        <h4>Price:</h4>
        <div>
          <PriceSlider />
        </div>
      </div>
  );
}

function ItemsArea() {
  const typeFilter = useSelector(state => state.typeFilter);
  const colorFilter = useSelector(state => state.colorFilter);
  const sizeFilter = useSelector(state => state.sizeFilter);
  const priceFilter = useSelector(state => state.priceFilter);

  const filteredItemList = CLOTHING_DATA.filter((item) => {
    const sizeAvailable = () => {
      if(sizeFilter.all)
        return true;

      for(let i = 0; i < item.sizes.length; i++) {
        if(sizeFilter[item.sizes[i]])
          return true;
      }
      return false;
    }

    const withinBudget = () => {
      return parseInt(item.price) >= priceFilter[0] && parseInt(item.price) <= priceFilter[1];
    }

    const colorCheck = () => {
      let noneSelected = true;
      for(let i in colorFilter) {
        if(colorFilter[i] === true) {
          noneSelected = false;
          break;
        }
      }
      if(noneSelected)
        return true;
      else
        return colorFilter[item.color];
    }

    return   (typeFilter[item.type] 
          && colorCheck()
          && sizeAvailable()
          && withinBudget());
  });

  return (
    <div className="items-area">
          {filteredItemList.map(item => {
            return (
              <ShopItem
                name={item.name}
                img={item.img}
                sizes={item.sizes}
                price={item.price}
              />
            );
          })}
    </div>
  );
}

function ShopItem(props) {
  const dispatch = useDispatch();

  const showPopup = () => {
    dispatch(
      setSelectedItem({
        name: props.name,
        img: props.img,
        price: props.price,
        sizes: props.sizes
      })
    );
    dispatch(showItemPopup());
  };

  return (
    <div className="shop-item" onClick={showPopup}>
      <div className="overlay"></div>
      <img src={require(`${props.img}`)} alt="" className="item-image" />
      <h4>{props.name}</h4>
      <span className="item-price">${props.price}</span>
      <div className="item-sizes">
        {props.sizes.map(size => (
          <div className="size-tag">{size}</div>
        ))}
      </div>
    </div>
  );
}

function PriceSlider() {
  const min = 10;
  const max = 50;
  const [[curMin, curMax], setValue] = useState([min, max]);

  const trackStyle = [{ backgroundColor: "blue" }];
  const railStyle = { backgroundColor: "white" };

  return (
    <div className="price-slider">
      <span>
        <b>
          ${curMin} ~ ${curMax}
        </b>
      </span>
      <Slider.Range
        min={min}
        max={max}
        value={[curMin, curMax]}
        allowCross={false}
        onChange={value => setValue(value)}
        trackStyle={trackStyle}
        railStyle={railStyle}
      />
    </div>
  );
}

function ShoppingCartIcon() {
  const counter = useSelector(state => state.cartCount);

  return (
    <div className="shopping-cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span>{counter}</span>
    </div>
  );
}

function ItemPopUp() {
  const dispatch = useDispatch();
  const itemPopupShowing = useSelector(state => state.itemPopupShowing);
  const visibility = itemPopupShowing ? "visible" : "hidden";

  const hidePopup = () => {
    dispatch(hideItemPopup());
  };

  return (
    <div className="item-popup" style={{ visibility: visibility }}>
      <i className="fa fa-times item-popup-x" onClick={hidePopup}></i>
      <div className="item-popup-title-bar">
        <div className="item-popup-name">Red Shirt</div>
        <div className="item-popup-price">$12</div>
      </div>
      <div className="item-popup-item-area">
        <img
          src={require("./img/stock-shirt.jpg")}
          alt=""
          className="item-popup-img"
        />
        <div className="item-popup-purchase">
          <div className="size-select">
            <span>XS</span>
            <input type="number" min="0" max="50" placeholder="0"></input>
          </div>
          <div className="size-select">
            <span>S</span>
            <input type="number" min="0" max="50" placeholder="0"></input>
          </div>
          <div className="size-select">
            <span>M</span>
            <input type="number" min="0" max="50" placeholder="0"></input>
          </div>
          <div className="size-select">
            <span>XL</span>
            <input type="number" min="0" max="50" placeholder="0"></input>
          </div>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <div className="cart-title">Cart</div>
      <div className="cart-item-list">
        <div className="cart-item">
          <i className="fa fa-times"></i>
          <img src={require("./img/stock-shirt.jpg")} alt=""></img>
          <span>Red Shirt</span>
          <div className="size-tag">M</div>
          <input type="number" min="0" max="50"></input>
        </div>
      </div>
      <div className="check-out">
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default App;
