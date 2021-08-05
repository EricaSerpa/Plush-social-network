import { logOut } from '../../lib/authentication.js';

export const home = () => {
  const container = document.createElement('div');
  container.className = 'container';
  const template = `
    <h2>Página inicial</h2>
    <div class="logout-container">
    <button class='logout' id='logout'><img class='logout-img' src='img/logout-icon.png'></button>
    <form id="postForm">
      <input type="textarea" id="postText">
      <button type="submit">Enviar</button>
    </form>
    </div>
    <ul id="postsList"></ul>
 `;
  container.innerHTML = template;
  container.querySelector('#postForm')
    .addEventListener('submit', (event) => {
      event.preventDefault();

      const createPost = (id, name, email) => {
        const text = document.querySelector('#postText').value;
        const post = {
          text,
          userId: id,
          userName: name,
          userEmail: email,
          likes: 0,
          comments: [],
        };
        const postsCollection = firebase.firestore().collection('posts');
        postsCollection.add(post);
      };

      const getUserFromDatabase = (userLogged) => {
        const usersCollection = firebase.firestore().collection('users');
        usersCollection.get().then((snap) => {
          snap.forEach((user) => {
            if (userLogged === user.data().id) {
              createPost(user.data().id, user.data().name, user.data().email);
            }
          });
        });
      };
      const userLogged = firebase.auth().currentUser;
      if (userLogged !== 'null') {
        getUserFromDatabase(userLogged.uid);
      }
    });

  const addPosts = (post) => {
    const postTemplate = `
    <section id="${post.id}" class="post">
      <img src="https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg" alt="user" class="user-photo">
      ${post.data().text}
    </section>
    `;
    container.querySelector('#postsList').innerHTML += postTemplate;
  };

  const loadPosts = () => {
    const postsCollection = firebase.firestore().collection('posts');
    container.querySelector('#postsList').innerHTML = 'Carregando...';
    postsCollection.get().then((snap) => {
      container.querySelector('#postsList').innerHTML = '';
      snap.forEach((post) => {
        addPosts(post);
      });
    });
  };

  loadPosts();

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  return container;
};
