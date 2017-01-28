export class Jeu {
    name;
    summary;
    genres;
    cover;
    screenshots;
    constructor(data)
    {
        Object.assign(this, data);
        //screens.forEach(screenshot=>this.screenshots.push(screenshot.url));
        //this.cover.push(cover.url);
    }

    getScreenshots()
    {
        if(this.screenshots != null) {
            return this.screenshots.map(screenshot => screenshot.url);
        } else {
            return [];
        }
    }

    getCover()
    {
        if(this.cover != null) {
            return this.cover.map(cover => cover.url);
        } else {
            return "";
        }
    }
}
