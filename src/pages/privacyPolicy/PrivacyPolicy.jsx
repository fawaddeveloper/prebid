import FeaturedAbout from '../../aboutComponents/featured/FeaturedAbout'
import Accordian from '../../components/accordian/Accordian'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import TermsCondition from '../../components/termsConditions/TermsCondition'
import ServicesBanner from '../../servicesComponents/servicesBanner/ServicesBanner'
import './privacyPolicy.scss'

function PrivacyPolicy() {
    return (
        <>
            <Navbar/>
            <ServicesBanner src="../../../service-banner.png" 
        title="Terms & Conditions"
        />
            <TermsCondition/>
        </>
    )
}

export default PrivacyPolicy
