export class PokeModel {
    name: string;
    url: string;
    sprite: string;
    number : number;
    description: string;
    height: number;
    weight: number;
    type: string[] = [];
    constructor(name: string, url: string, sprite?: string, number?: number, description?: string, height?: number, weight?: number, type?: string[]) {
        this.name = name;
        this.url = url;
        this.sprite = sprite;
        this.number = number;
        this.description = description;
        this.height = height;
        this.weight = weight;
        this.type = type;
    }
}
    