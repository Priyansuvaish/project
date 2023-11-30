import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './card_context';
import { Comment } from './Comment';

export const I1 = ({item}) => {
    const {addToCart} = useCartContext()
    const options=[
        {name: "S" ,value: 1},
        {name: "M",value: 2},
        {name: "L",value: 3},
        {name: "XL",value: 4},
    ]
    const [value,setValue] = useState(options[0].name);
    
    function handleSelect(event){
        setValue(event.target.value)
    }
  return (
    <>
        <div className="container text-left" style={{'max-width': '1400px'}}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <img
                        src={item.url}
                        style={{height: 'auto', width: '100%'}}
                        alt=""
                    />
                </div>
                <div className="col-6">
                    <h2>{item.name}</h2>
                    <h3 className="mb-0">₹{item.price}</h3>
                    <br/>
                    <p>Delivery ₹{item.delivery}</p>
                    <p>
                        <button
                        type="button"
                        className="btn btn-success btn-sm"
                        style={{'--bs-btn-border-radius': '1rem', width: '3rem'}}
                        >
                        {item.rating}
                        </button>
                        {item.rating_count} Ratings,{item.reviews} Reviews
                    </p>
                    <p>Select Size</p>
                    <select className="form-select" aria-label="Default select example" style={{width:'15%'}} onChange={handleSelect}>
                    {
                            options.map(o =>(
                                <option value={o.name}>{o.name}</option>
                            ))
                        }
                    </select><br/>
                    <Link to="/cart" onClick={()=>addToCart(item,value)}>
                        <button
                        type="button"
                        className="btn btn-success"
                        style={{'--bs-btn-border-radius': '1rem', width: '100%'}}
                        >
                            Add to Cart
                        </button>
                    </Link>
                    <p>&nbsp;</p>
                    <h4><b>Product Description </b></h4><br/>
                    <p>
                        Product Name : Beautiful Western Trendy Womens Tops - Pack of 2 <br/>

                        Fabr/ic : Polyester <br/>
                        <br/>

                        Sleeve Length : Short Sleeves <br/>
                        <br/>

                        Pattern : Solid <br/>
                        <br/>

                        Net Quantity (N) : 2 <br/>
                        <br/>

                        Sizes : <br/>
                        <br/>

                        S (Bust Size : 32 in, Length Size: 18 in) <br/>
                        <br/>

                        M (Bust Size : 34 in, Length Size: 18 in) <br/>
                        <br/>

                        L (Bust Size : 36 in, Length Size: 19 in) <br/>
                        <br/>

                        XL (Bust Size : 38 in, Length Size: 19 in) <br/>
                        <br/>

                        Wine & Maroon The Top adopts the classNameic round neck, solid color
                        design, simple and generous, suitable for various occasions. The
                        beautiful and perfectly modifies the shape of your arm and makes you
                        look more lovely. You can easily tuck the bottom of the top into
                        your pants, which will make you look more casual and slim. This is
                        definitely a must-have lady's top in summer. <br/><br/>
                        Women Tops | Tops | Women Top | Bestseller Tops | Crop tops | Crop
                        Top | Solid Ribbed Tops | Neck top | styles tops | Pink tops | Black
                        tops | Yellow Tops | Red Tops <br/>
                        <br/>
                        Country of Origin : India
                    </p>
                    <h4><b>Product Ratings & Reviews </b></h4><br/>

                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col-auto d-none d-lg-block" style={{width: '8rem'}}>
                            <h1 style={{'margin-top': '4rem', 'text-align': 'center', color: 'rgb(0, 75, 0)'}}>4.1<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(0, 75, 0)" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg></h1>
                            <p style={{'text-align': 'center'}}>591 Ratings,<br/>142 Reviews</p>
                        </div>
                        <div className="col p-4 d-flex flex-column position-static">
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Success example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{'--bs-progress-height':'0.7rem'}}
                            >
                                <div className="progress-bar bg-success" style={{width: '85%' }}></div>
                            </div> <p>&nbsp;</p>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Info example"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                style={{'--bs-progress-height':'0.7rem'}}
                                aria-valuemax="100"
                            >
                                <div className="progress-bar bg-success" style={{width: '50%'}}></div>
                            </div> <p>&nbsp;</p>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Warning example"
                                style={{'--bs-progress-height':'0.7rem'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div className="progress-bar bg-warning " style={{width: '25%'}}></div>
                            </div> <p>&nbsp;</p>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Danger example"
                                style={{'--bs-progress-height':'0.7rem'}}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div className="progress-bar bg-danger" style={{width: '10%'}}></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="dropdown">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            Add comment
                        </button>
                        <form className="dropdown-menu p-4">
                            <div className="mb-3">
                            <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
                            <input type="number" className="form-control" id="exampleDropdownFormEmail2" placeholder="rating"/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
                            </div>
                            <div className="mb-3">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                                <label className="form-check-label" for="dropdownCheck2">
                                Remember me
                                </label>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div> */}
                    <Comment/>
                </div>
            </div>
        </div>
    </>
  )
}
