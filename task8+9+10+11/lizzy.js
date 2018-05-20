const lizzy = (function () {
  // JS
  function arrayCompare(fst, snd) {
    if (snd === undefined) {
      return false;
    }
    for (let i = 0; i < fst.length; ++i) {
      if (snd.indexOf(fst[i]) === -1) {
        return false;
      }
      snd.splice(snd.indexOf(fst[i]), 1);
    }
    return true;
  }

  function getPhotoPosts(skip, top, filterConfig, photoPosts) {
    // let postsSegment = localStorage.getItem('photoPosts') ? JSON.parse(localStorage.getItem('photoPosts')) : [];
    let postsSegment = photoPosts;
    if (filterConfig !== undefined && filterConfig !== null && Object.getOwnPropertyNames(filterConfig).length !== 0) {
      if (filterConfig.author !== undefined && filterConfig.author.length > 0) {
        postsSegment = postsSegment.filter(post => post.author === filterConfig.author);
      }

      if (filterConfig.createdAt !== undefined && filterConfig.createdAt !== null) {
        postsSegment =
                postsSegment.filter(post => new Date(post.createdAt).getDate() === new Date(filterConfig.createdAt).getDate() &&
                        new Date(post.createdAt).getMonth() === new Date(filterConfig.createdAt).getMonth() &&
                        new Date(post.createdAt).getUTCFullYear() === new Date(filterConfig.createdAt).getUTCFullYear());
      }

      if (filterConfig.hashTags !== undefined && filterConfig.hashTags.length !== 0) {
        postsSegment = postsSegment.filter(post => arrayCompare(filterConfig.hashTags, post.hashTags));
      }
    }
    postsSegment.sort((a, b) => a.createdAt - b.createdAt);
    return postsSegment.slice(skip || 0, skip || 0 + top || 10);
  }

  function getPhotoPost(id, photoPosts) {
    // photoPosts = localStorage.getItem('photoPosts') ? JSON.parse(localStorage.getItem('photoPosts')) : [];
    return (photoPosts.find(post => post.id === id));
  }


  function validatePhotoPost(photoPost) {
    if (!(typeof (photoPost.description) === 'string' && photoPost.description.length > 0 && photoPost.description.length < 200)) {
      // alert("wrong description")
      return false;
    }
    if (!(photoPost.createdAt)) {
      // alert("wrong date")
      return false;
    }
    if (!(typeof (photoPost.author) === 'string' && photoPost.author !== '')) {
      // alert("wrong author")
      return false;
    }
    if (!(typeof (photoPost.photoLink) === 'string' && photoPost.photoLink !== '')) {
      // alert("wrong photo link")
      return false;
    }
    return true;
  }

  function addPhotoPost(photoPost, photoPosts) {
    // localStorage.setItem('nextId', JSON.stringify(JSON.parse(localStorage.getItem('nextId')) + 1));
    // photoPosts = localStorage.getItem('photoPosts') ? JSON.parse(localStorage.getItem('photoPosts')) : [];
    if (validatePhotoPost(photoPost) === false) {
      return false;
    }
    photoPosts.push(photoPost);
    photoPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    // localStorage.removeItem('photoPosts');
    // localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    return photoPosts;
  }


  function editPhotoPost(id, photoPost, photoPosts) {
    const postToEdit = photoPosts.find(post => post.id === id);
    if (postToEdit === undefined) {
      return false;
    }
    if (typeof photoPost.description === 'string') {
      postToEdit.description = photoPost.description;
    }
    if (typeof photoPost.photoLink === 'string') {
      postToEdit.photoLink = photoPost.photoLink;
    }
    // photoPosts = localStorage.getItem('photoPosts') ? JSON.parse(localStorage.getItem('photoPosts')) : [];
    photoPosts.splice(photoPosts.findIndex(elem => elem.id == id), 1, postToEdit);
    // localStorage.removeItem('photoPosts');
    // localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    return photoPosts;
  }

  function removePhotoPost(id, photoPosts) {
    // photoPosts = localStorage.getItem('photoPosts') ? JSON.parse(localStorage.getItem('photoPosts')) : [];
    photoPosts.splice(photoPosts.findIndex(value => value.id === id), 1);
    // localStorage.removeItem('photoPosts');
    // localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    return photoPosts;
  }

  return {
    getPhotoPosts,
    getPhotoPost,
    addPhotoPost,
    editPhotoPost,
    removePhotoPost,
  };
}());

module.exports = lizzy;
