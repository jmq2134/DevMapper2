var $table = $('#bootstrap-table');

/// ADD EDIT & REMOVE BUTTONS
function operateFormatter(value, row, index) {
    return [
        // '<a rel="tooltip" title="View" class="btn btn-simple btn-info btn-icon table-action view" href="javascript:void(0)">',
        // '<i class="fa fa-image"></i>',
        // '</a>',
        '<a rel="tooltip" title="Edit" class="btn btn-simple btn-warning btn-icon table-action edit" href="javascript:void(0)">',
        '<i class="fa fa-edit"></i>',
        '</a>',
        '<a rel="tooltip" title="Remove" class="btn btn-simple btn-danger btn-icon table-action remove"  href="javascript:void(0)">',
        '<i class="fa fa-remove"></i>',
        '</a>'
    ].join('');
}

$().ready(function() {

    $('.table-action.edit').on('click', function() {

    })

    window.operateEvents = {
        // 'click .view': function(e, value, row, index) {
        //     info = JSON.stringify(row);

        //     swal('You click view icon, row: ', info);
        //     console.log(info);
        // },
        'click .edit': function(e, value, row, index) {
            info = JSON.stringify(row);

            // SAVE TENANT ID FROM
            var thisId = row.id;
            console.log(thisId);

            var url = window.location.href;
            console.log(url);

            if (url == "http://localhost:8080/fipDev") {

                // FIND TENANT INFO FROM ROW
                $.ajax({
                        method: "GET",
                        url: "/api/fipDev/" + thisId
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        console.log(data);
                        data = data[0];
                        $('#modal--create').modal({
                            show: 'true'
                        });
                        $("#id").val(data.id);
                        $("#siteName").val(data.siteName);
                        $("#autocomplete").val(data.address);
                        $("#entered").val(data.entered);
                        $("#owner").val(data.owner);
                        $("#numUnits").val(data.numUnits);
                        $("#acres").val(data.acres);
                        $("#squareFootage").val(data.squareFootage);
                        $("#salePrice").val(data.salePrice);
                        $("#notes").val(data.notes);

                    })

            } else if (url == "http://localhost:8080/cleDev") {

                // FIND TENANT INFO FROM ROW
                $.ajax({
                        method: "GET",
                        url: "/api/cleDev/" + thisId
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        console.log(data);
                        data = data[0];
                        $('#modal--create').modal({
                            show: 'true'
                        });
                        $("#id").val(data.id);
                        $("#siteName").val(data.siteName);
                        $("#autocomplete").val(data.address);
                        $("#entered").val(data.entered);
                        $("#owner").val(data.owner);
                        $("#numUnits").val(data.numUnits);
                        $("#acres").val(data.acres);
                        $("#squareFootage").val(data.squareFootage);
                        $("#salePrice").val(data.salePrice);
                        $("#notes").val(data.notes);

                    })

            } else if (url == "http://localhost:8080/leaseComps") {

                // FIND TENANT INFO FROM ROW
                $.ajax({
                        method: "GET",
                        url: "/api/leaseComps/"
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        console.log(data);
                        data = data[0];
                        $('#modal--create').modal({
                            show: 'true'
                        });
                        $("#id").val(data.id);
                        $("#siteName").val(data.siteName);
                        $("#autocomplete").val(data.address);
                        $("#owner").val(data.owner);
                        $("#entered").val(data.entered);
                        $("#sold").val(data.sold);
                        $("#owner").val(data.owner);
                        $("#buildingSF").val(data.buildingSF);
                        $("#totalAcreage").val(data.totalAcreage);
                        $("#salePrice").val(data.salePrice);
                        $("#numUnits").val(data.numUnits);
                        $("#oneBedSF").val(data.oneBedSF);
                        $("#twoBedSF").val(data.twoBedSF);
                        $("#threeBedSF").val(data.threeBedSF);
                        $("#oneBedRent").val(data.oneBedRent);
                        $("#twoBedRent").val(data.twoBedRent);
                        $("#threeBedRent").val(data.threeBedRent);
                        $("#notes").val(data.notes);
                    })
            }

        },
        'click .remove': function(e, value, row, index) {

            console.log(row);
            console.log(row.id);

            // Save the id from the p tag
            var thisId = row.id;

            var url = window.location.href;
            console.log(url);

            // FIND TENANT INFO FROM ROW

            if (url == "http://localhost:8080/fipDev") {
                $.ajax({
                        method: "DELETE",
                        url: "/api/remove/fip/" + thisId
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        location.reload();
                    })

            } else if (url == "http://localhost:8080/cleDev") {
                $.ajax({
                        method: "DELETE",
                        url: "/api/remove/cle/" + thisId
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        location.reload();
                    })

            } else if (url == "http://localhost:8080/leaseComps") {
                $.ajax({
                        method: "DELETE",
                        url: "/api/remove/comps/" + thisId
                    })
                    // Fill modal with tenant info
                    .done(function(data) {
                        location.reload();
                    })

            }
        }
    };

    $table.bootstrapTable({
        toolbar: ".toolbar",
        clickToSelect: true,
        showRefresh: true,
        search: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        searchAlign: 'left',
        pageSize: 8,
        clickToSelect: false,
        pageList: [8, 10, 25, 50, 100],

        formatShowingRows: function(pageFrom, pageTo, totalRows) {
            //do nothing here, we don't want to show the text "showing x of y from..."
        },
        formatRecordsPerPage: function(pageNumber) {
            return pageNumber + " rows visible";
        },
        icons: {
            refresh: 'fa fa-refresh',
            toggle: 'fa fa-th-list',
            columns: 'fa fa-columns',
            detailOpen: 'fa fa-plus-circle',
            detailClose: 'fa fa-minus-circle'
        }
    });

    //activate the tooltips after the data table is initialized
    $('[rel="tooltip"]').tooltip();

    $(window).resize(function() {
        $table.bootstrapTable('resetView');
    });


});