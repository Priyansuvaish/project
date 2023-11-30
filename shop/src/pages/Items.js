import React from 'react';
import { I1 } from './I1';
import { useParams } from 'react-router-dom';

export const Items = (props) => {
    const {id}=useParams()
  return (
    <>
      <div class="container my-4">
          <I1 item={props.item[id]}/>
      </div>  
    </>
    
  )
}
