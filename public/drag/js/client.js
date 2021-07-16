let transfer = "";
let elementSelected = null;

/** Methods */

function drawSelection(event) {
    elementSelected = document.elementFromPoint(event.clientX, event.clientY);
    $('*').removeClass('selected')
    $(elementSelected).addClass('selected')
}

/** Events */

// 
$('*').get(0).addEventListener('click', (event) => {
    event.preventDefault();
    $(event.target).attr('contentEditable', 'true')
    console.log('click')
});



window.addEventListener('mouseout', function () {
    $('*').removeClass('selected')
});

// Mover o mouse no contexto
$('body').get(0).addEventListener('mousemove', (event) => {
    event.preventDefault();
    drawSelection(event)
});
// Mover o mouse com o drag no contexto
$('body').get(0).addEventListener('dragover', (event) => {
    event.preventDefault();
    drawSelection(event)
});
// Dropar conteúdo no contexto
$('body').get(0).addEventListener('drop', (event) => {
    event.preventDefault();
    $(elementSelected).append(transfer);
});

// Mensagem vinda da interface
window.addEventListener('message', function (event) {
    transfer = event.data;
});
