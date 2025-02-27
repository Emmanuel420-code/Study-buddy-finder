document.addEventListener("DOMContentLoaded", () => {
    let blogContainer = document.getElementById("blog-posts");
    let posts = JSON.parse(localStorage.getItem("blog-posts")) || [];

    if (posts.length === 0) {
        blogContainer.innerHTML = "<p class='empty-message'>No posts yet. Be the first to write one!</p>";
    } else {
        posts.forEach((post, index) => {
            let postElement = document.createElement("div");
            postElement.classList.add("blog-post");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content.substring(0, 100)}...</p>
                <p class="category">${post.category || "General"}</p>
                <div class="post-buttons">
                <a href="blog-post.html?index=${index}" class="read-more">Read more</a>
                <button class="edit-btn" onclick="editPost(${index})"> Edit</button>
                <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                </div>
                `;
            blogContainer.appendChild(postElement);    
        });
    }

});

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    if (confirm("Are you sure you want to delete this post?")) {
        posts.splice(index, 1);
        localStorage.setItem("blogPosts", JSON.stringify(posts));
        location.reload();
    }
}

function editPost(index) {
    window.location.href = `edit-post.html?index=$`;
}