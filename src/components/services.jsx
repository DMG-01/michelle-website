import react from "react"
import Service from "./eachService"

function Services() {
    return(
        <div className="services">
            <div><h2>Our Services  <hr></hr></h2></div> 
            
            <Service className="service1" imgUrl="./mainImage1.jpg" head="Real Estate Done Right" content="When you need to sell your land fast whether it's because of needing the cash released for your next investment, probate, bankruptcy, foreclosure, or any other reason, we are here to help you fast." />
            <Service imgUrl="" head="Sell Your Land Fast" content="The most popular way we help landowners sell fast is by making a lightning fast, all-cash, no strings attached, hassle free offer. When you need to sell, you don't have time to wait for a realtor to list your property and wait weeks or months for your land to sell."/>
            <Service imgUrl="./mainImage2.jpg" head="Are You An Investor?" content="Are you an investor looking to expand your current portfolio, or a new investor looking for expert support to make your first purchase? " />

        </div>
    )
}

export default Services