let oComponentsManager = new ComponentsManager();

var contextFrameWindow;

function resizeFrame(deviceType) {
    switch (deviceType) {
        case 'mobile':
            $('#contextframe').css({ 'width': '375px', 'border': '2px solid #bbb' })
            break;
        case 'tablet':
            $('#contextframe').css({ 'width': '768px', 'border': '2px solid #bbb' })
            break;
        case 'desktop':
            $('#contextframe').css({ 'width': '100%', 'border': 'none' })
            break;
        default:
            break;
    }
}

// Funcão executada ao iniciar o drag de um item
function drag(ev) {
    const _component_type = ev.target.attributes["data-type"].value;
    const _component = oComponentsManager.getDescription(_component_type, 'content')
    contextFrameWindow.postMessage(_component, '*')
}

$(function () {
    contextFrameWindow = $('#contextframe').get(0).contentWindow;
    $("#components").html(oComponentsManager.stringfyComponents());
});



