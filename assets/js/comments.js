const data = {

  "currentUser": {

    "image": {

      "png": "./images/avatars/image-juliusomo.png",

      "webp": "./images/avatars/image-juliusomo.webp"

    },

    "username": "juliusomo"

  },

  "comments": [

    {

      "id": 1,

      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

      "createdAt": "1 month ago",

      "score": 12,

      "user": {

        "image": {

          "png": "./images/avatars/image-amyrobson.png",

          "webp": "./images/avatars/image-amyrobson.webp"

        },

        "username": "amyrobson"

      },

      "replies": []

    },

    {

      "id": 2,

      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",

      "createdAt": "2 weeks ago",

      "score": 5,

      "user": {

        "image": {

          "png": "./images/avatars/image-maxblagun.png",

          "webp": "./images/avatars/image-maxblagun.webp"

        },

        "username": "maxblagun"

      },

      "replies": [

        {

          "id": 3,

          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",

          "createdAt": "1 week ago",

          "score": 4,

          "replyingTo": "maxblagun",

          "user": {

            "image": {

              "png": "./images/avatars/image-ramsesmiron.png",

              "webp": "./images/avatars/image-ramsesmiron.webp"

            },

            "username": "ramsesmiron"

          }

        },

        {

          "id": 4,

          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",

          "createdAt": "2 days ago",

          "score": 2,

          "replyingTo": "ramsesmiron",

          "user": {

            "image": {

              "png": "./images/avatars/image-juliusomo.png",

              "webp": "./images/avatars/image-juliusomo.webp"

            },

            "username": "juliusomo"

          }

        }

      ]

    }

  ]

}

const content = document.querySelector('.content');

function renderPost() {
  const comments = data.comments;
  content.innerHTML = comments.map((comment) => {
    // yorum için card oluşturuyoruz
    return `
      <div class="card">
        <div class="user-info">
          <img src="assets/img/${comment.user.image.png.split('/').pop()}" alt="">
          <h2>${comment.user.username}</h2>
          <span>${comment.createdAt}</span>
        </div>
        <p>${comment.content}</p>
        <!-- Sayaç bölümü -->
        <div class="counter">
          <button class="decrease" onclick="updateScore(${comment.id}, -1)">-</button>
          <span id="score-${comment.id}">${comment.score}</span>
          <button class="increase" onclick="updateScore(${comment.id}, 1)">+</button>
        </div>
      </div>
      <div class="replies-container">
          ${renderReplies(comment.replies)}
      </div>
    `;
  }).join('');
}

function renderReplies(replies) {
  // replies dizisi varsa her bir cevabı işleyip HTML'e ekliyoruz
  if (replies.length > 0) {
    return replies.map((reply) => {
      // her reply için ayrı bir card div'i oluşturuyoruz
      return `
        <div class="reply-card">
          <div class="user-info">
            <img src="assets/img/${reply.user.image.png.split('/').pop()}" alt="">
            <h2>${reply.user.username}</h2>
            <span>${reply.createdAt}</span>
          </div>
          <p>${reply.content}</p>
         <!-- Sayaç bölümü -->
          <div class="counter">
            <button class="decrease" onclick="updateScore(${reply.id}, -1)">-</button>
            <span id="score-${reply.id}">${reply.score}</span>
            <button class="increase" onclick="updateScore(${reply.id}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }
  return ''; // replies dizisi boşsa hiçbir şey render etmiyoruz
}

renderPost();
