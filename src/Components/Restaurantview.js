import React from "react";
import { useParams} from "react-router-dom";
import { useState,useEffect } from 'react'
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from "react-bootstrap";
import Operaingtime from "./Operaingtime";
import Review from "./Review";
import { useDispatch ,useSelector} from 'react-redux';



function Restaurantview() {
   const params = useParams();
  //console.log(params.id);

  // const [allrestaurant, setallrestaurant] = useState([]);

  // //function to api call for datas inside json file

  // const getrestaurantdata = async () => {
  //   await fetch("/restaurants.json").then((data) => {
  //     //convert json file to js
  //     data.json().then((result) => {
  //       //store to result vrible

  //       // console.log(result);
  //       setallrestaurant(result.restaurants);
  //     });
  //   });
  // };

  //console.log(allrestaurant);
 //const restData=allrestaurant.find(item=>item.id==params.id)
 //console.log(restData);



  useEffect(() => {
   //getrestaurantdata();
  }, []);

  const result=useSelector(state=>state.restaurantreducer)
 
  const{restaurantlist}=result 
  const restData=restaurantlist.find(item=>item.id==params.id)

 console.log(restData);



  return (
    <>
    {restData?(
    <Row>
        <Col>
        <Image className='p-5 w-75 h-75' src={restData.photograph} fluid/>
        
        
        </Col>
        <Col className="mt-5">
        <h1>{restData.name}</h1>
        <h2>{restData.neighborhood}</h2>
        <h3> cuisine type:{restData.cuisine_type}</h3>
        <h4>Address:{restData.address}</h4>
        
        <Operaingtime timedata={restData.operating_hours}></Operaingtime>
        <br></br>
        <Review reviewData={restData.reviews} ></Review>  
        </Col>
    </Row>
    ):null}
      
    </>
  );
}


export default Restaurantview;
