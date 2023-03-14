function radioOnChange(thisRadio) {
    let radioId = thisRadio.getAttribute('id');
    let radioLink = document.getElementsByClassName('link_converted');
    for(let i = 0; i < radioLink.length; i++) { radioLink[i].style.display = 'none'; }
    document.getElementsByClassName(radioId)[0].style.display = 'block';
}

function linkOriginClick() {
    let linkOrigin = document.getElementById('link_origin').value;
    let linkStart = linkOrigin.indexOf('/d/');
    let linkEnd = linkOrigin.indexOf('/view');
    let linkId = linkOrigin.substring(linkStart + 3,linkEnd);

    document.getElementById('input_converted_1').value = 'https://drive.google.com/uc?id=' + linkId;
    document.getElementById('input_converted_2').value = '<img src="https://drive.google.com/uc?id=' + linkId + '" alt="Google Drive Image"/>';
    document.getElementById('input_converted_3').value = '<a href="https://drive.google.com/uc?id=' + linkId + '"><img src="https://drive.google.com/uc?id=' + linkId + '" alt="Google Drive Image"/>';
    document.getElementsByClassName('link_img_wrap')[0].innerHTML = '<img src="https://drive.google.com/uc?id=' + linkId + '" alt="Google Drive Image"/>';
}

function linkOriginEnter() {
	if (window.event.keyCode == 13) { // 엔터키 눌렀을 때
        linkOriginClick();
    }
}

function copyOnClick(thisBtn) {
    let copyBtn = thisBtn.getAttribute('class');
    let copyBtnId = copyBtn.substring(copyBtn.lastIndexOf('copy') + 4, copyBtn.lastIndexOf('_') + 2);

    window.navigator.clipboard.writeText(document.getElementById('input_converted' + copyBtnId).value);

    document.getElementsByClassName('link_converted' + copyBtnId)[0].getElementsByClassName('copy_btn')[0].style.display = 'none';
    document.getElementsByClassName('link_converted' + copyBtnId)[0].getElementsByClassName('copy_check_btn')[0].style.display = 'block';
    setTimeout(function() {
        document.getElementsByClassName('link_converted' + copyBtnId)[0].getElementsByClassName('copy_check_btn')[0].style.display = 'none';
        document.getElementsByClassName('link_converted' + copyBtnId)[0].getElementsByClassName('copy_btn')[0].style.display = 'block';
    },1500);
}

function colorModeOnClick() {
    let body = document.getElementsByTagName('body');
    if(body[0].classList.contains('bright_mode')) { body[0].classList.replace('bright_mode','night_mode'); }
    else { body[0].classList.replace('night_mode','bright_mode'); }
}