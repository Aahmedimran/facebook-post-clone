import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import profileImage from "./img/profile.JPG";
import post1 from "./img/1.png";

const Posts = ({
  profileimageurl,
  title,
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
    </div>
    <p>{body}</p>
    <img src={imageUrl} alt=" " />
    <div>
      <button>{like}Like</button>
      <button class="dd">{comment}comment</button>
      <button class="55">{share}share</button>
      <p className="userreact"></p>
    </div>
  </div>
);
const Post = () => (
  <>
    <Posts
      profileimageurl={profileImage}
      title="ahmed imran"
      body="India's all Hopes of Staying in Asia Cup Dies as Pakistan Wins Against Afghanistan"
      imageUrl={post1}
      like={<i class="fa-regular fa-thumbs-up"></i>}
      comment={<i class="fa-regular fa-comment"></i>}
      share={<i class="fa-solid fa-share"></i>}
    />

    <Posts
      profileimageurl="https://scontent.fskt1-1.fna.fbcdn.net/v/t39.30808-6/268291303_4502523613200861_7795942138729581556_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGRZdZ4Tos5TpYU4xDfKpwBM3J0C6AmIIEzcnQLoCYgq4yhDeMH68cAgp90cPES1efNil9sdPMX1Y1fv7JP5gR&_nc_ohc=-Bi1z_fbUeQAX_pW_Zy&_nc_ht=scontent.fskt1-1.fna&oh=00_AT8RHzhyfeu6k0ZwT-NKdrqIbPWbmcFi8dI2CccHT4glTA&oe=631F2BE7"
      title="Pro Pakistani"
      body="Under the patronage of Senator Sherry Rehman, Federal Minister of Climate Change, The Coca-Cola Company, in partnership with the Karachi Port Trust, brought leaders from across the country for a roundtable session, to build a coalition to clean up the Lyari River."
      imageUrl="https://scontent.fskt1-1.fna.fbcdn.net/v/t39.30808-6/305984912_5301024780017403_5039310799794760269_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1ohPb70yx5SHGfJqkVCK2sSeFLbT8iQWxJ4UttPyJBYn5K2Gtl4HWrl6Dm47kR8DJP3wa8s2ZiRftSTFzfePq&_nc_ohc=LH_nD2sUwRkAX9Ru711&_nc_ht=scontent.fskt1-1.fna&oh=00_AT8Zfhl0mkRctyLb439JXgKhYJWA1BGeJlRRELftwyv7HQ&oe=631E7E25"
      like={<i class="fa-regular fa-thumbs-up"></i>}
      comment={<i class="fa-regular fa-comment"></i>}
      share={<i class="fa-solid fa-share"></i>}
    />

    <Posts
      profileimageurl="https://scontent.fskt1-1.fna.fbcdn.net/v/t39.30808-1/286994611_577294730428570_491487757655038127_n.jpg?stp=dst-jpg_p160x160&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeFOKIYB6kUOAKYTYmIYLnGwWu_dZqFJoRFa791moUmhESnfyQjG9-BWmOCBrA2JcuiIPWpvIDWTqK7kmbHb3Peu&_nc_ohc=h5iY7VbntSwAX934uPb&_nc_ht=scontent.fskt1-1.fna&oh=00_AT9vd71Y15E0BqYa9Q5bDbuKKD1QWl2c0cHPwH_sPYssuQ&oe=631F582F"
      title="Qasim Khan Suri"
      body=""
      imageUrl="https://scontent.fskt1-1.fna.fbcdn.net/v/t1.6435-9/107041345_3541532632542834_3120601308807811393_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGDoAQzFCkwIzxzcFrTGlu2Cty78pQYXZIK3LvylBhdkkhFJgFIMRTMyB-ZGXARzLDJj4uvJF9MW1bACNG4Vvcf&_nc_ohc=4j52zGQeMtYAX956a05&_nc_ht=scontent.fskt1-1.fna&oh=00_AT_9sakuO9uEBfdiAelk7TZkXqhQdmBw1k8m0HBPe5nHAA&oe=633FE4D5"
      like={<i class="fa-regular fa-thumbs-up"></i>}
      comment={<i class="fa-regular fa-comment"></i>}
      share={<i class="fa-solid fa-share"></i>}
    />

    <Posts
      profileimageurl="https://scontent.fskt1-1.fna.fbcdn.net/v/t1.6435-9/190680905_334882061341055_5449280296271203632_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeERPZdSD9MFusJwx_OQZHdJPjAqt1HskFE-MCq3UeyQUTtEvluG_DUWfy3vvcyEMQkaZakMvEHxYRDdrglesLWe&_nc_ohc=R9VHh5OX83IAX-K2Jaz&_nc_ht=scontent.fskt1-1.fna&oh=00_AT_AItYUTQ2E81qT8-rvCXgBffLszgHBL_G-N6AMpXCkTw&oe=633FDDFA"
      title="Hisham Sarwar"
      body=" "
      imageUrl="https://scontent.fskt1-1.fna.fbcdn.net/v/t39.30808-6/305923221_630806635081928_2561093547641065743_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGnLAqJ0zaPMAr1Kl8W-d4JrzD1tV7POaevMPW1Xs85pyGfEBVr61lA2aJCiyRbtYydgNyRaSjBsmLq7wvoXCcu&_nc_ohc=hM6nkrHRug8AX-uU0qL&tn=vYSc2M5k_MCko6R7&_nc_ht=scontent.fskt1-1.fna&oh=00_AT99WXgSlUzJf7deD0CrchcSJaGPP7tk-j8od0pLOvPAkQ&oe=631E881A"
      like={<i class="fa-regular fa-thumbs-up"></i>}
      comment={<i class="fa-regular fa-comment"></i>}
      share={<i class="fa-solid fa-share"></i>}
    />
  </>
);
ReactDOM.render(<Post />, document.querySelector("#root"));
