/*jslint plusplus: true, sloppy: true, browser: true, devel: true */
var spellcheck = function (data) {
    var i, found = false, url = '', text = data[0];
    if (text !== document.getElementById('occupation').value) {return; }
    for (i = 0; i < data[1].length; i++) {
        if (text.toLowerCase() === data[1][i].toLowerCase()) {
            found = true;
            url = 'http://en.wikipedia.org/wiki/' + text;
            document.getElementById('spellcheckresult').innerHTML = '<b style="color:green;">Correct</b> - <a target="_top" href="' + url + '">link</a>';
        }
    }
    if (!found) { document.getElementById('spellcheckresult').innerHTML = '<b style="color:red;">Incorrect</b>'; }
};

var getjs = function (value) {
    if (!value) {return; }
    var url, elem;
    url = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + value + '&format=json&callback=spellcheck';
    document.getElementById('spellcheckresult').innerHTML = 'Checking ...';
    elem = document.createElement('script');
    elem.setAttribute('src', url);
    elem.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(elem);
};

function validateFirstname(fld) {
    var error = "", pattern = /^[A-Za-z]+$/;
    if (fld.value.length === 0 || fld.value === null || fld.value === "") {
        error += "*Please enter the First Name<br>";
    } else if (!fld.value.match(pattern)) {
        error += "*First Name can contain only characters a-z and A-Z<br>";
    }
    if (error !== "") {
        document.getElementById("fnamelabel").style.color = "red";
    } else {
        document.getElementById("fnamelabel").style.color = "#666666";
    }
    return error;
}

function validateLastname(fld) {
    var error = "", pattern = /^[A-Za-z]+$/;
    if (fld.value.length === 0 || fld.value === null || fld.value === "") {
        error += "*Please enter the Last Name<br>";
    } else if (!fld.value.match(pattern)) {
        error += "*Last Name can contain only characters a-z and A-Z<br>";
    }
    if (error !== "") {
        document.getElementById("lnamelabel").style.color = "red";
    } else {
        document.getElementById("lnamelabel").style.color = "#666666";
    }
    return error;
}

function validateMiddlename(fld) {
    var error = "", pattern = /^[A-Za-z]+$/;
    if (!(fld.value.length === 0 || fld.value === null || fld.value === "") && !(fld.value.match(pattern))) {
        error += "*Middle Name can contain only characters a-z and A-Z<br>";
    }
    if (error !== "") {
        document.getElementById("mnamelabel").style.color = "red";
    } else {
        document.getElementById("mnamelabel").style.color = "#666666";
    }
    return error;
}

function validateBday(fld) {
    var error = "", pattern = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;
    if (fld.value.length === 0 || fld.value === null || fld.value === "") {
        error += "*Please enter Birthday<br>";
    } else if (!fld.value.match(pattern)) {
        error += "*Birthday must correspond to the pattern DD-MM-YYYY<br>";
    }
    if (error !== "") {
        document.getElementById("bdaylabel").style.color = "red";
    } else {
        document.getElementById("bdaylabel").style.color = "#666666";
    }
    return error;
}

function validateEmail(fld) {
    var error = "", pattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
    if (fld.value.length === 0 || fld.value === null || fld.value === "") {
        error += "*Please enter Email<br>";
    } else if (!fld.value.match(pattern)) {
        error += "*Email must correspond to the pattern name@domain.com<br>";
    }
    if (error !== "") {
        document.getElementById("emaillabel").style.color = "red";
    } else {
        document.getElementById("emaillabel").style.color = "#666666";
    }
    return error;
}

function validateGender() {
    var error = "", checked = false;
    if (document.getElementById('male').checked) {
        checked = true;
    }
    if (document.getElementById('female').checked) {
        checked = true;
    }
    if (!checked) {
        error += "*Please select Gender<br>";
    }
    if (error !== "") {
        document.getElementById("genderlabel").style.color = "red";
    } else {
        document.getElementById("genderlabel").style.color = "#666666";
    }
    return error;
}

function validateForm(theForm) {
    var reason = "", isValidated = false;
    document.getElementById('validation-error').innerHTML = "";
    reason += validateFirstname(theForm.fname);
    reason += validateLastname(theForm.lname);
    reason += validateMiddlename(theForm.mname);
    reason += validateGender();
    reason += validateBday(theForm.bday);
    reason += validateEmail(theForm.email);
    if (reason !== "") {
        document.getElementById('validation-error').innerHTML = '<p style="color:red;">' + reason + '</p>';
        isValidated = false;
    } else {
        alert('Form Successfully Submitted');
        isValidated = true;
    }
    return isValidated;
}