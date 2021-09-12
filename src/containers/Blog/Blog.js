import React, { useEffect, useState } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'
import post from '../../components/Post/Post';

// const posts = [
//     {
//         id: '',
//         title: '',
//         author: ''
//     }
// ];

const Blog = () => {

    const [posts, setPosts] = useState([
        {
            id: '',
            title: '',
            author: ''
        }
    ]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => console.log(error))
    }, []);

    const postsJSX = posts.map(post => {
        return <Post key={`${post.title}--${post.author}`} title={post.title} author={post.author} />
    });

    return (
        <div>
            <section className="Posts">
                {/* <Post title={posts[0].title} author={posts[0].author} />
                <Post title={posts[1].title} author={posts[1].author} />
                <Post title={posts[2].title} author={posts[2].author} /> */}

                {postsJSX}
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;