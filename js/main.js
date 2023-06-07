class App {
    switcher;
    data = [
        {
            id: 0,
            video: "video1.mp4",
            link: 1
        },
        {
            id: 1,
            video: "video2.mp4",
            link: 2
        },
        {
            id: 3,
            video: "video3.mp4",
            link: 0
        },
    ]

    constructor() {
        this.switcher = new Switcher(this, this.data);
    }
}

class Switcher {
    yubtub;
    cleaner;
    app;
    default = 0;

    constructor(app, data) {
        this.app = app;
        this.data = data;
        this.yubtub = new Yubtub(this.app, data[this.default]);
        this.cleaner = new Cleaner();
    }

    switch(link) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]);
    }
}

class Cleaner {
    clean(whereToClean) {
        document.querySelector(whereToClean).innerHTML = "";
    }
}

class Yubtub {
    aside;
    Main;
    renderer;
    app;

    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.main = new Main(this);
        this.aside = new Aside(this, data);
    }
}

class Main{
    yubtub;
    video;
    Comments;
    mainSectionElement;

    constructor(yubtub) {
        this.yubtub = yubtub;
        this.mainSectionElement = document.createElement("main");
        this.mainSectionElement.classList.add("mainSection");
        this.yubtub.renderer.render("body", this.mainSectionElement);

        this.video = new Video(this);
        this.comments = new Comments(this);


    }
}

class Comments{
    Main;
    commentSectionElement;
    commentSections;

    constructor(Main) {
        this.Main = Main;
        this.commentSectionElement = document.createElement("section");
        this.commentSectionElement.classList.add("commentSection");

        this.Main.yubtub.renderer.render("main", this.commentSectionElement);

        this.commentSections = [];

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

        const commentPlacerElement = document.createElement("textarea");
        commentPlacerElement.classList.add("commentPlacer");
        commentPlacerElement.setAttribute("placeholder", "Type een comment..");

        this.Main.yubtub.renderer.render(".commentSection", commentPlacerElement);
    }
}

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

    constructor(Main) {
        this.Main = Main;
        this.SectionElement = document.createElement("section");
        this.SectionElement.classList.add("mainSection__videoWrapper");
        this.SectionElement.id = "js--MainSection";

        this.Main.yubtub.renderer.render("main", this.SectionElement);

        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("mainSection__videoWrapper__video");
        this.videoElement.setAttribute("controls", true);
        this.videoElement.setAttribute("src", "video/video1.mp4");

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
        this.TextFigureElement.innerText = "McLaren Car Video";
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

class NextVideo {
    aside;
    htmlElements;

    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlElements = [];

        for (let i = 1; i <= 5; i++) {
            const videoElement = document.createElement("video");
            videoElement.classList = `asideSection__video asideSection__video--${i}`;
            videoElement.src = `./video/${data.video}`;
            this.aside.yubtub.renderer.render("aside", videoElement);
            videoElement.onclick = this.videoClicked;

            this.htmlElements.push(videoElement);
        }
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }
}

class Renderer {
    render(whereToRender, whatToRender) {
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

const app = new App();
console.log(app);