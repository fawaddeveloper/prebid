import { useNavigate } from 'react-router-dom';
import  './workus.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Workus() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/Quote");
    }
    return (
        <>
        <div className="workus">
            <div className="workWrapper">
                <div className="workWrapperItem">
                <h3 className="workWrapperTitle">We Work With</h3>
                <span className="workWrapperDesc">
                We are a multi-faceted industry leader and through our family of companies making up one of the region’s
                 largest Construction Estimation Firm.
                </span>
                </div>
                </div>
                <div className="workWrapperOptions">
                <div className="workWrapperOption">
                    
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                    <div className="workWrapperOptionItem">
                        <span className="workIcon"><CheckCircleIcon/></span>
                        <span className="workDesc">General Contracts</span>
                    </div>
                </div>
                </div>
                <div className="btn-btn">
                    <button className="workWrapperbtn" onClick={handleNavigation}>Get Free Quote</button>
                </div>
                </div>
        
        </>
    )
}


