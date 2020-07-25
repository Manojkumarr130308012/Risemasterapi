module.exports = {
    app:{
        port: 37281,
        protocal: 'mongodb://',
        host: '@ds137281.mlab.com',
    },
    db:{
        host: '@ds137281.mlab.com',
        name: 'heroku_cr3mbgg4',
        port: 37281
    },
    email:{
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'santhiyaptsm@gmail.com',
            pass: ''
        }
    }
}