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
const SkiImageSlider = () => {
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
                    <img src={require("../Images/Ski/Ski-4.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem'>
                    <img src={require("../Images/Ski/Ski-2.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem'>
                    <img src={require("../Images/Ski/Ski-3.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem'>
                    <img src={require("../Images/Ski/Ski-1.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
            </Carousel>
        </div>
    )
}
export default SkiImageSlider;