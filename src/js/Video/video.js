class Video {
    Main;
    SectionElement;
    videoElement;
    VideoSectionElement;
    divIconWrapperElement;
    CircleFigureElement;
    TextFigureElement;
    StarIconElement;
    ArrowIconElement;

    constructor(Main, data) {
        this.Main = Main;
        this.data = data;
        this.SectionElement = document.createElement("section");
        this.SectionElement.classList.add("mainSection__videoWrapper");
        this.SectionElement.id = "js--MainSection";

        this.Main.yubtub.renderer.render("main", this.SectionElement);

        let oldvidname = this.data.video;

        if (this.data.link == 0) {
            this.data.video = "video2.mp4"
            this.data.title = "Urus vs die ene witte auto"
        }
        if (this.data.link == 1) {
            this.data.video = "video3.mp4"
            this.data.title = "Ferrari vrooom"
        }
        if (this.data.link == 2) {
            this.data.video = "video1.mp4"
            this.data.title = "Mclaren Car Video"
        }

        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("mainSection__videoWrapper__video");
        this.videoElement.setAttribute("controls", true);
        this.videoElement.src = `../../../video/${data.video}`; // Deze moet updaten wanneer er geclicked word..

        this.data.video = oldvidname;

        this.Main.yubtub.renderer.render("#js--MainSection", this.videoElement);

        this.VideoSectionElement = document.createElement("section");
        this.VideoSectionElement.classList.add("mainSection__videoWrapper__section");
        this.VideoSectionElement.id = "js--VideoSection";

        this.Main.yubtub.renderer.render("#js--MainSection", this.VideoSectionElement);

        this.divIconWrapperElement = document.createElement("div");
        this.divIconWrapperElement.classList.add("mainSection__videoWrapper__section__Wrapper");
        this.divIconWrapperElement.id = "js--divIconWrapper";

        this.Main.yubtub.renderer.render("#js--VideoSection", this.divIconWrapperElement);

        this.CircleFigureElement = document.createElement("figure");
        this.CircleFigureElement.classList.add("mainSection__videoWrapper__section__circleFigure");

        this.Main.yubtub.renderer.render("#js--divIconWrapper", this.CircleFigureElement);

        this.TextFigureElement = document.createElement("h3");
        this.TextFigureElement.innerText = data.title;


        this.TextFigureElement.classList.add("mainSection__videoWrapper__section__title");
        this.TextFigureElement.id = "js--textFigure";

        this.Main.yubtub.renderer.render("#js--divIconWrapper", this.TextFigureElement);

        this.StarIconElement = document.createElement("i");
        this.StarIconElement.classList.add("fa-regular", "fa-star", "mainSection__videoWrapper__section__Wrapper__Star");

        this.ArrowIconElement = document.createElement("i");
        this.ArrowIconElement.classList.add("fa-solid", "fa-arrow-right", "mainSection__videoWrapper__section__Wrapper__Arrow");

        const secondWrapperElement = document.createElement("div");
        secondWrapperElement.classList.add("mainSection__videoWrapper__section__Wrapper", "mainSection__videoWrapper__section__Wrapper--2");
        secondWrapperElement.appendChild(this.StarIconElement);
        secondWrapperElement.appendChild(this.ArrowIconElement);

        this.Main.yubtub.renderer.render("#js--VideoSection", secondWrapperElement);
    }
}