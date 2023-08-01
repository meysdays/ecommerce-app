import { Outlet } from 'react-router-dom'
const SharedCategoryLayout = () => {
  return (
    <div>
      <h2>Category</h2>
      <Outlet />
    </div>
  )
}
export default SharedCategoryLayout
