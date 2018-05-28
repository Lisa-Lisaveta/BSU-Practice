let user = JSON.parse(localStorage.getItem("user"))
lizzyDOM.showHeader()
lizzyDOM.showAddButton()

document.getElementById("authorization-button").addEventListener('click', inOrOut)
function inOrOut() {
    if (user !== null) {
        localStorage.removeItem("user")
        location.href = "index.html"
    } else {
        location.href = "authorization.html"
    }
}

document.getElementsByClassName("show-more-button")[0].addEventListener("click", lizzyDOM.showMore)
const postsSection = document.getElementsByClassName("posts-section")[0]

lizzyDOM.showAppropriate(10)
console.log(JSON.parse(localStorage.getItem("photoPosts")))

