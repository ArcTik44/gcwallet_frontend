import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { IUser } from "../../Services/auth";
import { UserContext } from "../../Services/UserContext";

const HomeView = () =>{
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    return(<>
    <div onClick={()=>{navigate('/user')}}>
    <Header username={user?.username}/>
    </div>
    <div style={{
        backgroundColor:'#D9D9D9',
        borderRadius:11
    }}>
        <div style={{
             backgroundColor:'#D9D9D9',
             borderRadius:11,
             borderColor:'#000',
        }}><h1>My cards</h1></div>
        <div>
            <CardList cards={user?.cards}/>
        </div>
        </div>
    <Footer/>
    </>)
}
export default HomeView;