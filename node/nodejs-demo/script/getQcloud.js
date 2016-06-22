$(document).ready(function() {
    $.ajax({
        url: "http://web.file.myqcloud.com/files/v1/10047315/duoduo/sample.jpg?op=stat",
        headers: { 'Authorization': $('.sampleId').text()}
    }).then(function(data) {
       $('.sampleUrl').append(data.access_url);
    });
});