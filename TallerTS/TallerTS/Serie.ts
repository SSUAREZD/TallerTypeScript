export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    image: string;

    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        url: string,
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }

    getName(): string {
        return this.name;
    }

    getSeasons(): number {
        return this.seasons;
    }

    getChannel(): string {
        return this.channel;
    }

    getDescription(): string {
        return this.description;
    }
}