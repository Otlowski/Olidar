var dataContainer = document.getElementById('data-container');
var requestBtn    = document.getElementById('getdata');

    requestBtn.addEventListener('click', function () {
        console.log('onBtnClick');
        var request  = new XMLHttpRequest();
            request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
            request.onload = function(){
                console.log('onload');
                var data = JSON.parse(request.responseText);
                console.log(data);
            };
            request.send();
    });