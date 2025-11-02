
function renderBooks(books) {
    let contentRef = document.getElementById('book-container');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        const book = books[indexBook];

        let commentsHTML = '';
        for (let indexComments = 0; indexComments < book.comments.length; indexComments++) {
            commentsHTML += createCommentsHTML(book, indexComments);
        }

        contentRef.innerHTML += createBookCardHTML(book, indexBook, commentsHTML);
    }

    const allForms = contentRef.querySelectorAll('.book-card__comment-form');
    for (let indexForm = 0; indexForm < allForms.length; indexForm++) {
        const form = allForms[indexForm];

        form.onsubmit = function (event) {
            event.preventDefault();


            const bookIndex = parseInt(form.dataset.index);

            const input = form.querySelector('.book-card__comment-input');
            const newComment = input.value.trim();

            if (newComment !== '') {
                books[bookIndex].comments.push({
                    name: "Steve",
                    comment: newComment
                });
                saveToLocalStorage();
                renderBooks(books);
            }
        };
    }
}

function toggleLike(book) {
    book.liked = !book.liked;
    if (book.liked) {
        book.likes++;
    }

    else {
        book.likes--;
    }
}

function saveToLocalStorage() {
    localStorage.setItem("myData", JSON.stringify(books));
}

function getFromLocalStorage() {
    let stored = JSON.parse(localStorage.getItem("myData"));

    if (stored !== null) {
        books = stored;

    }

}

document.addEventListener("DOMContentLoaded", () => {
    getFromLocalStorage()
    renderBooks(books);

    const container = document.getElementById('book-container');
    container.addEventListener('click', function (event) {
        if (event.target.closest('.heart-icon')) {
            const heart = event.target.closest('.heart-icon');
            const index = parseInt(heart.dataset.index);
            const book = books[index];

            toggleLike(book);

            saveToLocalStorage();
            renderBooks(books);
        }
    });
});

