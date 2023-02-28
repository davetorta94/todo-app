import {useTodos} from './useTodos'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';




export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();

    

  return (
    <>
    <div className="container-fluid">
        
    
        <div className="row ">
    
    
          <div className="col-12 d-flex justify-content-center">
              
              <TodoForm onNewTodo={ handleNewTodo } />
    
          </div>

          
    
        </div>

        <div className="row">


        <div className="col-12 mt-5">
    
            <TodoList   todos={ todos }
                onDeleteTodo={ (id) => handleDeleteTodo(id) }
                onToggleTodo={handleToggleTodo }
                />

        </div>
          
        </div>
    
      </div>
    </>

  )
}
