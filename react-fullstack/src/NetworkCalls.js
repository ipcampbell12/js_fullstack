async function getAllPosts(func) {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    func(posts)
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

export { getAllPosts, fetchCreatePost };