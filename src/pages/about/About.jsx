import Navbar from '../../components/navbar/Navbar'
import Workus from '../../components/workus/Workus'
import Mission from '../../components/mission/Mission'
import './about.scss'
import FeaturedAbout from '../../aboutComponents/featured/FeaturedAbout'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'
import { Helmet } from 'react-helmet-async'

export default function About() {
    return (
        <>
        <Helmet>
                <title>About-Prebid Estimation House</title>
                <meta name="description" content="Trust Prebid Estimation House for accurate construction estimates. Expert team, cutting-edge tech, fast turnaround, competitive fees. Get a quote now!"/>
                <link rel="canonical" href="http://localhost:5173/about" />
            </Helmet>
        <div className="about">
        <Navbar />
        <FeaturedAbout src="../../../about-banner.jpg"/>
        <WhyChoose/>
        <WayBid/>
        <Footer/>
        </div>
        </>
    )
}


