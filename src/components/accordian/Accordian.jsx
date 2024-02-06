import React, { useEffect, useState } from 'react'
import { data } from '../../accordianApi'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./accordian.scss"
function Accordian() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
        
    }   
    return (
        <>
        <h2 className="topTitle">FAQS</h2>
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
        </>
    )
}

export default Accordian
