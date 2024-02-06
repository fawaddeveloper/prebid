import './services.scss'
import Navbar from '../../components/navbar/Navbar'
import ServicesBanner from '../../servicesComponents/servicesBanner/ServicesBanner'
import WhatIsPrebid from '../../servicesComponents/whatIsPrebid/WhatIsPrebid'
import Mission from '../../components/mission/Mission'
import Workus from '../../components/workus/Workus'
import WhyChoose from '../../aboutComponents/whyChoose/WhyChoose'
import Footer from '../../components/footer/Footer'
import ServiceCom from '../../components/serviceCom/ServiceCom'
import WayBid from '../../aboutComponents/wayBid/WayBid'
import CdiDivision from '../../servicesComponents/cdiDivisions/CdiDivision'
export default function Services() {
    return (
        <>
        <Navbar />
        <ServicesBanner src="../../../service-banner.png" 
        desc="Prebid Estimation House offers precise and budget-friendly quantity takeoff services, as well as comprehensive construction estimating support services, to organizations across the construction industry."
        title="Welcome to Prebid Estimation House"
        />
        <WhatIsPrebid/>
        <CdiDivision/>
        <ServiceCom/>
        <WhyChoose/>
        <WayBid/>
        <Footer/>
        </>
    )
}


