export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor(
    name: string = "Enter name...",
    hp: number = 100,
    cp: number = 100,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: Array<string> = ["Normal"],
    created: Date = new Date()

  )
{
  this.name=name;
  this.hp=hp;
  this.cp=cp;
  this.picture=picture;
  this.types=types;
  this.created=created;
  }
  

}
  
