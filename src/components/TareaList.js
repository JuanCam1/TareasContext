import React from 'react';
import { useAppContext } from '../context/TareaState';
import './TareaList.css';

const TareaList = () => {
  const appContext = useAppContext();
  const { todos } = appContext;
  
  function handleUpdate(id){
    appContext.editTodo(id);
  }

  function handleDelete(id){
    appContext.deleteTodo(id)
  }

  return (
    <section className='tareaList'>
      {
        todos.length > 0
        && 
        (
          todos.map((item) => {
            return (
              <div key={item.id}>
                <div className='tareaListTitle'>
                  <h3>{item.inputTitle}</h3>
                  <span>{item.fecha}</span>
                </div>
                <div className='tareaListBody'>
                  <p>{item.inputDescrip}</p>
                  <div className='tareaListButton'>
                    <button onClick={()=> {
                      handleUpdate(item.id)
                    }}>Editar</button>
                    <button onClick={()=> {
                      handleDelete(item.id)
                    }}>Eliminar</button>
                  </div>
                </div>
              </div>
            )
          })
        )
}
      
    </section>
  );
};

export default TareaList;
