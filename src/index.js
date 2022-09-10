import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import profileImage from "./img/profile.JPG";
import post1 from "./img/1.png";
import post2 from "./img/2.jpg";
import start from "./img/stratuppakicon.png";
import qasim from "./img/qasim suri.jpg";
import withshura from "./img/with shura.jpg";
import hishamserwar from "./img/hishamserwar icon.jpg"
import post3 from "./img/3.jpg"

const Posts = ({
  profileimageurl,
  title,
  more,
  body,
  imageUrl,
  like,
  comment,
  share,
}) => (
  <div className="all-post">
    <div className="userprofile">
      <img src={profileimageurl} alt="" />
      <h2>{title}</h2>
      <button>{more}</button>
    </div>
    <p>{body}</p>
    <img src={imageUrl} alt=" " />
    <div className="all-button">
      <p className="userreact"></p>
      <button>{like}</button>
      <button>{comment}</button>
      <button>{share}</button>
    </div>
  </div>
);
const Post = () => (
  <>
    <Posts
      profileimageurl={profileImage}
      title="ahmed imran"
      more={<i class="fa-solid fa-ellipsis"></i>}
      body="India's all Hopes of Staying in Asia Cup Dies as Pakistan Wins Against Afghanistan"
      imageUrl={post1}
      like={<i class="fa-regular fa-thumbs-up">Like</i>}
      comment={<i class="fa-regular fa-comment">comment</i>}
      share={<i class="fa-solid fa-share">Share</i>}
    />

    <Posts
      profileimageurl={start}
      title="stratup Pakistan"
      body="Queen is Passesaway"
      imageUrl={post2}
      like={<i class="fa-regular fa-thumbs-up">Like</i>}
      comment={<i class="fa-regular fa-comment">comment</i>}
      share={<i class="fa-solid fa-share">Share</i>}
    />

    <Posts
      profileimageurl={qasim}
      title="Qasim Khan Suri"
      body="Pti nominates"
      imageUrl={withshura}
      like={<i class="fa-regular fa-thumbs-up">Like</i>}
      comment={<i class="fa-regular fa-comment">comment</i>}
      share={<i class="fa-solid fa-share">Share</i>}
    />

    <Posts
      profileimageurl={hishamserwar}
      title="Hisham Sarwar"
      body=" "
      imageUrl={post3}
      like={<i class="fa-regular fa-thumbs-up">Like</i>}
      comment={<i class="fa-regular fa-comment">comment</i>}
      share={<i class="fa-solid fa-share">Share</i>}
    />
  </>
);
ReactDOM.render(<Post />, document.querySelector("#root"));
