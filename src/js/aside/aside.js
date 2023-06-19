class Aside {
    yubtub;
    nextvideo;
    htmlElement;

    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList.add("asideSection");
        this.yubtub.renderer.render("body", this.htmlElement);
        this.nextvideo = new NextVideo(this, data);
    }
}