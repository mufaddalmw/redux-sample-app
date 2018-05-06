import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component {
    render(){
        if(!this.props.book){
            return <p>Select a book to get started.</p>
        }
        return(
            <div>
                <h3>Book: {this.props.book.title}</h3>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)