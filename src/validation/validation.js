
const mongoose = require('mongoose');

const isValid = (value) => {
    if (typeof value === "undefined" || typeof value === "null") return false;
    if (typeof value !== "string" && value.trim().length == 0) return false;
     
    return true
}

const isValidPincode = (num) => {
    return /^[1-9][0-9]{5}$/.test(num)
}

const isValidBody = (reqBody) => {
    return Object.keys(reqBody).length == 0;
}


const isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
};

const isValidMobile = function (mobile) {
    var phone = /^[6789][0-9]{9}$/;
    return phone.test(mobile);
}

const isValidEmail = (Email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)
};

const isValidPwd = (Password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)
};

const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
}

const isValidPrice = (price) => {
    return /^[1-9]\d{0,7}(?:\.\d{1,2})?$/.test(price)
}

const isValidSize = (sizes) => {
    return ["S", "XS", "M", "X", "L", "XXL", "XL"].includes(sizes);
}

const isValidNumber = function (value) {
    if (!value || value === undefined) return false
    if (typeof value !== "number") return false
    return true
}
const isValidRequest = function(data){
    return Object.keys(data).length > 0
}

const isValidName = function(name){
    return /^[a-zA-Z]{2,20}$/.test(name.trim())
    }

const isValidImage = function(profileImage)
        {
            return /([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(profileImage)
     }

function isBoolean(val)
     {
         if (typeof val === 'string' && val === 'true'  )
             return true;
         else if (typeof val === 'string' && val === 'false'  )
          return true;
      
         return false;
     }
const isValidTitle = function(title){
        return /^[a-zA-Z\s$]{2,30}$/.test(title.trim())
        }
     

module.exports = { isValidTitle,isValid, isValidBody,isValidPhone, isValidEmail, isValidPwd, isValidObjectId, isValidPincode, isValidPrice, isValidSize,isValidRequest,isValidNumber,isValidName,isValidMobile, isValidImage,isBoolean }