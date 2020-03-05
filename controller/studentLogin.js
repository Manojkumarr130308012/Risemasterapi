const studentDetailsSchema = require('./../model/student-details');
const crypto = require('crypto');
class studentLoginController{
async StuLogin(credentials){
    try{

       // console.log('credentials',credentials);
        let username = credentials.username;
        let password = credentials.password;
        
        let user = await studentDetailsSchema.findOne({
            rollNo: username
            
        });

        let pass = user.password;
        let Depassword = this.DecryptPassword(pass);
        //console.log('Depassword', Depassword);

        if(!user){
            throw new Error('invalid creds');
        }
       // console.log('password', password);
        if (password == Depassword) {
            let token = this.generateToken1();
           // console.log('token', token);
            this.saveToken1(user._id, token);
            user.token = token;
        }
     
        return {
            status: "success",
            data: user,
        };

    } catch(error){
        return {
            status: 'error',
            msg: 'username or password invalid'
        }
    }
}

DecryptPassword(password) {
    let depass = password;
    var mykey1 = crypto.createDecipher('aes-128-cbc', 'password');
    var mystr1 = mykey1.update(depass, 'hex', 'utf8')
    mystr1 += mykey1.final('utf8');

    return mystr1;

}

async saveToken1(userID, token){
    
    try{
        await studentDetailsSchema.update({_id: userID}, {token: token})
    } catch(err){
        console.log(err);
    }
}

generateToken1() {
    let timeStamp = `${new Date().getTime()}`;

    return require('crypto').createHash('md5').update(timeStamp).digest('hex')
}
async validateToken1(res, token, userId) {
    try {
        let user = await studentDetailsSchema.findOne({
            token: token
        });

        if (!user) {
            throw new Error('invalid token');
        }
        global.userSession = user;

    } catch (error) {
        res.send({
            status: 'error',
            msg: 'Invalid token'
        });
    }
}
}


module.exports = new studentLoginController();