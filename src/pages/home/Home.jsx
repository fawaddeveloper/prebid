import React, { useState } from 'react'
import "./home.scss"
import "../../components/featured/featured.scss"
import Navbar from '../../components/navbar/Navbar'
import Counter from '../../components/bidCounters/Counter'
import ServiceCom from '../../components/serviceCom/ServiceCom'
import Accordian from '../../components/accordian/Accordian'
import Mission from '../../components/mission/Mission'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'
import FeatureSocial from '../../components/featureSocial/FeatureSocial'
import { Helmet } from 'react-helmet-async'
function Home() {
    const [imageLoaded, setImageLoaded] = useState(false);

// Set the imageLoaded state to true once the image is loaded
const handleImageLoad = () => {
  setImageLoaded(true);
};
    return (
        <>
        <Helmet>
        <title>Home-Prebid Estimation House</title>
                <meta name="description" content="Get accurate prebid estimation house services tailored to your needs. Our platform offers reliable estimates for your property projects. Try now!"/>
                <link rel="canonical" href="https://prebidestimationhouse.com/" />
                <link rel="preload" href="../../../home-banner.jpg" as="image" />
        </Helmet>
        <div className="home">
            <Navbar />
            <div className="featuredAbout">
            <div className="aboutContainer img-contain" style={{backgroundImage: imageLoaded ? `url("../../../home-banner.jpg")` : 'none'}}>
  { !imageLoaded && <img src="../../../home-banner.jpg" alt="Home Banner" onLoad={handleImageLoad} style={{display: 'none'}} /> }
  {/* ... rest of your component */}
            <div className="colorGradientAbout" style={{backgroundImage: "none"}}>
                <div className="tep">
            <span className='tepTitle'>Prebid Estimation House</span>
            <p className="gradientDesc">
            Get Quantity Takeoffs & Estimation Cost
            </p>
            <span className='quote-span'>Submit or Email Your Plans & Specs to Get Quote</span>
            <button className="btn-btn-dark"
           
            >Get Free Quote</button>
            </div>
            </div>
        </div>
                    <FeatureSocial/>
        </div>
            <Counter/>
            <ServiceCom/> 
            <Accordian/>
            <Mission/>
            <WayBid/>
            <Footer/> 
        </div>
        </>
    )
}

export default Home
