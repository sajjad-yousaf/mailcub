const invokeApi = require("./invoke_api");
// const addCustomer = async (body) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer/signup_customer",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     requestObj["postData"] = body;
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//         key: result.customer.key,
//         default_list: result.customer.list_id,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
// const editCustomer = async (body, key) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer/edit_customer_by_key",
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "x-sh-key": key,
//       },
//     };
//     requestObj["postData"] = body;
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
// const deleteCustomer = async (key) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer/delete_customer_by_key",
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "x-sh-key": key,
//       },
//     };
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
// const addDomain = async (body, key) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer_domain/add_customer_domain_with_key",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-sh-key": key,
//       },
//     };
//     requestObj["postData"] = body;
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//         dns_records: result.data,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
// const verifyDomain = async (body, key) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer_domain/verify_domain_with_key",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-sh-key": key,
//       },
//     };
//     requestObj["postData"] = body;
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
// const checkDomainVerify = async (body, key) => {
//   try {
//     let requestObj = {
//       path: "https://mailserverapi.devflips.com/api/customer_domain/check_domain_verification",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-sh-key": key,
//       },
//     };
//     requestObj["postData"] = body;
//     const result = await invokeApi(requestObj);
//     if (result.code === 200) {
//       let result_obj = {
//         code: result.code,
//         message: result.message,
//       };
//       return result_obj;
//     }
//     return result;
//   } catch (err) {
//     return err;
//   }
// };
const sendMail = async (body, key) => {
  try {
    let requestObj = {
      path: "https://mailserverapi.devflips.com/api/customer/send_email",
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
let body = {
  email_from: "no-reply@inovate.tech",
  reciever: "alisaad.dev@gmail.com",
  subject: "Dynamite",
  text: "Join Us On dynamitelifestyle.com",
};
let key = "afa90ce0-4561-11ee-b008-b9a1d6feb54d";
const restfunc = async () => {
  let result = await sendMail(body, key);
  console.log(result);
};
restfunc();
module.exports = {
  //   addCustomer,
  //   editCustomer,
  //   deleteCustomer,
  //   addDomain,
  //   verifyDomain,
  sendMail,
  //   checkDomainVerify,
};
