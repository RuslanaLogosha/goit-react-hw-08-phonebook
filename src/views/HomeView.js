import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    maxWidth: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HomeView = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      <div className={styles.container}>
        <img
          src={
            'https://pixabay.com/get/g276bc87b570842c9bf67f4a2d891819fad2aae99cff0973364eb0448734e4fdbc1b55a3bfe4589900c5bf7b8111fd225b61bb2feffb50db2b1bae161b1dc71d5_1280.jpg'
          }
          alt={'black old phone'}
        />
      </div>
      <div>
        <img
          src={
            'https://pixabay.com/get/gb61596a4e35a333856b923b9fcf954fe6808aaa05a8a3bb37afd2594f4917b789883faf09ae325c6faeb24bc7386392df7a3f42209eef73192a18f7cf00abf7f_1280.jpg'
          }
          alt={'old phone'}
        />
      </div>
      <div>
        <img
          src={
            'https://pixabay.com/get/g9c56a7b14fc19a126b624189f44b41186da1741329488d6a73c4f2f9ffab61800948ef9dc46726327a8af4c86be0c9005697c7ac3e756eb63e1294c584e9d7c0_1280.jpg'
          }
          alt={'old phone'}
        />
      </div>
    </Slider>
  );
};

export default HomeView;
