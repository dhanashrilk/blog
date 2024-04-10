import { useState } from "react";

function BlogsComponent(props) {
  const [blog, setblog] = useState({});
  const blogsModalUpdate = (item) => {
    // console.log(item);
    setblog(item);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <button className="blog_btn txt-color shadow px-4 py-1 fs-6 fw-semibold rounded-pill">
              Our blog
            </button>
            <p className="heading_txt fs-1 fw-semibold">
              Resources and insights
            </p>
            <p className="txt-color fs-5 fw-medium">
              The latest industry news, interviews, technologies, and resources.
            </p>
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2 w-auto"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {props.blogs.map((blog, index) => (
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 my-3"
              key={index}
            >
              <div className="card p-3">
                <img
                 src={blog.banner} 
                
                  className="card-img-top"
                  alt="Product Image"
                />
                <div className="card-body px-0">
                  <p className="card-title fs-6 fw-semibold txt-color">
                    {blog.category}
                  </p>
                  <div className="d-flex justify-content-between">
                    <p className="card-head fs-5 fw-bold">{blog.postTitle}</p>

                    <a
                      className="card-head pt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => blogsModalUpdate(blog)}
                    >
                      <i className="fa fa-external-link"></i>
                    </a>
                  </div>
                  <p className="card-sub-head fs-6 fw-light">
                    {blog.postContent}
                  </p>

                  <div className="d-flex justify-content-arround pt-2 my-3">
                    <div className="w-auto">
                      <img src={blog.profilePic} width="50px" alt="User Pic" />
                    </div>

                    <div className="ps-2">
                      <p className="user_name fs-6 fw-bold mb-0">
                        {blog.userName}
                      </p>
                      <p className="post_date fs-6 fw-semibold mt-0">
                        {blog.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="card-head fs-4 fw-bold" id="exampleModalLabel">
                {blog.postTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-justify">
              <div className="text-center ">
                <p className="fs-6 fw-semibold txt-color">{blog.category}</p>
                <img src={blog.banner} alt="Banner" />
              </div>
              <blockquote className="pt-2 card-head fs-6 fw-semibold fst-italic text-center">
                {blog.quotes}
              </blockquote>

              <p className="card-sub-head fs-6 fw-light">{blog.description}</p>

              <div className="d-flex justify-content-arround pt-2 my-3">
                <div className="w-auto">
                  <img src={blog.profilePic} alt="Profile" />
                </div>

                <div className="ps-2">
                  <p className="user_name fs-6 fw-bold mb-0">{blog.userName}</p>
                  <p className="post_date fs-6 fw-semibold mt-0">{blog.date}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn back_btn"
                data-bs-dismiss="modal"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogsComponent;
