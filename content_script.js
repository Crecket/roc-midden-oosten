var host = location.host;

console.log();

// custom replace
if (host === "www.rocmn.nl") {
    // change title
    document.title = "ROC Midden Oosten";

    // change images
    var logo = document.querySelector("div.logo a img");
    var rocmnLogo = document.querySelector("div.rocmn-logo a img");
    logo.src = chrome.extension.getURL('logo.png');
    rocmnLogo.src = chrome.extension.getURL('logo-rocmn.png');


    //add extra events to site
    var fragment = createDocumentFragment("<div id='bomb' style='position: fixed; z-index:9001; bottom:20px; right:20px'>" +
        "<img style='width:50px' src='" + chrome.extension.getURL('bomb.png') + "'>"
        + "</div>");

    document.body.insertBefore(fragment, document.body.childNodes[0]);
    window.addEventListener('load', function () {
        document.getElementById('bomb').addEventListener('click', function () {
            var audio = new Audio(chrome.extension.getURL('bomb.wav'));
            audio.play();

            fuckUpPage();
        });
    });


}


if (host === "www.google.nl" || host === "www.google.com") {
    setTimeout(function () {
        walk(document.body);
    }, 300);

} else {
    walk(document.body);
}

function walk(node) {
    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}
function handleText(textNode) {
    var v1 = textNode.nodeValue;
    var v2 = v1;
    var randomCode = "289nyr8q3umf0q3yum0tpuq940";

    // TODO fix this lol
    v2 = v2.replace(/ROC Midden Nederland/g, randomCode);
    v2 = v2.replace(/roc midden nederland/g, randomCode);
    v2 = v2.replace(/\sROCMN\s/g, randomCode);
    v2 = v2.replace(/\srocmn\s/g, randomCode);
    v2 = v2.replace(/\sROC\s/g, randomCode);
    v2 = v2.replace(/\sroc\s/g, randomCode);

    if (v1 !== v2) {
        textNode.nodeValue = v2.replace(/289nyr8q3umf0q3yum0tpuq940/g, " ROC Midden Oosten ");
    }
}

function createDocumentFragment(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}


function fuckUpPage() {
    R = 0;
    x1 = .1;
    y1 = .05;
    x2 = .25;
    y2 = .24;
    x3 = 1.6;
    y3 = .24;
    x4 = 300;
    y4 = 200;
    x5 = 300;
    y5 = 200;

    DI = document.images;
    DIL = DI.length;

    setInterval(function () {
        for (i = 0; i - DIL; i++) {
            DIS = DI[i].style;
            DIS.position = 'absolute';
            DIS.left = Math.sin(R * x1 + i * x2 + x3) * x4 + x5;
            DIS.top = Math.cos(R * y1 + i * y2 + y3) * y4 + y5
        }
        R++
    }, 5);
}
