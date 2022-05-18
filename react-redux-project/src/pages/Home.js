import React from 'react'
import { useSelector, connect } from 'react-redux';
import Ratings from '../reusableComponents/Ratings';
import Pagination from '../reusableComponents/pagination';

const Home = () => {
  // console.log(UserLogin)
  const user = useSelector((state) =>console.log(state.LoginR.user))
  console.log(user)
  return (
    <div>
      Home
      <div>
        <Ratings />
        <Pagination />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) =>{
//   return{UserLogin:state.LoginR}
// }

export default Home