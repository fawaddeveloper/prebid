import './contact.scss'
import Navbar from '../../components/navbar/Navbar'
import ServicesBanner from '../../servicesComponents/servicesBanner/ServicesBanner'
import ContactCom from '../../contactComponents/ContactCom'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Workus from '../../components/workus/Workus'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'
import { Helmet } from 'react-helmet-async'
function Contact() {
    return (
        <>
         <Helmet>
                <title>Contact-Prebid Estimation House</title>
                <meta name="description" content="Trust Prebid Estimation House for accurate construction estimates. Experienced team, tailored solutions, competitive pricing. Contact us now!"/>
                <link rel="canonical" href="https://prebidestimationhouse.com/contact" />
            </Helmet>
        <Navbar/>
        <ServicesBanner src="../../../contact-banner.jpg" title="Get In Touch" />
        <ContactCom/>
        <WhyChoose/>
        <WayBid/>
        <Footer/>
        </>
    )
}

export default Contact
