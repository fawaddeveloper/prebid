import Navbar from '../../components/navbar/Navbar'
import Workus from '../../components/workus/Workus'
import Mission from '../../components/mission/Mission'
import './about.scss'
import FeaturedAbout from '../../aboutComponents/featured/FeaturedAbout'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'

export default function About() {
    return (
        <>
        <div className="about">
        <Navbar />
        <FeaturedAbout src="../../../about-banner.png"/>
        <WhyChoose/>
        <WayBid/>
        <Footer/>
        </div>
        </>
    )
}


