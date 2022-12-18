import React from "react";
import { Button, UserImage } from "./StyledComponents";
import { SlOptionsVertical } from "react-icons/sl";

const Table = (props) => {
  const { headData, tableData, tableType } = props;
  const openModal = (e) => {
    const digit = e.target.id.slice(-1);
    const div = document.querySelector(`#modal_${digit}`);
    div.style.display = "block"
    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        console.log(event.target)
        event.target.style.display = "none";
      }
    }
  }
  return (
    <table className="target-component table">
      <thead>
        <tr>
          {headData.map((item) => (
            <th>{item}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((room, index) => {
          return (
            <tr key={`tr_${index}`}>
              {Object.keys(room).map((key, i) => {
                if (tableType == "rooms") {
                  switch (i) {
                    case 0:
                      return (
                        <td>
                          <a href={`/rooms/${room.id}`}>
                            <UserImage w_150 />
                          </a>
                        </td>
                      );
                      break;
                    case 6:
                      return (
                        <td>
                          <span className="fw-600">
                            <strong>${room[key]}</strong> /night
                          </span>
                        </td>
                      );
                      break;

                    case 7:
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
                      break;
                    default:
                      return (
                        <td>
                          <span className="fw-500">{room[key]}</span>
                        </td>
                      );
                  }
                } else if (tableType == "users") {
                  switch (i) {
                    case 0:
                      return (
                        <td>
                          <UserImage w_150 />
                        </td>
                      );
                      break;
                    case 6:
                      return (
                        <td>
                          <span className="fw-600">{room[key]}</span>
                        </td>
                      );
                      break;
                    case 7:
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
                      break;

                    default:
                      return (
                        <td>
                          <span className="fw-500">{room[key]}</span>
                        </td>
                      );
                  }
                } else if (tableType == "bookings") {
                  switch (i) {
                    case 0:
                      return (
                        <td className="flex">
                          <UserImage src={room[key][0]} />
                          <div>
                            <span className="fw-500">{room[key][1]}</span>
                            <span className="fs-14 table__bookingId">{room[key][2]}</span>
                          </div>
                        </td>
                      );
                      break;
                      case 1:
                        const order_date = new Date(parseInt(room[key]));
                        return (
                          <td>
                            {
                              order_date.toLocaleDateString('en-US', {
                                month:'long', 
                              }) + ' ' + order_date.getDate() + 'th, ' + order_date.getFullYear() 
                              
                            }
                            <br/>
                            {
                              order_date.getHours() + ':' + order_date.getMinutes()
                            }
                          </td>
                        );
                        break;
                      case 2:
                        const check_in = new Date(parseInt(room[key]));
                        return (
                          <td>
                            {
                              
                                check_in.toLocaleDateString('en-US', {
                                  month:'long', 
                                }) + ' ' + check_in.getDate() + 'th, ' + check_in.getFullYear() 
                            }
                            <br/>
                              {
                                check_in.getHours() + ':' + check_in.getMinutes()
                              }
                          </td>
                        );
                        break;
                      case 3:
                          const check_out = new Date(parseInt(room[key]));
                          return (
                            <td>
                            {
                              
                              check_out.toLocaleDateString('en-US', {
                                  month:'long', 
                                }) + ' ' + check_out.getDate() + 'th, ' + check_out.getFullYear() 
                            }
                            <br/>
                              {
                                check_out.getHours() + ':' + check_out.getMinutes()
                              }
                          </td>
                          );
                          break;
                      case 4:
                        return (
                          <td>
                            {
                              room[key].length>0
                              ? 
                              <>
                                <div className="modal" id={`modal_${index}`}>
                                  <div className="modal-content">
                                    {
                                      room[key]
                                    }
                                  </div>
                                </div>
                                <Button viewNotes id={`modalBtn_${index}`} onClick={openModal}>View Notes</Button>
                              </>
                              : <Button viewNotes outlined>View Notes</Button>
                            }
                          </td>
                        );
                        break;
                    case 6:
                      return (
                        <td>
                          {
                            room[key] == 'Refund'? <Button refund>Refund</Button> : <Button booked>Booked</Button>
                          }
                          
                        </td>
                      );
                      break;
                    default:
                      return (
                        <td>
                          <span className="fw-500">{room[key]}</span>
                        </td>
                      );
                  }
                }
              })}
              <td>
                <SlOptionsVertical />
              </td>
            </tr>
          );
        })}
      </tbody>
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
