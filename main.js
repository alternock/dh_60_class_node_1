let {
    log,
} = require("./helpers/utils");

let mensajeB = require('./helpers/a/b/test_b')

let {upper} = require('./helpers/fn_string');

let r = upper("mensaje")

let mensajeC = require('./helpers/a/b/c/test_c')

let prop = "fnTest";

log(mensajeB.fnTest("txt1"))
log(mensajeB["fnTest"]("txt2"))
log(mensajeB[prop]("txt3"))

log(mensajeC)