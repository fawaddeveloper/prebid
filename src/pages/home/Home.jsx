import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import Counter from '../../components/bidCounters/Counter'
import ServiceCom from '../../components/serviceCom/ServiceCom'
import Accordian from '../../components/accordian/Accordian'
import Mission from '../../components/mission/Mission'
import Footer from '../../components/footer/Footer'
import WayBid from '../../aboutComponents/wayBid/WayBid'
function Home() {
    return (
        <div className="home">
            <Navbar />
            <Featured src={"../../../home-banner.jpg"}/>
            <Counter/>
            <ServiceCom/> 
            <Accordian/>
            <Mission/>
            <WayBid/>
            <Footer/> 
        </div>
    )
}

export default Home
