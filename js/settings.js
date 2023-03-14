function radioOnChange(thisRadio) {
    let radioId = thisRadio.getAttribute('id');
    let radioLink = document.getElementsByClassName('link_converted');
    for(let i = 0; i < radioLink.length; i++) { radioLink[i].style.display = 'none'; }
    document.getElementsByClassName(radioId)[0].style.display = 'block';
}