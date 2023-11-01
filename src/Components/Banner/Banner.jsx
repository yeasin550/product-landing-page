import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="text-center h-[300px]">
      <Carousel>
        <div className="">
          <img src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?auto=format&fit=crop&q=80&w=1474&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1594008671689-8d8b9480cae8?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1633793566063-52465a148cc7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
