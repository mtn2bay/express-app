var express = require('express');
var router = express.Router();
var pdfFiller = require('pdffiller');

/* GET home page. */
router.get('/', function(req, res, next) {
    var sourcePDF = "public/OoPdfFormExample.pdf";
    // var sourcePDF = "public/ACOE-Data-Form-NCNE-fillable.pdf";

    var destinationPDF =  "public/test_complete.pdf";
    let data = {
        'Given Name Text Box' : 'Given',
        'Family Name Text Box' : 'Family',
        'House nr Text Box' : 'House',
        'Address 2 Text Box' : 'Address',
        'Postcode Text Box' : 'Postcode',
        'Country Combo Box' : 'Country',
        'Height Formatted Field' : 'Height',
        'City Text Box' : 'City',
        'Driving License Check Box' : 'Yes',
        'Favourite Colour List Box' : 'Favourite',
        'Language 1 Check Box' : 'Yes',
        'Language 2 Check Box' : 'Off'
    }
    pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) {
        if (err) throw err;
        res.download(destinationPDF)
    });

    // Override the default field name regex. Default: /FieldName: ([^\n]*)/
    // var nameRegex = null;
    // pdfFiller.generateFDFTemplate( sourcePDF, nameRegex, function(err, fdfData) {
    //     if (err) {
    //         console.log('error', err)
    //     }
    //     console.log(fdfData, err);
    //     res.send(fdfData);
    // });

    // let domText = 'PDF Filler'
    // res.send(domText);
});

module.exports = router;
