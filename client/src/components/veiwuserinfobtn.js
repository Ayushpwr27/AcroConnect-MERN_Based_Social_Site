import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
// import { follow, unfollow } from "../redux/actions/profileAction";

const Viewuserinfobtn = ({}) => {
  const [id] = useState();
    const history = useHistory();
    const Showuser = () =>
    {
      history.push('/profile/:id',{user : id});
    }

    return (
      <>
      <form action="">
          <button className="btn-1 hover-in-shadow outer-shadow" onClick={Showuser}>
            View Profile
          </button>
          </form>
      </>
    );
}

export default Viewuserinfobtn
