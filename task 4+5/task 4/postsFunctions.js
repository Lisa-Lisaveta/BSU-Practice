;
var lizzy = (function() {
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
        let postsSegment = photoPosts;
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
        let postToEdit = getPhotoPost(id)
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
    }

})();