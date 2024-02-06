import './featureSocial.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function FeatureSocial() {
    return (
        <>
        <div className="featuredSocial">
                        <div className="featuredSocialItem">
                        <div className="box1">
                            <span className="InstagramIcon">
                                <InstagramIcon className='Insta' style={{fontSize: "30px" , color: "white"}}/>
                            </span>
                        </div>
                        <div className="box2">
                            <span className="FacebookIcon">
                                <FacebookIcon className='Fb' style={{fontSize: "30px" , color: "white"}}/>
                            </span>
                        </div>
                        <div className="box3">
                            <span className="linkedinIcon">
                                <LinkedInIcon className='Lin' style={{fontSize: "30px" , color: "white"}}/>
                            </span>
                        </div>
                        </div>
                    </div>
        </>
    )
}

export default FeatureSocial
