function openClose(id)
{
    if(document.getElementById) {
        element = document.getElementById(id);
    } else if(document.all) {
        element = document.all[id];
    } else return;

    if(element.style) {
        if(element.style.display == 'block' ){
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    }
}