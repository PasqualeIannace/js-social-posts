const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// recupero il container dei post
post = document.getElementById("container");

posts.forEach((item, index, array) => {

    let contenuto = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${item.author.image} alt=${item.author.name}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${item.author.name}</div>
                        <div class="post-meta__time">${timeCalc(item.created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${item.content}</div>
            <div class="post__image">
                <img src=${item.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${item.id}" onclick="likeClick(${item.id}, ${item.likes})">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${item.id}" class="js-likes-counter">${item.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    ;
    
    post.innerHTML += contenuto;


    if(item.author.image == null) {
        console.log("LUCA TI HO TROVATO!",index);
        let imgSelect = document.getElementsByClassName("post-meta__icon")[index];
        
        console.log(imgSelect);
    }

});

// calcolo la differenza di anni tra il post e la data odierna
function timeCalc(pubblicationDate) {
    let d = new Date();
    d = d.getFullYear();
    let anno = parseInt(pubblicationDate);

    d -= anno;

    return `${d} anni fa`;
}

// coloro il mi piace al click
function likeClick(id, likesCounter) {
    let click = `[data-postid="${id}"]`;
    let like = document.querySelector(click);

    // prendo i like dalla pagina
    let numLikes = document.getElementById(`like-counter-${id}`).innerHTML;
    
    // verifico se il like è già stato cliccato
    if(!like.classList.contains("like-button--liked")){
        // aggiungo il colore
        like.classList.add("like-button--liked");
        
        // converto il like in numero
        numLikes = parseInt(numLikes) + 1;
        // stampo il like incrementato
        document.getElementById(`like-counter-${id}`).innerHTML = numLikes;

    } else {
        like.classList.remove("like-button--liked");

        // converto il like in numero
        numLikes = parseInt(numLikes) - 1;
        // stampo il like decrementato
        document.getElementById(`like-counter-${id}`).innerHTML = numLikes;
    }


}
