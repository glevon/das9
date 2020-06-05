import React, { Component } from 'react'
import {connect} from "react-redux"
import userData from '../store/user/action'

class TableHeader extends Component {
    sort(key){
        this.props.userData("sort" ,key)
        this.setState({})
    }
    render() {
        return (
                <thead>
                    <tr>
                        {
                            Object.keys(this.props.Data.user[0]).map((key,i)=>(
                                    <th key={i}  >
                                        {key}
                                        <button className="btn btn-primary" onClick={this.sort.bind(this,key)} ><i class="fa fa-sort"></i></button>                                      
                                    </th>
                            ))
                        }
                    </tr>
                </thead>
        )
    }
}
function mapstatetoprops(state) {
    return{
        Data:state
    }
    
}
function mapdispatchtoprops() {
    return{
        userData
    }
    
}


export default connect(mapstatetoprops,mapdispatchtoprops())(TableHeader)
