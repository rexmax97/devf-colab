import React from 'react'
import {
  Message,
  PriceList,
  Form,
} from '../../components/index.js'

const prices = [
  { item: 'Shampoo', price: 78 },
  { item: 'Roast beef', price: 269 },
  { item: 'Playstation 5', price: 12000 },
  { item: 'Kawamon', price: 34 },
  { item: 'Shoes', price: 1599 },
]

const cardStyle = {
  width: '18rem'
}

const Example = () => {
  return (
    <React.Fragment>
      <header>
        <h1> Hola a todos al el app</h1>
      </header>
      <main>
        <div>
          <Message msg={ 'Hasta la vista, baby.' } />
          <Message msg={ 'Nos vemos en el infierno, Jhonny' } />
          <Message msg={ 'Papaya' } />
        </div>
        <div>
          <PriceList prices={prices} />
        </div>
        <div>
          <Form/>
        </div>
        <div>
          <div className="card" style={cardStyle} >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE9Z_KCh7vVfjFcI9rSjvHYCYuEpWNR9NwQ&usqp=CAU"
              className="card-img-top"
              alt="perro"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="btn btn-primary">Go somewhere</div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Example;
