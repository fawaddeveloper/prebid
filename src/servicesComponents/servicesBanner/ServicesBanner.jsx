import FeatureSocial from '../../components/featureSocial/FeatureSocial'
import './servicesBanner.scss'

function ServicesBanner({src, desc, title}) {
    return (
        <>
            <div className="featuredAbout">
        <div className="aboutContainer img-contain"
         style={{backgroundImage: `url("${src}")`}}
        >
            <div className="colorGradientAbout">
                <div className="tep2">
            <h3>{title}</h3>
            <p className="gradientDesc2">
            {desc}
            </p>
            </div>
            </div>
        </div>
        </div>
        <FeatureSocial/>
        </>
    )
}

export default ServicesBanner
