import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Categories.css";
import { Link } from "react-router-dom";

// Category Images
import electronicsImg from "../components/assets/electronics.jpg";
import jewelryImg from "../components/assets/jewel.jpg";
import mensClothingImg from "../components/assets/mens clothing.jpg";
import womensClothingImg from "../components/assets/women.jpg";

// Carousel Banners
import electronicsBanner from "../components/assets/electronics-banner.jpg";
import jewelryBanner from "../components/assets/jewlery-banner.png";
import mensBanner from "../components/assets/mens-banner.jpg";
import womensBanner from "../components/assets/wn.jpg";

const Categories = () => {
  const [category, setCategory] = useState([]);

  const categoryImages = {
    "electronics": electronicsImg,
    "jewelery": jewelryImg,
    "men's clothing": mensClothingImg,
    "women's clothing": womensClothingImg
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const formatCategoryName = (name) => {
    return name.replace(/'s/g, "'s").replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="home-page-container">
      {/* Carousel Section */}
      <div className="carousel-section mb-5">
        <Carousel fade controls={true} indicators={true}>
          {/* carousel ku time 3 sec */}
          <Carousel.Item interval={3000}> 
            <img className="d-block w-100 carousel-img" src={electronicsBanner} alt="Electronics" />
            <Carousel.Caption className="carousel-caption">
              <h3>Discover the Best in Electronics</h3>
              <p>Shop the latest gadgets, devices, and accessories.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100 carousel-img" src={jewelryBanner} alt="Jewelry" />
            <Carousel.Caption className="carousel-caption">
              <h3>Elegant Jewelry Collection</h3>
              <p>Timeless pieces for every style and occasion.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100 carousel-img" src={mensBanner} alt="Men's Fashion" />
            <Carousel.Caption className="carousel-caption">
              <h3>Men's Trendy Apparel</h3>
              <p>Stylish wear for work, weekends, and more.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100 carousel-img" src={womensBanner} alt="Women's Fashion" />
            <Carousel.Caption className="carousel-caption">
              <h3>Fashion Forward for Women</h3>
              <p>Find your perfect look for any season.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Category Cards Section */}
      <div className="categories-section container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#61099a' }} id="#shop">
          Shop by Category
        </h2>
        <div className="row g-4">
          {category.map((data) => (
            <div key={data} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <Link to={data} style={{ textDecoration: "none", color: "black" }}>
              <div className="card h-100 text-center p-3 category-card">
                <div className="category-img-container">
                  <img
                    src={categoryImages[data]}
                    alt={data}
                    className="card-img-top img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{formatCategoryName(data)}</h5>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
