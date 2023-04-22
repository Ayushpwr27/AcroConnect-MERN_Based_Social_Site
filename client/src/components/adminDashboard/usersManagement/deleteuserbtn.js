import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { follow, unfollow } from "../redux/actions/profileAction";
import { deleteUser } from '../../../redux/actions/adminAction';
import { Link, useHistory } from "react-router-dom";
const Deleteuserbtn = ({user}) => {
    // const [ followed, setFollowed ] = useState(false);

    // const { auth, profile, socket } = useSelector(state => state);
    const dispatch = useDispatch();

    // const [load, setLoad] = useState(false);

    // const [load, setLoad] = useState(false);
    const {auth, profile, socket} = useSelector((state) => state);
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const handleDeletePost = () => {
    //   if(window.confirm("Are you sure?" , {user})){
    //     dispatch(deleteUser({users: profile.users, user, auth, socket}));
    //     return history.push("/");
    //   }
      
    // };
    const handleDeleteUser = (user) => {
       
      dispatch(deleteUser({ user, auth }));
     
   };


    return (
      <>
      <div
                className="btn-1 hover-in-shadow outer-shadow"
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteUser(user)}
              >
                {/* {user._id} */}
                Delete
              </div>
          {/* <button className="btn-1 hover-in-shadow outer-shadow" onClick={handleDeleteUser(user)} >
            Delete User
          </button> */}
      </>
    );
}

export default Deleteuserbtn
