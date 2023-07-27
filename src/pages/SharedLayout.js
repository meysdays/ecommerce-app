import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import CategoryPanel from '../components/CategoryPanel'
import Mailing from '../components/Mailing'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SearchForm />
      <CategoryPanel />
      <Outlet />
      <Mailing />
      <h2>GOOD</h2>
    </>
  )
}
export default SharedLayout
