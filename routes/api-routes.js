// REQUIRE FILES
var db = require("../models/index.js");
var passport = require("passport");

// Routes ======================================================================================================= //

module.exports = function(app) {

    // --------------------------------------------- GET ROUTES ------------------------------------------------- //

    /// ============= REDIRECT TO LOGIN ============== ///
    app.get('/', function(req, res) {
        res.redirect('/signin');
    });

    /// ============= REDIRECT TO LOGIN ============== ///
    app.get('/dashboard', function(req, res) {
        res.redirect('/fipdev');
    });

    /// ================ RENDER SIGNIN =============== ///
    app.get('/signin', function(req, res) {
        res.render('signin', req);
    });

    /// ================ RENDER SIGNUP =============== ///
    app.get("/signup", function(req, res) {
        res.render('signup', req);
    });

    /// ================ RENDER cleDev =============== ///
    app.get("/cleDev", function(req, res) {
        db.cleDev.findAll().then(function(data) {
            var hbsObject = { cleDev: data };
            // res.json(hbsObject);
            res.render('cleDev', hbsObject);
        });
    });

    /// ================ RENDER fipDev =============== ///
    app.get("/fipDev", function(req, res) {
        db.fipDev.findAll().then(function(data) {
            var hbsObject = { fipDev: data };
            // res.json(hbsObject);
            res.render('fipDev', hbsObject);
        });
    });

    /// ============== RENDER leaseComps ============= ///
    app.get("/leaseComps", function(req, res) {
        db.leaseComps.findAll().then(function(data) {
            var hbsObject = { leaseComps: data };
            // res.json(hbsObject);
            res.render('leaseComps', hbsObject);
        });
    });

    /// ============== RENDER CLE MAP ================ ///
    app.get("/clemap", function(req, res) {
        db.cleDev.findAll().then(function(data) {
            var hbsObject = { cleDev: data };
            // res.json(hbsObject);
            res.render('clemap', hbsObject);
        });
    });

    /// ============== RENDER FIP MAP ================ ///
    app.get("/fipmap", function(req, res) {
        db.fipDev.findAll().then(function(data) {
            var hbsObject = { fipDev: data };
            // res.json(hbsObject);
            res.render('fipmap', hbsObject);
        });
    });

    /// ========== RENDER LEASE COMPS MAP ============ ///
    app.get("/compsmap", function(req, res) {
        db.leaseComps.findAll().then(function(data) {
            var hbsObject = { leaseComps: data };
            // res.json(hbsObject);
            res.render('compsmap', hbsObject);
        });
    });

    /// ============== RENDER ALL MAP ================ ///
    app.get("/allmap", function(req, res) {
        db.leaseComps.findAll().then(function(data) {
            var hbsObject = { leaseComps: data };
            // res.json(hbsObject);
            res.render('allmap', hbsObject);
        });
    });


    // ------------------------------------------- API GET ROUTES ----------------------------------------------- //

    /// ================= SHOW ALL cleDev =================== ///
    app.get("/api/cleDev", function(req, res) {
        db.cleDev.findAll({}).then(function(dbcleDev) {
            res.json(dbcleDev);
        });
    })

    /// ================= SHOW ALL fipDev =================== ///
    app.get("/api/fipDev", function(req, res) {
        db.fipDev.findAll({}).then(function(dbfipDev) {
            res.json(dbfipDev);
        });
    })

    /// =============== SHOW ALL leaseComps ================= ///
    app.get("/api/leaseComps", function(req, res) {
        db.leaseComps.findAll({}).then(function(dbleaseComps) {
            res.json(dbleaseComps);
        });
    })


    // ------------------------------------------- API GET ROUTES BY ID ------------------------------------------ //

    /// ================= SHOW fipDev BY id =================== ///
    app.get("/api/fipDev/:id", function(req, res) {
        db.fipDev.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbfipDev) {
            res.json(dbfipDev);
        });
    })

    /// ================= SHOW cleDev BY id =================== ///
    app.get("/api/cleDev/:id", function(req, res) {
        db.cleDev.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbcleDev) {
            res.json(dbcleDev);
        });
    })


    // ------------------------------------------- POST ROUTES -------------------------------------------------- //

    /// =============== ADD FIP DEV SITE ==================== ///

    app.post("/api/newfipsite", function(req, res) {

        // LOG INFO FROM REQ.BODY FROM MODAL FORM
        console.log("------------------------");
        console.log(req.body);
        console.log("------------------------");

        if (req.body.id == "") {

            db.fipDev.create({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                owner: req.body.owner,
                numUnits: req.body.numUnits,
                salePrice: req.body.salePrice,
                notes: req.body.notes
            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/fipDev");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        } else {

            console.log(req.body.id);
            console.log("edit tenant");

            db.fipDev.update({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                owner: req.body.owner,
                numUnits: req.body.numUnits,
                salePrice: req.body.salePrice,
                notes: req.body.notes
            }, {
                where: { id: req.body.id }

            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/fipDev");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        }
    });

    /// ================ ADD CLE DEV SITE ==================== ///

    app.post("/api/newClesite", function(req, res) {

        // LOG INFO FROM REQ.BODY FROM MODAL FORM
        console.log("------------------------");
        console.log(req.body);
        console.log("------------------------");

        if (req.body.id == "") {

            db.cleDev.create({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                owner: req.body.owner,
                numUnits: req.body.numUnits,
                salePrice: req.body.salePrice,
                notes: req.body.notes
            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/cleDev");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        } else {

            console.log(req.body.id);
            console.log("edit tenant");

            db.cleDev.update({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                owner: req.body.owner,
                numUnits: req.body.numUnits,
                salePrice: req.body.salePrice,
                notes: req.body.notes
            }, {
                where: { id: req.body.id }

            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/cleDev");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        }
    });

    app.post("/api/newComp", function(req, res) {

        // LOG INFO FROM REQ.BODY FROM MODAL FORM
        console.log("------------------------");
        console.log(req.body);
        console.log("------------------------");

        if (req.body.id == "") {

            db.leaseComps.create({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                sold: req.body.sold,
                buildingSF: req.body.buildingSF,
                totalAcreage: req.body.totalAcreage,
                salePrice: req.body.salePrice,
                costPerAcre: (parseFloat(req.body.salePrice)) / (parseFloat(req.body.totalAcreage)),
                numUnits: req.body.numUnits,
                costPerUnit: (parseFloat(req.body.salePrice)) / (parseFloat(req.body.numUnits)),
                oneBedRent: req.body.oneBedRent,
                twoBedRent: req.body.twoBedRent,
                threeBedRent: req.body.threeBedRent,
                notes: req.body.notes
            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/leaseComps");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        } else {

            console.log(req.body.id);
            console.log("edit tenant");

            db.leaseComps.update({
                siteName: req.body.siteName,
                siteStreet1: req.body.siteStreet1,
                siteStreet2: req.body.siteStreet2,
                siteCity: req.body.siteCity,
                siteState: req.body.siteState,
                siteZip: req.body.siteZip,
                siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
                entered: req.body.entered,
                sold: req.body.sold,
                buildingSF: req.body.buildingSF,
                totalAcreage: req.body.totalAcreage,
                salePrice: req.body.salePrice,
                costPerAcre: (parseFloat(req.body.salePrice)) / (parseFloat(req.body.totalAcreage)),
                numUnits: req.body.numUnits,
                costPerUnit: (parseFloat(req.body.salePrice)) / (parseFloat(req.body.numUnits)),
                oneBedRent: req.body.oneBedRent,
                twoBedRent: req.body.twoBedRent,
                threeBedRent: req.body.threeBedRent,
                notes: req.body.notes
            }, {
                where: { id: req.body.id }

            }).then(function(data) {

                // REDIRECT TO CENTER PAGE
                res.redirect("/leaseComps");

            }).catch(function(error) {

                // REPORT ERRORS
                res.send(error);
            });
        }
    });


    /// ==================== DELETE TENANT ====================== ///

    app.delete("/api/remove/fip/:thisId", function(req, res) {

        console.log("---------------");
        console.log("remove tenant");
        console.log(req.params.thisId);
        console.log(req.body);
        console.log("---------------");

        db.fipDev.findOne({
            where: {
                id: req.params.thisId
            }
        }).then(function() {

            db.fipDev.destroy({
                where: {
                    id: req.params.thisId
                }
                // REFRESH PAGE
            }).then(function() {
                location.reload();

                // CATCH ERRORS
            }).catch(function(error) {

                res.send(error);
            });
        })
    });

    app.delete("/api/remove/cle/:thisId", function(req, res) {

        console.log("---------------");
        console.log("remove tenant");
        console.log(req.params.thisId);
        console.log(req.body);
        console.log("---------------");

        db.cleDev.findOne({
            where: {
                id: req.params.thisId
            }
        }).then(function() {

            db.cleDev.destroy({
                where: {
                    id: req.params.thisId
                }
                // REFRESH PAGE
            }).then(function() {
                location.reload();

                // CATCH ERRORS
            }).catch(function(error) {

                res.send(error);
            });
        })
    });

    app.delete("/api/remove/comps/:thisId", function(req, res) {

        console.log("---------------");
        console.log("remove tenant");
        console.log(req.params.thisId);
        console.log(req.body);
        console.log("---------------");

        db.leaseComps.findOne({
            where: {
                id: req.params.thisId
            }
        }).then(function() {

            db.leaseComps.destroy({
                where: {
                    id: req.params.thisId
                }
                // REFRESH PAGE
            }).then(function() {
                location.reload();

                // CATCH ERRORS
            }).catch(function(error) {

                res.send(error);
            });
        })
    });






}; // close api export