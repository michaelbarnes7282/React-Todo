import React from 'react';
import TodoList from './components/TodoList'

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



  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.item} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
