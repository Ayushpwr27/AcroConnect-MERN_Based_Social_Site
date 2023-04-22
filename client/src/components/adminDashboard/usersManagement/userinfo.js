import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UserCard from "../../UserCard";
import FollowBtn from "../../FollowBtn";
import LoadIcon from "../../../images/loading.gif";
import Viewuserinfobtn from '../../veiwuserinfobtn';
import Deleteuserbtn from './deleteuserbtn';
import { getSuggestions } from "../../../redux/actions/suggestionsAction";
import { GLOBALTYPES } from "../../../redux/actions/globalTypes";
import Search from '../../header/Search';
const Userinfo = () => {

    const { auth, suggestions } = useSelector((state) => state);
    const dispatch = useDispatch();
    const mystyle = {
      // className="btn-1 hover-in-shadow outer-shadow"
      // color: "white",
      // backgroundColor: "DodgerBlue",
      // padding: "10px",
      // fontFamily: "Arial"
      textDecoration : "none"
    };

  

    return (
        <div className="my-4">
        <div className="inner-shadow" style={{ borderRadius: "5px" }}>
          <UserCard user={auth.user} />
        </div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <h5
            className="color-c1"
            style={{ textShadow: "var(--outer-shadow)" }}
          >
            Manage Users :
          </h5>
          {!suggestions.loading && (
            <div className="outer-shadow hover-in-shadow btn-1 d-flex justify-content-center align-items-center">
              <i
                className="fas fa-redo "
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(getSuggestions(auth.token))}
              />
            </div>
          )}
        </div>
            
        {suggestions.loading ? (
          <img
            src={LoadIcon}
            alt="Loading..."
            className="d-block mx-auto my-4"
          />
        ) : (
          <div className="suggestions">
            {suggestions.users.map((user) => (
              <div
                key={user._id}
                className=" mb-3 inner-shadow"
                style={{ borderRadius: "5px" }}
              >
                <UserCard key={user._id} user={user}>
                  <div>
                <Link className="btn-1 hover-in-shadow outer-shadow" style={mystyle}  to={`/profile/${user._id}`}>
              View Profile
            </Link><Link className="btn-1 hover-in-shadow outer-shadow" style={mystyle}  to={`/message/${user._id}`}>
              Chat
            </Link>
            <Deleteuserbtn key={user._id} user={user} />
            </div>
            {/* <Link className="btn-1 hover-in-shadow outer-shadow" style={mystyle}  to={`/delete_user/${user._id}`}>
              Delete
            </Link> */}

                  {/* <FollowBtn key={user._id} user={user} /> */}
                  {/* <Deleteuserbtn key={user._id} user={user} /> */}
                </UserCard>
              </div>
              
            ))}
          </div>
        )}
      </div>
    );
}

export default Userinfo
