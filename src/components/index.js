import {WithRouter} from 'react-router-dom'
import './index.css'

const EmploymentData = props => {
  const {details} = props
  const {label} = details
  console.log(label)

  return (
    <li className="type-list">
      <p className="jobs-class">{label}</p>
    </li>
  )
}

export default WithRouter(EmploymentData)
