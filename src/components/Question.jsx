import React, { Component } from 'react'
import {connect} from "react-redux";

 class Question extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = ({authedUser,questions}) => {
return {

}
}

export default connect(mapStateToProps)(Question);