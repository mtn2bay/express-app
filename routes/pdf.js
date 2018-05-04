let express = require('express');
let router = express.Router();
let pdfFiller = require('pdffiller');

router.get('/', function(req, res, next) {
    // let sourcePDF = "public/OoPdfFormExample.pdf";
    let sourcePDF = "public/Wetland_Determination_Form.pdf";

    // let destinationPDF =  "public/test_complete.pdf";
    // let data = {
    //     'Given Name Text Box' : 'Given',
    //     'Family Name Text Box' : 'Family',
    //     'House nr Text Box' : 'House',
    //     'Address 2 Text Box' : 'Address',
    //     'Postcode Text Box' : 'Postcode',
    //     'Country Combo Box' : 'Country',
    //     'Height Formatted Field' : 'Height',
    //     'City Text Box' : 'City',
    //     'Driving License Check Box' : 'Yes',
    //     'Favourite Colour List Box' : 'Favourite',
    //     'Language 1 Check Box' : 'Yes',
    //     'Language 2 Check Box' : 'Off'
    // }
    // pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) {
    //     if (err) throw err;
    //     res.download(destinationPDF)
    // });

    // Override the default field name regex. Default: /FieldName: ([^\n]*)/
    let nameRegex = null;
    pdfFiller.generateFDFTemplate( sourcePDF, nameRegex, function(err, fdfData) {
        if (err) {
            console.log('error', err)
        }
        // console.log(fdfData, err);
        res.send(fdfData);
    });
});

module.exports = router;
