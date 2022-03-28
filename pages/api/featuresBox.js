import { featuresBox } from "../../data/featuresBox"
export default function handler(req, res) {
    res.status(200).json(featuresBox)
}