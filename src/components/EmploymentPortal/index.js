import {withRouter} from 'react-router-dom'
import './index.css'

const EmploymentPortal = props => {
  const {detailsJob} = props
  const {label} = detailsJob

  return (
    <li className="type-list">
      <p className="jobs-class">{label}</p>
    </li>
  )
}

export default withRouter(EmploymentPortal)
