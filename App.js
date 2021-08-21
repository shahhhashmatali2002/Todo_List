import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Todolist from './Todolist';

function App(props) {
  const [inputlist, setinputlist] = useState('');
  const [Items, setItems] = useState([])

  const itemevent = (event) =>{
    setinputlist(event.target.value)
  };

  const listofitem = () =>{
    setItems((olditems) =>{
      return [...olditems,inputlist]
    });
    setinputlist('')
  };

  const deleteitems = (id) =>{
    setItems((olditems) =>{
        return olditems.filter((arrElement,index1) =>{
          return index1 !== id;
        })
    })
  };

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <h1 className='mt-5'>ToDo List</h1>
          <input className='mt-4' type='text' placeholder='Add Items' onChange={itemevent} value={inputlist}></input>
          <button className='button1 mt-4' onClick={listofitem}><i class='bx bxs-cart-add'></i></button>
          <ol>
            {Items.map((itemval, index) =>{
                return <>
                  <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  ondelete={deleteitems}

                  />
                </>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
