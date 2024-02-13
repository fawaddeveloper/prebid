import './featureSocial.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
function FeatureSocial() {
    return (
        <>
        <div className="featuredSocial">
                        <div className="featuredSocialItem">
                        <div className="box1">
                            <span className="InstagramIcon">
                            <Link target='_blank' to="https://www.instagram.com/prebidestimationhouse/" className='Link'>
                                <InstagramIcon className='Insta' style={{fontSize: "30px" , color: "white"}}/>
                            </Link>
                            </span>
                        </div>
                        <div className="box2">
                            <span className="FacebookIcon">
                            <Link target='_blank' to="https://www.facebook.com/profile.php?id=61556315221961ew" className='Link'>
                                <FacebookIcon className='Fb' style={{fontSize: "30px" , color: "white"}}/>
                                </Link>
                            </span>
                        </div>
                        <div className="box3">
                            <span className="linkedinIcon">
                            <Link target='_blank' to="www.linkedin.com/in/prebid-estimation-house-42b26b2b4" className='Link'>
                                <LinkedInIcon className='Lin' style={{fontSize: "30px" , color: "white"}}/>
                                </Link>
                            </span>
                        </div>
                        </div>
                    </div>
        </>
    )
}

export default FeatureSocial
