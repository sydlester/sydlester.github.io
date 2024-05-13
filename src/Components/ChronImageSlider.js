import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Creative.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 2,
    slidesToSlide: 1
  }
};
const ChronImageSlider = () => {
    return(
        <div className='creative-slider'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                autoPlay={false}
                swipeable={true}
                draggable={true}
            >
                <div className='carouselItem'>
                    <img src={require('../Images/20240212_MBBvsWF_SydneyLester-1.jpg')} alt="" style={{width: "100%"}}/>
                </div>
                <div className='carouselItem'>
                    <img src={require('../Images/20230228_MBBvsNCState_SydneyLester-11.jpg')} alt="" style={{width: "100%"}}/>
                </div>
                <div className='carouselItem'>
                    <img src={require('../Images/20240207_MBBvsND_SydneyLester-14.jpg')} alt="" style={{width: "100%"}}/>
                </div>
                <div className='carouselItem'>
                    <img src={require('../Images/20221231_MBBvsFSU_SydneyLester-10.jpg')} alt="" style={{width: "100%"}}/>
                </div>
            </Carousel>
        </div>
    )
}
export default ChronImageSlider;