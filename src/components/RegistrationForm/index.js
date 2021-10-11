import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    Firstname: '',
    Lastname: '',
    showfirstnameError: false,
    showlastnameError: false,
    isSubmited: false,
  }

  onFirstchange = event => {
    this.setState({Firstname: event.target.value})
  }

  onLastchange = event => {
    this.setState({Lastname: event.target.value})
  }

  validatelastname = () => {
    const {Lastname} = this.state
    return Lastname !== ''
  }

  onLastblur = () => {
    const isValidatelast = this.validatelastname()
    this.setState({showlastnameError: !isValidatelast})
  }

  validatefirstname = () => {
    const {Firstname} = this.state
    return Firstname !== ''
  }

  onFirstblur = () => {
    const isValidatefirst = this.validatefirstname()
    this.setState({showfirstnameError: !isValidatefirst})
  }

  onFName = () => {
    const {Firstname} = this.state
    return (
      <div className="container">
        <label className="Fname" htmlFor="fname">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          placeholder="First Name"
          value={Firstname}
          onChange={this.onFirstchange}
          onBlur={this.onFirstblur}
          className="inputE"
        />
      </div>
    )
  }

  onLName = () => {
    const {Lastname} = this.state
    return (
      <div className="container">
        <label className="Lname" htmlFor="lname">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          value={Lastname}
          onChange={this.onLastchange}
          onBlur={this.onLastblur}
          className="inputE"
        />
      </div>
    )
  }

  onFormSubmit = event => {
    event.preventDefault()
    const isValidatefirst = this.validatefirstname()
    const isValidatelast = this.validatelastname()
    if (isValidatefirst && isValidatelast) {
      this.setState({isSubmited: true})
    } else {
      this.setState({
        showfirstnameError: !isValidatefirst,
        showlastnameError: !isValidatelast,
        isSubmited: false,
      })
    }
  }

  onForm = () => {
    const {showfirstnameError, showlastnameError} = this.state
    return (
      <form onSubmit={this.onFormSubmit} className="form-container">
        {this.onFName()}
        {showfirstnameError ? <p className="error-message">Required</p> : ''}
        {this.onLName()}
        {showlastnameError ? <p className="error-message">Required</p> : ''}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmited: !prevState.isSubmited,
      showlastnameError: !prevState.showlastnameError,
      showfirstnameError: !prevState.showfirstnameError,
      Firstname: '',
      Lastname: '',
    }))
  }

  onSuccessView = () => (
    <div className="container2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="para"> Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmited} = this.state
    return (
      <div className="back">
        <h1 className="head">Registration</h1>
        <div className="view-container">
          {isSubmited ? this.onSuccessView() : this.onForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
