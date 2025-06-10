const invokeApi = require("./invoke_api");

const sendMail = async (body, key) => {
  let requestObj = {
    path: "https://api.mail.mailcub.com/api/send_email",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-sh-key": key,
    },
    postData: body,
  };

  const result = await invokeApi(requestObj);

  // Explicitly throw error for non-200 responses
  if (result.code !== 200) {
    throw new Error(`API request failed: ${result.message || "Unknown error"}`);
  }

  // Success
  return {
    code: result.code,
    message: result.message,
  };
};
 
module.exports = {
  sendMail,
};
