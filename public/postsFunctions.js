;
var lizzy = (function() {
    var photoPosts = [

        {

            id: '1',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Аружан',

            photoLink: 'http://static.kulturologia.ru/files/u18476/emerging-artists-1.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '2',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T21:00:00'),

            author: 'Амели',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-2.jpg',
            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '3',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-13T23:20:00'),

            author: 'София',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-3.jpg',
            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '4',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-01-22T23:00:00'),

            author: 'Мари',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-4.jpg',
            likes: [],

            hashTags: ["#modern", "art"]

        },
        {

            id: '5',

            description: 'Modern art, 2017',

            createdAt: new Date('2017-12-23T23:00:00'),

            author: 'Павел',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-5.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '6',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-27T13:10:00'),

            author: 'Аркадий',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-6.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '7',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-01-17T23:00:00'),

            author: 'Евгений',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-7.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '8',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-03-14T20:00:00'),

            author: 'Артур',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-8.jpg',

            likes: [],

            hashTags: ["#modern"]

        },
        {

            id: '9',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T22:00:00'),

            author: 'Анна',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-9.jpg',

            likes: [],

            hashTags: ["#art"]

        },
        {

            id: '10',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-27T23:59:00'),

            author: 'Алёна',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-10.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '11',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-11.jpg',

            likes: [],

            hashTags: ["#modern", "#art", "#beautiful"]

        },
        {

            id: '12',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-12.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '13',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-13.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '14',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-14.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '15',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-15.jpg',
            likes: [],

            hashTags: ["#modern", "#art"]

        }, {

            id: '16',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-16.jpeg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '17',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-17.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '18',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-18.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '19',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-19.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        },
        {

            id: '20',

            description: 'Modern art, 2017',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-20.jpg',

            likes: [],

            hashTags: ["#modern", "#art"]

        }


    ];

    photoPosts.sort(function(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
    if (localStorage.getItem("photoPosts") == undefined) {
        localStorage.setItem("photoPosts", JSON.stringify(photoPosts))
    }

    //registered users
    localStorage.setItem("Liza", JSON.stringify("414141"))
    localStorage.setItem("Аружан", JSON.stringify("1313"))
    var filterConfig = {}
    //localStorage.setItem("filterConfig", JSON.stringify(filterConfig))


    //JS

    function arrayCompare(fst, snd) {
        if (snd === undefined) {
            return false
        }
        console.log(fst)
        console.log(snd)
        for (i = 0; i < fst.length; ++i) {
            if (snd.indexOf(fst[i]) === -1) {
                return false
            }
            snd.splice(snd.indexOf(fst[i]), 1)
        }
       return true
    }

    function getPhotoPosts(skip, top, filterConfig) {
        var postsSegment = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        console.log("getPhotoPosts")
        console.log(postsSegment)
       // console.log(filterConfig.hashTags !== undefined && filterConfig.hashTags.length !== 0)
        if (filterConfig !== null && filterConfig.author !== undefined && filterConfig.author.length > 0) {
            postsSegment = postsSegment.filter(function(post) {
                return post.author === filterConfig.author
            });
        }

        if (filterConfig !== null && filterConfig.createdAt !== undefined && filterConfig.createdAt !==null) {
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
        if ((typeof(photoPost.id) === 'string') && (photoPost.id !== '') && (photoPosts.find(function(value) {
                return value.id === (photoPost.id)
            }) === undefined) &&
            (typeof(photoPost.description) === 'string' && 0 < photoPost.description.length && photoPost.description.length < 200) &&
            (photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt)) //&& typeof photoPost.createdAt === Date
            &&
            (typeof(photoPost.author) === 'string' && photoPost.author !== '') &&
            (typeof(photoPost.photoLink) === 'string' && photoPost.photoLink !== '')
        ) {
            return true;
        }

        if (!(typeof(photoPost.description) === 'string' && 0 < photoPost.description.length && photoPost.description.length < 200)) {
            alert("wrong description")
        }
        if (!(photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt))) {
            alert("wrong date")
        } 
        if (!(typeof(photoPost.author) === 'string' && photoPost.author !== '')) {
            alert("wrong author")
        }
        if (!(typeof(photoPost.photoLink) === 'string' && photoPost.photoLink !== '')) {
            alert("wrong photo link")
        }
        return false;
    }

    if (localStorage.getItem("nextId") === null) {
        localStorage.setItem("nextId", JSON.stringify("21"))
    }

    function addPhotoPost(photoPost) {
        localStorage.setItem("nextId", JSON.stringify(JSON.parse(localStorage.getItem("nextId")) + 1))
        photoPosts = localStorage.getItem("photoPosts") ? JSON.parse(localStorage.getItem("photoPosts")) : []
        if (validatePhotoPost(photoPost) === false) {
            console.log('wrong')
            return false;
        }
        else {
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
        console.log("editPhotoPost")
        console.log("id and photoPost")
        console.log(id)
        console.log(photoPost)
        var postToEdit = getPhotoPost(id)
        console.log("postToEdit")
        console.log(postToEdit)
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

        console.log(photoPosts)
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

    //Events


    function removeEvent(event) {
        var id = event.currentTarget.getAttribute('postId')
        console.log("id of removed post:" + id)
        remove(id)
        showAppropriate()
    }

    function editEvent(event) {
        var postToEdit = getPhotoPost(event.currentTarget.getAttribute('postId'))
        localStorage.setItem("postToEdit", JSON.stringify(postToEdit))
        localStorage.setItem("addOrEdit", JSON.stringify(false))
        location.href = "edit.html"
    }

    function removeOrEditEvent(event) {
        console.log(event.target.parentElement.parentElement.className)
        console.log(event.target.parentElement.className)
        console.log(event.target.className)
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

        console.log(filterConfig)
        localStorage.removeItem("filterConfig")
        localStorage.setItem("filterConfig", JSON.stringify(filterConfig))
        showAppropriate(10)

    }


    //DOM
    function addPost(id, position) {
        var photoPost = getPhotoPost(id)
        if (photoPost !== undefined) {
            var post = document.createElement('div')
            post.className = "post"
            post.setAttribute('postId', id)

            var postInfo = document.createElement('div')
            postInfo.className = "post-info"

            var spanAuthor = document.createElement('span')
            spanAuthor.textContent = photoPost.author
            postInfo.appendChild(spanAuthor)

            if (photoPost.author.localeCompare(user) === 0) {
                var editButton = document.createElement('button')
                editButton.className = "edit-button"
                var editIcon = document.createElement('i')
                editIcon.className = "fas fa-pencil-alt"
                editButton.appendChild(editIcon)
                postInfo.appendChild(editButton)

                var deleteButton = document.createElement('button')
                deleteButton.className = "remove-button"
                post.addEventListener('click', removeOrEditEvent)
                var deleteIcon = document.createElement('i')
                deleteIcon.className = "fas fa-times"

                deleteButton.appendChild(deleteIcon)
                postInfo.appendChild(deleteButton)
            }

            var spanDate = document.createElement('span')

            var DateOfCreation = new Date(photoPost.createdAt)
            spanDate.textContent = DateOfCreation.getDate() + "." + (DateOfCreation.getMonth() + 1) + "." + DateOfCreation.getUTCFullYear() + " " + DateOfCreation.getHours() + ":" + DateOfCreation.getMinutes()

            postInfo.appendChild(spanDate)
            post.appendChild(postInfo)

            var image = document.createElement('img')
            image.className = "photo"
            image.setAttribute('src', photoPost.photoLink)
            post.appendChild(image)

            var postReaction = document.createElement('div')

            var likeButton = document.createElement('button')
            likeButton.className = "like"
            var likeIcon = document.createElement('i')
            likeIcon.className = "far fa-heart"
            likeButton.appendChild(likeIcon)

            var hashtags = document.createElement('textarea')
            hashtags.disabled = true

            if (photoPost.hashTags !== undefined && photoPost.hashTags.length !== 0) {
                hashtags.innerText = photoPost.hashTags.toString()
            }

            var div = document.createElement('div')
            var description = document.createElement('textarea')
            description.disabled = true
            description.innerText = photoPost.description
            div.appendChild(description)
            postReaction.appendChild(likeButton)
            postReaction.appendChild(hashtags)
            postReaction.appendChild(div)
            post.appendChild(postReaction)

            var childToAppendBefore = postsSection.firstChild
            if (position !== undefined) {
                for (i = 1; i < position; ++i) {
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            } else if (childToAppendBefore !== null) {
                while (childToAppendBefore !== null ){
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            }
            postsSection.insertBefore(post, childToAppendBefore)
            return true
        }
        return false
    }

    function removeAllPosts() {
        var childToRemove = postsSection.firstChild
        while (childToRemove !== null) {
            postsSection.removeChild(childToRemove)
            childToRemove = postsSection.firstChild
        }
    }

    function removePost(id) {
        {
            var childToRemove = postsSection.firstChild
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
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== null) {
            var userName = document.createTextNode(user)
            var header = document.getElementsByTagName('header')
            header[0].insertBefore(userName, header[0].firstChild.nextSibling.nextSibling)
            return true
        }
        return false
    }

    function showAddButton() {
        var user = JSON.parse(localStorage.getItem("user"))
        if (user !== null) {
            var addButton = document.createElement('button')
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
    function show() {
        photoPosts.sort(function(a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        for (i = 0; i < 10 && i < photoPosts.length; ++i) {
            addPost(photoPosts[i].id)
        }
    }

    var appropriateShown

    function showAppropriate(number) {
        filterConfig = JSON.parse(localStorage.getItem("filterConfig"))
        var appropriatePosts = getPhotoPosts(0, number || 10, filterConfig)
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
        console.log("appropr" + appropriateShown)
        filterConfig = JSON.parse(localStorage.getItem("filterConfig"))
        var appropriatePosts = getPhotoPosts(0, appropriateShown + 10, filterConfig)
        console.log(appropriatePosts)
        for (i = appropriateShown; i < appropriatePosts.length; ++i) {
            addPost(appropriatePosts[i].id)
        }
        appropriateShown = i
        console.log("appropr" + appropriateShown)
    }


    function add(photoPost) {
        addPhotoPost(photoPost)
        return addPost(photoPost.id)
    }

    function remove(id) {
        console.log("removed post:")
        console.log(photoPosts[photoPosts.findIndex(function(post) {
            return post.id === id;
        })])
        removePost(id)
        return removePhotoPost(id)
    }

    function edit(id, photoPost) {
        editPhotoPost(id, photoPost)
        removePost(id)
        addPost(id)
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost,

        showHeader: showHeader,
        showAddButton: showAddButton,

        show: show,
        add: add,
        remove: remove,
        edit: edit,

        showAppropriate: showAppropriate,
        showMore: showMore,
        setFilterConfig: setFilterConfig,
        validatePhotoPost: validatePhotoPost
    }
})();