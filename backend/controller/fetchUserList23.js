const Form = require('../db/models/formModel');

let i = 0;
const fetchUserList23 = async(req,res) =>{
    console.log("CONNECTION Number : " , i++)
    try{
        const searchResults = await Form.find({ id: { $regex: /^B423/ } });
        console.log("Search Results: ", searchResults);

        res.json(searchResults);
    }catch(e){
        res.json(e.message);
    }
}

module.exports = fetchUserList23;