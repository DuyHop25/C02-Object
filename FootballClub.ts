import { question } from "readline-sync";
import { player } from "./Player";

type Player = {
    name: string;
    age: number;
    gender: string;
}
  
type FootballClub = {
name: string;
playerList: Player[];
numberOfChampionships: number;
input: () => void;
// output: () => void;
// filterByAge: (minAge: number, maxAge: number) => Player[];
// check: () => boolean;
// addPlayer: (playerList: Player[]) => void;
// deletePlayer: (playerID: number) => Player;
}

const footballClub: FootballClub = {
name: "Example Football Club",
playerList: [],
numberOfChampionships: 0,
input(){
    let numPlayer: number = Number(question("Nhap so luong cau thu trong doi:"));

    for (let i = 0; i < numPlayer; i++) {
        console.log(`Nhap thong tin cau thu thu ${i+1}`)
        for (let item in this.playerList) {
            console.log(item);
        }
    }
}
    

};

console.log(footballClub.input());
