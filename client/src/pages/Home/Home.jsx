import Banner from '../components/Banner'
import Categories from './Categories'
import SpecialProduct from './SpecialProduct'
import Testimonials from './Testimonials'
import OurService from './OurService'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <SpecialProduct/>
        <Testimonials/>
        <OurService/>
    </div>
  )
}

export default Home