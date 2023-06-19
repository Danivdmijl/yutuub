class Header{
    htmlElement;
    yubtub;

    constructor(yubtub){
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("header");
        this.htmlElement.innerText = "Yubtub - Dani van der Mijl";
        this.yubtub.renderer.render("#js--MainSection", this.htmlElement);
    }
}