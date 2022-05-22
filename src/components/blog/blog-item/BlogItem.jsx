import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  return (
    <Link to={`/blog/${props.Poster}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={props.Poster} className="blog-cover" />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
        </Card.Body>
        <Card.Footer>{/*           <BlogAuthor {...author} /> */}</Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
