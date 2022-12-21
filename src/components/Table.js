import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "./styled components/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { UserImage } from "./styled components/UserImage";
const Table = (props) => {
  const { headData, tableData, tableType } = props;

  const [tasks, setTasks] = useState(tableData);
  useEffect(()=>{
    setTasks(tableData)
  }, [tableData]);


  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const openModal = (e) => {
    const digit = e.target.id.slice(-1);
    const div = document.querySelector(`#modal_${digit}`);
    div.style.display = "block";
    window.onclick = function (event) {
      if (event.target.classList.contains("modal")) {
        console.log(event.target);
        event.target.style.display = "none";
      }
    };
  };

  return (
    <table
      className={
        tableType == "users"
          ? "target-component table table-users"
          : "target-component table"
      }
    >
      <thead>
        <tr>
          {headData.map((item) => (
            <th>{item}</th>
          ))}
          <th></th>
        </tr>
      </thead>
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
          console.log({ result });
        }}
      >
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <tbody {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="task-container">
              {tasks.map((room, index) => {

                return (
                  <Draggable key={room.id} draggableId={room.id} index={index}>
                    {
                      (draggableProvided) => (
                        <tr key={`tr_${index}`} {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="task-item">
                    {Object.keys(room).map((key, i) => {
                      switch (i) {
                        case 0:
                          if (tableType == "rooms") {
                            return (
                              <td>
                                <a href={`/rooms/${room.id}`}>
                                  <UserImage w_150 />
                                </a>
                              </td>
                            );
                          } else if (tableType == "users") {
                            return (
                              <td>
                                <UserImage w_45 />
                              </td>
                            );
                          } else if (tableType == "bookings") {
                            return (
                              <td className="flex">
                                <UserImage src={room[key][0]} />
                                <div>
                                  <span className="fw-500">{room[key][1]}</span>
                                  <span className="fs-14 table__bookingId">
                                    {room[key][2]}
                                  </span>
                                </div>
                              </td>
                            );
                          }
                          break;
                        case 1:
                          if (tableType == "bookings") {
                            const order_date = new Date(parseInt(room[key]));
                            return (
                              <td>
                                {order_date.toLocaleDateString("en-US", {
                                  month: "long",
                                }) +
                                  " " +
                                  order_date.getDate() +
                                  "th, " +
                                  order_date.getFullYear()}
                                <br />
                                {order_date.getHours() +
                                  ":" +
                                  order_date.getMinutes()}
                              </td>
                            );
                          } else {
                            return (
                              <td>
                                <span className="fw-500">{room[key]}</span>
                              </td>
                            );
                          }
                          break;
                        case 2:
                          if (tableType == "bookings") {
                            const check_in = new Date(parseInt(room[key]));
                            return (
                              <td>
                                {check_in.toLocaleDateString("en-US", {
                                  month: "long",
                                }) +
                                  " " +
                                  check_in.getDate() +
                                  "th, " +
                                  check_in.getFullYear()}
                                <br />
                                {check_in.getHours() +
                                  ":" +
                                  check_in.getMinutes()}
                              </td>
                            );
                          } else {
                            return (
                              <td>
                                <span className="fw-500">{room[key]}</span>
                              </td>
                            );
                          }
                          break;
                        case 3:
                          if (tableType == "bookings") {
                            const check_out = new Date(parseInt(room[key]));
                            return (
                              <td>
                                {check_out.toLocaleDateString("en-US", {
                                  month: "long",
                                }) +
                                  " " +
                                  check_out.getDate() +
                                  "th, " +
                                  check_out.getFullYear()}
                                <br />
                                {check_out.getHours() +
                                  ":" +
                                  check_out.getMinutes()}
                              </td>
                            );
                          } else {
                            return (
                              <td>
                                <span className="fw-500">{room[key]}</span>
                              </td>
                            );
                          }
                          break;
                        case 4:
                          if (tableType == "bookings") {
                            return (
                              <td>
                                {room[key].length > 0 ? (
                                  <>
                                    <div
                                      className="modal"
                                      id={`modal_${index}`}
                                    >
                                      <div className="modal-content">
                                        {room[key]}
                                      </div>
                                    </div>
                                    <Button
                                      viewNotes
                                      id={`modalBtn_${index}`}
                                      onClick={openModal}
                                    >
                                      View Notes
                                    </Button>
                                  </>
                                ) : (
                                  <Button viewNotes outlined>
                                    View Notes
                                  </Button>
                                )}
                              </td>
                            );
                          } else if (tableType == "users") {
                            const check_out = new Date(parseInt(room[key]));
                            return (
                              <td>
                                {check_out.toLocaleDateString("en-US", {
                                  month: "long",
                                }) +
                                  " " +
                                  check_out.getDate() +
                                  "th, " +
                                  check_out.getFullYear()}

                                {check_out.getHours() +
                                  ":" +
                                  check_out.getMinutes()}
                              </td>
                            );
                          } else {
                            return (
                              <td>
                                <span className="fw-500">{room[key]}</span>
                              </td>
                            );
                          }
                          break;
                        case 6:
                          if (tableType == "rooms") {
                            return (
                              <td>
                                <span className="fw-600">
                                  <strong>${room[key]}</strong> /night
                                </span>
                              </td>
                            );
                          } else if (tableType == "users") {
                            return (
                              <td>
                                <span className="fw-600">{room[key]}</span>
                              </td>
                            );
                          } else if (tableType == "bookings") {
                            return (
                              <td>
                                {room[key] == "Refund" ? (
                                  <Button refund>Refund</Button>
                                ) : (
                                  <Button booked>Booked</Button>
                                )}
                              </td>
                            );
                          }
                          break;
                        case 7:
                          if (tableType == "rooms") {
                            return (
                              <td>
                                {room[key] == "Available" ? (
                                  <Button available className="fs-600">
                                    {room[key]}
                                  </Button>
                                ) : (
                                  <Button booked red className="fs-600">
                                    {room[key]}
                                  </Button>
                                )}
                              </td>
                            );
                          } else if (tableType == "users") {
                            return (
                              <td>
                                {room[key] == "Active" ? (
                                  <span className="table__active fs-14 fw-600">
                                    {room[key]}
                                  </span>
                                ) : (
                                  <span className="table__inactive fs-14 fw-600">
                                    {room[key]}
                                  </span>
                                )}
                              </td>
                            );
                          }
                          break;
                        default:
                          return (
                            <td>
                              <span className="fw-500">{room[key]}</span>
                            </td>
                          );
                      }
                    })}
                    <td>
                      <SlOptionsVertical />
                    </td>
                  </tr>
                      )
                    }
                  </Draggable>
                );
              })}
              {droppableProvided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};
export default Table;
/*<td>
                <span className="fw-500 table__roomNumber">{room.id}</span>
              </td>
              <td>
                <span className="fw-500">{room.number}</span>
              </td>
              <td>
                <span className="fw-500">{room.type}</span>
              </td>
              <td>
                <span>{room.facilities}</span>
              </td>
              <td>
                <span>{room.rate}</span>
              </td>
              <td>
                <span>
                  <span className="fw-600 table__inline">
                    ${room.offer_price}
                  </span>{" "}
                  <span className="table__inline fs-14 c-green">/night</span>
                </span>
              </td>
              <td>
                {room.status === "Available" ? (
                  <Button available>Available</Button>
                ) : (
                  <Button booked red>
                    Booked
                  </Button>
                )}
              </td>
              <td>
                <SlOptionsVertical />
              </td> */
