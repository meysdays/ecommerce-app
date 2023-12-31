import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import CategoryPanel from '../components/CategoryPanel'
import Mailing from '../components/Mailing'
import Footer from '../components/Footer'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SearchForm />
      <CategoryPanel />
      <Outlet />
      <Mailing />
      <Footer />
    </>
  )
}
export default SharedLayout
