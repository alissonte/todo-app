import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'
import { changeDescription } from '../todo/todoActions'


const TodoForm = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
    <div className="container">
        <div className="todoForm row">
            <div className="col-md-8">
                <input id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onKeyUp={keyHandler}
                    onChange={props.changeDescription}>
                </input>
            </div>
            <div className="col-2">
                <IconButton  style='primary' icon='plus' onClick={props.handleAdd}/>
                <IconButton style='info' icon='search' onClick={props.handleSearch}/>
                <IconButton style='default' icon='close' onClick={props.handleClear}/>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)