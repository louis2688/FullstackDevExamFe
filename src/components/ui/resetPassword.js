import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Loader from "react-loader-spinner";


class ResetPassword extends React.Component {
    async componentDidMount() {
            const token = this.props.match.params.token
            const history = this.props.history
            // console.log('reset password')
            if(!token) {
                history.push('/')
            }
            try {
                const res = await axios.get('/users/me',{ headers: {'Authorization': `Bearer ${token}` }})
                // console.log(res)
                this.props.setToken(token)
                history.push('/update-password')
                // console.log('historyPush')
            } catch (error) {
                // console.log(error,'no token')
                history.push('/')
            }
    }
    render(){
        return <Loader className='loader' type="Grid" color="#808080" height={40} width={40} />
    }
}

export default withRouter(ResetPassword)
