import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://hanpuremall.co.kr/plugin/Jssor.Slider.FullPack/img/landscape/01.jpg",
    alt: "Image 1",
  },
  {
    src: "https://hanpuremall.co.kr/plugin/Jssor.Slider.FullPack/img/landscape/03.jpg",
    alt: "Image 2",
  },
  {
    src: "https://hanpuremall.co.kr/plugin/Jssor.Slider.FullPack/img/landscape/04.jpg",
    alt: "Image 3",
  },
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image.src} alt={image.alt} style={{ width: "100%" }} />
            {/* <Typography variant="h6" textAlign="center" mt={2}>
              {image.alt}
            </Typography> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageSlider;
