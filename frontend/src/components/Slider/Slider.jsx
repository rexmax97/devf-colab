import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './slider.css'; 
class Slider extends Component {
  state = {
    items: [
      {id: 1, url:'https://getbootstrap.com/docs/4.0/utilities/spacing/',title: 'noticia 1', imagen:'https://www.paho.org/sites/default/files/styles/flexslider_full/public/hero/2020-03/covid-19-1190x574-2-full.jpg?h=fdc0eb87&itok=CerQCpzv'},
      {id: 2, url:'https://getbootstrap.com/docs/4.0/utilities/spacing/',title: 'noticia 1', imagen:'https://www.paho.org/sites/default/files/styles/flexslider_full/public/hero/2020-03/covid-19-1190x574-2-full.jpg?h=fdc0eb87&itok=CerQCpzv'},
      {id: 3, url:'https://getbootstrap.com/docs/4.0/utilities/spacing/',title: 'noticia 1', imagen:'https://www.paho.org/sites/default/files/styles/flexslider_full/public/hero/2020-03/covid-19-1190x574-2-full.jpg?h=fdc0eb87&itok=CerQCpzv'},
      {id: 4, url:'https://getbootstrap.com/docs/4.0/utilities/spacing/',title: 'noticia 1', imagen:'https://www.paho.org/sites/default/files/styles/flexslider_full/public/hero/2020-03/covid-19-1190x574-2-full.jpg?h=fdc0eb87&itok=CerQCpzv'},
    ]
  }
 
  render () {
    
    const { items } = this.state;
    return (
      <div>
        <h2>Noticias COVID-19 </h2>
      <Carousel enableAutoPlay autoPlaySpeed={3000} className='Slider'>   
    {items.map(item => <div key={item.id}> <a href={item.url}>{item.title}<img src={item.imagen} alt='imagen covid'/> </a></div>)}
      </Carousel>
      </div>
    )
  }
}
export default Slider


// import React from "react";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./slider.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1 },
//   { width: 768, itemsToShow: 1 },
//   { width: 1200, itemsToShow: 1 },
// ];

// function Slider() {
//   return (
//     <>
//       <h1 className="mg--30"style={{ textAlign: "center" }}>Noticias última hora COVID-19</h1>
//       <div className="Slider">
//         <Carousel breakPoints={breakPoints}>
//           <Item>One</Item>
//           <Item>Two</Item>
//           <Item>Three</Item>
//           <Item>Four</Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Slider