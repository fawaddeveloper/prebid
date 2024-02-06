import './quote.scss'
import Navbar from '../../components/navbar/Navbar'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from 'react';
export default function Quote() {

    const fileInputRef = useRef(null);

    const handleIconClick = () => {
      // Click the hidden file input
      fileInputRef.current.click();
    };
  
    return (
        <>
        <div className="quote">
            <Navbar/>
            <div className="quoteWrapper">
                <div className="quoteFeaturedImage">
                    <form className="quote-Form">
                <h3>Get Free Quote</h3>
                    <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex">
                    <MailOutlineIcon className="quoteMail"/>
                    <input type="text" placeholder='email'/>
                </div>
                <div className="quoteFlex-file">
                    <CloudUploadIcon className='uploadFileIcon' 
                    onClick={handleIconClick}/>
                    <input type="file" name='quoteFile' id='quoteFile'
                    style={{display: "none"}}
                    ref={fileInputRef}
                    />
                </div>
                    <h4>Drag your files here</h4>
                
                    <button className="quote-submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}


