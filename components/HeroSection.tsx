"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImage = [
    {imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-2.svg', alt: 'bag'},
    {imgUrl: '/assets/images/hero-3.svg', alt: 'clothes'},
    {imgUrl: '/assets/images/hero-4.svg', alt: 'straightner'},
    {imgUrl: '/assets/images/hero-5.svg', alt: 'chair'},

]
const HeroSection = () => {
  return (
    <div className="hero-carousel">
        <Carousel showThumbs={false}  infiniteLoop  showArrows={false} showStatus={false}>
            {heroImage.map((image) => (
                <Image src={image.imgUrl} alt={image.alt} width={400} height={400} className="object-contain" key={image.alt}/>            ))}
        </Carousel>
        <Image 
          src="public/assets/icons/hand-drawn-arrow.svg"
          alt="arrow"
          width={175}
          height={175}
          className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
        />
    </div>
  )
}

export default HeroSection