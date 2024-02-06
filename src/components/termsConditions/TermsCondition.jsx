import './termsCondition.scss'
import React, { useEffect, useState } from 'react'
import { data } from '../../termsConditionsApi.js'
import { payment } from '../../paymentPolicyApi.js'
import { faqs } from '../../faqsApi.js'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '../../components/footer/Footer.jsx'
function TermsCondition() {
    const [selected, setSelected] = useState(null);


    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
        
    }   
    return (
        <>
        <h2 className="topTitle">Privacy Policies</h2>
        <div className="accordianWrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <span style={{fontSize: "18px" , fontWeight: "500"}}>{item.question}</span>
                            <span>{selected ===i ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
                        </div>
                        <div className={selected ===i ? 'content show' : 'content'}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>



        <h2 className="topTitle">Payment Policies</h2>
        <div className="accordianWrapper">
            <div className="accordion">
                {payment.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <span style={{fontSize: "18px" , fontWeight: "500"}}>{item.question}</span>
                            <span>{selected ===i ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
                        </div>
                        <div className={selected ===i ? 'content show' : 'content'}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>




        <h2 className="topTitle">FAQ's</h2>
        <div className="accordianWrapper">
            <div className="accordion">
                {faqs.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <span style={{fontSize: "18px" , fontWeight: "500"}}>{item.question}</span>
                            <span>{selected ===i ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
                        </div>
                        <div className={selected ===i ? 'content show' : 'content'}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>

        <div className="wrapperTermsConditions">
            <h3 className='wrapperTermsConditionsTitle'>Terms & Conditions</h3>
            <p className='wrapperTermsConditionsDesc'>
                Receive your estimate within 3 to 4 business days after accepting the quote and making payment. Delays may occur based on project scope and complexity.

                We exclusively accept online payments via Credit Card, Debit Card, or PayPal. Once we receive your plans and analyze project specifications, we send a Proposal. If accepted, simply inform us through email or a quick call.

                Please note: CA Estimating Solutions is not responsible if a contractor misses a bid deadline. No refunds are possible after estimate delivery. Refunds are only applicable if the estimate is canceled within 2 hours of payment. Once our team starts working, no refund can be issued. However, we're always available to review,
                make adjustments, and address any questions you may have.
            </p>
        </div>

        <Footer/>
        </>
    )
}

export default TermsCondition
