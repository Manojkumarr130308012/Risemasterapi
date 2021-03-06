
// const express = require("express");
// const server = express();
// const config = require('./config/config');
// // File Upload

// const userDesignationRouter = require('./router/userDesignation');
// const academicYearRouter = require('./router/academicYear');
// const institutionRouter = require('./router/institution');
// const boardOfEducationRouter = require('./router/boardOfEducation');
// const admissionCategoryRouter = require('./router/admissionCategory');
// const uploadRouter = require('./router/upload');
// const driverFileUploadRouter = require('./router/driverFileUpload');
// const middleware = require('./middleware/middleware');
// const bodyParser = require('body-parser');
// const nationalityRouter = require("./router/nationality");
// const religionRouter = require("./router/religion");
// const communityRouter = require("./router/community");
// const casteRouter = require("./router/caste");
// const bloodgroupRouter = require("./router/bloodgroup");
// const courseCategoryRouter = require("./router/course-category");
// const courseProgramRouter = require("./router/course-program");
// const admissionTypeRouter = require("./router/admission-type");
// const batchRouter = require("./router/batch");
// const semesterRouter = require("./router/semester");

// //Student Master
// const addressTypeRouter = require('./router/addressType');
// const courseTypeRouter = require('./router/courseType');
// const degreeRouter = require('./router/degree');
// const institutionTypeRouter = require('./router/institutionType');
// const mediumRouter = require('./router/medium');
// const motherTongueRouter = require('./router/motherTongue');
// const paymentMethodRouter = require('./router/paymentMethod');
// const referralTypeRouter = require('./router/referralType');
// const scholarshipCategoryRouter = require('./router/scholarshipCategory');
// const bankRouter = require('./router/bank');
// const qualificationTypeRouter = require("./router/qualification-type");
// const relationshipRouter = require('./router/relationship');
// const activityCategoryRouter = require('./router/activityCategory');
// const subCategoryRouter = require('./router/subCategory');
// const certificateTypeRouter = require('./router/certificateType');
// const hostelRouter = require('./router/hostel');
// const sectionRouter = require("./router/section");
// const sectionStaffRouter = require("./router/section-staff");

// //Staff Master
// const staffTypeRouter = require("./router/staff-type");
// const staffRoleRouter = require("./router/staff-role");
// const payTypeRouter = require("./router/pay-type");
// const salutationRouter = require("./router/salutation");
// const genderRouter = require("./router/gender");
// const maritalStatusRouter = require("./router/marital-status");
// const departmentRouter = require("./router/department");
// const feeTypeRouter = require("./router/fee-type");
// const modeOfEnquiryRouter = require("./router/mode-of-enquiry");

// //CandiadateEnquiry
// const basicDetailsRouter = require("./router/ce-basicdetails");
// const addressDetailsRouter = require("./router/ce-addressdetails");
// const paymentDetailsRouter = require("./router/ce-paymentdetails");
// const followupsRouter = require("./router/ce-followups");
// const qualificationDetailsRouter = require("./router/ce-qualificationdetails");
// const studentPhotoRouter = require("./router/uploadStudentPhoto");
// const ceCourseProgramRouter = require("./router/addCEcourseProgram");
// const qdFileUpload = require('./router/ce-qd-fileupload');
// const convertRouter = require('./router/ce-converttostudent');

// // Vehicle Management 
// const vehicleRouter = require("./router/vehicleMaster");
// const expenseRouter = require("./router/vehicleExpenses");
// const stationRouter = require("./router/fillingStations");
// const driverRouter = require("./router/driverMaster");
// const stageDetailsRouter = require("./router/stage-details");
// const expensesEntryRouter = require("./router/expenses-entry");
// const fuelEntryRouter = require("./router/fuel-entry");

// // Staff Management
// const staffProfileRouter = require("./router/staff-profile");
// const staffFileUploadRouter = require('./router/staffFileUpload');
// const staffContactRouter = require('./router/staffContact');
// const staffIdentityRouter = require('./router/staffIdentity');
// const staffExperienceRouter = require('./router/staffExperience');
// const staffEducationRouter = require('./router/staffEducation');
// const staffCourseRouter = require('./router/staffCourse');

// //StudentManagement
// const studentDetailsRouter = require('./router/student-details');
// const studentContactRouter = require('./router/student-contact');
// const studentExtraRouter = require('./router/student-extracur');
// const studentGuardianRouter = require('./router/student-guardian');
// const studentIdentityRouter = require('./router/student-identity');
// const studentMedicalRouter = require('./router/student-medicalinfo');
// const studentOtherRouter = require('./router/student-other');
// const studentQualificationRouter = require('./router/student-qualification');
// const studentIdentityMarkRouter = require('./router/student-identitymark');
// const studentCertificateRouter = require('./router/student-certificate');
// const studentCertiUploadRouter = require('./router/student-certi-upload');

// //Login
// const studentLoginRouter = require('./router/studentLogin');
// const staffLoginRouter = require('./router/staffLogin');


// //Subject Master
// const subjectTypeRouter = require('./router/subject-type');
// const subjectClassificationRouter = require('./router/subject-classification');
// const subjectCategoryRouter = require('./router/subject-category');
// const subjectMarkDefinitionRouter = require('./router/subject-mark-definition');
// const subjectTopicCoverageRouter = require('./router/subject-topic-coverage');
// const subjectIntMarkCatRouter = require('./router/subject-intMarkCat');
// const subjectExtMarkCatRouter = require('./router/subject-extMarkCat');
// const subjectAddRouter = require('./router/subject-add');
// const subjectStaffRouter = require('./router/subject-staff');
// const subjectSyllabusRouter = require('./router/subject-syllabus');

// //Timetable 
// const weekDayRouter = require('./router/weekDay');
// const periodRouter = require('./router/period');
// const timeTableRouter = require('./router/time-table');
// const studentLeaveRouter = require('./router/student-leave');

// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(middleware);


// server.use("/student-leave", studentLeaveRouter);

// //Timetable
// server.use("/weekDay", weekDayRouter);
// server.use("/period", periodRouter);
// server.use("/time-table", timeTableRouter);

// //Student Period Attendence
// const studentAttendenceEntry = require('./router/student-attendenceEntry');

// //Student Period Attendence

// server.use("/studentAttendence", studentAttendenceEntry);

// //Login
// server.use("/studentLogin", studentLoginRouter);
// server.use("/staffLogin", staffLoginRouter);

// //Master
// server.use("/user-designation", userDesignationRouter);
// server.use("/academic-year", academicYearRouter);
// server.use("/nationality", nationalityRouter);
// server.use("/religion", religionRouter);
// server.use("/community", communityRouter);
// server.use("/caste", casteRouter);
// server.use("/bloodgroup", bloodgroupRouter);
// server.use("/admission-type", admissionTypeRouter);
// server.use("/institution", institutionRouter);
// server.use("/boardOfEducation", boardOfEducationRouter);
// server.use("/admissionCategory", admissionCategoryRouter);
// server.use("/upload", uploadRouter);
// server.use("/driverFileUpload", driverFileUploadRouter);
// server.use("/semester", semesterRouter);


// //Student Master
// server.use("/course-category", courseCategoryRouter);
// server.use("/course-program", courseProgramRouter);
// server.use("/batch", batchRouter);
// server.use("/addressType", addressTypeRouter);
// server.use("/courseType", courseTypeRouter);
// server.use("/degree", degreeRouter);
// server.use("/institutionType", institutionTypeRouter);
// server.use("/medium", mediumRouter);
// server.use("/motherTongue", motherTongueRouter);
// server.use("/paymentMethod", paymentMethodRouter);
// server.use("/referralType", referralTypeRouter);
// server.use("/scholarshipCategory", scholarshipCategoryRouter);
// server.use("/bank", bankRouter);
// server.use("/qualification-type", qualificationTypeRouter);
// server.use("/relationship", relationshipRouter);
// server.use("/activityCategory", activityCategoryRouter);
// server.use("/subCategory", subCategoryRouter);
// server.use("/certificateType", certificateTypeRouter);
// server.use("/hostel", hostelRouter);
// server.use("/section", sectionRouter);
// server.use("/section-staff", sectionStaffRouter);

// //Staff Master
// server.use("/staff-type", staffTypeRouter);
// server.use("/staff-role", staffRoleRouter);
// server.use("/pay-type", payTypeRouter);
// server.use("/salutation", salutationRouter);
// server.use("/gender", genderRouter);
// server.use("/marital-status", maritalStatusRouter);
// server.use("/department", departmentRouter);
// server.use("/fee-type", feeTypeRouter);
// server.use("/mode-of-enquiry", modeOfEnquiryRouter);

// //CandidateEnquiry
// server.use("/ce-basicdetails", basicDetailsRouter);
// server.use("/ce-addressdetails", addressDetailsRouter);
// server.use("/ce-paymentdetails", paymentDetailsRouter);
// server.use("/ce-followups", followupsRouter);
// server.use("/ce-qualificationdetails", qualificationDetailsRouter);
// server.use("/uploadStudentPhoto", studentPhotoRouter);
// server.use("/addCEcourseProgram", ceCourseProgramRouter);
// server.use("/ce-qd-fileupload",qdFileUpload );
// server.use("/ce-converttostudent",convertRouter );

// // Vehicle Management
// server.use("/vehicle",vehicleRouter);
// server.use("/vehicle-expenses", expenseRouter);
// server.use("/filling-stations",stationRouter);
// server.use("/driver",driverRouter);
// server.use("/stage-details",stageDetailsRouter);
// server.use("/expenses-entry",expensesEntryRouter);
// server.use("/fuel-entry",fuelEntryRouter);

// // Staff Management
// server.use("/staff-profile",staffProfileRouter);
// server.use("/staffFileUpload", staffFileUploadRouter);
// server.use("/staffContact", staffContactRouter);
// server.use("/staffIdentity", staffIdentityRouter);
// server.use("/staffExperience", staffExperienceRouter);
// server.use("/staffEducation", staffEducationRouter);
// server.use("/staffCourse", staffCourseRouter);

// //Student Management
// server.use("/student-details", studentDetailsRouter);
// server.use("/student-contact", studentContactRouter);
// server.use("/student-extracur", studentExtraRouter);
// server.use("/student-guardian", studentGuardianRouter);
// server.use("/student-identity", studentIdentityRouter);
// server.use("/student-medicalinfo", studentMedicalRouter);
// server.use("/student-other", studentOtherRouter);
// server.use("/student-qualification", studentQualificationRouter);
// server.use("/student-identitymark", studentIdentityMarkRouter);
// server.use("/student-certificate", studentCertificateRouter);
// server.use("/student-certi-upload", studentCertiUploadRouter);

// //Subject Master
// server.use("/subject-type", subjectTypeRouter);
// server.use("/subject-classification", subjectClassificationRouter);
// server.use("/subject-category", subjectCategoryRouter);
// server.use("/subject-mark-definition", subjectMarkDefinitionRouter);
// server.use("/subject-topic-coverage", subjectTopicCoverageRouter);
// server.use("/subject-intMarkCat", subjectIntMarkCatRouter);
// server.use("/subject-extMarkCat", subjectExtMarkCatRouter);
// server.use("/subject-add", subjectAddRouter);
// server.use("/subject-staff", subjectStaffRouter);
// server.use("/subject-syllabus", subjectSyllabusRouter);

// // File Upload
// server.use('/uploads', express.static('uploads'));
// server.use('/driverFiles', express.static('driverFiles'));
// server.use('/studentPhoto', express.static('studentPhoto'));
// server.use('/certificate', express.static('certificate'));
// server.use('/qdFile', express.static('qdFile'));
// server.set('view engine', 'pug')

// server.get('/',function(req, res) {  
// 	res.send('It works');
// });

// server.listen(config.app.port, () => {
// 	console.log(`Listening on`, config.app.port);
// });
// test


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


const config=require('./config/config.json');

const middleware=require('./middleware/middleware')
app.use(middleware);


app.listen(port, () => console.log(`url-shortener listening on port ${config.app.port}!`));


