import {Routes,Route, BrowserRouter} from "react-router-dom"
import HomePage from "./homepage"
import BookTable from "./booktable"

function Booking(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path={"/"} Component={HomePage} />
            <Route path="/booktable" Component={BookTable}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Booking