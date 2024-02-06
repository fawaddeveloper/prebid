import './wayBid.scss'
import DoneIcon from '@mui/icons-material/Done';
function WayBid() {
    return (
        <div className="BidWrapper">
        <div className="BidItem">
            <h3>Fastest and Easiest way to Bid</h3>
            <p className='BidP'>Unlock Success with Our Quantity Takeoffs and Cost 
                Estimation! From small projects to large constructions, we've got you covered. Our expertise in preparing competitive bids speaks for itself – just check out our impressive bid-winning track record. Don't wait! Experience the difference in your business today by ordering your quantity takeoffs for private or public projects. Let's build success together</p>
        </div>
        <div className="BidItemBottom">
            <div className="BidItemWrap0">
                <div className="BidItemWrapUpper">
                <DoneIcon className="BidItemWrapIcon"/>
                <span className="BidItemWrapDesc">Complete Quantity Takeoff</span>
            </div>
            </div>
            <div className="BidItemWrap1">
            <div className="BidItemWrapUpper">
                <DoneIcon className="BidItemWrapIcon"/>
                <span className="BidItemWrapDesc">Complete Cost Estimation</span>
            </div>
            </div>
            <div className="BidItemWrap2">
            <div className="BidItemWrapUpper">
                <DoneIcon className="BidItemWrapIcon"/>
                <span className="BidItemWrapDesc">MEP Quantity Takeoff</span>
            </div>
            </div>
            <div className="BidItemWrap3">
            <div className="BidItemWrapUpper">
                <DoneIcon className="BidItemWrapIcon"/>
                <span className="BidItemWrapDesc">Private Projects Quantity Takeoff (Takeoff On Demand - TOD)</span>
            </div>
            </div> 
            <div className="BidItemWrap4">
            <div className="BidItemWrapUpper">
                <DoneIcon className="BidItemWrapIcon"/>
                <span className="BidItemWrapDesc">Tailor-Made Subscription Plans</span>
            </div>
            </div>
        </div>
    </div>
    )
}

export default WayBid
