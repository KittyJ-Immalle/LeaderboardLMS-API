function success(res, message, data) {
    return res.status(200).send({ status: "success", message: message, payload: data});
}
module.exports = {
    success
}
