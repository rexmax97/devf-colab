import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './modulos.css'; 

class Modulos extends Component {
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
      
      <Carousel className='modulos' itemsToScroll={2} itemsToShow={2}>
        
    {/* {items.map(item => <div key={item.id}> <a href={item.url}>{item.title}<img src={item.imagen} alt='imagen covid'/> </a></div>)} */}
    {items.map(item => <div key={item.id}>
            <div className="card">
            <img className="card-img-top" src={item.imagen} alt="Car"></img>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href={item.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
          </div> 
          )}
      </Carousel>
    )
  }
}
export default Modulos