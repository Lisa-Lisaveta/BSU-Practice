;var lizzy = (function () {
    var photoPosts = [

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

            photoLink:  'https://static.kulturologia.ru/files/u18476/emerging-artists-6.jpg'

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

        },        {

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

    function getPhotoPosts(skip, top, filterConfig){

        var postsSegment = photoPosts;

        if(filterConfig !== undefined && filterConfig.author !== undefined){
            postsSegment = postsSegment.filter(function (post) { return post.author===filterConfig.author });
        }

        if(filterConfig !== undefined && filterConfig.createdAt !== undefined){
            postsSegment = postsSegment.filter(function (post) { return post.createdAt===filterConfig.createdAt });
        }


        postsSegment.sort(function(a,b){return a.createdAt - b.createdAt;});

        return postsSegment.slice(skip||0, skip||0+top||10);
    }

   function getPhotoPost(id) {
       return(photoPosts.find(function (post) {
           return post.id===id
       }))
   }


    function validatePhotoPost(photoPost){
console.log((typeof photoPost.id === 'string') && (photoPost.id!=='') && (photoPosts.find(function (value) { return value.id.localeCompare(photoPost.id) })===undefined)
    &&
    (typeof photoPost.description === 'string' &&photoPost.descriprion.length < 200)
    &&
    (photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt))//&& typeof photoPost.createdAt === Date
    &&
    (typeof photoPost.author === 'string' && photoPost.author!=='')
    &&
    (typeof photoPost.photoLink === 'string' && photoPost.photoLink!==''))

       if( (typeof (photoPost.id) === 'string')&& (photoPost.id!=='') && (photoPosts.find(function (value) { return value.id.localeCompare(photoPost.id) })===undefined)
            &&
            (typeof (photoPost.description) === 'string' &&photoPost.descriprion.length < 200)
           &&
            (photoPost.createdAt && Object.prototype.toString.call(photoPost.createdAt) === "[object Date]" && !isNaN(photoPost.createdAt))//&& typeof photoPost.createdAt === Date
           &&
            (typeof (photoPost.author) === 'string' && photoPost.author!=='')
           &&
            (typeof (photoPost.photoLink) === 'string' && photoPost.photoLink!=='')){
    return true;
       }
        return false;
    }

    function addPhotoPost(photoPost){
       if(validatePhotoPost(photoPost) === false){
           console.log('wrong')
           return -1;
       }
       else{
           //photoPosts.push(photoPost);
           //photoPosts.sort(function(a,b){return a.createdAt - b.createdAt;});
           if(photoPosts.length===0 || photoPost.createdAt > photoPosts[photoPosts.length-1].createdAt){
               photoPosts.push(photoPost)
               return photoPosts.length-1;
           }
           else{
               for(i=0;i<photoPosts.length;++i){
                   if(photoPost.createdAt <= photoPosts[i].createdAt){
                       photoPosts.splice(i+1,0,photoPost)
                       break
                   }
               }
               return i+1;
           }



       }
    }


    function editPhotoPost(id, photoPost){


           var postToEdit = getPhotoPost(id)
        if(postToEdit === undefined){
               return false
        }
           if(typeof photoPost.description === 'string'){
               postToEdit.description = photoPost.description
           }

           if(typeof photoPost.photoLink === 'string'){
               postToEdit.photoLink = photoPost.photoLink
           }
           photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)),1,postToEdit)
           return true;

    }

    function removePhotoPost(id)
    {
        photoPosts.splice(photoPosts.findIndex(function (value) { return value.id === id }),1)
        return true;
    }
//Events
    function removeEvent(event) {
        var id = event.target.parentElement.parentElement.getAttribute('postId')
        remove(id)
        show()//Appropriate(3)
        //need to change show
    }
    
    
    //DOM
    function addPost(id, position) {
        var photoPost = getPhotoPost(id)
        if(photoPost!==undefined){
            var post = document.createElement('div')
            post.className = "post"
            post.setAttribute('postId', id)

            var postInfo = document.createElement('div')
            postInfo.className = "post-info"

            var spanAuthor = document.createElement('span')
            spanAuthor.textContent = photoPost.author
            postInfo.appendChild(spanAuthor)

            if(photoPost.author.localeCompare(user)===0 ){
                var editButton = document.createElement('button')
                var editIcon = document.createElement('i')
                editIcon.className = "fas fa-pencil-alt"
                editButton.appendChild(editIcon)
                postInfo.appendChild(editButton)


                var deleteButton = document.createElement('button')
                deleteButton.addEventListener('click',removeEvent)
                var deleteIcon = document.createElement('i')
                deleteIcon.className = "fas fa-times"
                deleteButton.appendChild(deleteIcon)
                postInfo.appendChild(deleteButton)
            }

            var spanDate = document.createElement('span')
            spanDate.textContent = photoPost.createdAt.getDay().toString()+'.'+photoPost.createdAt.getMonth().toString()+' '+photoPost.createdAt.getHours().toString()+':'+photoPost.createdAt.getMinutes().toString()

            /*if(user!==null) {
                 postInfo.appendChild(editButton)
                postInfo.appendChild(deleteButton)
            }*/

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
            hashtags.innerText = '#hashtags'

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
            if(position!==undefined){
                for(i=1;i<position;++i){
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            }
            else if(childToAppendBefore!==null){
                while(childToAppendBefore!==null && getPhotoPost(childToAppendBefore.getAttribute('postId')).createdAt < getPhotoPost(post.getAttribute('postId')).createdAt){
                    childToAppendBefore = childToAppendBefore.nextSibling
                }
            }

            postsSection.insertBefore(post, childToAppendBefore)
            //return childToAppendBefore
            return true
        }
        return false

    }

    function removePost(position) {
        if(position > -1 ){
            var childToRemove = postsSection.firstChild
            for(i=0;i<position && childToRemove!==null;++i){
                childToRemove = childToRemove.nextSibling
            }
            if(childToRemove!==null){
                postsSection.removeChild(childToRemove)
                return true;
            }
        }
        return false;

    }

   /* function editPost(id, position, photoPost){
        editPhotoPost(id, photoPost)
        removePost(id,position)
        addPost(id,position)
    }*/

    function showHeader() {
        if(user!==null){
            var userName = document.createTextNode(user)
            var header = document.getElementsByTagName('header')
            header[0].insertBefore(userName, header[0].firstChild.nextSibling.nextSibling)
            //return header[0].firstChild.nextSibling
            //header[0].appendChild(userName)
            return true
        }
     return false
    }

    function showAddButton() {
        if(user!==null){
            var addButton = document.createElement('button')
            addButton.className = "add-button"
            addButton.innerText = "Add new photo!"
            document.body.insertBefore(addButton, document.getElementById("search-panel"))
            return true
        }
        return false
    }

    //DOM + JS
    function show() {
        photoPosts.sort(function(a,b){return a.createdAt - b.createdAt;});
        for(i=0;i<10 && i<photoPosts.length;++i){
            addPost(photoPosts[i].id)
        }

    }

    function showAppropriate(number){//,filterConfig) {
        var appropriatePosts = getPhotoPosts(0,number)//,filterConfig)
        for(i=0;i<10;++i){
            removePost(i)
        }
        for(i=0;i<number;++i){
            addPost(appropriatePosts[i])
        }
    }

    function add(photoPost) {
        index = addPhotoPost(photoPost)
        console.log(index)
       if( index <10 && index > -1) //add returns index, add saves increasing order, checks id
       {
           addPost(photoPost.id, index)
           return true
       }
       return false
    }

    function remove(id) {
        console.log(photoPosts.findIndex(function (post){
            return post.id===id;
        }))
        console.log(photoPosts[photoPosts.findIndex(function (post){
            return post.id===id;
        })])
        removePost(photoPosts.findIndex(function (post){
           return post.id===id;
        }))

        return removePhotoPost(id)
    }

    function edit(id, photoPost) {
        editPhotoPost(id, photoPost)
        removePost(photoPosts.findIndex(function (value) { return value.id===id; }))
        //addPost(id)
    }

    return{
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost,


        addPost: addPost,
        showHeader: showHeader,
        showAddButton: showAddButton,
        removePost: removePost,

        show: show,
        add: add,
        remove: remove,
        edit: edit,

        showAppropriate: showAppropriate

    }

})();
