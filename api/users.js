module.exports = (req,res)=>{
    if(req.method === 'GET'){
        res.json([
            {
                name: 'Carlos', 
                age: 26,
                prifission: 'Developer',
                nacionality: 'Brazil',
                height:1.75
            }
        ])
    }else{
        const {name,location} = req.body

        res.send({status: "UserCreated",name,location})
    }
}