import { useContext, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import UserSettings from "../../Components/UserSettings/UserSettings"
import { UserContext } from "../../Services/UserContext"

const UserView = ()=>{
   
    return(
        <>
        <Header username={'C4SKET'} />
        <UserSettings />
        <Footer/>
        </>
    )
}
export default UserView