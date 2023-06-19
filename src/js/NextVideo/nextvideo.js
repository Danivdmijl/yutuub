class NextVideo {
    aside;
    htmlElements;
    data;

    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlElements = [];

        for (let i = 1; i <= 5; i++) {
            const videoElement = document.createElement("video");
            videoElement.classList = `asideSection__video asideSection__video--${i}`;
            videoElement.src = `../../../video/${data.video}`;
            this.aside.yubtub.renderer.render("aside", videoElement);
            videoElement.onclick = () => this.videoClicked(data.link);

            this.htmlElements.push(videoElement);
        }
    }

    videoClicked = (link) => {
        this.aside.yubtub.app.switcher.switch(link);
    }
}