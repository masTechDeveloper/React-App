import React from 'react';

function Navbar(props) {
  return (
    <div>
      <h1 className='text-danger'>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
    </div>
  );
}

export default Navbar;
