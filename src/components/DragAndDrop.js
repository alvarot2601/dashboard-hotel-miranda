import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BiTask } from "react-icons/bi";
const initialTask = [
  {
    id: 1,
    text: "React",
  },
  {
    id: 2,
    text: "React2",
  },
  {
    id: 3,
    text: "React3",
  },
];
const DragAndDrop = () => {
  const [task, setTask] = useState(initialTask);
  return (
    <DragDropContext onDragEnd={(event) => console.log(event)}>
      <Droppable droppableId="task">
        {(droppableProvided) => (
          <ul>
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            {task.map((task, index) => {
              <Draggable key={task.id} draggableId={task.id} index={index} >
                <li>
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                </li>
              </Draggable>;
            })}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
