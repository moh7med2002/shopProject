import { people } from "../../data/peoples";

export default function handler(req,res){
    res.status(200).json(people)
}