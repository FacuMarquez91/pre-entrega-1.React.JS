import React from "react";
import "./App.css";



// componentes  

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardProducts from "./components/CardProducts/CardProducts"

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />

        
        
        <div className="content">
          <NavBar />
          <div className="divSpan">
          <span className="spanCards"> PRODUCTOS</span>
            </div>
          <div className="cardProducts">
            <CardProducts img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRGKIyjm7OiliV6PAd1vkFh7VnZJvC7VRIA&usqp=CAU"
              name="Zapatillas adidas"
              description="Zapatillas running adidas Duramo 10 SL 2.0 Mujer"
              precio="$60.000" />

            <CardProducts img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJ43t3gPAP8G7a_rws3z6njYDs0hpuX52zw&usqp=CAU"
              name="Zapatillas adidas"
              description="Zapatillas running adidas LC Color Negro Homnbre "
              precio="$46.000" />

            <CardProducts img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhudteBsudw1NGPoQmyIMq1xLtWB2It_q6Q&usqp=CAU"
              name="Zapatillas adidas"
              description="Zapatillas running adidas Talla 36, Sprinter"
              precio="$63.000" />

            <CardProducts img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFjLCqfTUCXasjBHexU-4wy4S_C7G3eZmzQ&usqp=CAU"
              name="Zapatillas adidas"
              description="Zapatillas running adidas Response Super 3.0 Gris"
              precio="$72.000" />

          </div>


        </div>
      </div>


    );
  }
}

export default App;