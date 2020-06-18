function drop() {
    var dc = document.getElementById('dc').style.display;
    if( dc !== 'block') {
        document.getElementById('dc').style.display = 'block';
    } else {
        document.getElementById('dc').style.display = 'none';
    }
}