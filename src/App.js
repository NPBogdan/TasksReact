import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
function App() {
  const [tasks,setTasks] = useState ([
    {
         id:1,
         name:'Kulman',
         age:24,
         reminder:false
    },
    {
        id:2,
        name:'Ahmed',
        age:43,
        reminder:false
    },
    {
      id:3,
      name:'Jupanu',
      age:27,
      reminder:false
  }, 
])

  return (
    <div className="container">
      <Header title='bogdan'/>
      <Tasks tasks={tasks} />

    </div>
  );
}

export default App;
