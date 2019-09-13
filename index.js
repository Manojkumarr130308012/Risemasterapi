

const multer = require('multer');
global.upload = multer({ dest: 'uploads/' });
const express = require("express");
const server = express();
const config = require('./config/config');

const userDesignationRouter = require('./router/userDesignation');
const academicYearRouter = require('./router/academicYear');
const institutionRouter = require('./router/institution');
const boardOfEducationRouter = require('./router/boardOfEducation');
const admissionCategoryRouter = require('./router/admissionCategory');
const uploadRouter = require('./router/upload');
const middleware = require('./middleware/middleware');
const bodyParser = require('body-parser');
const nationalityRouter = require("./router/nationality");
const religionRouter = require("./router/religion");
const communityRouter = require("./router/community");
const casteRouter = require("./router/caste");
const bloodgroupRouter = require("./router/bloodgroup");
const courseCategoryRouter = require("./router/course-category");
const courseProgramRouter = require("./router/course-program");
const admissionTypeRouter = require("./router/admission-type");

//Student Master
const addressTypeRouter = require('./router/addressType');
const courseTypeRouter = require('./router/courseType');
const degreeRouter = require('./router/degree');
const institutionTypeRouter = require('./router/institutionType');
const mediumRouter = require('./router/medium');
const motherTongueRouter = require('./router/motherTongue');
const paymentMethodRouter = require('./router/paymentMethod');
const referralTypeRouter = require('./router/referralType');
const scholarshipCategoryRouter = require('./router/scholarshipCategory');
const bankRouter = require('./router/bank');

//Staff Master
const staffTypeRouter = require("./router/staff-type");
const staffRoleRouter = require("./router/staff-role");
const payTypeRouter = require("./router/pay-type");
const salutationRouter = require("./router/salutation");
const genderRouter = require("./router/gender");
const maritalStatusRouter = require("./router/marital-status");
const departmentRouter = require("./router/department");
const feeTypeRouter = require("./router/fee-type");
const modeOfEnquiryRouter = require("./router/mode-of-enquiry");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');

server.use(middleware);

server.use("/user-designation", userDesignationRouter);
server.use("/academic-year", academicYearRouter);
server.use("/nationality", nationalityRouter);
server.use("/religion", religionRouter);
server.use("/community", communityRouter);
server.use("/caste", casteRouter);
server.use("/bloodgroup", bloodgroupRouter);
server.use("/admission-type", admissionTypeRouter);
server.use("/institution", institutionRouter);
server.use("/boardOfEducation", boardOfEducationRouter);
server.use("/admissionCategory", admissionCategoryRouter);
server.use("/upload", uploadRouter);
server.use("/course-category", courseCategoryRouter);
server.use("/course-program", courseProgramRouter);

//Student Master
server.use("/addressType", addressTypeRouter);
server.use("/courseType", courseTypeRouter);
server.use("/degree", degreeRouter);
server.use("/institutionType", institutionTypeRouter);
server.use("/medium", mediumRouter);
server.use("/motherTongue", motherTongueRouter);
server.use("/paymentMethod", paymentMethodRouter);
server.use("/referralType", referralTypeRouter);
server.use("/scholarshipCategory", scholarshipCategoryRouter);
server.use("/bank", bankRouter);

//Staff Master
server.use("/staff-type", staffTypeRouter);
server.use("/staff-role", staffRoleRouter);
server.use("/pay-type", payTypeRouter);
server.use("/salutation", salutationRouter);
server.use("/gender", genderRouter);
server.use("/marital-status", maritalStatusRouter);
server.use("/department", departmentRouter);
server.use("/fee-type", feeTypeRouter);
server.use("/mode-of-enquiry", modeOfEnquiryRouter);


//server.use(cors({origin: 'http://localhost:4200'}));



server.use('/uploads', express.static('uploads'));
server.set('view engine', 'pug')

server.listen(config.app.port, () => {
	console.log(`Listening on`, config.app.port);
});