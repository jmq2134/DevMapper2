$(document).ready(function() {

    console.log("addfip loading");

    // Getting references to the add new tenant inputs
    var id = $("[name=id]");
    var siteName = $("[name=siteName]");
    var address = $("[name=address]");
    var entered = $("[name=entered]");
    var owner = $("[name=owner]");
    var acres = $("[name=acres]");
    var squareFootage = $("[name=squareFootage]");
    var numUnits = $("[name=numUnits]");
    var salePrice = $("[name=salePrice]");
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
        function newFipSite(fipData) {
            console.log(fipData);
            $.post("/api/newfipsite", fipData, function() {
                console.log('request ended')
            })
            console.log("adding new site to fipDev database");
        }

        // Calling the newFipSite function and passing in the values in the new tenant input
        newFipSite({
            id: id
                .val()
                .trim(),
            siteName: siteName
                .val()
                .trim(),
            address: address
                .val()
                .trim(),
            entered: entered
                .val()
                .trim(),
            owner: owner
                .val()
                .trim(),
            numUnits: numUnits
                .val()
                .trim(),
            acres: acres
                .val()
                .trim(),
            squareFootage: squareFootage
                .val()
                .trim(),
            salePrice: salePrice
                .val()
                .trim(),
            notes: notes
                .val()
                .trim()
        });

    };

});