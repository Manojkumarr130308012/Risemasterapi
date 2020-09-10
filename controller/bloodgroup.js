const fs = require('fs');
const bloodgroupSchema = require('./../model/bloodgroup');
const errorHandler = require('./../utils/error.handler');
const excelToJson = require('convert-excel-to-json');

class bloodgroupController{
	async add(newBloodgroup){
		try{
			let response = await bloodgroupSchema.create(newBloodgroup);

			return { status: "success", result: response, message: "Added Successfully" };

		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await bloodgroupSchema.find({});
			return {
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await bloodgroupSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await bloodgroupSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await bloodgroupSchema.updateOne({_id: id}, body);
           return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	

// -> Import Excel File to MongoDB database
async importExcelData2MongoDB(filePath){
    // -> Read Excel File to Json Data
    const excelData = excelToJson({
        sourceFile: filePath,
        sheets:[{
            // Excel Sheet Name
            name: 'bloodgroups',
 
            // Header Row -> be skipped and will not be present at our result object.
            header:{
               rows: 1
            },
			
            // Mapping columns to keys
            columnToKey: {
                A: '_id',
                B: 'bloodgroup'
            }
        }]
    });
 
    // -> Log Excel Data to Console
	console.log(excelData);
	fs.unlinkSync(filePath);

	try{
		let response = await bloodgroupSchema.insertMany(excelData.Customers);

		return { status: "success", result: response, message: "Added Successfully" };

	} catch(error){
		return {
			status: "error",
			error: errorHandler.parseMongoError(error)
		};
	}

}



}
module.exports = new bloodgroupController();