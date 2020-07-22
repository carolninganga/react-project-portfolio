import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./style.css";

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <h1>Blog</h1>
        <div className="col-12">
          <div className="card">
            <BlogCard className="importedCard" />
          </div>
        </div>
      </div>
    </div>
  );
}
