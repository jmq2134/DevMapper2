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

    /// =============== SHOW ALL leaseComps ================= ///
    app.get("/api/leaseComps", function(req, res) {
        db.leaseComps.findAll({}).then(function(dbleaseComps) {
            res.json(dbleaseComps);
        });
    })

    // ------------------------------------------- POST ROUTES ------------------------------------------------- //

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
            siteState: req.body. siteState,
            siteZip: req.body.siteZip,
            siteAddress: req.body.siteStreet1 + ", " + req.body.siteCity + ", " + req.body.siteState + ", " + req.body.siteZip,
            entered: entered,        
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
        }

        else {

            console.log(req.body.id);
            console.log("edit tenant");

            db.fipDev.update({
            siteName: req.body.siteName,
            siteStreet1: req.body.siteStreet1,
            siteStreet2: req.body.siteStreet2,
            siteCity: req.body.siteCity,
            siteState: req.body. siteState,
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

    app.post("/api/newCleSite", function(req, res) {

        // LOG INFO FROM REQ.BODY FROM MODAL FORM
        console.log("------------------------");
        console.log(req.body);
        console.log("------------------------");

        if (req.body.id = "") {

            db.cleDev.create({
            siteName: req.body.siteName,
            siteStreet1: req.body.siteStreet1,
            siteStreet2: req.body.siteStreet2,
            siteCity: req.body.siteCity,
            siteState: req.body. siteState,
            siteZip: req.body.siteZip,
            siteAddress: req.body.siteAddress,
            dateEntered: req.body.dateEntered,        
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
        }

        else {

        db.cleDev.update({
            siteName: req.body.siteName,
            siteStreet1: req.body.siteStreet1,
            siteStreet2: req.body.siteStreet2,
            siteCity: req.body.siteCity,
            siteState: req.body. siteState,
            siteZip: req.body.siteZip,
            siteAddress: req.body.siteAddress,
            dateEntered: req.body.dateEntered,        
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

        db.leaseComps.create({
            siteName: req.body.siteName,
            siteStreet1: req.body.siteStreet1,
            siteStreet2: req.body.siteStreet2,
            siteCity: req.body.siteCity,
            siteState: req.body. siteState,
            siteZip: req.body.siteZip,
            siteAddress: req.body.siteAddress,
            dateEntered: req.body.dateEntered, 
            dateSold: req.body.dateSold,
            buildingSF: req.body.buildingSF,
            totalAcreage: req.body.totalAcreage,  
            salePrice: req.body.salePrice,
            dateEntered: req.body.dateEntered,  
            numUnits: req.body.numUnits,
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
    });


    /// =============== ADD OR EDIT TENANTS ================== ///

    app.post("/api/:id/newTenant", function(req, res) {

        // LOG INFO FROM REQ.BODY FROM MODAL FORM
        console.log("------------------------");
        console.log(req.body);
        console.log(req.body.id);
        console.log("------------------------");

        /// IF NO ID IS SENT THROUGH MODAL FORM, IT'S A NEW TENANT
        if (req.body.id == "") {

            //// ADD NEW TO TENANTS TABLE -- HANDLE VACANT TENANT OR REGULAR TENANT

            /// VACANT TENANT

            if (req.body.basePSF == "") {

                db.Tenants.create({
                    CenterId: req.params.id,
                    tenantName: req.body.tenantName,
                    tenantSF: req.body.tenantSF
                }).then(function(data) {

                    // REDIRECT TO CENTER PAGE
                    res.redirect("/center/" + req.params.id);

                }).catch(function(error) {

                    // REPORT ERRORS
                    res.send(error);
                });


                /// REGULAR TENANTS

            } else {

                db.Tenants.create({

                    CenterId: req.params.id,
                    tenantName: req.body.tenantName,
                    tenantSF: req.body.tenantSF,
                    leaseStart: req.body.leaseStart,
                    leaseEnd: req.body.leaseEnd,
                    basePSF: req.body.basePSF,
                    camPSF: req.body.camPSF,
                    totalPSF: parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF),
                    annualRent: (parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF)) * parseFloat(req.body.tenantSF),
                    salesPSF: req.body.salesPSF,
                    annualSales: parseFloat(req.body.salesPSF) * parseFloat(req.body.tenantSF),
                    occupancy: (parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF)) / parseFloat(req.body.salesPSF),
                    noticeDate: req.body.noticeDate,
                    noticeRent: req.body.noticeRent

                }).then(function(data) {

                    // REDIRECT TO CENTER PAGE
                    res.redirect("/center/" + req.params.id);

                }).catch(function(error) {

                    // REPORT ERRORS
                    res.send(error);
                });
            }

        } else {

            /// EDIT EXISTING TENANT

            console.log("edit tenant");

            db.Tenants.update({
                CenterId: req.params.id,
                tenantName: req.body.tenantName,
                tenantSF: req.body.tenantSF,
                leaseStart: req.body.leaseStart,
                leaseEnd: req.body.leaseEnd,
                basePSF: req.body.basePSF,
                camPSF: req.body.camPSF,
                totalPSF: parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF),
                annualRent: (parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF)) * parseFloat(req.body.tenantSF),
                salesPSF: req.body.salesPSF,
                annualSales: parseFloat(req.body.salesPSF) * parseFloat(req.body.tenantSF),
                occupancy: (parseFloat(req.body.basePSF) + parseFloat(req.body.camPSF)) / parseFloat(req.body.salesPSF),
                noticeDate: req.body.noticeDate,
                noticeRent: req.body.noticeRent
            }, {
                where: { id: req.body.id }

                // REDIRECT TO SHOPPING CENTER PAGE
            }).then(function(data) {

                res.redirect("/center/" + req.params.id);

                // CATCH ERRORS
            }).catch(function(error) {

                res.send(error);
            });

        }

    });


    /// ==================== DELETE TENANT ====================== ///

    app.delete("/api/remove/:thisId", function(req, res) {

        console.log("\n\n\n>>>>");
        console.log("remove tenant");
        console.log(req.params.thisId);
        console.log(req.body);
        console.log("\n\n\n>>>>");

        var centerId = "";

        db.Tenants.findOne({
            where: {
                id: req.params.thisId
            }
        }).then(function(data) {
            console.log(data);
            centerId = data.CenterId;
            console.log(centerId);

        }).then(function() {

            db.Tenants.destroy({
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