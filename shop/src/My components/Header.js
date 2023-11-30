import React,{useEffect,useState} from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import  {Contact}  from '../pages/Contact';
import { Todos } from './Todos';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';
import { Items } from '../pages/Items';
import axios from 'axios';
export function Header() {
  //const [list,setlist] = useState([]);
  let item=[
    {
      name: "Beautiful Western Trendy Womens Tops - Pack of 2",
      price: 270,
      delivery: 60,
      rating: 4.1,
      reviews: 143,
      url: require("./images/i1.jpg"),
      rating_count:541,
      id:0,
      path: "/1",
    },
    {
      name: "Beautiful Shirt - Pack of 2",
      price: 570,
      delivery: 60,
      rating: 3.1,
      reviews: 143,
      url: require("./images/i3.jpg"),
      rating_count:54,
      id:1,
      path: "/2",
    }
  ]
    // useEffect(() => 
    // {
    //   const fetchProducts = async () => 
    //   {
    //     const response = await axios.get('http://localhost:3001/products');
    //     setlist(response.data); // Assuming the response data is an array of products
    //     console.log(response.data)
    //   };
    //     fetchProducts();
    // }, []);
    // useEffect(()=>{
    //   axios.get("http://localhost:3001/products")
    //   .then((resp) =>{
    //     console.log(resp.data)
    //     setlist({resp});
    //     console.log(list)
    //   })
    // },[])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ShopNexa</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about.html">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu dropdown" style={{'min-width': '600px'}}>
                  <div className="d-flex flex-row mb-3">
                    <div className="p-2">
                      <div className="card" style={{width: '12rem', 'border-width': '0px'}}>
                        <div className="card-body">
                          <h5 className="card-title">Kids</h5>
                          <a href="/for_clothes" data-toggle="tooltip" title="Some tooltip text!">clothes</a><br/>
                          <a href="/for_toys" data-toggle="tooltip" title="Some tooltip text!">Toys & Accessories</a><br/>
                          <a href="/for_baby" data-toggle="tooltip" title="Some tooltip text!"> Baby Care</a><br/>
                        </div>

                          <div className="card-body">
                            <h5 className="card-title">Beauty & Health</h5>
                            <a href="/for_face" data-toggle="tooltip" title="Some tooltip text!">Face</a><br/>
                            <a href="/for_eye" data-toggle="tooltip" title="Some tooltip text!">Eye</a><br/>
                            <a href="/for_Lips" data-toggle="tooltip" title="Some tooltip text!">Lips</a><br/>
                            <a href="/for_nails" data-toggle="tooltip" title="Some tooltip text!">Nails</a><br/>
                            <a href="/for_oral" data-toggle="tooltip" title="Some tooltip text!">Oral Care</a><br/>
                          </div>
                        
                          <div className="card-body">
                            <h5 className="card-title">Mobile </h5>
                            <a href="/mobile_phone" data-toggle="tooltip" title="Some tooltip text!">Mobile phone</a><br/>
                            <a href="/accessories" data-toggle="tooltip" title="Some tooltip text!">Accessories</a><br/>
                            <a href="/tablet" data-toggle="tooltip" title="Some tooltip text!">Tablets</a><br/>
                          </div>
                        
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="card" style={{width: '12rem', 'border-width': '0px'}}>
                        <div className="card-body">
                          <h5 className="card-title">Mens Top Wear</h5>
                          <a href="/tshirt" data-toggle="tooltip" title="Some tooltip text!">Tshirt</a><br/>
                          <a href="/shirt" data-toggle="tooltip" title="Some tooltip text!">Shirts</a><br/>
                          <a href="/all" data-toggle="tooltip" title="Some tooltip text!"> All Top Wear</a><br/>
                        </div>
                        <div className="card-body"> 
                          <h5 className="card-title">Mens Bottom Wear</h5>
                          <a href="/track" data-toggle="tooltip" title="Some tooltip text!">Track pants</a><br/>
                          <a href="/pant" data-toggle="tooltip" title="Some tooltip text!">Pants</a><br/>
                          <a href="/trouser" data-toggle="tooltip" title="Some tooltip text!"> Trousers</a><br/>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Mens FootWear</h5>
                          <a href="/Causal" data-toggle="tooltip" title="Some tooltip text!">Causal Shoes</a><br/>
                          <a href="/Sports" data-toggle="tooltip" title="Some tooltip text!">Sports Shoes</a><br/>
                          <a href="/Sandal" data-toggle="tooltip" title="Some tooltip text!"> Sandals</a><br/>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="card" style={{width: '12rem', 'border-width': '0px'}}>
                        <div className="card-body">
                          <h5 className="card-title">Women Top Wear</h5>
                          <a href="/tops" data-toggle="tooltip" title="Some tooltip text!">Tops</a><br/>
                          <a href="/dressses" data-toggle="tooltip" title="Some tooltip text!">Dresses</a><br/>
                          <a href="/jumpsuits" data-toggle="tooltip" title="Some tooltip text!"> Jumpsuits</a><br/>
                        </div>
                        <div className="card-body"> 
                          <h5 className="card-title">Women Bottom Wear</h5>
                          <a href="/jeans" data-toggle="tooltip" title="Some tooltip text!">Jeans</a><br/>
                          <a href="/jaggging" data-toggle="tooltip" title="Some tooltip text!">Jaggings</a><br/>
                          <a href="/shorts" data-toggle="tooltip" title="Some tooltip text!"> Shorts</a><br/>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">SleepWear</h5>
                          <a href="/nightsuit" data-toggle="tooltip" title="Some tooltip text!">Nightsuits</a><br/>
                          <a href="/babydolls" data-toggle="tooltip" title="Some tooltip text!">Babydolls</a><br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="./contact.js">Contact</a> */}
                <Link className="nav-link" to="../pages/Contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <p>&nbsp;</p>
            <Link className="icon-link" to="/Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16" style={{width: '2em', height: '2em'}}>
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </Link>
            <p>&nbsp;</p>
            <Link className="icon-link" to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '2em', height: '2em'}} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="*" element={<Todos item={item}/>} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view/:id" element={<Items item={item} />} />
      </Routes>
    </>
  )
}
