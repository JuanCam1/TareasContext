import React, { useState,useEffect } from 'react';

import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../context/TareaState';

import './FormTarea.css';

const FormTarea = () => {
  const appContext = useAppContext();
  const { todoC } = appContext

  const INITIAL_STATE = {
    id: uuidv4(),
    fecha: '',
    inputTitle: '',
    inputDescrip: '',
  };

  const [todo, setTodo] = useState(INITIAL_STATE);

  useEffect(() => {
    if(todoC.hasOwnProperty('id')){
      setTodo(todoC);
    }
  }, [todoC])
  

  function handleSubmit(e) {
     e.preventDefault();

    const { inputTitle, inputDescrip } = todo;

    if (inputTitle.length && inputDescrip.length) {
      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: 'Guardando',
      //   showConfirmButton: false,
      //   timer: 500,
      // });
      appContext.addTodo(todo);
      setTodo(INITIAL_STATE);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Campos incompletos',
        showConfirmButton: false,
        timer: 500,
      });
    }
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }
  
  
  function handleOnClick(){
    let fechaIng = new Date().toLocaleTimeString();
    setTodo({ ...todo, fecha: fechaIng });
  }

  return (
    <section className='tareaForm'>
      <div>
        <h3>Agregar Tarea</h3>
        <form className='formTodo' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='inputTitle'>Tarea:</label>
            <input
              type='text'
              name='inputTitle'
              value={todo.inputTitle}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='inputDescrip'>Descripción:</label>
            <textarea
              name='inputDescrip'
              value={todo.inputDescrip}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button type='submit' onClick={handleOnClick}>guardar</button>
        </form>
      </div>
    </section>
  );
};

export default FormTarea;
