const s3 = require("./s3config");
const fs = require("fs");

const uploadPicToS3=(file)=>{

    const fileStream=fs.createReadStream(file.path)

    const uploadParams= {
        Bucket:process.env.AWS_BUCKET_NAME,
        Body:fileStream,
        Key:file.filename,
        ContentType: 'image/jpeg'
    }
    return s3.upload(uploadParams).promise()
}

module.exports = uploadPicToS3;