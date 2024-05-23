
exports.succes = function(req, res, mensaje = '', status = 200){
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    })
}

exports.error = function(req, res, mensaje, status=500){
    const mensajeOK = mensaje || 'Error Interno';
    res.status(status).send({
        error: true,
        status: status,
        body: mensaje
    })
}