const express = require('express')

module.exports = function(server){

    //Definir url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas ciclo de pagamnto
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}