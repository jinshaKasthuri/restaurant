import React, { useState,useEffect } from 'react'
import Restaurantcard from './Restaurantcard'
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restaurantaction';
import { useDispatch ,useSelector} from 'react-redux';
// import { restaurantListReducer } from '../reducers/restaurantreducer';


function Restaurantlist() {
   // const [allrestaurant,setallrestaurant]=useState([])


 //function to api call for datas inside json file

    //   const getrestaurantdata=async ()=> {
    //    await fetch('/restaurants.json')
    //    .then(data=>  {   //convert json file to js
    //     data.json()
    //    .then(result =>{    //store to result vrible

    //    // console.log(result);
    //    setallrestaurant(result.restaurants)

    //    })
    //   })
    // }

    //console.log(allrestaurant);
  const dispatch=useDispatch()  

  const result=useSelector(state=>state.restaurantreducer)
 
 const{restaurantlist}=result 
 //console.log(RestaurantListAction);


 useEffect(()=>{
         //  getrestaurantdata()

         dispatch(RestaurantListAction())

          //  getrestaurantdata()
       },[])

  return (
   
    <Row>
      {
        // allrestaurant.map(item=>(
          restaurantlist.map(item=>(
          <Restaurantcard data={item}/>  // data using to restaurnt card
        ))
      }
      
    </Row>
  )
}

export default Restaurantlist
