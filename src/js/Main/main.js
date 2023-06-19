class Main {
    yubtub;
    video;
    Comments;
    mainSectionElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.data = data;
        this.mainSectionElement = document.createElement("main");
        this.mainSectionElement.classList.add("mainSection");
        this.yubtub.renderer.render("body", this.mainSectionElement);

        this.video = new Video(this, this.data); // Geeft data mee aan video
        this.comments = new Comments(this);
    }
}