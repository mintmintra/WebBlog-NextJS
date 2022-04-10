import React, { Component } from "react";
import Layout from "../components/Layout";
import axios from 'axios';

class Index extends Component{

    static async getInitialProps() {
        const res = await axios.get("http://localhost:3001/blogs");
        return { blogs: res.data };
    }

    renderBlogs = blogs => {
        return (
            blogs.map(blog => {
                return (
                    <div key={blog.id} className="col-6">
                        <img src={blog.thumbnail} className="img-fluid" />
                        <h4 className="mt-3">
                            {blog.subject}
                        </h4>
                        <hr />
                        <p className="text-justify">{ blog.intro}</p>
                    </div>
                )
            })
        )
    }

    render() {
        console.log(this.props.blogs);
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        {this.renderBlogs(this.props.blogs)}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Index;