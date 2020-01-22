function logoff() {
        localStorage.setItem("links-username", null);
        location = "../login.html";
}

var username;
var usertext;

function getUser() {
        if (window.location.href.indexOf("portal") > -1) {// If URL contains portal
                usertext = $("#user");
        } else if (window.location.href.indexOf("login") > -1) {// If URL contains login
                return;// Exit to avoid getting in infinite loop in login page
        }
        username = localStorage.getItem("links-username");
        if (username == null || username == '' || username == 'null') {
                localStorage.setItem("links-username", null);
                localStorage.setItem("links-warn", "true");
                location = "/login.html";
        } else {
                if (window.location.href.indexOf("portal") > -1) {// If URL contains portal
                        usertext.html('');
                        if (username == 'admin') {
                                addAlert('Welcome back!,  Administrator', "loggedin");
                                $("#titlep").innerHTML = "Administrator\'s Links Portal";
                        } else {
                                addAlert('Welcome back!, ' + username, "loggedin");
                                $("#titlep").innerHTML = username + "\'s Links Portal";
                        }
                }
        }
}

    $(document).ready(function () {
        getUser();
});

function login() {
        var pass = document.getElementById("password");
        var openintab = document.getElementById("tabopen");
        encryptpass = md5(pass.value);
        var s = document.getElementById("username");
        username = s.value.toLowerCase();
        var users = ['homemadesteam58', 'admin', 'guest', 'hsak5g', 'pip 2019 links portal experience', 'sourlemon0', 'nick'];
        var passwords = ['454a49231691b3fd73c93857b3441162', 'fc5364bf9dbfa34954526becad136d4b', 'd41d8cd98f00b204e9800998ecf8427e', '8623dc603081464819e6776ae7edb88a', '82da33acbcdce87ecd54680578dfacd2', '05dc5822d6d891a37351c70e318d5f84',
                '8fe569676dca2e21fed65144d1c68428'
        ];
        var userpass = ['homemadesteam58454a49231691b3fd73c93857b3441162', 'adminfc5364bf9dbfa34954526becad136d4b', 'guestd41d8cd98f00b204e9800998ecf8427e', 'hsak5g8623dc603081464819e6776ae7edb88a',
                'pip 2019 links portal experience82da33acbcdce87ecd54680578dfacd2', 'sourlemon005dc5822d6d891a37351c70e318d5f84', 'nick8fe569676dca2e21fed65144d1c68428'
        ];
        if (users.includes(username) && passwords.includes(encryptpass) && userpass.includes(username + encryptpass)) {
                localStorage.setItem("links-username", username);
                if (openintab.checked) {
                        //debugger;
                        location = 'pages/portal.html' + '?open=newtab';
                } else {
                        //debugger;
                        location = 'pages/portal.html';
                }
                console.log('Logged in successfully');
        } else {
                console.log('Login incorrect');
                addAlert('Login incorrect');
        }
}

function clear() {
        var warn = localStorage.getItem("warn");
        localStorage.setItem("username", null);
        if (warn == 'true') {
                addAlert('Please login before accessing the Links Portal');
                localStorage.setItem("warn", null);
        }
}
