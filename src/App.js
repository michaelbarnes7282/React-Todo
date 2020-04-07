import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      done: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId)
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

  clearDone = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.done)
    });
  };



  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          </div>
          <TodoForm addItem={this.addItem} />
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
