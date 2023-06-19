class Switcher {
    yubtub;
    cleaner;
    app;
    default = 0;

    constructor(app, data) {
        this.app = app;
        this.data = data;
        this.yubtub = new Yubtub(this.app, data[0]); // Geeft video1 data mee aan Yubtub.
        this.cleaner = new Cleaner();
    }

    switch(link) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]); // Update de video aan de hand van zijn Link.
    }
}