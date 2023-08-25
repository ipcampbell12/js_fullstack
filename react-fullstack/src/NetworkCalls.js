async function getAllPosts(func) {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    func(posts)
}
async function getPostById(func, id) {
    const response = await fetch(`http://localhost:3001/posts/${id}`);
    const post = await response.json();
    func(post)
}

async function getAllComments(func) {
    const response = await fetch("http://localhost:3001/comments");
    const comments = await response.json();
    func(comments)
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


export { getAllPosts, fetchCreatePost, getAllComments, getPostById };