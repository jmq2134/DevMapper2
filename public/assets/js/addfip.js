$(document).ready(function() {

    console.log("addfip loading");

    // Getting references to the add new tenant inputs
    var siteName = $("[name=siteName]");
    var siteStreet1 = $("[name=siteStreet1]");
    var siteStreet2 = $("[name=siteStreet2]");
    var siteCity = $("[name=siteCity]");
    var siteState = $("[name=siteState]");
    var siteZip = $("[name=siteZip]");
    var dateEntered = $("[name=dateEntered]");
    var owner = $("[name=owner]");
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
            $.post("/api/newfipsite", fipData, function(){
                console.log('request ended')
            })
            console.log("adding new site to fipDev database");
        }

        // Calling the newFipSite function and passing in the values in the new tenant input
        newFipSite({
            siteName: siteName
                .val()
                .trim(),
            siteStreet1: siteStreet1
                .val()
                .trim(),
            siteStreet2: siteStreet2
                .val()
                .trim(),
            siteCity: siteCity
                .val()
                .trim(),
            siteState: siteState
                .val()
                .trim(),
            siteZip: siteZip
                .val()
                .trim(),
            dateEntered: dateEntered
                .val()
                .trim(),
            owner: owner
                .val()
                .trim(),
            numUnits: numUnits
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