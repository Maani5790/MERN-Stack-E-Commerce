import React, { Fragment } from 'react'
import { useContext } from 'react';
import { AppContext } from '../global/store';

const Home = () => {
const userData = useContext(AppContext);
  return (
   <Fragment>
    <div>
      child = im from {userData.country} and my age is {userData.age}
    </div>
   </Fragment>
  )
}

export default Home