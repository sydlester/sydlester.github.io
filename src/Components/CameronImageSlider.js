import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Creative.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 3,
    slidesToSlide: 1
  }
};
const CameronImageSlider = () => {
    return(
        <div className='creative-slider'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                swipeable={true}
                draggable={true}
            >
                <div className='carouselItem'>
                    <img src={require("../Images/Basketball3.jpg")} alt="" style={{width: "100%"}}></img>  
                </div>
                <div className='carouselItem'>
                    <img src={require("../Images/Basketball4.jpg")} alt="" style={{width: "100%"}}></img>  
                </div>
                <div className='carouselItem'>
                <img src={require("../Images/Basketball2.jpg")} alt="" style={{width: "100%"}}></img>  
                </div>
                {/* <div className='carouselItem'>
                    item 4
                </div> */}
            </Carousel>
        </div>
    )
}
export default CameronImageSlider;