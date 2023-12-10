import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstImage from '../images/firstImage.jpg';
import secondImage from '../images/image2.jpg';
import thirdImage from '../images/astronautImage.png';
import { HashLink as Link } from 'react-router-hash-link';
import sprite from '../images/sprite/sprite.svg';

export function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'custom-dots',
  };
  return (
    <section className="hero-section">
      <h1 className="hero-header">
        The space is waiting for
        <span className="hero-header-span">YOU</span>
      </h1>
      <Link className="hero-text" to={'#popular-tours'}>
        Explore tours
        <svg className="arrow-down">
          <use href={`${sprite}#arrowDown`} />
        </svg>
      </Link>
      <Slider {...settings} className="custom-slider">
        <div>
          <img src={firstImage} alt="first slider" className="photo" />
        </div>
        <div>
          <img src={secondImage} alt="second slider" className="photo" />
        </div>
        <div>
          <img src={thirdImage} alt="third slider" className="photo" />
        </div>
      </Slider>
    </section>
  );
}
