import './whyChoose.scss'
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AddchartIcon from '@mui/icons-material/Addchart';
function WhyChoose() {
    return (
        <>
            <div className="chooseWrapper">
                <div className="ChooseItem">
                    <h3>Why Choose Prebid Estimation House</h3>
                    <p>
                    We're a professional construction estimating firm, equipped with a team of 
                    certified construction estimators, each boasting over 10 years of 
                    combined experience in construction takeoff services. When you choose 
                    PEH, your project is in the capable hands of seasoned 
                    estimators who meticulously calculate the materials needed. 
                    Our estimators bring on-site experience, extensive construction 
                    knowledge, and adhere to the best estimation practices recommended by 
                    renowned associations. We strictly follow guidelines from organizations like ASPE, PMI, and CSI, ensuring our estimators stay updated with the latest technology and tools in the industry.
                    </p>
                </div>
                <div className="ChooseItemBottom">
                    <div className="ChooseItemWrap0">
                    <div className="ChooseItemWrapUpper">
                        <EngineeringIcon className="ChooseItemWrapIcon"/>
                        <span className="ChooseItemWrapDesc">Experienced Professionals:</span>
                    </div>
                        <p>
                        With over 10 years of experience in the construction industry, our estimators are seasoned professionals trained to deliver accurate and efficient take-off services for any project
                        </p>
                    </div>
                    <div className="ChooseItemWrap1">
                    <div className="ChooseItemWrapUpper">
                        <EmojiObjectsRoundedIcon className="ChooseItemWrapIcon"/>
                        <span className="ChooseItemWrapDesc">Comprehensive and Detailed Solution:</span>
                    </div>
                        <p>
                        We recognize the uniqueness of each project and collaborate closely with our clients to comprehend their requirements. This collaboration allows us to tailor customized Prebid Estimation Takeoff (PEO) solutions that precisely meet the needs of our clients
                        </p>
                    </div>
                    <div className="ChooseItemWrap2">
                    <div className="ChooseItemWrapUpper">
                        <AddchartIcon className="ChooseItemWrapIcon"/>
                        <span className="ChooseItemWrapDesc">State-of-the-art technology:</span>
                    </div>
                        <p>
                        We employ cutting-edge software and technology for swift measurements and material quantification, enabling us to provide results with greater speed and accuracy compared to traditional manual estimation methods.
                        </p>
                    </div>
                    <div className="ChooseItemWrap3">
                    <div className="ChooseItemWrapUpper">
                        <PriceChangeIcon className="ChooseItemWrapIcon"/>
                        <span className="ChooseItemWrapDesc">Cost-effective pricing:</span>
                    </div>
                        <p>
                        Our estimators have 10+ years of experience in the construction industry and we are trained to provide accurate and efficient take-off services for any project.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose
