



export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (

    <>
    
    <div className="row">
      <div className="col-8 p-0">
          <li className="list-group-item d-flex justify-content-between">
            <span 
              className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
              onClick={ () => onToggleTodo( todo.id ) }
            >
              { todo.description }
            </span>
            <button 
                    className="btn btn-danger boton-eliminar"
                    onClick={ () => onDeleteTodo( todo.id ) }
                    >Borrar
                  </button>
          </li>
      </div>
          <div className="col-1">
            <button
              className="btn btn-danger boton-externo"
              onClick={ () => onDeleteTodo( todo.id ) }>
              X
            </button>
      </div>

    </div>
    
    
    
    </>
  )
}

