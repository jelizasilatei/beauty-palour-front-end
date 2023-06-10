import React from "react";
import Carousel from "./carousel";
import Footer from "./footer";
import WorkingHours from "./hours";
import "../css/Home.css"



function Home() {
  return (
    <div>
      <h1 className="hero__heading">Zildai Beauty Parlour</h1>
      <Carousel />
      <div className="hero" id="home">
        <div className="hero__container">
          {/* <h1 className="hero__heading">Welcome to Zildai Beauty Parlour</h1> */}
          <p className="hero__description">Unlimited Possibilities.</p> 
          <p className="hero__description">You've got your own style and your own attitude, so you should have a professional space that is totally you.</p> 
          <p className="hero_span"> --WE GOT YOU COVERED--</p>
          <button class="main__btn"><a href="/about">Explore</a></button>
        </div>
    </div>
    <WorkingHours/>
      <Footer/>
    </div>  
  )
  }

export default Home;

    // return (
    // <div>
        
    //     <div className="hero" id="home">
    //     <div className="hero__container">
    //       <h1 className="hero__heading">Welcome to Zildai Beauty Parlour</h1>
    //       <p className="hero__description">Unlimited Possibilities.</p> 
    //       <p className="hero__description">You've got your own style and your own attitude, so you should have a professional space that is totally you.</p> 
    //       <p className="hero_span"> --WE GOT YOU COVERED--</p>
    //       <button class="main__btn"><a href="/about">Explore</a></button>
    //     </div>
    // </div>
    // </div>
    // )

    // const photos = ['https://m.media-amazon.com/images/I/81LVW5ufkvL._AC_UF894,1000_QL80_.jpg',
    // 'https://im.hunt.in/cg/Kurukshetra/City-Guide/Beauty-parlour.jpg', 
    // 'https://kemnet.co.ke/wp-content/uploads/Beauty-Parlour-Management-System-Happy-Customer.png'];


