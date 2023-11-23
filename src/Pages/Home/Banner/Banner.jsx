
import { Carousel } from 'flowbite-react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'

function Component() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-10">
            <Carousel slideInterval={3000}>
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
            </Carousel>
        </div>
    );
}
export default Component;