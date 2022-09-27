import React, {Component} from 'react'
import {createWallet} from '../../../actions/ProjectActions'
import {connect} from 'react-redux'

class CreateWallet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: ''
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {

        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }

        this.props.createWallet(newWallet, this.props.history)

        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr/>
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "name")}
                                           className="form-control form-control-lg " placeholder="Account Name"/>
                                    {/*<p className="text-danger">{this.state.errors.name}</p>*/}
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "accountNumber")}
                                           className="form-control form-control-lg" placeholder="Account No"/>
                                    {/*<p className="text-danger">{this.state.errors.accountNumber}</p>*/}
                                </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")}
                                              className="form-control form-control-lg"
                                              placeholder="Description"></textarea>
                                    {/*<p className="text-danger">{this.state.errors.description}</p>*/}
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapToStateToProps, {createWallet})(CreateWallet)