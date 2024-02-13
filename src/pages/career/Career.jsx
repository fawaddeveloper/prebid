import './career.scss'
import Navbar from '../../components/navbar/Navbar'
import ServicesBanner from '../../servicesComponents/servicesBanner/ServicesBanner'
import CareerCom from '../../careerComponents/CareerCom'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Workus from '../../components/workus/Workus'
import Footer from '../../components/footer/Footer'
function Career() {
    return (
        <>
        <Navbar/>
        <ServicesBanner
        src="../../../career-banner.jpg" title="Work with PEH Solutions"
        font="40px"
        />
        <CareerCom/>
        <Footer/>
        </>
    )
}

export default Career
