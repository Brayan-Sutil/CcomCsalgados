import { useLocation } from "react-router-dom";

const Home = () =>{
    const location = useLocation();
    console.log(location.pathname);
    
    return(
        <>
        <h1>Nao Pronta</h1>
        </>
    )
}

export default Home

