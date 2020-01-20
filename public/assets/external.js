function body_script(src) {
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script)
}

function del_script(src) {
    let el = document.querySelector("script[src='" + src + "']");
    if(el){ el.remove(); }
}

export {
    body_script,
    del_script,
}