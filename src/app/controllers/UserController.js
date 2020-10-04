import pwGenerator from 'password-generator';


export default {
    async store(req, res){
        const { name, email } = req.body;
        const user = {
            name,
            email,
            password: pwGenerator(15, false)
        };
        
        

        console.log('resposta: ', req.body)
        return res.json(user)
    }
}