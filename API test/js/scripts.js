

$(document).ready(function(){
    $.ajax({
        url: 'https://developer.quickbase.com/ui/api-docs/f7186078e00d958aa2b316483dfc7e1c.js',
        type: 'GET',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var clientname = response[n].label;
                var publishdate = response[8].label;
                var topic = response[37].label;
                var assigned = reponse[33].label;
                var contenturl = response[7].label;
                var contentdeliverable = reponse[23].label;

                var tr_str = "<tr>" +
                    "<td align='center'>" + clientname + "</td>" +
                    "<td align='center'>" + publishdate + "</td>" +
                    "<td align='center'>" + topic + "</td>" +
                    "<td align='center'>" + assigned + "</td>" +
                    "<td align='center'>" + contenturl + "</td>" +
                    "<td align='center'>" + contentdeliverable + "</td>" +
                    "</tr>";

                $("#datatable tbody").append(tr_str);
            }

        }
    });
});