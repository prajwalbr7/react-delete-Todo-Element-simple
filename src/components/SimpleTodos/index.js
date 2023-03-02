import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {deleteTodoList: initialTodosList}

  onDelete = id => {
    const {deleteTodoList} = this.state
    const filterData = deleteTodoList.filter(eachId => eachId.id !== id)
    this.setState({deleteTodoList: filterData})
  }

  render() {
    const {deleteTodoList} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <ul className="">
            <h1 className="heading">Simple Todos</h1>
            {deleteTodoList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                deleteTodoList={this.onDelete}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
