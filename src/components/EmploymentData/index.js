import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class EmploymentData extends Component {
  state = {profile: ''}

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.profile_details.map(each => ({
        name: each.name,
        shortBio: each.short_bio,
        profileImageUrl: each.profile_image_url,
      }))
      this.setState({
        profile: updatedData,
      })
    }
  }

  renderProductsList = () => {
    const {profile} = this.state
    const {name, shortBio, profileImageUrl} = profile

    return (
      <div className="profile-container">
        <img src={profileImageUrl} className="profile" alt="profileImageUrl" />
        <p>{shortBio}</p>
        <h1 className="heading">{name}</h1>
      </div>
    )
  }

  render() {
    return <div>{this.renderProductsList()}</div>
  }
}

export default EmploymentData
