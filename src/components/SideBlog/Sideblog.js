import "./SideBlog.css";
import { Link } from "react-router-dom";

const SideBlog = () => {
  return (
    <div className="levbitz_side_blog_wrap">
      <div>
        <input type="text " placeholder="seach blog" />
      </div>

      <div>
        {/* <Link to="/">
          <img
            className="responsive-img"
            src="https://d1vl6ykwv1m2rb.cloudfront.net/assets/blog-to-truebil.jpg"
            alt=""
          />
  </Link>*/}
      </div>

      <div className="levbitz_liking_blog">
        <div>
          <h5>Like our blog?</h5>
          <p>
            Read the latest posts in your inbox. Subscribe to our email
            newsletter. Wo do not spam.
          </p>

          <div>
            <input type="text" name="" id="" placeholder="enter email" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SideBlog;
