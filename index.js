const invokeApi = require("./invoke_api");
const sendMail = async (body, key) => {
  try {
    let requestObj = {
      path: "https://apidev.mailcub.com/api/customer/send_email",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-sh-key": key,
      },
    };
    requestObj["postData"] = body;
    const result = await invokeApi(requestObj);
    if (result.code === 200) {
      let result_obj = {
        code: result.code,
        message: result.message,
      };
      return result_obj;
    }
    return result;
  } catch (err) {
    return err;
  }
};
module.exports = {
  sendMail,
};
