import pwGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default {
    async store(req, res){
        const { name, email } = req.body;
        const user = {
            name,
            email,
            password: pwGenerator(15, false)
        };

        await Queue.add('RegistrationMail', { user })       
        

        console.log('resposta: ', req.body)
        return res.json(user)
    }
}