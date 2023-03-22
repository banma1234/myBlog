export default async function login(req: any, res: any) {
  try {
    let result = false;
    let message = "";
    if (req.body == process.env.USER_ROOT) {
      result = true;
      message = "success";
    } else {
      result = false;
      message = "invalid password error";
    }
    return res.json({
      message: message,
      success: result,
    });
  } catch (error: any) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
