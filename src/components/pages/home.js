import '../../App.css'
import Homepart from '../Homepart'
import Infopart from '../info'
import Services from '../services'
import Footer from '../footer'
import Copyright from '../copyright'
function Home(){
    return(
        <>
        <Homepart />
        <Infopart />
        <Services />
        <Footer />
        <Copyright />
        </>
    )
}

export default Home