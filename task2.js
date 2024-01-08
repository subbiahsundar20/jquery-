

    $(document).ready(function () {
    var tableBody = $("#myTable tbody");
    var a=1;

    // Add row button click event
    $("#addRowBtn").click(function () {
       var prtitle = $("#pdtitle").val();
       var prsku = $("#pdsku").val();
       var prqty = $("#pdqty").val();

         // Validate inputs
         if (prtitle.trim() === "" || prsku.trim() === "" || prqty.trim() === "") {
            $("#error").text("* Kindly Fill All Fields!!");
            $("#error").css("color","red");
            return;
        }
        if(!$.isNumeric(prqty)){
            $("#error").text("* Product quantity should be in numeric");
            $("#error").css("color","blue");
            return;
        }

        //sku repeat check
        if ($("td.sku:contains('" + prsku + "')").length>0) {
            $("#error").text("SKU already exists!");
            $("#error").css("color","red");
            return;
        }

       //add new row
       var newRow =
       "<tr>" +
       "<td>" + a + "</td>"+
       "<td>"+ prtitle +"</td>" +
       "<td class='sku'>"+ prsku +"</td>" +
       "<td>"+ prqty +"</td>"+
       '<td><button type="button" class="btn btn-danger  removeBtn ">Remove cart</button></td>' +
       "</tr>";
       $("#myTable tbody").append(newRow);
       a++;
        
        // Clear input fields

         $("#pdtitle").val("");
         $("#pdsku").val("");
         $("#pdqty").val("");
         $("#error").text("");
         $("#notable").text("");
    });
    
    // Remove row button click event

    $(document).on("click", ".removeBtn", function () {
       $(this).closest("tr").remove();

       //updateSerialNumbers

       $('#myTable tbody tr').each(function(index) {
        $(this).find('td:first').text(index + 1);
      });
     
    });

 // Clear button click event

 $("#clear").click(function() {
    if(tableBody.empty()){
      $("#notable").text("Please enter product details!!");
      $("#notable").css({"color":"#dd4a6c","margin-left":"352px"});
    }
    else{
    tableBody.empty();
    $("#notable").text("");

    };
});

  });      
    