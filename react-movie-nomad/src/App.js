import { useState } from "react";



export default function App() {

  const [toDo, setToDo] = useState("");
  const setToDofunc = (e) => {
    setToDo(e.target.value);
  }

  // toDo List을 저장하는 배열 생성, 직접적으로 State를 변경하지 않으므로 push를 사용하지 않는다.
  const [toDos, setToDos] = useState([]);


  const onSubmitfunc = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }

    // 함수를 보낼 때 첫 번째 argument로 현재 state를 보낸다.
    // ...을 사용하게 되면 해당 배열의 원소를 가져온다. 즉, toDo와 currentArray를 합친다.
    setToDos((currentArray) => [toDo, ...currentArray]);

    setToDo("");
  }


  


  return(
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmitfunc}>
        <input onChange ={setToDofunc} 
          value ={toDo}
          type="text"
          placeholder="Write Your ToDo!">
        </input>
        <button>Add To Do</button>
      </form>

      <li>
        {
          toDos.map(()=>( <li>toDos</li>))
        }
      </li>
    </div>
  );
}