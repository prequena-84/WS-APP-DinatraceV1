import sintetico from './sinteticos.js';
import { configSintetico1, configSintetico2, configSintetico3 } from './config-sinteticos.js'

const   
    doc = document, 
    botonSintetico1 = doc.querySelector('#execute1'), 
    botonSintetico2 = doc.querySelector('#execute2'), 
    botonSintetico3 = doc.querySelector('#execute3'), 
    resutadoTabla = doc.querySelector('#resultados')
;

// Activación Sintetico #1
botonSintetico1.addEventListener('click', e => {
    let sintetico1 = new sintetico(configSintetico1.tokenID, configSintetico1.urlPOST, configSintetico1.urlGET, configSintetico1.locations, configSintetico1.munitorID);
    e.target.disabled = true;
    e.target.textContent = 'Ejecutando ...';

    (async function(n) {      
       resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = 'Esperando resultado ...';

        await fetch(sintetico1.urlPOST, {
            method: 'POST',
            headers: sintetico1.hearderPOST(),
            body: JSON.stringify(sintetico1.bodyPOST()),
        })
        .then( res => res.json() )
        .then( res => sintetico1.executionId = res.triggered[0].executions[0].executionId )
        .catch( err => console.error(err) );

            const munitoreoSintetico = setInterval( async function() {

                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `Esperando resultado ... (peticiones: ${sintetico1.intentos++})`;

                await fetch(sintetico1.urlGetValidacion(), sintetico1.headerGet()) 
                    .then( res => res.json())
                    .then( res => {
                        if ( res.executionStage === 'EXECUTED' ) {
                            clearInterval(munitoreoSintetico);
                            e.target.disabled = false;
                            e.target.textContent = 'Ejecutar';
                                if ( res.simpleResults.status === 'SUCCESS' ) {
                                    resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = res.simpleResults.status;
                                    resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                    sintetico1 = null;
                                }
                                else { //if ( res.executionStage === 'FAILED' ) {
                                    resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `${res.simpleResults.status} - (errorCode: ${res.simpleResults.errorCode})`;
                                    resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                    sintetico1 = null;
                                };   
                        };
                    })
                    .catch( err => console.error(err))
                ;
            }, configSintetico1.tiempoConsulta);
    })(1);
});

// Activación Sintetico #2
botonSintetico2.addEventListener('click', e => {
    let sintetico2 = new sintetico(configSintetico2.tokenID, configSintetico2.urlPOST, configSintetico2.urlGET, configSintetico2.locations, configSintetico2.munitorID);
    e.target.disabled = true;
    e.target.textContent = 'Ejecutando ...';

    (async function(n) {      
       resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = 'Esperando resultado ...';

        await fetch(sintetico2.urlPOST, {
            method: 'POST',
            headers: sintetico2.hearderPOST(),
            body: JSON.stringify(sintetico2.bodyPOST()),
        })
        .then( res => res.json() )
        .then( res => sintetico2.executionId = res.triggered[0].executions[0].executionId )
        .catch( err => console.error(err) );

            const munitoreoSintetico = setInterval( async function() {

                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `Esperando resultado ... (peticiones: ${sintetico2.intentos++})`;

                await fetch(sintetico2.urlGetValidacion(), sintetico2.headerGet()) 
                    .then( res => res.json())
                    .then( res => {
                        if ( res.executionStage === 'EXECUTED' ) {
                            clearInterval(munitoreoSintetico);
                            e.target.disabled = false;
                            e.target.textContent = 'Ejecutar';
                            if ( res.simpleResults.status === 'SUCCESS' ) {
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = res.simpleResults.status;
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                sintetico2 = null;
                            }
                            else { //if ( res.executionStage === 'FAILED' ) {
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `${res.simpleResults.status} - (errorCode: ${res.simpleResults.errorCode})`;
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                sintetico2 = null;
                            };
                        };
                    })
                    .catch( err => console.error(err))
                ;
            }, configSintetico2.tiempoConsulta);
    })(2);
});

// Activación Sintetico #3
botonSintetico3.addEventListener('click', e => {
    let sintetico3 = new sintetico(configSintetico3.tokenID, configSintetico3.urlPOST, configSintetico3.urlGET, configSintetico3.locations, configSintetico3.munitorID);
    e.target.disabled = true;
    e.target.textContent = 'Ejecutando ...';

    (async function(n) {      
       resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = 'Esperando resultado ...';

        await fetch(sintetico3.urlPOST, {
            method: 'POST',
            headers: sintetico3.hearderPOST(),
            body: JSON.stringify(sintetico3.bodyPOST()),
        })
        .then( res => res.json() )
        .then( res => sintetico3.executionId = res.triggered[0].executions[0].executionId )
        .catch( err => console.error(err) );

            const munitoreoSintetico = setInterval( async function() {

                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `Esperando resultado ... (peticiones: ${sintetico3.intentos++})`;

                await fetch(sintetico3.urlGetValidacion(), sintetico3.headerGet()) 
                    .then( res => res.json())
                    .then( res => {
                        if ( res.executionStage === 'EXECUTED' ) {
                            console.log(res);
                            clearInterval(munitoreoSintetico);
                            e.target.disabled = false;
                            e.target.textContent = 'Ejecutar';
                            if ( res.simpleResults.status === 'SUCCESS' ) {
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = res.simpleResults.status;
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                sintetico3 = null;
                            }
                            else { //if ( res.executionStage === 'FAILED' ) {
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(2)`).textContent = `${res.simpleResults.status} - (errorCode: ${res.simpleResults.errorCode})`;
                                resutadoTabla.querySelector(`tr:nth-child(${n}) td:nth-child(3)`).textContent = res.simpleResults.executedSteps;
                                sintetico3 = null;
                            };
                        };
                    })
                    .catch( err => console.error(err))
                ;
            }, configSintetico3.tiempoConsulta);
    })(3);
});