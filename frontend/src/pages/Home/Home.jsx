import Slider from '../../components/Slider/Slider.jsx'
import Modulos from '../../components/Modulos/Modulos.jsx'
import Para from '../../components/Parallax/Parallax.jsx'




const Home = () => {
    return (
      <div>
        <h1 className="center m-5">Home</h1>

        <Slider/>
        <h2 className="">Blog:</h2>
        <Modulos/>
        <Para/>
        <h2 className="">Estadística:</h2>
        <Modulos/>

        
      </div>
    )
  }
  
  export default Home