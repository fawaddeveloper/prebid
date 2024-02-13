import './featured.scss'
import FeatureSocial from '../featureSocial/FeatureSocial';
import { Link, useNavigate } from 'react-router-dom';
export default function Featured({src}) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/Quote");
    }
    return (
        <div className="featuredAbout">
       <div className="aboutContainer img-contain" 
       style={{backgroundImage: `url("${src}")`}}
       fetchpriority="high"
       >
            <div className="colorGradientAbout" style={{backgroundImage: "none"}}>
                <div className="tep">
            <span className='tepTitle'>Prebid Estimation House</span>
            <p className="gradientDesc">
            Get Quantity Takeoffs & Estimation Cost
            </p>
            <span className='quote-span'>Submit or Email Your Plans & Specs to Get Quote</span>
            <button className="btn-btn-dark"
            onClick={handleNavigate}
            >Get Free Quote</button>
            </div>
            </div>
        </div>
                    <FeatureSocial/>
        </div>
    )
}


