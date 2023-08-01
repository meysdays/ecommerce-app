import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const url = 'http://localhost:8080/category/list'
const CategoryPanel = () => {
  const [category, setCategory] = useState([])

  const getCate = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCategory(data)
      //console.log(data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCate()
  }, [])

  return (
    <div className="con">
      <ul className="cate">
        <li>
          {category.map(({ categoryName, id }) => (
            <NavLink
              to={`/${id}`}
              key={id}
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              {categoryName}
            </NavLink>
          ))}
        </li>
      </ul>
    </div>
  )
}
export default CategoryPanel
