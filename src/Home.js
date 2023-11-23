import background from './sushi.png';


const Home = ({show}) => {
  
    return(
        <div className='home-container'>
             <img className={show ? "visible-img"  : "hidden"} src={background} alt="background"/>
             
        </div>
    )
}
export default Home;