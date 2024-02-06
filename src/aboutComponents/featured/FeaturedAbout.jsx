import './featuredAbout.scss'

export default function FeaturedAbout({src}) {
    return (
        <>
        <div className="featuredAbout">
        <div className="aboutContainer img-contain"
        style={{backgroundImage: `url("${src}")`}}
        >
            <div className="colorrGradientAbout">
            <h2>Welcome to Prebid Estimation House</h2>
            </div>
        </div>
        <div className="featureAboutUs">
        <img src="../../../sharpmind.png" alt="" />
        <div className="featureAboutUsDesc">
            <h3>About Us</h3>
            <p>
            Prebid Estimation House offers top-notch professional estimating 
            and takeoff services, including cost validation, expert witness 
            services, and more. Our expert team utilizes cutting-edge software 
            to deliver the most accurate cost estimates. Clients benefit from 
            the industry's fastest turnaround time at highly competitive fees. 
            Our specialized team, with diverse skill sets, is dedicated to 
            providing clients with the latest innovations in construction 
            estimations.We aim to save you both money and time by combining
             industry knowledge, the latest technology, and a commitment 
             to delivering exceptional services for your construction 
             estimating, scheduling, and cost management needs. Our name 
             and performance speak for themselves – trust us to uphold our
              promises and keep your sensitive information confidential. At Prebid Estimation House, 
              quality construction estimates and affordability come together 
              under one roof.
            </p>
        </div>
        <img src="../../../house.png" alt="" />
        </div>
        </div>
        </>
    )
}


