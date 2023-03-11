import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const HomeView = () =>{
    return(<>
    <div onClick={()=>{window.location.href='user'}}>
    <Header username={"C4SKET"}/>
    </div>
    <div style={{
        backgroundColor:'#D9D9D9',
        borderRadius:11
    }}>
        <div style={{
             backgroundColor:'#D9D9D9',
             borderRadius:11,
             borderColor:'black'
        }}><h1>My cards</h1></div>
        
        </div>
    <Footer/>
    </>)
}
export default HomeView;