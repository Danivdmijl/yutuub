class Comment {
    Comments;

    constructor(Comments) {
        this.Comments = Comments;

        const commentPlacerElement = document.createElement("textarea");
        commentPlacerElement.classList.add("commentPlacer");
        commentPlacerElement.setAttribute("placeholder", "Type een comment..");
        commentPlacerElement.addEventListener("keydown", (event) => {

            if(event.key === "Enter" && commentPlacerElement.value == ""){
                event.preventDefault();
                commentPlacerElement.value = "Hoezo plaats je een lege comment, spammer O.o";
                const commentText = commentPlacerElement.value;
                this.Comments.addComment(commentText);
                commentPlacerElement.value = "";
            }

            if (event.key === "Enter"  && commentPlacerElement.value !== "") {
                event.preventDefault();
                const commentText = commentPlacerElement.value;
                this.Comments.addComment(commentText);
                commentPlacerElement.value = "";
            }
        });

        this.Comments.Main.yubtub.renderer.render(".commentSection", commentPlacerElement);
    }

    renderComment(comment) {
        const commentSectionElement = document.createElement("section");
        commentSectionElement.classList.add("commentSection__section");

        const circleElement = document.createElement("figure");
        circleElement.classList.add("commentSection__section__circle");

        const commentElement = document.createElement("h3");
        commentElement.classList.add("comment");
        commentElement.innerText = comment;

        commentSectionElement.appendChild(circleElement);
        commentSectionElement.appendChild(commentElement);

        const commentPlacerElement = document.querySelector(".commentPlacer");
        const commentSectionParent = commentPlacerElement.parentNode;
        commentSectionParent.insertBefore(commentSectionElement, commentPlacerElement);
    }
}