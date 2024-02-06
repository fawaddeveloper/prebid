import  './counter.scss'

export default function Counter() {
    return (
        <div className="counter">
            <div className="counterContainer">
                <div className="counterItem">
                    <div className="counterItemsLeft">
                        <div className="counterItemLeft">
                        <span className="counterIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2F4.png?alt=media&token=35621596-9819-4dec-a9a5-e377a8cc0b1a" alt="" />
                        </span>
                        <span className="counterTitle">PEH-Available</span>
                        <span className="counterCount">150</span>
                        </div>                        
                        <div className="counterItemLeft">
                        <span className="counterIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2F5.png?alt=media&token=37c427a6-36ed-4b0d-a202-61211b19fee1" alt="" />
                        </span>
                        <span className="counterTitle">PEH-In Progress</span>
                        <span className="counterCount">52</span>
                        </div>
                    </div>
                    <div className="counterItemsRight">
                        <div className="counterItemRight">
                        <span className="counterIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2F6.png?alt=media&token=6b0fdfc4-689a-4185-b833-7482fd08cab2" alt="" />
                        </span>
                        <span className="counterTitle">Bid Results</span>
                        <span className="counterCount">30</span>
                        </div>                        
                        <div className="counterItemRight">
                        <span className="counterIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2F4.png?alt=media&token=35621596-9819-4dec-a9a5-e377a8cc0b1a" alt="" />
                        </span>
                        <span className="counterTitle">Private project</span>
                        <span className="counterCount">60</span>
                        </div>
                        <div className="counterItemRight">
                        <span className="counterIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2FUntitled%20design%20(2).png?alt=media&token=83df8e4f-eea8-40fd-a4d8-344e58fe1859" alt="" />
                        </span>
                        <span className="counterTitle">Awarded</span>
                        <span className="counterCount">75</span>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}


