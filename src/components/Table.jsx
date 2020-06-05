import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableContent from './TableContent'

class Table extends Component {
    render() {
        return (
            <div>
                <h1>Table</h1>

                <table className="table table-hover">
                    <TableHeader></TableHeader>
                    <TableContent></TableContent>
                    
                </table>
            </div>
        )
    }
}

export default Table
