import React from 'react';
//import { Link } from 'react-router-dom';
import {Route, Link, Routes} from 'react-router-dom';
import { Items } from './Items';
export const Products = ({item}) => {
  return (
    <>
        <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">{item.name}</strong>
                <h3 className="mb-0">₹{item.price}</h3>
                <p>Delivery charges ₹{item.delivery} </p>
                <p>
                <button type="button" className="btn btn-success btn-sm" style={{'--bs-btn-border-radius': '1rem', width: '3rem'}}>{item.rating}</button>
                {item.reviews}reviews </p>
                <Link  to={'/view/' + item.id} >
                    View Details
                    {/* <svg className="bi"><use xlink:href="#chevron-right"></use></svg> */}
                </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img src={item.url} alt=""/>
                </div>
            </div>
        </div>
        <Routes>
          <Route path="/view" element={<Items item={item} />} />
      </Routes>
    </>
  )
}
