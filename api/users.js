module.exports = (req,res)=>{
    if(req.method === 'GET'){
        res.json([
            {name: 'Carlos', age: 26},
            {name: 'Taynara', age: 22}
        ])
    }
}