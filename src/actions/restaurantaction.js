import axios from "axios";
import {R_FAIL, R_SUCCESS} from '../constants/restaurantconstants'

export const RestaurantListAction=()=>async(dispatch)=>{

    try{
    const result=await axios.get('/restaurants.json')
    dispatch({
        type:R_SUCCESS,
        payload:result.data.restaurants
    })
}catch(error){
  dispatch({
    type:R_FAIL,
    error:error
  })
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































}
}