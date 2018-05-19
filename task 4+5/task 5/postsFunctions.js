;
var lizzy = (function() {
    const photoPosts = [

        {

            id: '1',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Аружан',

            photoLink: 'http://static.kulturologia.ru/files/u18476/emerging-artists-1.jpg'

        },
        {

            id: '2',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T21:00:00'),

            author: 'Амели',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-2.jpg'

        },
        {

            id: '3',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-13T23:20:00'),

            author: 'София',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-3.jpg'

        },
        {

            id: '4',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-01-22T23:00:00'),

            author: 'Мари',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-4.jpg'

        },
        {

            id: '5',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2017-12-23T23:00:00'),

            author: 'Павел',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-5.jpg'

        },
        {

            id: '6',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-27T13:10:00'),

            author: 'Аркадий',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-6.jpg'

        },
        {

            id: '7',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-01-17T23:00:00'),

            author: 'Евгений',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-7.jpg'

        },
        {

            id: '8',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-03-14T20:00:00'),

            author: 'Артур',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-8.jpg'

        },
        {

            id: '9',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T22:00:00'),

            author: 'Анна',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-9.jpg'

        },
        {

            id: '10',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-27T23:59:00'),

            author: 'Алёна',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-10.jpg'

        },
        {

            id: '11',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-11.jpg'

        },
        {

            id: '12',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-12.jpg'

        },
        {

            id: '13',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-13.jpg'

        },
        {

            id: '14',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-14.jpg'

        },
        {

            id: '15',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-15.jpg'

        }, {

            id: '16',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-16.jpeg'

        },
        {

            id: '17',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-17.jpg'

        },
        {

            id: '18',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-18.jpg'

        },
        {

            id: '19',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Liza',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-19.jpg'

        },
        {

            id: '20',

            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',

            createdAt: new Date('2018-02-23T23:00:00'),

            author: 'Иванов Иван',

            photoLink: 'https://static.kulturologia.ru/files/u18476/emerging-artists-20.jpg'

        }


    ];
    //JS

    function getPhotoPosts(skip, top, filterConfig) {
        const postsSegment = photoPosts;
        if (filterConfig && filterConfig.author) {
            postsSegment = postsSegment.filter(function(post) {
                return post.author === filterConfig.author
            });
        }
        if (filterConfig && filterConfig.createdAt) {
            postsSegment = postsSegment.filter(function(post) {
                return post.createdAt === filterConfig.createdAt
            });
        }
        postsSegment.sort(function(a, b) {
            return a.createdAt - b.createdAt;
        });
        return postsSegment.slice(skip || 0, skip || 0 + top || 10);
    }

    function getPhotoPost(id) {
        return (photoPosts.find(function(post) {
            return post.id === id
        }))
    }

    function validatePhotoPost(photoPost) {
        let validateInfo = (typeof photoPost.id === 'string') && (photoPost.id !== '') && (photoPosts.find(function(value) {
                return value.id.localeCompare(photoPost.id) === 0
            }) === undefined) &&
            (typeof photoPost.description === 'string' && photoPost.description.length < 200) &&
            (photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt)) //&& typeof photoPost.createdAt === Date
            &&
            (typeof photoPost.author === 'string' && photoPost.author !== '') &&
            (typeof photoPost.photoLink === 'string' && photoPost.photoLink !== '')
        console.log(validateInfo)
        console.log(typeof photoPost.description)
        if (validateInfo) {
            return true;
        }
        return false;
    }

    function addPhotoPost(photoPost) {
        if (!validatePhotoPost(photoPost)) {
            console.log('wrong')
            return -1;
        } else {
            if (photoPosts.length === 0 || photoPost.createdAt > photoPosts[photoPosts.length - 1].createdAt) {
                photoPosts.push(photoPost)
                return photoPosts.length - 1;
            } else {
                let i = 0;
                for (; i < photoPosts.length; ++i) {
                    if (photoPost.createdAt <= photoPosts[i].createdAt) {
                        photoPosts.splice(i + 1, 0, photoPost)
                        break
                    }
                }
                return i + 1;
            }
        }
    }


    function editPhotoPost(id, photoPost) {
        const postToEdit = getPhotoPost(id)
        if (postToEdit === undefined) {
            return false
        }
        if (typeof photoPost.description === 'string') {
            postToEdit.description = photoPost.description
        }

        if (typeof photoPost.photoLink === 'string') {
            postToEdit.photoLink = photoPost.photoLink
        }
        photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)), 1, postToEdit)
        return true;

    }

    function removePhotoPost(id) {
        photoPosts.splice(photoPosts.findIndex(function(value) {
            return value.id === id
        }), 1)
        return true;
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost,
        photoPosts: photoPosts

    }
})();

var lizzyDOM = (function() {
    photoPosts = lizzy.photoPosts

    //addPost helper functions
    function createPostInfo(photoPost) {
        const postInfo = document.createElement('div')
        postInfo.className = "post-info"
        postInfo.innerHTML = `
    <span> ${photoPost.author}</span>
    <span> ${photoPost.createdAt.getDay().toString()+'.'+photoPost.createdAt.getMonth().toString()+' '+
    photoPost.createdAt.getHours().toString()+':'+photoPost.createdAt.getMinutes().toString()}
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
    <textarea disabled=true> #hashtags</textarea>
    <div>
        <textarea disabled=true>${photoPost.description} </textarea>
    </div>
    `
        return postReaction
    }

    function createEditAndDeleteButtons(postInfo, photoPost) {
        if (photoPost.author.localeCompare(user) === 0) {
            const editButton = document.createElement('button')
            editButton.innerHTML = `
    <i class="fas fa-pencil-alt"></i>
    `
            postInfo.insertBefore(editButton, postInfo.firstChild.nextSibling.nextSibling)


            const deleteButton = document.createElement('button')
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

    function removePost(position) {
        if (position > -1) {
            let childToRemove = postsSection.firstChild
            for (let i = 0; i < position && childToRemove !== null; ++i) {
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
        if (user !== null) {
            const userName = document.createTextNode(user)
            const header = document.getElementsByTagName('header')
            header[0].insertBefore(userName, header[0].firstChild.nextSibling.nextSibling)
            return true
        }
        return false
    }

    function showAddButton() {
        if (user !== null) {
            const addButton = document.createElement('button')
            addButton.className = "add-button"
            addButton.innerText = "Add new photo!"
            document.body.insertBefore(addButton, document.getElementById("search-panel"))
            return true
        }
        return false
    }

    //DOM + JS
    function show() {
        lizzy.photoPosts.sort(function(a, b) {
            return a.createdAt - b.createdAt;
        });
        for (let i = 0; i < 10 && i < lizzy.photoPosts.length; ++i) {
            addPost(lizzy.photoPosts[i].id)
        }

    }

    function showAppropriate(number) {
        const appropriatePosts = lizzy.getPhotoPosts(0, number)
        for (let i = 0; i < 10; ++i) {
            removePost(i)
        }
        for (let i = 0; i < number; ++i) {
            addPost(appropriatePosts[i])
        }
    }

    function add(photoPost) {
        let index = lizzy.addPhotoPost(photoPost)
        console.log(index)
        if (index < 10 && index > -1) //add returns index, add saves increasing order, checks id
        {
            addPost(photoPost.id, index)
            return true
        }
        return false
    }

    function remove(id) {
        console.log(photoPosts.findIndex(function(post) {
            return post.id === id;
        }))
        console.log(photoPosts[photoPosts.findIndex(function(post) {
            return post.id === id;
        })])
        removePost(photoPosts.findIndex(function(post) {
            return post.id === id;
        }))

        return lizzy.removePhotoPost(id)
    }

    function edit(id, photoPost) {
        lizzy.editPhotoPost(id, photoPost)
        removePost(photoPosts.findIndex(function(value) {
            return value.id === id;
        }))
    }

    return {
        addPost: addPost,
        removePost: removePost,
        showHeader: showHeader,
        showAddButton: showAddButton,


        show: show,
        showAppropriate: showAppropriate,
        add: add,
        remove: remove,
        edit: edit
    }
})();