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
const NZImageSlider = () => {
    return(
        <div className='creative-slider'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                // autoPlay={true}
                swipeable={true}
                draggable={true}
            >
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-8.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-3.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-1.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-2.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-10.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                {/* <div className='carouselItem'>
                    <img src={require("../Images/NZ/NZ-4.jpg")} alt="" style={{width: "100%"}}></img>
                </div> */}
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-5.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-6.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-7.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-9.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
                <div className='carouselItem-A'>
                    <img src={require("../Images/NZ/NZ-11.jpg")} alt="" style={{width: "100%"}}></img>
                </div>
            </Carousel>
        </div>
    )
}
export default NZImageSlider;