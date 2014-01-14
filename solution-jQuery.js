/*jslint plusplus: true, sloppy: true, browser: true, devel: true */
/*global jQuery, $*/
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

$.validator.addMethod(
    "dateFormat",
    function (value) {
        var isValidated = value.match(/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/);
        if (isValidated) {
            $("#bdaylabel").css("color", "#666666");
        } else {
            $("#bdaylabel").css("color", "red");
        }
        return isValidated;
    },
    "Please enter a date in the format DD-MM-YYYY"
);

$.validator.addMethod(
    "fnameRequired",
    function (value) {
        var error = false;
        if (value.length === 0 || value === null || value === "") {
            $("#fnamelabel").css("color", "red");
            error = false;
        } else {
            $("#fnamelabel").css("color", "#666666");
            error = true;
        }
        return error;
    },
    "Please enter the First Name"
);

$.validator.addMethod(
    "fnameFormat",
    function (value) {
        var isValidated = value.match(/^[A-Za-z]+$/);
        if (isValidated) {
            $("#fnamelabel").css("color", "#666666");
        } else {
            $("#fnamelabel").css("color", "red");
        }
        return isValidated;
    },
    "First Name can contain only characters a-z and A-Z"
);

$.validator.addMethod(
    "lnameRequired",
    function (value) {
        var error = false;
        if (value.length === 0 || value === null || value === "") {
            $("#lnamelabel").css("color", "red");
            error = false;
        } else {
            $("#lnamelabel").css("color", "#666666");
            error = true;
        }
        return error;
    },
    "Please enter the Last Name"
);

$.validator.addMethod(
    "lnameFormat",
    function (value) {
        var isValidated = value.match(/^[A-Za-z]+$/);
        if (isValidated) {
            $("#lnamelabel").css("color", "#666666");
        } else {
            $("#lnamelabel").css("color", "red");
        }
        return isValidated;
    },
    "Last Name can contain only characters a-z and A-Z"
);

$.validator.addMethod(
    "mnameFormat",
    function (value) {
        var isFormatted = false, isValidated = value.match(/^[A-Za-z]+$/);
        if (!(value.length === 0 || value === null || value === "")) {
            if (isValidated) {
                $("#mnamelabel").css("color", "#666666");
            } else {
                $("#mnamelabel").css("color", "red");
            }
            isFormatted = isValidated;
        } else {
            $("#mnamelabel").css("color", "#666666");
            isFormatted = true;
        }
        return isFormatted;
    },
    "Middle Name can contain only characters a-z and A-Z"
);

$.validator.addMethod(
    "emailRequired",
    function (value) {
        var isFormatted = false;
        if (value.length === 0 || value === null || value === "") {
            $("#emaillabel").css("color", "red");
            isFormatted = false;
        } else {
            $("#emaillabel").css("color", "#666666");
            isFormatted = true;
        }
        return isFormatted;
    },
    "Please enter Email"
);

$.validator.addMethod(
    "bdayRequired",
    function (value) {
        var isFormatted = false;
        if (value.length === 0 || value === null || value === "") {
            $("#bdaylabel").css("color", "red");
            isFormatted = false;
        } else {
            $("#bdaylabel").css("color", "#666666");
            isFormatted = true;
        }
        return isFormatted;
    },
    "Please enter Birthday"
);

$(document).ready(function () {
    $("#userForm").validate({
        rules: {
            onsubmit: true,
            fname: {
                fnameRequired : true,
                fnameFormat: true
            },
            lname: {
                lnameRequired : true,
                lnameFormat: true
            },
            mname: {
                mnameFormat: true
            },
            email: {
                emailRequired : true,
                email : true
            },
            bday: {
                dateFormat : true,
                bdayRequired : true
            },
            'gender': {
                required: true
            }
        },
        messages: {
            fname: {
                fnameRequired: "Please enter the First Name",
                fnameFormat: "First Name can contain only characters a-z and A-Z"
            },
            lname: {
                lnameRequired: "Please enter the Last Name",
                lnameFormat: "Last Name can contain only characters a-z and A-Z"
            },
            mname: {
                mnameFormat: "Middle Name can contain only characters a-z and A-Z"
            },
            email: {
                emailRequired: "Please enter Email",
                email: "Email must correspond to the pattern name@domain.com"
            },
            bday: {
                bdayRequired:  "Please enter Birthday",
                dateFormat: "Please enter a date in the format DD-MM-YYYY"
            },
            'gender': {
                required: "Please select Gender"
            }
        }
    });
});