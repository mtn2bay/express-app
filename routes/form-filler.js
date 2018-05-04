let express = require('express');
let router = express.Router();

router.post('/', function(req, res) {
    let formData = req.body;
    let sourcePDF = "public/Wetland_Determination_Form.pdf";

    pdfFiller.fillForm( sourcePDF, destinationPDF, formData, function(err) {
        if (err) throw err;
        res.download(destinationPDF)
    });

    res.send(body);
});

module.exports = router;
