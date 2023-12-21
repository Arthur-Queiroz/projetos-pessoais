import React, {useState} from "react"
//components
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from "./components/TaskForm"
import TaskList from './components/TaskList'
import Modal from "./components/Modal"

//css
import styles from "./App.module.css"

// Interface
import {ITask} from "./interfaces/Task";


function App() {
  
  const[tasklist, setTaskList] = useState<ITask[]>([]);
  const[taskToUptade, setTaskToUpdate] =useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      tasklist.filter (task => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
        modal!.classList.add("hide");
    }
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  return <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={tasklist} setTaskList={setTaskList}/>} />
      <Header/>
      <main className={styles.main}>
       <div>
           <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={tasklist}
          task={taskToUptade} 
          setTaskList={setTaskList}/>
           
       </div>

        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={tasklist} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
        
        </main>
      
      <Footer/>
        
      
     
    </div>
  
}

export default App
