/**
88   88 88""Yb 88     888888 888888 .dP"Y8 
88   88 88__dP 88     88__     88   `Ybo." 
Y8   8P 88""Yb 88  .o 88""     88   o.`Y8b 
`YbodP' 88oodP 88ood8 888888   88   8bodP' 
by Xavi Esteve
*/
const db = {
    domains: {
        'docs.google.com': [
            {
                title: '🔽 Download single sheet in XLSX',
                description: `Google Sheets only: download the current sheet in Excel (XLSX) format, the default option in Google downloads everything which may not be convenient`,
                func: function () {
                    var winURL = window.location.href;
                    if (winURL.indexOf('/edit#gid=') > 0) {
                        window.location.assign(winURL.replace('/edit#gid=', '/export?format=xlsx&gid='));
                    } else {
                        alert('Incorrect URL format');
                    }
                }
            }
        ],
        'open.spotify.com': [
            {
                title: '🎵 List tracks',
                description: `Copies all tracks in the current Spotify view into a simple text list`,
                func: function () {
                    var chartlist = '';
                    ocument.querySelectorAll('.gvLrgQXBFVW6m9MscfFA>.iCQtmPqY0QvkumAOuCjr').forEach(function (item) {
                        chartlist = chartlist + "\n" + item.innerText.replace(/\n/g, ' ').replace(' E ', ' ');
                    });
                    setTimeout(async () => console.log(
                        await navigator.clipboard.writeText(chartlist)), 500);
                    alert('List copied to clipboard');
                }
            },
        ],
        'www.amazon.es': [
            {
                title: '🔔 CamelCamelCamel',
                description: `Searches the current product you're seeing in CamelCamelCamel so you can compare historical price changes`,
                credit: 'https://camelcamelcamel.com/tools/bookmarklet',
                func: function () {
                    void function () { var e = location.href.search(/(amazon.|amzn.)(com|co\.uk|ca|de|fr|es|it|cn|co\.jp).+/i) >= 0, c = /amazon.(com|co\.uk|ca|de|fr|es|it|cn|co\.jp).*\/(asin|dp|gp|product|exec\/obidos|gp\/offer-listing|product\-reviews|gp\/aw\/d)\/[A-Z0-9]{10,13}/i, t = /amzn.(com|co\.uk|ca|de|fr|es|it|cn|co\.jp)\/[A-Z0-9]{10,13}/i, a = location.href.search(c) >= 0, o = location.href.search(/camelcamelcamel.com/i) >= 0, n = "ccc-injected-links-569DE51E-99CE-4ACE-BD10-7F85542A54A8", l = !(null == document.getElementById(n)), i = "0.2", m = "ctx_prid=5&utm_campaign=bookmarklet&v_camelet=" + i; if (a) try { var r = document.getElementById("ASIN").value; window.open("http://camelcamelcamel.com/search?q=" + window.location.origin + "/dp/" + r + "&" + m, "_blank") } catch (d) { window.open("http://camelcamelcamel.com/search?q=" + encodeURIComponent(location.href) + "&" + m, "_blank") } else if (l || e || o) window.open("http://camelcamelcamel.com/?" + m, "_self"); else { var s = []; links = document.links; for (var h = 0; h < links.length; h++)(links[h].href.search(c) >= 0 || links[h].href.search(t) >= 0) && s.push(links[h]); for (var h = 0; h < s.length; h++) { for (var p = s[h].childNodes.length, f = !1, g = 0; p > g; g++)"img" != s[h].childNodes[g].nodeName.toLowerCase() || (f = !0); if (!f && "" != s[h].text) { var u = document.createElement("a"), w = document.createElement("img"), k = document.createTextNode(" "); w.src = "http://s3.camelcamelcamel.com/images/ccc.png", w.style.height = "0.8em", w.style.verticalAlign = "text-center", u.appendChild(w), u.title = "View Amazon price history at camelcamelcamel.com", u.target = "_blank", u.href = "http://www.camelcamelcamel.com/search?q=" + s[h].href + "&" + m, s[h].parentNode.insertBefore(u, s[h].nextSibling), s[h].parentNode.insertBefore(k, s[h].nextSibling) } } ccc_inj = document.createElement("div"), ccc_inj.id = n, document.body.insertBefore(ccc_inj, document.body.childNodes[0]), 0 == s.length && window.open("http://camelcamelcamel.com/?" + m, "_self") } }();
                }
            }
        ],
        'www.last.fm': [
            {
                title: '🎵 List tracks',
                description: `Copies all tracks in the current Spotify view into a simple text list`,
                func: function () {
                    var chartlist = '';
                    document.querySelectorAll('.chartlist-name a').forEach(function (item) {
                        chartlist = chartlist + "\n" + document.querySelector('h1').innerText + ' - ' + item.innerText;
                    });
                    setTimeout(async () => console.log(
                        await navigator.clipboard.writeText(chartlist)), 500);
                    alert('List copied to clipboard');
                }
            },
        ],
    },
    defaults: [
        {
            title: '📕 Save to Pocket',
            css: 'default',
            description: `Adds the current site to Pocket so you can read it later`,
            func: function () {
                var pocketWindow = window.open('https://getpocket.com/edit?url=' + document.location, 'PocketAdd', 'height=300,width=600');
                setTimeout(function () {
                    pocketWindow.close();
                }, 5000);
            }
        },
        {
            title: '🗨 Add to Buffer',
            css: 'default',
            description: `Adds the current site to Buffer so it gets scheduled for sharing in social media`,
            func: function () {
                void (location.href = 'https://bufferapp.com/add?url=' + encodeURIComponent(location.href) + '&text=' + encodeURIComponent(document.title));
            }
        },
        {
            title: '📐 Imperial to Metric',
            css: 'default',
            description: `Converts imperial numbers into metric`,
            func: function () {
                document.body.innerHTML = document.body.innerHTML
                    .replace(
                        /([0-9\.]{1,10}) ?º/g,
                        function (match, contents, offset, input_string) {
                            // console.log(match, contents, offset, input_string);
                            return Math.round((5 / 9) * (contents - 32), 1) + 'º'
                        })
                    .replace(/([0-9\.]{1,10}) ?(feet|ft|square feet)/g,
                        function (match, contents, offset, input_string) {
                            return Math.round(contents * 30.48) / 100 + 'm'
                        });
            }
        },
        {
            title: '⏲ Count Words',
            css: 'default',
            description: `Counts the number of words in your selected text`,
            func: function () {
                var selection = window.getSelection().toString();
                if (selection) {
                    alert(selection.match(/\w+/g).length + ' words');
                } else {
                    alert('Please select some text from the page.');
                }
            }
        },
        {
            title: '🔃 Rotate screen',
            css: 'default',
            description: `Rotate the website 90 degrees clockwise, keep clicking to rotate it further`,
            func: function () {
                !function () { ___rotate = window.___rotate || 0, ___rotate++, ___rotate > 3 && (___rotate = 0); var t = document.documentElement, o = t.clientWidth, e = t.clientHeight, r = document.body, i = r.style; 0 === ___rotate ? (i.transform = "", i.position = "", i.width = "", i.height = "", i.left = "", i.top = "") : 1 === ___rotate ? (i.transform = "rotate(90deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = e + "px", i.height = o + "px", i.left = "100%", i.top = "0") : 2 === ___rotate ? (i.transform = "rotate(180deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = o + "px", i.height = e + "px", i.left = "100%", i.top = "100%") : 3 === ___rotate && (i.transform = "rotate(270deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = e + "px", i.height = o + "px", i.left = "0", i.top = "100%") }();
            }
        },
        {
            title: '📝 Content Editable',
            css: 'default',
            description: `Everything on the website will be editable. Useful to, for example, delete confidential information before printing`,
            url: `javascript:document.body.contentEditable=(document.body.contentEditable!==true?true:false)`,
            func: function () {
                document.body.contentEditable = (document.body.contentEditable !== true ? true : false)
            }
        },
        {
            title: '🗳 Post to Reddit',
            css: 'default',
            description: `Share the current website to Reddit`,
            func: function () {
                location.href = "https://www.reddit.com/submit?url=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent(document.title);
            }
        },
        {
            title: '🇺🇲 Translate to English',
            css: 'default',
            description: `Translate the current website to English using Google Translate`,
            func: function () {
                location.href = 'http://translate.google.com/translate?u=' + encodeURIComponent(location.href) + '&sl=auto&tl=en';
            }
        },
        {
            title: '📑 Web to PDF',
            css: 'default',
            description: `Convert the website to a PDF document using web2pdfconvert.com`,
            func: function () {
                void (window.open('https://www.web2pdfconvert.com#' + location.href))
            }
        },
        {
            title: '📱 Web to QR code',
            css: 'default',
            description: `Opens a new window with a QR code of the current URL using Google Charts API`,
            func: function () { (function () { var url = ('http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(location.href)); w = open(url, 'w', 'location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=500,height=500,modal=yes,dependent=yes'); if (w) { setTimeout('w.focus()', 1000) } else { location = url } })(); }
        },
        {
            title: '🛒 Search on Amazon',
            css: 'default',
            description: `Search the selected text in Amazon`,
            func: function () {
                (function () { q = document.getSelection(); if (!q) { void (q = prompt('Amazon search:', '')) }; if (q) window.open('http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias=aps&tag=p-id-20&field-keywords=' + escape(q)) })()
            }
        },
        {
            title: '📖 Dictionary definition',
            css: 'default',
            description: `Define the selected word using Google`,
            func: function () {
                (function (t, u, w) { t = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection ? document.selection.createRange().text : ''); u = t ? 'https://www.google.com/search?q=' + encodeURIComponent('define:' + unescape('"') + t + unescape('"')) : ''; w = window.open(u, '_blank', 'height=500,width=800,scrollbars=1'); w.focus && w.focus(); if (!t) { w.document.write(unescape('<html><head><title>Define...</title></head><body style="padding:1em;font-family:Helvetica,Arial"><br><form action="http://www.google.com/search"><input id="q" name="q" value="define:">&nbsp;<input type="submit" value="Go"></form><p style="font-size:.75em;color:#999">Note: you can also choose a term beforehand by highlighting it on the page!<br><br>Created by <a target="_blank" href="http://mrcoles.com/blog/dictionary-bookmarklet-popup-definition-browser/">Peter Coles</a></p><script>var q =document.getElementById("q"),v=q.value;q.focus();q.value="";q.value=v;</script></body></html>')); w.document.close(); } })()
            }
        },
        {
            title: '🕰 Wayback Machine',
            css: 'default',
            description: `Displays past versions of this website thanks to Archive.org`,
            func: function () {
                void (location.href = 'http://web.archive.org/web/*/' + escape(location.href));
            }
        },
        {
            title: '🚫 Enable Right-click',
            css: 'default',
            description: `Re-enable right click on websites that have disabled it`,
            func: function () {
                void (document.oncontextmenu = null)
            }
        },
        {
            title: '🖋 Check Terms and Conditions',
            css: 'default',
            description: `Find out the website's Terms and Conditions on tosdr.org`,
            func: function () {
                fetch('https://api.tosdr.org/search/v4/?query=' + location.host)
                    .then(response => response.text())
                    .then(data => {
                        let jsonData = JSON.parse(data);
                        if (!jsonData.parameters.services.length) {
                            alert("Sorry, " + location.host + " has not been analyzed by ToSDR.");
                        }
                        window.open('https://tosdr.org/en/service/' + jsonData.parameters.services[0].id, 'ToS DR', 'height=333,width=720');
                    });
            }
        },
        // {
        //     title: '',
        //     css: 'default',
        //     description: ``,
        //     func: function () { }
        // },
    ]
};
let data = {};

const getDomainFromUrl = function (url) {
    let domain = (new URL(url));
    domain = domain.hostname;
    return domain;
};

const getBookmarklets = function (domain) {
    let list = [];
    if (db.domains.hasOwnProperty(domain)) {
        list = db.domains[domain];
    }
    return list.concat(db.defaults);
};

const runBookmarklet = function (bletId, tabId) {
    chrome.scripting.executeScript({ target: { tabId: tabId }, func: data.blets[bletId].func }, function (response) { });
};

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    let domain = getDomainFromUrl(currentTab.url);
    let ul = document.createElement('ul');
    document.getElementById('main').appendChild(ul);
    data.blets = getBookmarklets(domain);
    data.blets.forEach((item, i) => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += `<a href="#" class="${item.css}" title="${item.description || item.title}">${item.title}</a>`;
        li.addEventListener('click', function () { runBookmarklet(i, tabs[0].id); });
    });
    document.getElementById('title').innerText = domain;
});
