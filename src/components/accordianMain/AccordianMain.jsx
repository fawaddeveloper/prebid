import { useState } from 'react';
import { questions } from '../../accordianApi';
import "./accordian.scss"
export default function Accordian() {
    const [data, setData] = useState(questions);

    return (
        <>
            <div className="accordian">
            <div className="accordianContainer">
                <div className="accordianItems">
            {data.map((curElem) => {
                
                return (
                    <>
                <div className="accordianItem active">
                        <span className="accordianItemTitle" >
                        {curElem.question}
                        </span>
                        <span className="accordianItemDesc">
                        {curElem.answer}
                        </span>
                    </div>
                    </>
                )
            })}
            </div>
            </div>
            </div>
        </>
    );
}
