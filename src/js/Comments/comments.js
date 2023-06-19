class Comments {
    Main;
    Comment;
    commentSectionElement;
    commentSections;
    commentsList;

    constructor(Main) {
        this.Main = Main;
        this.commentSectionElement = document.createElement("section");
        this.commentSectionElement.classList.add("commentSection");

        this.Main.yubtub.renderer.render("main", this.commentSectionElement);

        this.commentSections = [];
        this.commentsList = [];

        const sectionData = [
            {
                circleClass: "commentSection__section__circle",
                titleText: "FIRST"
            },
            {
                circleClass: "commentSection__section__circle",
                titleText: "Saaai"
            },
            {
                circleClass: "commentSection__section__circle",
                titleText: "Wat een suppertoffe leuke video!!"
            }
        ];

        sectionData.forEach((data) => {
            const sectionElement = document.createElement("section");
            sectionElement.classList.add("commentSection__section");

            const circleElement = document.createElement("figure");
            circleElement.classList.add(data.circleClass);

            const titleElement = document.createElement("h3");
            titleElement.classList.add("commentSection__section__title");
            titleElement.innerText = data.titleText;

            sectionElement.appendChild(circleElement);
            sectionElement.appendChild(titleElement);

            this.Main.yubtub.renderer.render(".commentSection", sectionElement);

            this.commentSections.push(sectionElement);
        });

        this.Comment = new Comment(this);
    }

    addComment(comment) {
        this.commentsList.push(comment);
        this.Comment.renderComment(comment);
    }
}