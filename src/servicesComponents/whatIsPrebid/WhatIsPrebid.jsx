import './whatIsPrebid.scss'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
function WhatIsPrebid() {
    return (
        <>
        <div className="whatIsPrebid">
            <div className="row">
                <div className="col-lg-12 bg-y w-3 p-3">
                    <h3 className='whatIsTitleMain'>WHAT IS PEH?</h3>
                    <p>
                    Many contractors are currently tied up with ongoing projects, leaving limited time for bidding on new opportunities. Missing out on potential projects could mean significant losses for your company. An estimated figure indicates that contractors may lose around $150,000 annually due to inaccurate estimates and missed bids.
                    </p>
                    <p>
                    For smaller contractors, hiring a full-time construction estimator can be financially challenging. To address your construction cost estimation needs, consider leveraging a <strong>Prebid Estimation House</strong> service customized for builders.
                    </p>
                </div>
                <div className="col-lg-12 bg-white w-4 p-3">
                    <div className="row">
                        <div className="col-md-6 mr-2">
                            <div className="dfAlign">
                            <AcUnitRoundedIcon className="dfAlignIcon"/>
                            <span className="whatIsPrebidTitle">Save Money</span>
                            </div>
                            <p className='whatIsPrebidDescT'>
                            Save money by opting for our construction cost estimating services instead of hiring a full-time estimator. We provide cost-effective solutions with nominal fees for both comprehensive and trade-specific estimates, offering you significant savings.
                            </p>
                        </div>
                        <div className="col-md-6">
                        <div className="dfAlign">
                            <AcUnitRoundedIcon className="dfAlignIcon"/>
                            <span className="whatIsPrebidTitle">Fast Turnaround</span>
                            </div>
                            <p className='whatIsPrebidDescT'>
                            Our certified estimators specialize in crafting construction estimates. Our collaborative approach ensures timely delivery, helping you meet your project deadlines with ease.
                            </p>
                        </div>
                        <div className="col-md-6 mr-2">
                        <div className="dfAlign">
                            <AcUnitRoundedIcon className="dfAlignIcon"/>
                            <span className="whatIsPrebidTitle">Quick Support</span>
                            </div>
                            <p className='whatIsPrebidDescT'>
                            Our team of expert cost estimators is at your service 24/7, ready to address any inquiries via phone or email. We provide continuous support and revisions, even after delivering the estimates, ensuring your complete satisfaction.
                            </p>
                        </div>
                        <div className="col-md-6">
                        <div className="dfAlign">
                            <AcUnitRoundedIcon className="dfAlignIcon"/>
                            <span className="whatIsPrebidTitle">Accuracy Insured</span>
                            </div>
                            <p className='whatIsPrebidDescT'>
                            Our estimates adhere to local construction specifications, incorporating accurate material and labor rates. Utilizing cutting-edge software like PlanSwift and Bluebeam, we assure our clients of the most precise cost estimates for their projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatIsPrebid
