class Yubtub {
    aside;
    Main;
    header;
    renderer;
    app;

    constructor(app, data) {
        this.app = app;
        this.renderer = new Renderer();
        this.main = new Main(this, data);
        this.header = new Header(this);
        this.aside = new Aside(this, data);
    }
}