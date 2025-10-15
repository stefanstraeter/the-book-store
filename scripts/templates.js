
function createBookCardHTML(book, indexBook, commentsHTML) {

    const coverFileName = bookCovers[indexBook];
    const imageSource = `./assets/images/${coverFileName}`;

    return `
            <article class="book-card">
                <picture class="book-card__picture">
                    <source/>
                    <img class="book-card__cover" src="${imageSource}" alt="${book.name}" />
                </picture>
                
                <div class="book-card__likes">
                    <svg
                        class="heart-icon ${book.liked ? 'isLiked' : ''}"
                        width="28"
                        height="28"
                        viewBox="0 0 106 97"
                        xmlns="http://www.w3.org/2000/svg"
                        data-index="${indexBook}"
                        >
                    <path
                        class="fill-color-shape"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M73.0406 3.04949C65.7359 2.94379 58.3559 5.38824 53.2483 12.3801C48.1271 5.39042 40.631 3.04941 33.4677 3.04941C18.2587 3.04941 3.04622 15.7081 3.04622 33.4698C3.04622 51.0995 14.3683 66.123 26.1679 76.6801C32.0812 81.9708 38.1493 86.1719 43.0557 89.0533C45.5086 90.4938 47.6791 91.6092 49.402 92.3672C50.2628 92.7459 51.0206 93.0393 51.6517 93.2395C52.2639 93.4336 52.8188 93.5607 53.2487 93.5607C53.6786 93.5607 54.2336 93.4336 54.8458 93.2395C55.4769 93.0393 56.2347 92.7459 57.0955 92.3672C58.8183 91.6092 60.9889 90.4938 63.4418 89.0533C68.3481 86.1719 74.4162 81.9708 80.3295 76.6801C92.1292 66.1229 103.451 51.0995 103.451 33.4698C103.451 15.6993 88.2313 3.26928 73.0406 3.04949Z"
                        />
                    </svg>
                    <span class="book-card__likes-count">${book.likes}</span>
                </div>

                <section class="book-card__info">
                    <p class="book-card__genre mb-1">${book.genre}</p>
                    <h2 class="book-card__title mb-1">${book.name}</h2>
                    <span class="book-card__price">${book.price.toFixed(2).replace('.', ',')} €</span>
                    <p class="book-card__author">${book.author}, <span class="italic"> ${book.publishedYear}<span></p>
                </section>

                <section class="book-card__comments">
                    <h3 class="book-card__comments-title mb-1">Comments</h3>
                    <div class="book-card__comments-list mb-1">
                        <div>${commentsHTML}</div>
                    </div>

                    <form class="book-card__comment-form" data-index="${indexBook}"> 
                        <input class="book-card__comment-input" type="text" placeholder="Add comments..." required />
                        <button type="submit" class="book-card__send-btn">Send</button>
                    </form>
                </section>
            </article> 
         `;
}


function createCommentsHTML(book, indexComments) {
    return `
        <p class="book-card__comments-name"> ${book.comments[indexComments].name}:</p>
        <p class="book-card__comments-comment mb-1"> ${book.comments[indexComments].comment}</p>`
}

