import Header from "@/app/app-components/header"
import Crousal from "@/app/app-components/crousal"
import Cards from "@/app/app-components/doctorCard"
import Emergency from "@/app/app-components/emerency"
import Testimonials from "@/app/app-components/testimonials"
import Gallery from "@/app/app-components/gallery"
import Footer from "@/app/app-components/footer"
function Home (){
    return (
<>
{/* <Header /> */}
    <Crousal />
    <Cards />
    <Emergency />
    <Testimonials />
    <Gallery />
    {/* <Footer /> */}
</>
    )
}
export default Home