import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurantlist from './Components/Restaurantlist';
import Restaurantview from './Components/Restaurantview';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'; 




function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
      
    <Routes>
      {/* //path setting for restarnt list */}
        <Route path='/' element={<Restaurantlist/>}/>

        {/* path setting for restaurnt view */}

        <Route path='/view-restaurant/:id' element={<Restaurantview/>}/>

       
        {/* <Restaurantview/>  //redirect */}

    </Routes>


       <Footer/>
       </Router>
    
    </div>
  );
}

export default App;
