lizzyDOM.showHeader()

        document.getElementById("authorization-button").addEventListener('click', inOrOut)
        function inOrOut() {
            localStorage.removeItem("user")
            location.href = "index.html"
        }
        document.getElementById("add-button").addEventListener('click', addPost)
function addPost() {
            if (JSON.parse(localStorage.getItem("addOrEdit"))) {
                const postToAdd = {}
                postToAdd.id = JSON.parse(localStorage.getItem("nextId")).toString()
                postToAdd.author = JSON.parse(localStorage.getItem("user"))
                postToAdd.createdAt = new Date()
                postToAdd.description = document.getElementById("description").value
                postToAdd.photoLink = document.getElementById("photo-link").value ? document.getElementById("photo-link").value :
                    "bridge.jpg"
                if (lizzy.addPhotoPost(postToAdd)) {
                    localStorage.removeItem("addOrEdit")
                    location.href = "index.html"
                }
            } 
            else {

                const photoPost = JSON.parse(localStorage.getItem("postToEdit"));
                photoPost.author = JSON.parse(localStorage.getItem("user"))
                photoPost.description = document.getElementById("description").value
                photoPost.photoLink = "pictures/trees.jpg"

                localStorage.removeItem("postToEdit")
                localStorage.setItem("postToEdit", JSON.stringify(photoPost))

                if (lizzy.editPhotoPost(photoPost.id, photoPost)) {
                    localStorage.removeItem("addOrEdit")
                    location.href = "index.html"
                }
            }

        }
    