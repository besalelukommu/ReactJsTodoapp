import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration : 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration : 'none'
        //     }
        // }

        return{
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc solid',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props);
    // }
    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// btn style
const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    float: 'right',
    borderRadius: '50%',
    corser:'pointer'
}

// Prop types
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#c4c4c4'
// }
export default TodoItem
