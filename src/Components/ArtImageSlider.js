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
const ArtImageSlider = () => {
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
                    <img src={require('../Images/Art1.jpg')} alt="" style={{width: "100%"}}/>
                </div>
                <div className='carouselItem'>
                    <img src={require('../Images/Art2.jpg')} alt="" style={{width: "100%"}}/>
                </div>
                <div className='carouselItem'>
                    <img src={require('../Images/Art4.jpg')} alt="" style={{width: "100%"}}/>
                </div>
            </Carousel>
        </div>
    )
}
export default ArtImageSlider;