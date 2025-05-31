import react from "react"
import Contact from "./contactCard"

function Team()  {

    return(

        <>
        <div className="team">
            <div><h3>Welcome</h3></div>
            <div><p>magboo is a family run land investment company. We purchase land right across the United States. If you need to sell your land, we’re serious about buying it and can offer you a quick, hassle free sale with no out of pocket costs to you.</p></div>
            <div className="teams">
                <div><h2>MEET THE TEAM</h2><hr></hr></div>
            </div>
            <div className="ctn">
            <div className="contacts">
                <Contact imageLink="./faith.jpg" name="Michelle Agboola" content="Managing Director and Client Experience
I specialized in Project Management, Contract Negotiations, and Compliance for 10 years prior to purchasing vacant property.
I help people like yourself that own land to remove the inconvenience paying to upkeep land you don’t plan on using. I actively buy land, collaborate with landowners, title, and other land professionals to create a seamless transition.
" />
                <Contact imageLink="./mitch.jpg" name="Faith John" content="Marketing Manager and Contracts Assistant
Hi, I’m Faith, the Marketing Manager and Contract Assistant here at our real estate investment company! I love bringing energy and creativity to everything I do-whether it’s crafting fun, targeted marketing campaigns or making sure our contracts are spot-on and stress-free. I’m passionate about helping our company grow by blending smart marketing with careful contract management. I thrive on teamwork, good vibes, and turning challenges into opportunities. Let’s make real estate investing exciting and successful-together!
" />
            </div>
            </div>
        </div>
        </>
    )
}

export default Team 