import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="header">About Us</h1>
      <div class="row">
        <div class="col s12 m6">
          <div className="card cardSettings">
            <h5>What is Fano?</h5>
            <p>
              Fano is a web application that can be used to annotate images of
              clothes that have text printed on them. Data annotation is very
              important for the development of many AI and robotic applications.
              We have noticed that there is a large quanitity of clothes online,
              especially t-shirts and tops that have text printed on them,
              however, the text rarely gets annotated. Our application could
              potentially help provide a better search experience of clothes,
              assist retailers, but most importantly, it can allow AI models to
              get trained.
            </p>

            <p>
              And we need <em>your</em> help!
            </p>
            <p>
              Data annotation is extremely time consuming as there are thousands
              of images to be annotated. This application has been created to
              allow essentially anyone who has the time and is willing to get
              involved to annotate some images in their spare time.
            </p>
          </div>
        </div>
        <div class="col s12 m6">
          <div className="card cardSettings">
            <h5>Who are we?</h5>
            <p>
              This application has been commissioned by the ADAPT Centre and was
              created by 2nd and 3rd year Trinity College Students.
            </p>
            <img src="https://i1.wp.com/problemsolving.ie/wp-content/uploads/2016/06/Adapt_Logo_RGB.png?resize=219%2C188"></img>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
