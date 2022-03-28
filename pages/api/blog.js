import {blog} from '../../data/Blog'
export default function handler(req, res) {
    res.status(200).json(blog)
}