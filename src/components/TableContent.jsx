import React, { Component } from 'react'
import {connect} from "react-redux"
import userData from '../store/user/action'


class TableContent extends Component {
    delete(id){
       this.props.userData("delete" ,id)
       this.setState({})

    }

    render() {
        return (
                <tbody>
                {
                    this.props.Data.user.map((a,i)=>(
                        <tr key={i} >
                            {                                    
                                Object.values(a).map((item,index)=>(
                                    <td key={index}>
                                        {a.image===item?<img src={item} alt="image1"/>:item}                                  
                                        
                                    </td>
                                ))
                            }
         
                            <td>
                                <button onClick={this.delete.bind(this,a.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
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


export default connect(mapstatetoprops,mapdispatchtoprops())(TableContent)