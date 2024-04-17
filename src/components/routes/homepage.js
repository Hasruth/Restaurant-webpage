import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "../../container"
import Navbar from "../Navbar/Navbar"


function HomePage(){
    return(
        <>
<Navbar/>
<Header/>
<AboutUs/>
<SpecialMenu/>
<Chef/>
<Intro/>
<Laurels/>
<Gallery/>
<FindUs/>
<Footer/>
        </>
    )
}

export default HomePage