import { Task } from "./Task"

// const tasks = [
//     {
//         id:1,
//         text: 'Web Developer',
//         day:'Monday',
//         reminder:true,
//     },
//     {
//         id:2,
//         text: 'React Developer',
//         day:'Monday',
//         reminder:true,
//     },
//     {
//         id:3,
//         text: 'Asp Developer',
//         day:'Monday',
//         reminder:false,
//     }
// ]

export const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
          {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))}  
        </>
    )
}
