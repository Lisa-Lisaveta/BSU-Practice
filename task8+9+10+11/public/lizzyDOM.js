const lizzyDOM = (function () {
  // Events
  function removeEvent(event) {
    const id = event.currentTarget.getAttribute('postId');
    console.log('id of removed post:' + id);
    remove(id)
      .then(() => {
        showAppropriate();
      });
  }

  function editEvent(event) {
    serverReq.get('/post', { id: event.currentTarget.getAttribute('postId') })
      .then(res => res.text())
      .then((res) => {
        if (res) {
          localStorage.setItem('postToEdit', res);
          localStorage.setItem('addOrEdit', 'false');
          location.href = 'edit.html';
        }
      });
  }

  function removeOrEditEvent(event) {
    if (event.target.className === 'remove-button' ||
    event.target.parentElement.className === 'remove-button' ||
    event.target.parentElement.parentElement.className === 'remove-button') {
      removeEvent(event);
    }
    if (event.target.className === 'edit-button' ||
    event.target.parentElement.className === 'edit-button' ||
    event.target.parentElement.parentElement.className === 'edit-button') {
      editEvent(event);
    }
  }

  function getFilterConfig() {
    const filterConfig = {};
    let temp = document.getElementById('name-search').value;
    if (temp && temp.length !== 0) {
      filterConfig.author = temp;
    }
    temp = document.getElementById('date-search').value;
    if (temp && temp.length !== 0) {
      filterConfig.createdAt = temp;
    }
    temp = document.getElementById('hashtag-search').value
      .split(' ')
      .filter(elem => elem !== null && elem.length > 0 && typeof (elem) !== 'undefined');
    if (temp && temp.length !== 0) {
      filterConfig.hashTags = temp;
    }
    if (Object.keys(filterConfig).length > 0) {
      return filterConfig;
    }
    return null;
  }


  // DOM

  // addPost helper functions
  function createPostInfo(photoPost) {
    const postInfo = document.createElement('div');
    postInfo.className = 'post-info';
    postInfo.innerHTML = `
              <span> ${photoPost.author}</span>
              <span> ${new Date(photoPost.createdAt).getDay().toString() + '.' + new Date(photoPost.createdAt).getMonth().toString() + ' ' +
                  new Date(photoPost.createdAt).getFullYear().toString() + ' ' + new Date(photoPost.createdAt).getHours().toString() + ':' + new Date(photoPost.createdAt).getMinutes().toString()}
              </span>
      `;
    return postInfo;
  }

  function createPostImage(photoPost) {
    const postImage = document.createElement('img');
    postImage.className = 'photo';
    postImage.setAttribute('src', photoPost.photoLink);
    return postImage;
  }

  function createPostReaction(photoPost) {
    const postReaction = document.createElement('div');
    postReaction.innerHTML = `
              <button class="like">
                  <i class="far fa-heart"> </i>
              </button>
              <textarea disabled=true> ${photoPost.hashTags ? photoPost.hashTags.toString() : ''}</textarea>
              <div>
                  <textarea disabled=true>${photoPost.description} </textarea>
              </div>
      `;
    return postReaction;
  }

  function createEditAndDeleteButtons(postInfo, photoPost) {
    if (photoPost.author.localeCompare(user) === 0) {
      const editButton = document.createElement('button');
      editButton.className = 'edit-button';
      editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
      postInfo.insertBefore(editButton, postInfo.firstChild.nextSibling.nextSibling);
      const deleteButton = document.createElement('button');
      deleteButton.className = 'remove-button';
      deleteButton.innerHTML = '<i class="fas fa-times"></i>';
      postInfo.insertBefore(deleteButton, postInfo.firstChild.nextSibling.nextSibling.nextSibling);
    }
  }

  // DOM
  function addPost(photoPost, position) {
    const post = document.createElement('div');
    post.className = 'post';
    post.setAttribute('postId', photoPost.id);

    const postInfo = createPostInfo(photoPost);
    // delete and edit buttons in postInfo if necessary
    createEditAndDeleteButtons(postInfo, photoPost);
    const postImage = createPostImage(photoPost);
    const postReaction = createPostReaction(photoPost);

    // forming post
    post.appendChild(postInfo);
    post.appendChild(postImage);
    post.appendChild(postReaction);
    post.addEventListener('click', removeOrEditEvent);
    // adding post to right place
    const temp = document.getElementsByClassName('post');
    let childToAppendBefore = temp[temp.length - 1];
    if (position) {
      if (temp.length > position) {
        childToAppendBefore = temp[position];
      }
    }
    if (childToAppendBefore !== null) {
      postsSection.insertBefore(post, childToAppendBefore);
    } else {
      postsSection.insertBefore(post, document.getElementsByClassName('show-more-button')[0]);
    }
  }


  function removeAllPosts() {
    let childToRemove = postsSection.firstChild;
    while (childToRemove !== null) {
      postsSection.removeChild(childToRemove);
      childToRemove = postsSection.firstChild;
    }
  }

  function removePost(id) {
    {
      let childToRemove = postsSection.firstChild;
      while (childToRemove !== null && childToRemove.getAttribute('postId') !== id) {
        childToRemove = childToRemove.nextSibling;
      }
      if (childToRemove !== null) {
        postsSection.removeChild(childToRemove);
        return true;
      }
    }
    return false;
  }


  function showHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      const userName = document.createTextNode(user);
      const header = document.getElementsByTagName('header');
      header[0].insertBefore(userName, header[0].firstChild.nextSibling.nextSibling);
      return true;
    }
    return false;
  }

  function showAddButton() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      const addButton = document.createElement('button');
      addButton.className = 'add-button';
      addButton.innerText = 'Add new photo!';
      addButton.addEventListener('click', () => {
        localStorage.setItem('addOrEdit', JSON.stringify(true));
        location.href = 'edit.html';
      });
      document.body.insertBefore(addButton, document.getElementById('search-panel'));
      return true;
    }
    return false;
  }

  // DOM + JS

  let appropriateShown;

  function showAppropriate(skip, top) {
    serverReq.post('/posts', { skip, top }, getFilterConfig())
      .then(res => res.json())
      .then((appropriatePosts) => {
        removeAllPosts();
        let i = 0;
        for (; i < appropriatePosts.length; ++i) {
          addPost(appropriatePosts[i]);
        }
        appropriateShown = i;
        if (appropriateShown === 0) {
          alert("We don't have posts that meet your search configurations:(");
        }
      });
  }

  function showMore(event) {
    serverReq.post('/posts', { skip: appropriateShown, top: 10 }, getFilterConfig())
      .then(res => res.json())
      .then((appropriatePosts) => {
        let i = 0;
        for (; i < appropriatePosts.length; ++i) {
          addPost(appropriatePosts[i]);
        }
        appropriateShown = i;
      });
  }

  function add(photoPost) {
    serverReq.post('/add', null, photoPost)
      .then(res => res.text())
      .then((res) => {
        if (res === 'true') {
          addPost(photoPost);
        }
      });
  }

  function remove(id) {
    if (removePost(id)) {
      return serverReq.delete('/delete', { id });
    }
  }

  function edit(id, photoPost) {
    serverReq.put('/edit', { id }, photoPost)
      .then(res => res.text())
      .then((res) => {
        if (res === 'true') {
          return serverReq.get('/post', { id });
        }
      })
      .then(res => res.json())
      .then((post) => {
        removePost(id);
        addPost(post);
      });
  }

  return {
    showHeader,
    showAddButton,

    add,
    remove,
    edit,

    showAppropriate,
    showMore,
  };
}());

