// Write your code here
import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {initialTodosList, deleteTodoList} = this.props
    const {title, id} = initialTodosList

    const deleteItem = () => {
      deleteTodoList(id)
    }

    return (
      <li className="list-container1">
        <p className="paragraph">{title}</p>
        <button className="button" type="button" onClick={deleteItem}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
