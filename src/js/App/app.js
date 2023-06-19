class App {
    switcher;
    api;
    data;

    constructor() {
        this.api = new API();
        this.api.getData("/src/data/data.json").then((data) => {
            this.data = data;
            this.switcher = new Switcher(this, this.data); // Geeft hele data mee aan switcher

        });
    }
}
