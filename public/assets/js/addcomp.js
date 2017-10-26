$(document).ready(function() {

    console.log("addcomp loading");

    // Getting references to the add new tenant inputs
    var siteName = $("[name=siteName]");
    var address = $("[name=address]");
    var owner = $("[name=owner]");
    var entered = $("[name=entered]");
    var sold = $("[name=sold]");
    var buildingSF = $("[name=buildingSF]");
    var totalAcreage = $("[name=totalAcreage]");
    var salePrice = $("[name=salePrice]");
    var numUnits = $("[name=numUnits]");
    var oneBedSF = $("[name=oneBedSF]");
    var twoBedSF = $("[name=twoBedSF]");
    var threeBedSF = $("[name=threeBedSF]");
    var oneBedRent = $("[name=oneBedRent]");
    var twoBedRent = $("[name=twoBedRent]");
    var threeBedRent = $("[name=threeBedRent]");
    var notes = $("[name=notes]");

    // Handle new tenant submit
    $(document).on("submit", "#form--event-add", handleTenantFormSubmit);

    // A function to handle what happens when the form is submitted to create a new tenant
    function handleTenantFormSubmit(event) {

        console.log("calling add new tenant function");

        event.preventDefault();

        // Don't do anything if the name field hasn't been filled out
        if (!siteName.val().trim().trim()) {
            return;
        }

        // A function for creating a new tenant
        function newComp(compData) {
            console.log(compData);
            $.post("/api/newComp", compData, function() {
                console.log('request ended')
            })
            console.log("adding new site to leasecomp database");
        }

        // Calling the newComp function and passing in the values in the new tenant input
        newComp({
            siteName: siteName
                .val()
                .trim(),
            address: address
                .val()
                .trim(),
            owner: owner
                .val()
                .trim(),
            entered: entered
                .val()
                .trim(),
            sold: sold
                .val()
                .trim(),
            buildingSF: buildingSF
                .val()
                .trim(),
            totalAcreage: totalAcreage
                .val()
                .trim(),
            salePrice: salePrice
                .val()
                .trim(),
            numUnits: numUnits
                .val()
                .trim(),
            salePrice: salePrice
                .val()
                .trim(),
            oneBedSF: oneBedSF
                .val()
                .trim(),
            twoBedSF: twoBedSF
                .val()
                .trim(),
            threeBedSF: threeBedSF
                .val()
                .trim(),
            oneBedRent: oneBedRent
                .val()
                .trim(),
            twoBedRent: twoBedRent
                .val()
                .trim(),
            threeBedRent: threeBedRent
                .val()
                .trim(),
            notes: notes
                .val()
                .trim()
        });

    };

});