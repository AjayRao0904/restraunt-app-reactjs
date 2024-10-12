import React from "react";
import "./Home.css";

function Home() {
    return <div className="body">
        <section >
            <p className="p1">Authentic Italian</p>
            <p className="p2">Experience the flavours and freshness of Italy with every bite in a warm and friendly environment</p>
            <div className="section1">
                <img src="./assets/restaurant_home_section1.webp" alt="Italian restaurant" />
            </div>
        </section>

        <hr />

        <section>
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./assets/aboutus1.png" className="d-block mx-lg-auto img-fluid img1" alt="Bootstrap Themes" width="300px" height="350px"  loading="lazy" />
                        <img src="./assets/aboutus2.png" className="d-block mx-lg-auto img-fluid img2" alt="Bootstrap Themes" width="300px" height="350px"  loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
                        <p className="lead">We are proud to serve our guests Italian Wine and Appetizers, freshly baked pasta and pizza recipies from our famous italian suppliers</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
                    </div>
                </div> 
            </div>
        </section>

        <hr />

        <section className="section3">
            <div className="container">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2 div3">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our Services</h1>
                        <p class="lead">Indulge in our exquisite selection of italian wines and appetizers, and savour the taste of freshly baked pasta.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img  src="./assets/section3.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                    </div>
                </div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 div-flex">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./assets/section41.png" className="d-block mx-lg-auto img-fluid img41" alt="Bootstrap Themes" width="500px" height="500px"  loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Taste of Italy</h1>
                        <p className="lead">We offer a fine dining experience where you can enjoy authentic Italian cuisine</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
                    </div>
                </div> 
            </div>
        </section>
        
        <hr />

        <section>
            <div className="carousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./assets/carousel_1.png" class="d-block w-100" alt="Italy" />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/carousel_2.png" class="d-block w-100" alt="Italian restaurant kitchen" />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/carousel_3.jpg" class="d-block w-100" alt="Chef cutting vegetables" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>

        <hr />
    
    </div>
}

export default Home;