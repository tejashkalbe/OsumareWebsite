import Header from './Component/Header/Header.jsx'
import Navigate from './Component/Navigate/Navigate.jsx'
import RealEstate from './Component/RealEstate/RealEstate.jsx'
import OurService from './Component/OurService/OurService.jsx'
import Driving from './Component/Driving/Driving.jsx'
import DrivingConversions from './Component/DrivingConversions/DrivingConversions.jsx'
import OurExpertise from './Component/OurExpertise/OurExpertise.jsx'
import PeaceOfMind from './Component/PeaceOfMind/PeaceOfMind.jsx'
import Accordian from './Component/Accordian/Accordian.jsx'
import Form from './Component/Form/Form.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Testimonial from './Component/Testimonial/Testimonial.jsx'

function App() {

  return (
    <>
      <Header/>
      <RealEstate/>
      <OurService/>
      <Navigate/>
      <Driving/>
      <DrivingConversions/>
      <OurExpertise/>
      <PeaceOfMind/>
      <Testimonial/>
      <Accordian/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
