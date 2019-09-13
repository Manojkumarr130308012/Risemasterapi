const designationSchema = require('./../model/userDesignation');
var fs = require('fs');
const errorHandler = require('./../utils/error.handler');

class userDesignationController {
    
    async addNewDesignation(newDesignation) {

        try {

            let response = await designationSchema.create(newDesignation);

            return { status: "Success", result: response, message: "Added Successfully" };

        } catch (err) {
            return {
                status: "error", err: errorHandler.parseMongoError(err)
            };
        }

    }

    async updateDesignation(id, designationData) {

        try {
            let response = await designationSchema.updateOne({ _id: id}, designationData);
           // console.log(designationData, id);
            return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: errorHandler.parseMongoError(err) };
        }

    }


    async fetch() {
        try {
            let response = await designationSchema.find({});
            return {
                status: "success",
                response: response
            };
        } catch (error) {
            return {
                status: "error",
                error: error
            };
        }
    }

    async fetchDesignation(id) {
        try {
            let response = await designationSchema.find({'_id': id});
            return response;
        } catch (error) {
            return {
                status: "error",
                error: error
            };
        }
    }

    async delete(id) {
        try {
            let response = await designationSchema.deleteOne({ _id: id});
            return {
                status: "success",
                response: response
            };
        } catch (error) {
            return {
                status: "error",
                error: error
            };
        }
    }
}


module.exports = new userDesignationController();