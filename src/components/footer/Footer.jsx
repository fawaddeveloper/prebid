import  './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
function Footer() {
    return (
        <>
            <div className="footerWrapper">
                <div className="footerItems">
                    <div className="footerItem">
                        <div className="footerItemWrapper">
                            <div className="footerItemFlex">
                                <div className="footerItemLogo">
                                    <img src="../../../bottomlogo.png" alt="" />
                                </div>
                                <div className="footerItemVerifyImg">
                                    <img src="../../../cons.png" alt="" />
                                </div>
                            </div>
                            <div className="footerItemDesc">
                            Prebid Estimation House Solutions is your go-to for professional estimation and quantity take-off services. Say goodbye to painstaking and time-consuming building estimation processes. With PEH Solutions, we make the bidding process simple for our clients
                            </div>
                            <span className="footerCopyright">
                            © 2024 Prebid Estimation - ALL RIGHTS RESERVED.
                            </span>
                        </div>
                    </div>
                    <div className="footerFollowUs">
                        <h3>Follow Us</h3>
                        <div className="iconWrapper">
                            <FacebookIcon className='footerIconF'/>
                            <InstagramIcon className='footerIconF'/>
                            <LinkedInIcon className='footerIconF'/>
                        </div>
                    </div>
                    <div className="footerItemEmail">
                        <EmailOutlinedIcon className='footerCotactIcon'/>
                        <span className="footerItemEmaill">Info@prebidestimationhouse.com</span>
                        </div>
                    <div className="footerItemContact">
                        <CallOutlinedIcon className='footerCotactIcon'/>
                        <span className="footerItemContactt">+92-123-32332323</span>
                    </div>
                    </div>
                </div>
            
        </>
    )
}

export default Footer
