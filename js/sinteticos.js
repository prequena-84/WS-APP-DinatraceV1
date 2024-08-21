export default class {

    executionId = '';
    intentos = 1;

    constructor(token, urlPOST, urlGET, locations = '', monitorId = '') {
        this.tokenID = token;
        this.urlPOST = urlPOST;
        this.urlGET = urlGET;
        this.locations = locations;
        this.monitorId = monitorId;
    };

    bodyPOST(){
        return ({
            "failOnPerformanceIssue":false,
            "failOnSslWarning":true,
            "monitors": [
                {
                    "executionCount":1,
                    "locations": [
                        `${this.locations}`
                    ],
                    "monitorId":`${this.monitorId}`,
                }
            ],
            "processingMode":"ONLY_BASIC_METRICS",
            "stopOnProblem":true,
            "takeScreenshotsOnSuccess":true,
        });
    };

    hearderPOST() {
        return ({
            'accept': 'application/json; charset=utf-8',
            'Dt-App-Context': 'dt-app-context : prueba',
            'Authorization': `Api-Token ${this.tokenID}`,
            'Content-Type': 'application/json; charset=utf-8',
        })
    };

    headerGet() {
        return ({
            method: 'GET',
            headers: {
                'accept': 'application/json; charset=utf-8',
                'Authorization': `Api-Token ${this.tokenID}`,
            },
        })
    };

    urlGetValidacion() {
        return this.urlGET + this.executionId;
    };
};