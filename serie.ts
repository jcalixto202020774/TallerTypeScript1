export class Serie{
    id: number;
    name: String;
    channel: String;
    seasons: number;
    description: String;
    stream: String;
    image: String;

    constructor(id:number,name: String,channel: String,seasons: number,description: String,stream: String,image: String){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.stream = stream;
        this.image = image;
    }
}