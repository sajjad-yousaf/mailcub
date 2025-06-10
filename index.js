const invokeApi = require("./invoke_api");
const sendMail = async (body, key) => {
  try {
    let requestObj = {
      path: "https://api.mail.mailcub.com/api/send_email",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-sh-key": key,
      },
    };
    requestObj["postData"] = body;
    const result = await invokeApi(requestObj);

    if (result.code === 200) {
      return {
        success: true,
        code: result.code,
        message: result.message,
      };
    }

    return {
      success: false,
      code: result.code,
      message: result.message || "Failed to send email",
    };
  } catch (err) {
    return {
      success: false,
      message: err.message || "Unknown error occurred",
    };
  }
};
 
module.exports = {
  sendMail,
};
