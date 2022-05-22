import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [movieInfo, setMovieInfo] = useState([]);

  let fetchData = async () => {
    let response = await fetch("https://m5d10-benchmark.herokuapp.com/media");
    let body = await response.json();
    console.log(body);
    setMovieInfo(body);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {movieInfo.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem movieInfo={post} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
