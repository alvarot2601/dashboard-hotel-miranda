import React from "react";
import { useParams } from "react-router";
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';
import styled, { css } from "styled-components";
import { UserImage, Button } from "../components/StyledComponents";
const RoomCard = styled.div`
    padding: 40px;
    span, label{
        display:block;
    }
    input{
        border:none;
    }
`;
const RoomInfo = styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    p{
        margin:none;
    }
`;
const SingleRoom = styled.div`
    display:flex;
    flex-direction:row;
    > div{
        flex-basis:50%;
    }
    
    .singleRoom{
        &__row{
            display:flex;
            flex-direction:row;
            gap:40px;
            margin-bottom:20px;
        }
        &__row--2, &__row--3{
            > div{
                flex-basis:50%;
            }
        }
        &__row--2{
            margin-bottom:40px;
        }
        &__row--3{
            margin-top:20px;
            margin-bottom:0px;
        }
        &__name, &__roomName{
            color: #212121;
        }
        &__name{
            font-size:30px;
            margin-bottom:13px;
        }
        &__roomName{
            font-size:24px;
        }
        &__id{
            color: #799283;
            margin-bottom:21px;
        }
        &__facilities{
            display:flex;
            flex-wrap:wrap;
            gap:15px;
            margin-top:10px;
            div{
                background-color:#EEF9F2;
                color: #135846;
                border-radius:12px;
                padding:15px 10px;
            }
        }
    }
`;
const Room = () => {
    const {roomId} = useParams();
    return (
        <main>
            <SingleRoom className="target-component singleRoom">
                <RoomCard>
                    <div>
                        <div className="singleRoom__row">
                            <UserImage w_156/>
                            <div>
                                <span className="singleRoom__name fw-600">Roberto Mansini</span>
                                <span className="singleRoom__id fs-14 fw-500">ID: {roomId}</span>
                                <div className="flex">
                                    <Button phone>
                                        <BsFillTelephoneFill />
                                    </Button>
                                    <Button sendMessage>
                                        <AiFillMessage /> Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="singleRoom__row singleRoom__row--2">
                            <div>
                                <label className="fs-14 c-grey fw-500" for="check_in">Check In</label>
                                <input type="date" name="check_in" id="check_in" />
                            </div>
                            <div>
                                <label className="fs-14 c-grey fw-500" for="check_out">Check Out</label>
                                <input type="date" name="check_out" id="check_out" />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <RoomInfo>
                        <div className="singleRoom__row singleRoom__row--3">
                            <div>
                                <span className="fs-14 c-grey fw-500">Room Info</span>
                                <span className="singleRoom__roomName">Deluxe z - 002424</span>
                            </div>
                            <div>
                                <span className="fs-14 c-grey fw-500">Price</span>
                                <span>
                                    <span>$145</span> <span>/night</span>
                                </span>
                            </div>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <div>
                            <span className="fs-14 c-grey fw-500">Facilities</span>
                             <div className="singleRoom__facilities">
                                <div className="fw-600">3 Bed Space</div>
                                <div className="fw-600">3 Bed Space</div>
                                <div className="fw-600">3 Bed Space</div>
                                <div className="fw-600">3 Bed Space</div>
                                <div className="fw-600">3 Bed Space</div>
                                <div className="fw-600">3 Bed Space</div>
                             </div>
                        </div>
                    </RoomInfo>
                </RoomCard>
                <div style={{background:'red'}}>
                    d
                </div>
            </SingleRoom>
        </main>
    );
}
export default Room;