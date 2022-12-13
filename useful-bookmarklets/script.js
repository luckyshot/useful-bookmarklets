/**
88   88 88""Yb 88     888888 888888 .dP"Y8 
88   88 88__dP 88     88__     88   `Ybo." 
Y8   8P 88""Yb 88  .o 88""     88   o.`Y8b 
`YbodP' 88oodP 88ood8 888888   88   8bodP' 
by Xavi Esteve
*/
const db = {
    domains: {
        'newtab': [
            {
                title: 'Provide feedback',
                description: ``,
                func: function () {
                    location.href = 'https://github.com/luckyshot/useful-bookmarklets/issues'
                }
            }
        ],
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
        'github.com': [
            {
                title: '📑 List commits',
                description: `Copies all commits into a simple text list`,
                func: function () {
                    let list = '';
                    document.querySelectorAll('.TimelineItem-body .js-navigation-open').forEach(function(item){
                        list = item.innerText + "\n" + list;
                    });
                    setTimeout(async () => console.log(
                        await navigator.clipboard.writeText(list)), 500);
                    alert('List copied to clipboard');
                }
            },
        ],
        'loc2.caixabank.es': [
            {
                title: '📑 List transactions',
                description: `Copies all transactions into a simple text list`,
                func: function () {
                    let list = '';
                    document.querySelectorAll('#timeLine tr').forEach(function(item){
                        let name = item.querySelector(':scope .margin--bottom-extrasmall');
                        let date = item.querySelector(':scope .s-date.white_space--nowrap.margin--right-normal');
                        let price = item.querySelector(':scope .table--cell-import-big.text--align-right .margin--bottom-extrasmall');
                        let priceSign = item.querySelector(':scope .table--cell-import-big.text--align-right .s-import--positive');
                        let balance = item.querySelector(':scope .table--cell-import-big.text--align-right .font--size-90');
                        if (price){
                            list = list + "\n" + (name ? name.innerText : '')+";"+(date ? date.innerText : '')+";"+(priceSign ? '' : '-')+(price ? price.innerText.replace('.','').replace(',','.') : '')+";"+(balance ? balance.innerText.replace('.','').replace(',','.').replace('+ ','') : '');
                        }
                    });
                    setTimeout(async () => console.log(
                        await navigator.clipboard.writeText(list)), 500);
                    alert('List copied to clipboard');
                }
            },
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
                    var e = location.href.search(/(amazon.|amzn.)(com|co\.uk|ca|de|fr|es|it|cn|co\.jp).+/i) >= 0, c = /amazon.(com|co\.uk|ca|de|fr|es|it|cn|co\.jp).*\/(asin|dp|gp|product|exec\/obidos|gp\/offer-listing|product\-reviews|gp\/aw\/d)\/[A-Z0-9]{10,13}/i, t = /amzn.(com|co\.uk|ca|de|fr|es|it|cn|co\.jp)\/[A-Z0-9]{10,13}/i, a = location.href.search(c) >= 0, o = location.href.search(/camelcamelcamel.com/i) >= 0, n = "ccc-injected-links-569DE51E-99CE-4ACE-BD10-7F85542A54A8", l = !(null == document.getElementById(n)), i = "0.2", m = "ctx_prid=5&utm_campaign=bookmarklet&v_camelet=" + i; if (a) try { var r = document.getElementById("ASIN").value; window.open("http://camelcamelcamel.com/search?q=" + window.location.origin + "/dp/" + r + "&" + m, "_blank") } catch (d) { window.open("http://camelcamelcamel.com/search?q=" + encodeURIComponent(location.href) + "&" + m, "_blank") } else if (l || e || o) window.open("http://camelcamelcamel.com/?" + m, "_self"); else { var s = []; links = document.links; for (var h = 0; h < links.length; h++)(links[h].href.search(c) >= 0 || links[h].href.search(t) >= 0) && s.push(links[h]); for (var h = 0; h < s.length; h++) { for (var p = s[h].childNodes.length, f = !1, g = 0; p > g; g++)"img" != s[h].childNodes[g].nodeName.toLowerCase() || (f = !0); if (!f && "" != s[h].text) { var u = document.createElement("a"), w = document.createElement("img"), k = document.createTextNode(" "); w.src = "http://s3.camelcamelcamel.com/images/ccc.png", w.style.height = "0.8em", w.style.verticalAlign = "text-center", u.appendChild(w), u.title = "View Amazon price history at camelcamelcamel.com", u.target = "_blank", u.href = "http://www.camelcamelcamel.com/search?q=" + s[h].href + "&" + m, s[h].parentNode.insertBefore(u, s[h].nextSibling), s[h].parentNode.insertBefore(k, s[h].nextSibling) } } ccc_inj = document.createElement("div"), ccc_inj.id = n, document.body.insertBefore(ccc_inj, document.body.childNodes[0]), 0 == s.length && window.open("http://camelcamelcamel.com/?" + m, "_self") }
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
        'openai.com': [
            {
                title: '💧 Save image without watermark',
                description: `Extract all images without the watermark`,
                func: function () {
                    const s = document.querySelectorAll(".generated-image > img");
                    window.open(s[0].getAttribute("src"));
                }
            },
        ],
        'www.reddit.com': [
            {
                title: '🗑 Recover deleted post',
                description: `Go to reveddit.com to recover a deleted thread on Reddit`,
                func: function () {
                    document.location = document.URL.replace('reddit.com', 'reveddit.com');
                }
            },
        ],
        'twitter.com': [
            {
                title: '👀 Read on Nitter',
                description: `Alternative Twitter front-end focused on privacy and performance`,
                func: function () {
                    document.location = document.URL.replace('twitter.com', 'nitter.net');
                }
            },
        ],
        'www.youtube.com': [
            {
                title: '🛂 Bypass adult sign in',
                description: `Bypass Youtube adult filter without sign in`,
                func: function () {
                    window.location.replace(document.URL.replace('watch?v=', 'v/'));
                }
            },
        ],



    },



    defaults: [
        {
            title: 'Share',
            css: 'heading',
        },
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
                location.href = 'https://bufferapp.com/add?url=' + encodeURIComponent(location.href) + '&text=' + encodeURIComponent(document.title);
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
            title: '📋 Copy link',
            css: 'default',
            description: `Copies the website's title and link, perfect for sharing`,
            func: function () {
                let content = document.title + "\n" + location.href;
                setTimeout(async () => console.log(
                    await navigator.clipboard.writeText(content)), 500);
                alert('Link copied to clipboard');
            }
        },
        {
            title: 'Website',
            css: 'heading',
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
            title: '🕰 See old versions',
            css: 'default',
            description: `Displays past versions of this website thanks to Archive.org`,
            func: function () {
                location.href = 'http://web.archive.org/web/*/' + escape(location.href);
            }
        },
        {
            title: '🕰 Save version',
            css: 'default',
            description: `Save the current website on Archive.org`,
            func: function () {
                window.open('https://web.archive.org/save/' + location.href);
            }
        },
        {
            title: '📑 Web to PDF',
            css: 'default',
            description: `Convert the website to a PDF document using web2pdfconvert.com`,
            func: function () {
                window.open('https://www.web2pdfconvert.com#' + location.href);
            }
        },
        {
            title: '📱 Web to QR code',
            css: 'default',
            description: `Opens a new window with a QR code of the current URL using Google Charts API`,
            func: function () {
                var url = ('http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(location.href));
                w = open(url, 'w', 'location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=500,height=500,modal=yes,dependent=yes');
                if (w) {
                    setTimeout('w.focus()', 1000)
                } else {
                    location = url;
                }
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
        {
            title: '📜 Autofill form',
            css: 'default',
            description: `Autofill a form with placeholder data (password is 'usefulbookmarklets')`,
            func: function () {
                document.querySelectorAll('input[name*=fullname]').forEach(e => { e.value = 'Peter Griffin' });
                document.querySelectorAll('input[name*=full_name]').forEach(e => { e.value = 'Peter Griffin' });
                document.querySelectorAll('input[name*=name]').forEach(e => { e.value = 'Peter Griffin' });
                document.querySelectorAll('input[name*=firstname]').forEach(e => { e.value = 'Peter' });
                document.querySelectorAll('input[name*=fname]').forEach(e => { e.value = 'Peter' });
                document.querySelectorAll('input[name*=first_name]').forEach(e => { e.value = 'Peter' });
                document.querySelectorAll('input[name*=lastname]').forEach(e => { e.value = 'Griffin' });
                document.querySelectorAll('input[name*=lname]').forEach(e => { e.value = 'Griffin' });
                document.querySelectorAll('input[name*=last_name]').forEach(e => { e.value = 'Griffin' });
                document.querySelectorAll('input[name*=email]').forEach(e => { e.value = 'petergriffin@gmail.com' });
                document.querySelectorAll('input[name*=password]').forEach(e => { e.value = 'usefulbookmarklets' });
                document.querySelectorAll('input[name*=pass]').forEach(e => { e.value = 'usefulbookmarklets' });
                document.querySelectorAll('input[name*=post]').forEach(e => { e.value = '08080' });
                document.querySelectorAll('input[name*=zip]').forEach(e => { e.value = '08080' });
                document.querySelectorAll('input[name*=address]').forEach(e => { e.value = 'Adam Street 123' });
                document.querySelectorAll('input[name*=address2]').forEach(e => { e.value = '123' });
                document.querySelectorAll('input[name*=city]').forEach(e => { e.value = 'New York' });
                document.querySelectorAll('input[name*=country]').forEach(e => { e.value = 'United States' });
                document.querySelectorAll('input[name*=phone]').forEach(e => { e.value = '+7977109292' });
                document.querySelectorAll('input[name*=mobile]').forEach(e => { e.value = '+7977109292' });
                document.querySelectorAll('input[name*=nif]').forEach(e => { e.value = '5555555A' });
                document.querySelectorAll('input[name*=vat]').forEach(e => { e.value = '5555555A' });
                document.querySelectorAll('input[name*=checkbox]').forEach(e => { e.checked = true });
                document.querySelectorAll('input[name*=consent]').forEach(e => { e.checked = true });
                document.querySelectorAll('input[name*=gdpr]').forEach(e => { e.checked = true });
            }
        },
        {
            title: '🧱 Wall skip',
            css: 'default',
            credit: 'https://github.com/gillyb/ppd',
            description: `Remove walls on sites that force you to sign up`,
            func: function () {
                var walls = document.querySelectorAll('div, span');
                for (var i = 0, max = walls.length; i < max; i++) {
                    var style = window.getComputedStyle(walls[i]);
                    if (style.position === 'fixed' && parseInt(style.width) > 200 && parseInt(style.height) > 200) {
                        walls[i].setAttribute('style', 'display: none!important');
                    }
                }
                var body = document.getElementsByTagName('body')[0];
                body.setAttribute('style', body.getAttribute('style') + '; overflow: auto!important');
                // Removes blur from everything.
                document.querySelectorAll('*').forEach(a => a.style.filter = 'blur()');
            }
        },
        {
            title: '🌐 Check on SimilarWeb',
            css: 'default',
            description: `Check popularity on similarweb.com`,
            func: function () {
                window.open('https://www.similarweb.com/website/' + location.host + '/#overview', 'SimilarWeb.com', 'height=480,width=415');
            }
        },
        {
            title: 'Text',
            css: 'heading',
        },
        {
            title: '🛒 Search on Amazon',
            css: 'default',
            description: `Search the selected text in Amazon`,
            func: function () {
                q = document.getSelection();
                if (!q) {
                    q = prompt('Amazon search:', '')
                };
                if (q) window.open('http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias=aps&tag=p-id-20&field-keywords=' + escape(q));
            }
        },
        {
            title: '📖 Dictionary definition',
            css: 'default',
            description: `Define the selected word using Google`,
            func: function () {
                t = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection ? document.selection.createRange().text : ''); u = t ? 'https://www.google.com/search?q=' + encodeURIComponent('define:' + unescape('"') + t + unescape('"')) : ''; w = window.open(u, '_blank', 'height=500,width=800,scrollbars=1'); w.focus && w.focus(); if (!t) { w.document.write(unescape('<html><head><title>Define...</title></head><body style="padding:1em;font-family:Helvetica,Arial"><br><form action="http://www.google.com/search"><input id="q" name="q" value="define:">&nbsp;<input type="submit" value="Go"></form><p style="font-size:.75em;color:#999">Note: you can also choose a term beforehand by highlighting it on the page!<br><br>Created by <a target="_blank" href="http://mrcoles.com/blog/dictionary-bookmarklet-popup-definition-browser/">Peter Coles</a></p><script>var q =document.getElementById("q"),v=q.value;q.focus();q.value="";q.value=v;</script></body></html>')); w.document.close(); }
            }
        },


        {
            title: '🌫 Blur text',
            css: 'default',
            description: `Blurs the selected text to protect privacy`,
            credit: `https://www.codeproject.com/Questions/897645/Replacing-selected-text-HTML-JavaScript`,
            func: function () {
                var sel, range, node;
                if (window.getSelection) {
                    sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        range = window.getSelection().getRangeAt(0);
                        console.log(range);
                        var html = '<span style="filter: blur(.4em);">' + range + '</span>'
                        range.deleteContents();

                        var el = document.createElement("div");
                        el.innerHTML = html;
                        var frag = document.createDocumentFragment(), node, lastNode;
                        while ((node = el.firstChild)) {
                            lastNode = frag.appendChild(node);
                        }
                        range.insertNode(frag);
                    }
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    range.collapse(false);
                    range.pasteHTML(html);
                }
            }
        },

        {
            title: 'Tools',
            css: 'heading',
        },
        {
            title: '🔢 Calculator',
            css: 'default',
            description: `Quick online calculator`,
            credit: `https://replit.com/@bryku/calculatorPublic`,
            func: function () {
                function calc(string) {
                    if (!!string) {
                        string = processEquation(string);
                        console.log(string);
                    }
                    var result = prompt('Type in your formula:', string || '');
                    if (result) {
                        calc(result);
                    }
                }
                function processEquation(string) {
                    var match = string.match(/\*|\/|\+|\-|\^/gmsi) || [];
                    while (match.length > 0) {
                        string = string.replace(/\((.*?)\)/gmsi, (_, s) => {
                            return processEquation(s);
                        }).replace(/([0-9\.\-]+)\^([0-9\.\-]+)/gmsi, (_, n1, n2) => {
                            return Math.pow(n1, n2);
                        }).replace(/([0-9\.\-]+)(\*|\/)([0-9\.\-]+)/gmsi, (_, n1, o, n2) => {
                            return o == '*' ? Number(n1) * Number(n2) : Number(n1) / Number(n2);
                        }).replace(/([0-9\.\-]+)(\-|\+)([0-9\.\-]+)/gmsi, (_, n1, o, n2) => {
                            return o == '+' ? Number(n1) + Number(n2) : Number(n1) - Number(n2);
                        });
                        match = string.match(/\*|\/|\+|\-/gmsi) || [];
                    }
                    return string;
                }
                calc();
            }
        },
        {
            title: '📐 Imperial to Metric',
            css: 'default',
            description: `Converts imperial numbers into metric`,
            credit: `https://github.com/rufname/metricPlease`,
            func: function () {
                function bR(a, b, c, d) { return function (i) { let f = i; let g; while ((g = a.exec(i)) != null) { let e = g[0].substr(0, g[0].length - b).replace(',', '').replace('\u2212', '-').trim(); e.endsWith('-') && (e = e.substr(0, e.length - 1)); let h = Math.round(c(e) * 10) / 10; isNaN(h) || (f = f.replace(g[0], ' ' + h + ' ' + d)); } return f; }; } function checkString(a) { return a = iR1(iR2(iR3(iR4(iR5(iR6(a)))))), a = foR1(foR2(foR3(foR4(foR5(foR6(a)))))), a = yR1(yR2(yR3(yR4(yR5(yR6(a)))))), a = mR1(mR2(mR3(mR4(mR5(mR6(a)))))), a = faR1(faR2(a)), a; } function cC(e) { let b = e.childNodes; for (let a = 0; a < b.length; a++)if (b[a].nodeType === 3) { let c = b[a].nodeValue; let d = checkString(c); c !== d && (b[a].nodeValue = d); } else b[a].tagName !== 'SCRIPT' && cC(b[a]); } let iR1 = bR(/[0-9]+( |-|)in\./g, 3, function (a) { return a * 2.54; }, 'cm'); let iR2 = bR(/[0-9]+( |-|)inch/g, 4, function (a) { return a * 2.54; }, 'cm'); let iR3 = bR(/[0-9]+( |-|)inches/g, 6, function (a) { return a * 2.54; }, 'cm'); let iR4 = bR(/[0-9]{1,3},[0-9]{3}( |-|)in\./g, 3, function (a) { return a * 2.54; }, 'cm'); let iR5 = bR(/[0-9]{1,3},[0-9]{3}( |-|)inch/g, 4, function (a) { return a * 2.54; }, 'cm'); let iR6 = bR(/[0-9]{1,3},[0-9]{3}( |-|)inches/g, 6, function (a) { return a * 2.54; }, 'cm'); let foR1 = bR(/[0-9]+( |-|)ft\./g, 3, function (a) { return a * 0.3048; }, 'm'); let foR2 = bR(/[0-9]+( |-|)foot/g, 4, function (a) { return a * 0.3048; }, 'm'); let foR3 = bR(/[0-9]+( |-|)feet/g, 4, function (a) { return a * 0.3048; }, 'm'); let foR4 = bR(/[0-9]{1,3},[0-9]{3}( |-|)ft\./g, 3, function (a) { return a * 0.3048; }, 'm'); let foR5 = bR(/[0-9]{1,3},[0-9]{3}( |-|)foot/g, 4, function (a) { return a * 0.3048; }, 'm'); let foR6 = bR(/[0-9]{1,3},[0-9]{3}( |-|)feet/g, 4, function (a) { return a * 0.3048; }, 'm'); let yR1 = bR(/[0-9]+( |-|)yd\./g, 3, function (a) { return a * 0.9144; }, 'm'); let yR2 = bR(/[0-9]+( |-|)yard/g, 4, function (a) { return a * 0.9144; }, 'm'); let yR3 = bR(/[0-9]+( |-|)yards/g, 5, function (a) { return a * 0.9144; }, 'm'); let yR4 = bR(/[0-9]{1,3},[0-9]{3}( |-|)yd\./g, 3, function (a) { return a * 0.9144; }, 'm'); let yR5 = bR(/[0-9]{1,3},[0-9]{3}( |-|)yard/g, 4, function (a) { return a * 0.9144; }, 'm'); let yR6 = bR(/[0-9]{1,3},[0-9]{3}( |-|)yards/g, 5, function (a) { return a * 0.9144; }, 'm'); let mR1 = bR(/[0-9]+( |-|)mi\./g, 3, function (a) { return a * 1.609344; }, 'km'); let mR2 = bR(/[0-9]+( |-|)mile/g, 4, function (a) { return a * 1.609344; }, 'km'); let mR3 = bR(/[0-9]+( |-|)miles/g, 5, function (a) { return a * 1.609344; }, 'km'); let mR4 = bR(/[0-9]{1,3},[0-9]{3}( |-|)mi\./g, 3, function (a) { return a * 1.609344; }, 'km'); let mR5 = bR(/[0-9]{1,3},[0-9]{3}( |-|)mile/g, 4, function (a) { return a * 1.609344; }, 'km'); let mR6 = bR(/[0-9]{1,3},[0-9]{3}( |-|)miles/g, 5, function (a) { return a * 1.609344; }, 'km'); let faR1 = bR(/([−-]|)[0-9]+( |-|)[Dd]egree [Ff]ahrenheit/g, 17, function (a) { return (a - 32) * (5 / 9); }, '\xB0C'); let faR2 = bR(/([−-]|)[0-9]+( |-|)[Dd]egrees [Ff]ahrenheit/g, 18, function (a) { return (a - 32) * (5 / 9); }, '\xB0C'); cC(document.body);

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
            title: '🔊 Speak out loud',
            css: 'default',
            description: `Reads the selected text`,
            credit: `https://locserendipity.com/Speaker.html`,
            func: function () {
                function getSelectionText() {
                    var text = '';
                    if (window.getSelection) {
                        text = window.getSelection().toString();
                    } else {
                        alert('Please select some text first');
                    } return text;
                }
                var to_speak = new SpeechSynthesisUtterance(getSelectionText());
                window.speechSynthesis.speak(to_speak);
            }
        },
        {
            title: 'Browser',
            css: 'heading',
        },
        {
            title: '🔃 Rotate screen',
            css: 'default',
            description: `Rotate the website 90 degrees clockwise, keep clicking to rotate it further`,
            func: function () {
                ___rotate = window.___rotate || 0, ___rotate++, ___rotate > 3 && (___rotate = 0); var t = document.documentElement, o = t.clientWidth, e = t.clientHeight, r = document.body, i = r.style; 0 === ___rotate ? (i.transform = "", i.position = "", i.width = "", i.height = "", i.left = "", i.top = "") : 1 === ___rotate ? (i.transform = "rotate(90deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = e + "px", i.height = o + "px", i.left = "100%", i.top = "0") : 2 === ___rotate ? (i.transform = "rotate(180deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = o + "px", i.height = e + "px", i.left = "100%", i.top = "100%") : 3 === ___rotate && (i.transform = "rotate(270deg)", i.transformOrigin = "top left", i.position = "absolute", i.width = e + "px", i.height = o + "px", i.left = "0", i.top = "100%");
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
            title: '⏬ Auto Scroll',
            css: 'default',
            description: `Auto Scroll the website, use 0-9 to set the speed`,
            credit: 'The Autoscroll Bookmarket:Tim Harper:http://tim.theenchanter.com',
            func: function () {
                var _ss_interval_pointer; _ss_speed = 1; _ss_speed_pairs = [[0, 0], [1, 200.0], [1, 120.0], [1, 72.0], [1, 43.2], [1, 25.9], [2, 31.0], [4, 37.2], [8, 44.8], [8, 26.4], [16, 32.0]]; _ss_last_onkeypress = document.onkeypress; _ss_stop = function () { clearTimeout(_ss_interval_pointer) }; _ss_start = function () { _ss_abs_speed = Math.abs(_ss_speed); _ss_direction = _ss_speed / _ss_abs_speed; _ss_speed_pair = _ss_speed_pairs[_ss_abs_speed]; _ss_interval_pointer = setInterval('scrollBy(0,' + _ss_direction * _ss_speed_pair[0] + '); if((pageYOffset<=1)||(pageYOffset==document.height-innerHeight)) _ss_speed=0;', _ss_speed_pair[1]); }; _ss_adj = function (q) { _ss_speed += q; if (Math.abs(_ss_speed) >= _ss_speed_pairs.length) _ss_speed = (_ss_speed_pairs.length - 1) * (_ss_speed / Math.abs(_ss_speed)) }; _ss_quit = function () { _ss_stop(); document.onkeypress = _ss_last_onkeypress; }; document.onkeypress = function (e) { if ((e.charCode == 113) || (e.keyCode == 27)) { _ss_quit(); return; }; if (e.charCode >= 48 && e.charCode <= 57) _ss_speed = e.charCode - 48; else switch (e.charCode) { case 95: _ss_adj(-2); case 45: _ss_adj(-1); break; case 43: _ss_adj(2); case 61: _ss_adj(1); break; }; _ss_stop(); _ss_start(); }; _ss_stop(); _ss_start();
            }
        },
        {
            title: '🔼 Scroll to top',
            css: 'default',
            description: `Scroll to the top of the page`,
            func: function () {
                location.href = '#';
            }
        },
        {
            title: '🚫 Enable Right-click',
            css: 'default',
            description: `Re-enable right click on websites that have disabled it`,
            func: function () {
                document.oncontextmenu = null;
            }
        },
        // {
        //     title: 'Play Asteroids', // not working due to external JS file
        //     css: 'default',
        //     description: `Kill some time or to get rid of annoying ads (loads from websiteasteroids.com)`,
        //     func: function () {
        //         var s = document.createElement('script'); s.type = 'text/javascript'; document.body.appendChild(s); s.src = 'http://www.websiteasteroids.com/asteroids.min.js'; void (0);
        //     }
        // },
        {
            title: '🍪 Delete all cookies',
            css: 'default',
            description: `Delete all cookies from current site`,
            func: function () {
                document.cookie = null;
            }
        },
        {
            title: '📐 Get window size',
            css: 'default',
            description: `Get the current window's size`,
            func: function () {
                alert('Window dimensions: ' + document.body.clientWidth + ' x ' + document.body.clientHeight);
            }
        },
        // {
        //     title: '',
        //     css: 'default',
        //     description: ``,
        //     func: function () { }
        // },
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
        if (item.css === 'heading') {
            li.innerHTML += `<span class="${item.css}" title="${item.description || item.title}">${item.title}</span>`;
        } else {
            li.innerHTML += `<a href="#" class="${item.css}" title="${item.description || item.title}">${item.title}</a>`;
            li.addEventListener('click', function () { runBookmarklet(i, tabs[0].id); });
        }
    });
    document.getElementById('title').innerText = domain;
});
