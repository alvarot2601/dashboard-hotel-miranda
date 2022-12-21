import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import rooms from '../json/rooms.json';
const initialTasks = [
    {
        id: "1",
        text: "React.js",
    },
    {
        id: "2",
        text: "HTML/CSS",
    },
    {
        id: "3",
        text: "React Router",
    },
    {
        id: "4",
        text: "React DnD",
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function DragAndDrop() {
    const [tasks, setTasks] = useState(rooms);
    return (
        <DragDropContext
            onDragEnd={(result) => {
                  const { source, destination } = result;
                    if (!destination) {
                      return;
                    }
                    if (
                      source.index === destination.index &&
                      source.droppableId === destination.droppableId
                    ) {
                      return;
                    }
                    setTasks((prevTasks) =>
                      reorder(prevTasks, source.index, destination.index)
                    );
                console.log({result})
            }}
        >
          <table>
            
                <h1>Pendientes</h1>

                <Droppable droppableId="tasks">
                    {(droppableProvided) => (
                        <tbody
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="task-container"
                        >
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(draggableProvided) => (
                                        <tr
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            className="task-item"
                                        >
                                          <td>
                                            <a href={`/rooms/${task.id}`}>
                                            </a>
                                          </td>
                                          
                                            {task.id}
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </tbody>
                    )}
                </Droppable>
            </table>
        </DragDropContext>
    );
}

export default DragAndDrop;