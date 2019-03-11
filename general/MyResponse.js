exports.createResponse = createResponse; //export function for globally use
// Function for create response
function createResponse(res, status, message, data, pager)
{
    return res.status(status).send({
        'status' : status,
        'message' : message,
        'payload' : data,
        'pager' : pager
    });
}
