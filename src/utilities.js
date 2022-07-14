 module.exports =  getTypeCode = (x) => {
    switch (true) {
        case (100 <= x.responseStatus) && (x.responseStatus <= 199):
            x.typeCode = "🔵 informational";
            break;
        case (200 <= x.responseStatus)&&(x.responseStatus <= 299):
            x.typeCode = "🟢 Succesful";
            break;
        case (300 <= x.responseStatus)&&(x.responseStatus <= 399):
            x.typeCode = "🟠 Redirección";
            break;
        case (400 <= x.responseStatus)&&(x.responseStatus<= 499):
            x.typeCode = "🔴 Client Error";
            break;
        case (500 <= x.responseStatus)&&(x.responseStatus <= 599):
            x.typeCode = "🔴 Server Error";
            break;
        default:
         x.typeCode = "🔴  Request failed";
            break;
    }
    return x.typeCode
    }