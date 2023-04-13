import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../Components/CardList/CardList";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../Services/UserContext";

const HomeView = () =>{
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    return(<>
    <div onClick={()=>{navigate('/user')}}>
        <Header username={user?.username}/>
    </div>
    <h1 className="flex justify-center text-4xl font-bold ml-8">My cards</h1>
    <div className="flex min-w-2xl rounded-xl mt-5 border-gray-300 justify-center">
        <div className="mt-15 self-center">
            <CardList cards={user?.cards}/>
        </div>
    </div>
    <Footer/>
    </>)
}
export default HomeView;