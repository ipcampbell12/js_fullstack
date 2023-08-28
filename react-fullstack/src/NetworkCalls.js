async function getAllPosts(func) {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    await func(posts)
}
async function getPostById(func, id) {
    const response = await fetch(`http://localhost:3001/posts/${id}`);
    const post = await response.json();
    await func(post)
}

async function getAllComments(func, id) {
    const response = await fetch(`http://localhost:3001/comments/${id}`);
    const comments = await response.json();
    await func(comments)
}


async function fetchCreatePost(data) {
    console.log(data);
    return fetch("http://localhost:3001/posts", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json());

}
async function fetchCreateComment(data) {
    //console.log(data);
    return fetch("http://localhost:3001/comments", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(resp => console.log(resp));

}

async function registerUser(data) {
    //console.log(data);
    return fetch("http://localhost:3001/auth", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(resp => console.log(resp));

}

async function loginUser(data) {
    //console.log(data);
    return fetch("http://localhost:3001/auth/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(resp => console.log(resp));

}


export { getAllPosts, fetchCreatePost, getAllComments, getPostById, fetchCreateComment, registerUser, loginUser };