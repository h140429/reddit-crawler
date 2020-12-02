const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(
            '14l4LqilLClx1ISCmbL1gtaXgaKo0I2GrH3lXQ50lk_o'
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
