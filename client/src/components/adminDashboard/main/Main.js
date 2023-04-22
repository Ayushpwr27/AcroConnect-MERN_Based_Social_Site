import "./Main.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../../home/Posts";
import Discover from "../../../pages/discover";
import LoadIcon from '../../../images/loading.gif'
import Search from "../../header/Search";
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
// import Chart from "../charts/Chart";
import {
  getTotalUsers,
  getTotalPosts,
  getTotalComments,
  getTotalLikes,
  getTotalActiveUsers,
  getTotalSpamPosts,
} from "../../../redux/actions/adminAction";


const Main = () => {
    const { auth, admin, socket,homePosts } = useSelector((state) => state);
    const dispatch = useDispatch();
    const mystyle = {
      // className="btn-1 hover-in-shadow outer-shadow"
      // color: "white",
      // backgroundColor: "DodgerBlue",
      // paddingLeft: "20px",
      // fontFamily: "Arial"
      // textDecoration : "none",
      // width:"100px"
      
    };
    useEffect(() => {
      dispatch(getTotalUsers(auth.token));
      dispatch(getTotalPosts(auth.token));
      dispatch(getTotalComments(auth.token));
      dispatch(getTotalLikes(auth.token));
      dispatch(getTotalSpamPosts(auth.token));
      dispatch(getTotalActiveUsers({ auth, socket }));
    }, [dispatch, auth.token, socket, auth]);
  return (
    <div className="main_admin">
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title" >
          <div className="main__greeting">
            <h1>Hello {auth.user.username}</h1>
            <p>Welcome to your Admin Dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards" style={mystyle}>
          <div className="card_admin">
            <i
              className="fa fa-users fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Users</p>
              <span className="font-bold text-title">{admin.total_users}</span>
            </div>
          </div>

          {/* <div className="card_admin">
            <i className="fa fa-comments fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Comments</p>
              <span className="font-bold text-title">
                {admin.total_comments}
              </span>
            </div>
          </div> */}

          <div className="card_admin">
            <i
              className="fa fa-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Posts</p>
              <span className="font-bold text-title">{admin.total_posts}</span>
            </div>
          </div>

          <div className="card_admin">
            <i className="fa fa-ban fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Reported Posts</p>
              <span className="font-bold text-title">{admin.total_spam_posts}</span>
            </div>
          </div>

          {/* <div className="card_admin">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner_admin">
              <p className="text-primary-p">Total Likes</p>
              <span className="font-bold text-title">{admin.total_likes}</span>
            </div>
          </div> */}

          <div className="card_admin">
            <i
              className="fa fa-search fa-2x  text-green"
              aria-hidden="true"
            ></i>
              <Search/>
            

          </div>
        </div>
        <button
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          className="btn-1 outer-shadow hover-in-shadow statusBtn flex-fill "
          style={{ marginLeft: "7px" , width:"500px"}}
        >
          <span style={{ textShadow: "var(--outer-shadow)" }}>
            {/* {auth.user.username}, What's on your mind? */}
            POST
          </span>
        </button>
        <h5
            className="color-c5"
            style={{ textShadow: "var(--outer-shadow)" }}
          >
            My Posts :
          </h5>
          {homePosts.loading ? (
            <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
          ) : (homePosts.result === 0 ? <h2 className="text-center">You Have Not Posted Anything</h2> :<Posts />
          )}
        <h5
            className="color-c5"
            style={{ textShadow: "var(--outer-shadow)" }}
          >
            Latest Posts :
          </h5>
        <Discover />

        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE 
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        CHARTS ENDS HERE --> */}
      </div>
    </div>
  );
};

export default Main;
