import db from "../db";
import {transAccountNumber} from "../utils/post";

export const getPosts = (req, res) => {
    res.json("from post controller");
}

export const getPost = (req, res) => {
    res.json("from post controller getPost");
}
export const getPostsByMonth = (req, res) => {
    const q = "SELECT * FROM posts WHERE MONTH(date) = (?) AND YEAR(date)=(?) AND uid=(?) ORDER BY date DESC"
    try{
        const values = [
            req.query.month,
            req.query.year,
            req.query.uid
        ]

        db.query(q,values, (err, data)=>{
            if (err) return res.json(err);
            return res.status(200).json(data)
        });
    }catch (err){
        return res.status(500).json(err)
    }
}

export const addPost = (req, res) => {
    if (req.body.amount === "") {
        return res.status(400).json("Amount is required")
    }
    if (req.body.category === "") {
        return res.status(400).json("Category is required")
    }
    if (req.body.date === "") {
        return res.status(400).json("Date is required")
    }

    const q = "INSERT INTO posts(`number`,`description`,`img`,`date`,`uid`,`cat`) VALUES (?)"
    const values = [
        req.body.amount,
        req.body.description,
        "",
        new Date(req.body.date),
        req.body.uid,
        req.body.category,
    ]
    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json("Post has been Created.")
    })
}

export const deletePost = (req, res) => {
    res.json("from post controller");
}

export const updatePost = (req, res) => {
    res.json("from post controller");
}
