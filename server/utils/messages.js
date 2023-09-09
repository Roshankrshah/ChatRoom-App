const moment = require('moment-timezone');

function formatMessage(username,text){
    return {
        username,
        text,
        time: moment().tz("Asia/Kolkata").format('hh:mm a')
    }
}

module.exports = formatMessage;