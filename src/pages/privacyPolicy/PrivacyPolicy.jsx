import { Helmet } from 'react-helmet-async'
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
         <Helmet>
                <title>Terms & Conditions-Prebid Estimation House</title>
                <meta name="description" content="Explore FAQs about construction estimating services at Prebid Estimation House. Learn about pricing, processes, and more. Get answers now!"/>
                <link rel="canonical" href="https://prebidestimationhouse.com/policy" />
            </Helmet>
            <Navbar/>
            <ServicesBanner src="../../../service-banner.jpg" 
        title="Terms & Conditions"
        />
            <TermsCondition/>
        </>
    )
}

export default PrivacyPolicy
