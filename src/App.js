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
  toggleColorFilter,
  changeSizeFilter,
  changePriceFilter,
  addCartItem,
  showCart,
  hideCart,
  updateCartItem,
  removeCartItem
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
  },
  {
    name: "Red Shirt",
    sizes: ["S", "M"],
    price: "12",
    img: "./img/stock-shirt.jpg",
    color: "red",
    type: "shirt"
  }
];

function App() {
  const itemPopupShowing = useSelector(state => state.itemPopupShowing);
  const cartShowing = useSelector(state => state.cartShowing);
  const overlayShowing = itemPopupShowing || cartShowing;

  return (
    <div className="app">
      <div className="content-wrapper">
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
      {overlayShowing && <div className="pop-up-overlay" />}
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
  const typeFilter = useSelector(state => state.typeFilter);

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
            checked={typeFilter.shirt}
          />
          Shirt
        </label>
        <label>
          <input
            type="checkbox"
            name="polo"
            onChange={typeInputHandler}
            checked={typeFilter.polo}
          />
          Polo
        </label>
        <label>
          <input
            type="checkbox"
            name="longSleeve"
            onChange={typeInputHandler}
            checked={typeFilter.longSleeve}
          />
          Long Sleeve
        </label>
        <label>
          <input
            type="checkbox"
            name="sweater"
            onChange={typeInputHandler}
            checked={typeFilter.sweater}
          />
          Sweater
        </label>
        <label>
          <input
            type="checkbox"
            name="jacket"
            onChange={typeInputHandler}
            checked={typeFilter.jacket}
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
  const dispatch = useDispatch();
  
  const handleSelect = (key) => {
    dispatch(changeSizeFilter(key));
  };

  return (
    <div className="filter-box size-filter">
        <h4>Size:</h4>
        <Nav
          className="size-grid"
          variant="pills"
          onSelect={handleSelect}
          defaultActiveKey="all"
        >
          <Nav.Item>
            <Nav.Link eventKey="all">ALL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="XS">XS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="S">S</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="M">M</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="L">L</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="XL">XL</Nav.Link>
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
        <div className="price-slider-container">
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
    const typeCheck = () => {
      let noneSelected = true;
      for(const type in typeFilter) {
        if(typeFilter[type] === true) {
          noneSelected = false;
          break;
        }
      }
      if(noneSelected)
        return true;
      else
        return typeFilter[item.type];
    }

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

    return   (typeCheck()
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
          {filteredItemList.length === 0  && 
            <span className="no-matching-items">No matching items.</span>}
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
  const [curMin, curMax] = useSelector(state => state.priceFilter);
  const dispatch = useDispatch();

  const trackStyle = [{ backgroundColor: "blue" }];
  const railStyle = { backgroundColor: "white" };

  const onChange = (value) => {
    dispatch(changePriceFilter(value));
  }

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
        onChange={onChange}
        trackStyle={trackStyle}
        railStyle={railStyle}
      />
    </div>
  );
}

function ShoppingCartIcon() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let counter = 0;

  cart.forEach(item => {
    counter += item.quantity;
  });

  return (
    <div className="shopping-cart-icon" onClick={() => dispatch(showCart())}>
      <i className="fas fa-shopping-cart"></i>
      <span>{counter}</span>
    </div>
  );
}

function ItemPopUp() {
  const [XS, setXS] = useState(0);
  const [S, setS] = useState(0);
  const [M, setM] = useState(0);
  const [L, setL] = useState(0);
  const [XL, setXL] = useState(0);

  const dispatch = useDispatch();
  const itemPopupShowing = useSelector(state => state.itemPopupShowing) ? 
                          "visible" : "hidden";
  const allItemsZero = !(XS || S || M || L || XL);

  const selectedItem = useSelector(state => state.selectedItem);
  const xsDisabled = !selectedItem.sizes.includes("XS");
  const sDisabled = !selectedItem.sizes.includes("S");
  const mDisabled = !selectedItem.sizes.includes("M");
  const lDisabled = !selectedItem.sizes.includes("L");
  const xlDisabled = !selectedItem.sizes.includes("XL");

  const hidePopup = () => {
    dispatch(hideItemPopup());
    setXS(0);
    setS(0);
    setM(0);
    setL(0);
    setXL(0);
  };

  const addToCart = () => {
    const size_arr = [["XS", XS], ["S", S], ["M", M], ["L", L], ["XL", XL]];
    for(const size of size_arr) {
      console.log(size[0] + " " + size[1]);
      if(size[1] > 0) {
        dispatch(addCartItem({
          name: selectedItem.name,
          price: selectedItem.price,
          img: selectedItem.img,
          size: size[0],
          quantity: size[1]
        }));
      }
    }
    hidePopup();
  };

  return (
    <div className="item-popup" style={{ visibility: itemPopupShowing }}>
      <i className="fa fa-times item-popup-x" onClick={hidePopup}></i>
      <div className="item-popup-title-bar">
        <div className="item-popup-name">{selectedItem.name}</div>
        <div className="item-popup-price">${selectedItem.price}</div>
      </div>
      <div className="item-popup-item-area">
        <img
          src={require("" + selectedItem.img)}
          alt=""
          className="item-popup-img"
        />
        <div className="item-popup-purchase">
          <div className="size-select">
            <span>XS</span>
              <input type="number" 
                     min="0" 
                     max="50" 
                     placeholder="0"
                     onChange={(e) => setXS(parseInt(e.target.value))}
                     value={XS}
                     disabled={xsDisabled} />
          </div>
          <div className="size-select">
            <span>S</span>
              <input type="number" 
                     min="0" 
                     max="50" 
                     placeholder="0" 
                     onChange={(e) => setS(parseInt(e.target.value))}
                     value={S}
                     disabled={sDisabled} />
          </div>
          <div className="size-select">
            <span>M</span>
              <input type="number" 
                     min="0" 
                     max="50" 
                     placeholder="0" 
                     onChange={(e) => setM(parseInt(e.target.value))}
                     value={M}
                     disabled={mDisabled} />
          </div>
          <div className="size-select">
            <span>L</span>
              <input type="number" 
                     min="0" 
                     max="50" 
                     placeholder="0" 
                     onChange={(e) => setL(parseInt(e.target.value))}
                     value={L}
                     disabled={lDisabled} />
          </div>
          <div className="size-select">
            <span>XL</span>
              <input type="number" 
                     min="0" 
                     max="50" 
                     placeholder="0" 
                     onChange={(e) => setXL(parseInt(e.target.value))}
                     value={XL}
                     disabled={xlDisabled} />
          </div>
          <button className="add-to-cart" onClick={addToCart} disabled={allItemsZero}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartShowing = useSelector(state => state.cartShowing) ?
                      "visible" : "hidden";
  const checkoutButtonDisabled = cart.length > 0 ? false : true;
  let totalPrice = 0;
  
  for(const item of cart) {
    totalPrice += item.price * item.quantity;
  }

  const closeCart = () => {
    dispatch(hideCart());
  }

  return (
    <div className="shopping-cart" style={{ visibility: cartShowing }}>
      <i className="fa fa-times item-popup-x" onClick={closeCart}></i>
      <div className="cart-title">
        <span>Cart</span>
        {cart.length > 0 && <span>Total: ${totalPrice}</span>}
      </div>
      <div className="cart-item-list">
        {cart.length === 0 && <span className="empty-cart-span">Cart is empty.</span>}
        {cart.map(item => {
          return (
            <div className="cart-item">
              <i className="fa fa-times"
                 onClick={() => {dispatch(removeCartItem(item))}}>
              </i>
              <img src={require("" + item.img)} alt=""></img>
              <span>{item.name}</span>
              <div className="size-tag">{item.size}</div>
              <span>${item.price * item.quantity}</span>
              <input type="number" 
                     min="1" 
                     max="50" 
                     value={item.quantity}
                     onChange={(event) => {dispatch(updateCartItem({
                       name: item.name,
                       size: item.size,
                       price: item.price,
                       img: item.img,
                       quantity: parseInt(event.target.value)
                     }))}}>
              </input>
            </div>
          );
        })}
      </div>
      <div className="check-out">
        <button className="check-out-button" disabled={checkoutButtonDisabled}>Check Out</button>
      </div>
    </div>
  );
}

export default App;
