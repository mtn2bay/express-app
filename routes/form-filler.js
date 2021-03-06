let express = require('express');
let router = express.Router();
let pdfFiller = require('pdffiller');

router.post('/', function(req, res) {
    let formData = req.body;
    let sourcePDF = "public/Wetland_Determination_Form.pdf";
    let destinationPDF =  "public/completed_form.pdf";

    pdfFiller.fillForm( sourcePDF, destinationPDF, formData, function(err) {
        if (err) throw err;
        res.download(destinationPDF)
    });
});

module.exports = router;
