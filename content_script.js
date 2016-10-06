var host = location.host;

console.log();

// custom replace
if(host === "www.rocmn.nl"){
    // change title
    document.title = "ROC Midden Oosten";

    // change images
    var logo = document.querySelector("div.logo a img");
    var rocmnLogo = document.querySelector("div.rocmn-logo a img");
    logo.src = chrome.extension.getURL('logo.png');
    rocmnLogo.src = chrome.extension.getURL('logo-rocmn.png');
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