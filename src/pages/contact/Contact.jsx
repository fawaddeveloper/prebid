import './contact.scss'
import Navbar from '../../components/navbar/Navbar'
import ServicesBanner from '../../servicesComponents/servicesBanner/ServicesBanner'
import ContactCom from '../../contactComponents/ContactCom'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Workus from '../../components/workus/Workus'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'
function Contact() {
    return (
        <>
        <Navbar/>
        <ServicesBanner src="../../../contact-banner.png" title="Get In Touch" />
        <ContactCom/>
        <WhyChoose/>
        <WayBid/>
        <Footer/>
        </>
    )
}

export default Contact
