$(document).ready(function() {
    $.ajax({
        url: "http://web.file.myqcloud.com/files/v1/10047315/duoduo/sample.jpg"
    }).then(function(data) {
       $('.sampleId').append(data.name);
    });
});