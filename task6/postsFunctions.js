;
var lizzy = (function() {
    let photoPosts = [];
    let filterConfig = {}
    photoPosts.sort(function(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });

    //registered users
    // localStorage.setItem("Liza", JSON.stringify("414141"))
    // localStorage.setItem("Аружан", JSON.stringify("1313"))
    
    //JS
    function arrayCompare(fst, snd) {
        if (snd === undefined) {
            return false
        }
        console.log(fst)
        console.log(snd)
        for (let i = 0; i < fst.length; ++i) {
            if (snd.indexOf(fst[i]) === -1) {
                return false
            }
            snd.splice(snd.indexOf(fst[i]), 1)
        }
        return true
    }

    function getPhotoPosts(skip, top, filterConfig) {
        let postsSegment = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        //console.log("getPhotoPosts")
        //console.log(postsSegment)
        // console.log(filterConfig.hashTags !== undefined && filterConfig.hashTags.length !== 0)
        if (filterConfig !== null && filterConfig.author !== undefined && filterConfig.author.length > 0) {
            postsSegment = postsSegment.filter(function(post) {
                return post.author === filterConfig.author
            });
        }

        if (filterConfig !== null && filterConfig.createdAt !== undefined && filterConfig.createdAt !== null) {
            postsSegment =
                postsSegment.filter(function(post) {
                    return new Date(post.createdAt).getDate() === new Date(filterConfig.createdAt).getDate() &&
                        new Date(post.createdAt).getMonth() === new Date(filterConfig.createdAt).getMonth() &&
                        new Date(post.createdAt).getUTCFullYear() === new Date(filterConfig.createdAt).getUTCFullYear()
                });
        }

        if (filterConfig !== null && filterConfig.hashTags !== undefined && filterConfig.hashTags.length !== 0) {
            console.log(filterConfig.hashTags)
            postsSegment = postsSegment.filter(function(post) {
                return arrayCompare(filterConfig.hashTags, post.hashTags)
            });
        }
        postsSegment.sort(function(a, b) {
            return a.createdAt - b.createdAt;
        });
        return postsSegment.slice(skip || 0, skip || 0 + top || 10);
    }

    function getPhotoPost(id) {
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        return (photoPosts.find(function(post) {
            return post.id === id
        }))
    }


    function validatePhotoPost(photoPost) {
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        /* if ((typeof(photoPost.id) === 'string') && (photoPost.id !== '') && (photoPosts.find(function(value) {
                 return value.id === (photoPost.id)
             }) === undefined) &&
             (typeof(photoPost.description) === 'string' && 0 < photoPost.description.length && photoPost.description.length < 200) &&
             (photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt)) //&& typeof photoPost.createdAt === Date
             &&
             (typeof(photoPost.author) === 'string' && photoPost.author !== '') &&
             (typeof(photoPost.photoLink) === 'string' && photoPost.photoLink !== '')
         ) {
             return true;
         }*/

        if (!(typeof(photoPost.description) === 'string' && 0 < photoPost.description.length && photoPost.description.length < 200)) {
            alert("wrong description")
            return false
        }
        if (!(photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt))) {
            alert("wrong date")
            return false
        }
        if (!(typeof(photoPost.author) === 'string' && photoPost.author !== '')) {
            alert("wrong author")
            return false
        }
        if (!(typeof(photoPost.photoLink) === 'string' && photoPost.photoLink !== '')) {
            alert("wrong photo link")
            return false
        }
        return true

    }

    if (localStorage.getItem("nextId") === null) {
        localStorage.setItem("nextId", JSON.stringify("21"))
    }

    function addPhotoPost(photoPost) {
        localStorage.setItem("nextId", JSON.stringify(JSON.parse(localStorage.getItem("nextId")) + 1))
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        if (validatePhotoPost(photoPost) === false) {
            // console.log('wrong')
            return false;
        } else {
            photoPosts.push(photoPost);
            photoPosts.sort(function(a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
            localStorage.removeItem("photoPosts")
            localStorage.setItem("photoPosts", JSON.stringify(photoPosts))
            return true
        }
    }


    function editPhotoPost(id, photoPost) {
        // console.log("editPhotoPost")
        // console.log("id and photoPost")
        // console.log(id)
        // console.log(photoPost)
        let postToEdit = getPhotoPost(id)
        // console.log("postToEdit")
        // console.log(postToEdit)
        if (postToEdit === undefined) {
            return false
        }
        if (typeof photoPost.description === 'string') {
            postToEdit.description = photoPost.description
        }
        if (typeof photoPost.photoLink === 'string') {
            postToEdit.photoLink = photoPost.photoLink
        }
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        photoPosts.splice(
            photoPosts.findIndex(function(elem) {
                return elem.id == id
            }), 1, postToEdit)

        //console.log(photoPosts)
        localStorage.removeItem("photoPosts")
        localStorage.setItem("photoPosts", JSON.stringify(photoPosts))
        return true;

    }

    function removePhotoPost(id) {
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        photoPosts.splice(photoPosts.findIndex(function(value) {
            return value.id === id
        }), 1)
        localStorage.removeItem("photoPosts")
        localStorage.setItem("photoPosts", JSON.stringify(photoPosts))
        return true;
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }

})();

var lizzyDOM = (function() {
    //Events
    function removeEvent(event) {
        let id = event.currentTarget.getAttribute('postId')
        console.log("id of removed post:" + id)
        remove(id)
        showAppropriate()
    }

    function editEvent(event) {
        let postToEdit = lizzy.getPhotoPost(event.currentTarget.getAttribute('postId'))
        localStorage.setItem("postToEdit", JSON.stringify(postToEdit))
        localStorage.setItem("addOrEdit", JSON.stringify(false))
        location.href = "edit.html"
    }

    function removeOrEditEvent(event) {
        // console.log(event.target.parentElement.parentElement.className)
        //console.log(event.target.parentElement.className)
        //console.log(event.target.className)
        if (event.target.className === "remove-button" || event.target.parentElement.className === "remove-button" || event.target.parentElement.parentElement.className === "remove-button") {
            removeEvent(event)
        }
        if (event.target.className === "edit-button" || event.target.parentElement.className === "edit-button" || event.target.parentElement.parentElement.className === "edit-button") {
            editEvent(event)
        }
    }

    function setFilterConfig() {
        filterConfig.author = document.getElementById("name-search").value
        filterConfig.createdAt = new Date(document.getElementById("date-search").value)
        filterConfig.hashTags = document.getElementById("hashtag-search").value.split(" ").filter(function(elem) {
            return elem !== null && elem.length > 0 && typeof(elem) !== undefined
        })

        // console.log(filterConfig)
        localStorage.removeItem("filterConfig")
        localStorage.setItem("filterConfig", JSON.stringify(filterConfig))
        showAppropriate(10)
    }


    //DOM

    //addPost helper functions
    function createPostInfo(photoPost) {
        const postInfo = document.createElement('div')
        postInfo.className = "post-info"
        postInfo.innerHTML = `
<span> ${photoPost.author}</span>
<span> ${new Date(photoPost.createdAt).getDay().toString()+'.'+new Date(photoPost.createdAt).getMonth().toString()+' '+
new Date(photoPost.createdAt).getFullYear().toString()+' '+new Date(photoPost.createdAt).getHours().toString()+':'+new Date(photoPost.createdAt).getMinutes().toString()}
</span>
`
        return postInfo
    }

    function createPostImage(photoPost) {
        const postImage = document.createElement('img')
        postImage.className = "photo"
        postImage.setAttribute('src', photoPost.photoLink)
        return postImage
    }

    function createPostReaction(photoPost) {
        const postReaction = document.createElement('div')
        postReaction.innerHTML = `
<button class="like">
    <i class="far fa-heart"> </i>
</button>
<textarea disabled=true> ${photoPost.hashTags?photoPost.hashTags.toString(): ""}</textarea>
<div>
    <textarea disabled=true>${photoPost.description} </textarea>
</div>
`
        return postReaction
    }

    function createEditAndDeleteButtons(postInfo, photoPost) {
        if (photoPost.author.localeCompare(user) === 0) {
            const editButton = document.createElement('button')
            editButton.className = "edit-button"
            editButton.innerHTML = `
<i class="fas fa-pencil-alt"></i>
`
            postInfo.insertBefore(editButton, postInfo.firstChild.nextSibling.nextSibling)

            const deleteButton = document.createElement('button')
            deleteButton.className = "remove-button"
            deleteButton.innerHTML = `
<i class="fas fa-times"></i>
`
            postInfo.insertBefore(deleteButton, postInfo.firstChild.nextSibling.nextSibling.nextSibling)
        }
    }

    //DOM
    function addPost(id, position) {
        const photoPost = lizzy.getPhotoPost(id)
        if (photoPost) {
            const post = document.createElement('div')
            post.className = "post"
            post.setAttribute('postId', id)

            const postInfo = createPostInfo(photoPost)
            //delete and edit buttons in postInfo if necessary
            createEditAndDeleteButtons(postInfo, photoPost)
            const postImage = createPostImage(photoPost)
            const postReaction = createPostReaction(photoPost)

            //forming post
            post.appendChild(postInfo)
            post.appendChild(postImage)
            post.appendChild(postReaction)
            post.addEventListener('click', removeOrEditEvent)
            //adding post to right place
            let childToAppendBefore = postsSection.firstChild
            if (position) {
                for (let i = 1; i < position; ++i) {
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            } else if (childToAppendBefore !== null) {
                while (childToAppendBefore !== null && lizzy.getPhotoPost(childToAppendBefore.getAttribute('postId')).createdAt < lizzy.getPhotoPost(post.getAttribute('postId')).createdAt) {
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            }
            postsSection.insertBefore(post, childToAppendBefore)
            return true
        }
        return false

    }

    function removeAllPosts() {
        let childToRemove = postsSection.firstChild
        while (childToRemove !== null) {
            postsSection.removeChild(childToRemove)
            childToRemove = postsSection.firstChild
        }
    }

    function removePost(id) {
        {
            let childToRemove = postsSection.firstChild
            while (childToRemove !== null && childToRemove.getAttribute("postId") !== id) {
                childToRemove = childToRemove.nextSibling

            }
            if (childToRemove !== null) {
                postsSection.removeChild(childToRemove)

                return true;
            }
        }
        return false;
    }


    function showHeader() {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user !== null) {
            var userName = document.createTextNode(user)
            var header = document.getElementsByTagName('header')
            header[0].insertBefore(userName, header[0].firstChild.nextSibling.nextSibling)
            return true
        }
        return false
    }

    function showAddButton() {
        let user = JSON.parse(localStorage.getItem("user"))
        if (user !== null) {
            const addButton = document.createElement('button')
            addButton.className = "add-button"
            addButton.innerText = "Add new photo!"
            addButton.addEventListener("click", addNewPhoto)

            function addNewPhoto() {
                localStorage.setItem("addOrEdit", JSON.stringify(true))
                location.href = "edit.html"
            }
            document.body.insertBefore(addButton, document.getElementById("search-panel"))
            return true
        }
        return false
    }

    //DOM + JS

    var appropriateShown

    function showAppropriate(number) {
        filterConfig = JSON.parse(localStorage.getItem("filterConfig"))
        let appropriatePosts = lizzy.getPhotoPosts(0, number || 10, filterConfig)
        console.log(appropriatePosts)
        removeAllPosts()
        for (i = 0; i < appropriatePosts.length; ++i) {
            addPost(appropriatePosts[i].id)
        }
        appropriateShown = i
        if (appropriateShown === 0) {
            alert("We haven't posts that meet your search configurations:(")
        }
    }

    function showMore(event) {
        // console.log("appropr" + appropriateShown)
        filterConfig = JSON.parse(localStorage.getItem("filterConfig"))
        let appropriatePosts = lizzy.getPhotoPosts(0, appropriateShown + 10, filterConfig)
        // console.log(appropriatePosts)
        let i = appropriateShown
        for (; i < appropriatePosts.length; ++i) {
            addPost(appropriatePosts[i].id)
        }
        appropriateShown = i
        //  console.log("appropr" + appropriateShown)
    }

    function add(photoPost) {
        lizzy.addPhotoPost(photoPost)
        return addPost(photoPost.id)
    }

    function remove(id) {
        // console.log("removed post:")
        // console.log(photoPosts[photoPosts.findIndex(function(post) {
        //   return post.id === id;
        // })])
        removePost(id)
        return lizzy.removePhotoPost(id)
    }

    function edit(id, photoPost) {
        lizzy.editPhotoPost(id, photoPost)
        removePost(id)
        addPost(id)
    }

    return {
        showHeader: showHeader,
        showAddButton: showAddButton,

        add: add,
        remove: remove,
        edit: edit,

        showAppropriate: showAppropriate,
        showMore: showMore,
        setFilterConfig: setFilterConfig
    }

})();