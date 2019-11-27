const staffProfileSchema = require('./../model/staff-profile');
const studentDetailsSchema = require('./../model/student-details');
class userLoginController{
    constructor(){ }

    async login(credentials){
        try{
            let username = credentials.username;
			let password = credentials.password;

            let user = await staffProfileSchema.findOne({
                staffCode: username,
                password: password,
            });
            if(!user){
                throw new Error('invalid creds');
            }
            let token = this.generateToken();
            this.saveToken(user._id, token);
            user.token = token;
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

    async saveToken(userID, token){

        
        try{
            await staffProfileSchema.update({_id: userID}, {token: token})
        } catch(err){
            console.log(err);
        }
    }

    generateToken() {
        let timeStamp = `${new Date().getTime()}`;

        return require('crypto').createHash('md5').update(timeStamp).digest('hex')
    }

    async validateToken(res, token, userId){
        try{
            let user = await staffProfileSchema.findOne({
                token: token
            });

           // console.log(user);

            if(!user){
                throw new Error('invalid token');
            }
            global.userSession = user;

        } catch(error){
            res.send({
                status: 'error',
                msg: 'Invalid token'
            });
        }
    }


    ///Student Login
    async StuLogin(credentials){
        try{
            let username = credentials.username;
            let password = credentials.password;
            
            let user = await studentDetailsSchema.findOne({
                rollNo: username,
                password: password
            });

            if(!user){
                throw new Error('invalid creds');
            }

            let token = this.generateToken1();

            this.saveToken1(user._id, token);

            user.token = token;
         
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


module.exports = new userLoginController();