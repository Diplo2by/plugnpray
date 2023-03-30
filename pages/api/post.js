export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    console.log(req.query.name);

    res.status(200).json({ message: "Post created successfully" });
}