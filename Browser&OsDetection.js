    /*
     * This File Was Coded By Amin Arjmand & viazenetti GmbH (Christian Ludwig) | Email: aminarj2000@gmail.com | Site: aminarjmand.com | Github Profile : https://github.com/sibche2013
     */
    (function (window) {
        {
            var unknown = '-';

            // Get Screen Resolution
            var screenSize = screen.width + "*" + screen.height;

            // Get Browser Name & Version
            var navigatorVersion = navigator.appVersion;
            var navigatorUserAgent = navigator.userAgent;
            var browserName = navigator.appName;
            var browserVersion = navigator.appVersion;
            var nameOffset, verOffset, ix;

            // Old Opera Browser
            if ((verOffset = navigatorUserAgent.indexOf('Opera')) != -1) {
                browserName = 'Opera';
                browserVersion = navigatorUserAgent.substring(verOffset + 6);
                if ((verOffset = navigatorUserAgent.indexOf('Version')) != -1) {
                    browserVersion = navigatorUserAgent.substring(verOffset + 8);
                }
            }

            // New Opera Browser
            if ((verOffset = navigatorUserAgent.indexOf('OPR')) != -1) {
                browserName = 'Opera';
                browserVersion = navigatorUserAgent.substring(verOffset + 4);
            }

            // Edge Browser
            else if ((verOffset = navigatorUserAgent.indexOf('Edge')) != -1) {
                browserName = 'Microsoft Edge';
                browserVersion = navigatorUserAgent.substring(verOffset + 5);
            }

            // Old MSIE Browser
            else if ((verOffset = navigatorUserAgent.indexOf('MSIE')) != -1) {
                browserName = 'Microsoft Internet Explorer';
                browserVersion = navigatorUserAgent.substring(verOffset + 5);
            }

            // New MSIE Browser (11+)
            else if (navigatorUserAgent.indexOf('Trident/') != -1) {
                browserName = 'Microsoft Internet Explorer';
                browserVersion = navigatorUserAgent.substring(navigatorUserAgent.indexOf('rv:') + 3);
            }

            // Chrome Browser
            else if ((verOffset = navigatorUserAgent.indexOf('Chrome')) != -1) {
                browserName = 'Chrome';
                browserVersion = navigatorUserAgent.substring(verOffset + 7);
            }

            // Safari Browser
            else if ((verOffset = navigatorUserAgent.indexOf('Safari')) != -1) {
                browserName = 'Safari';
                browserVersion = navigatorUserAgent.substring(verOffset + 7);
                if ((verOffset = navigatorUserAgent.indexOf('Version')) != -1) {
                    browserVersion = navigatorUserAgent.substring(verOffset + 8);
                }
            }

            // Firefox Browser
            else if ((verOffset = navigatorUserAgent.indexOf('Firefox')) != -1) {
                browserName = 'Firefox';
                browserVersion = navigatorUserAgent.substring(verOffset + 8);
            }

            // Other Browsers
            else if ((nameOffset = navigatorUserAgent.lastIndexOf(' ') + 1) < (verOffset = navigatorUserAgent.lastIndexOf('/'))) {
                browserName = navigatorUserAgent.substring(nameOffset, verOffset);
                browserVersion = navigatorUserAgent.substring(verOffset + 1);
                if (browserName.toLowerCase() == browserName.toUpperCase()) {
                    browserName = navigator.appName;
                }
            }

            // Trim The Version String
            if ((ix = browserVersion.indexOf(';')) != -1) browserVersion = browserVersion.substring(0, ix);
            if ((ix = browserVersion.indexOf(' ')) != -1) browserVersion = browserVersion.substring(0, ix);
            if ((ix = browserVersion.indexOf(')')) != -1) browserVersion = browserVersion.substring(0, ix);

            // Mobile Browser Or Desktop ???
            mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigatorVersion);

            // Get OS Name
            var os = unknown;
            var clientStrings = [
                {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
                {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
                {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
                {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
                {s: 'Windows Vista', r: /Windows NT 6.0/},
                {s: 'Windows Server 2003', r: /Windows NT 5.2/},
                {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
                {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
                {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
                {s: 'Windows 98', r: /(Windows 98|Win98)/},
                {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
                {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                {s: 'Windows CE', r: /Windows CE/},
                {s: 'Windows 3.11', r: /Win16/},
                {s: 'Android', r: /Android/},
                {s: 'Open BSD', r: /OpenBSD/},
                {s: 'Sun OS', r: /SunOS/},
                {s: 'Linux', r: /(Linux|X11)/},
                {s: 'iOS', r: /(iPhone|iPad|iPod)/},
                {s: 'Mac OS X', r: /Mac OS X/},
                {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                {s: 'QNX', r: /QNX/},
                {s: 'UNIX', r: /UNIX/},
                {s: 'BeOS', r: /BeOS/},
                {s: 'OS/2', r: /OS\/2/},
                {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(navigatorUserAgent)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(navigatorUserAgent)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(navigatorUserAgent)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigatorVersion);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }


        }

        window.info = {
            os: os,
            osVersion: osVersion,
            screen: screenSize,
            browser: browserName,
            browserVersion: browserVersion,
            mobile: mobile
        };
    }(this));

    document.getElementById("systemInformation").innerHTML = "<strong>Your System Information :</strong><br>Your Windows Name Is: <strong>" + info.os + " " + info.osVersion + "</strong><br>Your Monitor Screen Size Is: <strong>" + info.screen + "</strong><br>Your Browser Name & Version Is: <strong>" + info.browser + " " + info.browserVersion + "</strong>";

    //Check That User Browser Is Dektop Or Mobile?
    function mobileDesktop() {
        var x = document.getElementById("mobileDesktop");
        if (mobile) {
            x.innerHTML = "Your Are Viewing This Page By Your <strong>Mobile Browser </strong>!";
        } else {
            x.innerHTML = "You Are Viewing This Page By <strong>Desktop Browser </strong>!";
        }
    }
    mobileDesktop();