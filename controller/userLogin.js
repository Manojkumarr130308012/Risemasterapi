const staffProfileSchema = require('./../model/staff-profile');

const crypto = require('crypto');

class userLoginController {

    async login(credentials) {


        try {
            let username = credentials.username;
            let Inpassword = credentials.password;

            let user = await staffProfileSchema.findOne({
                staffCode: username

            });

            let pass = user.password;

            let Depassword = this.DecryptPassword(pass);

            if (!user) {
                throw new Error('invalid creds');
            }

            if (Inpassword == Depassword) {
                let token = this.generateToken();

                this.saveToken(user._id, token);
                user.token = token;
            }


            return {
                status: "success",
                data: user,
            };

        } catch (error) {
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

    async saveToken(userID, token) {

        try {
            await staffProfileSchema.update({ _id: userID }, { token: token })
        } catch (err) {
            console.log(err);
        }
    }

    generateToken() {
        let timeStamp = `${new Date().getTime()}`;

        return require('crypto').createHash('md5').update(timeStamp).digest('hex')
    }

    async validateToken(res, token, userId) {
        try {
            let user = await staffProfileSchema.findOne({
                token: token
            });

            // console.log(user);

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