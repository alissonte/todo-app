import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'
import { clear, add, changeDescription, search } from '../todo/todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        const { clear, add, search, description } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.key === 'Escape'){
            clear()
        }
    }

    render(){
        const { add, search, description } = this.props
        return (
                <div className="container">
                    <div className="todoForm row">
                        <div className="col-md-8">
                            <input id='description'
                                className='form-control'
                                placeholder='Adicione uma tarefa'
                                value={this.props.description}
                                onKeyUp={this.keyHandler}
                                onChange={this.props.changeDescription}>
                            </input>
                        </div>
                        <div className="col-2">
                            <IconButton  style='primary' icon='plus' onClick={() => add(description)}/>
                            <IconButton style='info' icon='search' onClick={search}/>
                            <IconButton style='default' icon='close' onClick={this.props.clear}/>
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ clear, add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)