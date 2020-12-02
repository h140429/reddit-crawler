const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(
            'xxxxxxxxxx' // Add Google Spreadsheet ID
        );
    }
    async addSheet(title, headerValues) {
        await this.doc.addSheet({ title, headerValues });
        return this.doc.sheetsByIndex.length - 1;
    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo();
    }

    async addRows(rows, i) {
        const sheet = this.doc.sheetsByIndex[i];
        await sheet.addRows(rows);
    }
};
