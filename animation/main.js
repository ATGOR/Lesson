var num = 1;

function myMoveLeft() {
    var elem = document.getElementById('myAnimation');
    var pos = 0;
    var id = setInterval(frame, 1);
    // if (num == 1){

    // }

    function frame() {
        if (pos == 350) {
            clearInterval(id);
            myMoveRight();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }

    }

}

function myMoveRight() {
    var elem = document.getElementById('myAnimation');
    var pos = 0;
    var id = setInterval(frame, 1);
    // if (num == 1){

    // }

    function frame() {
        if (pos == 350) {
            clearInterval(id);
            myMoveLeft();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.right = pos + 'px';
        }

    }

}