var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/34f9b71c\/www-widgetapi.vflset\/www-widgetapi.js'; window['yt_embedsEnableIframeSrcWithIntent'] = true; try { var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", { createScriptURL: function (x) { return x } }); scriptUrl = ttPolicy.createScriptURL(scriptUrl) } catch (e) { } var YT; if (!window["YT"]) YT = { loading: 0, loaded: 0 }; var YTConfig; if (!window["YTConfig"]) YTConfig = { "host": "https://www.youtube.com" };
if (!YT.loading) {
    YT.loading = 1; (function () {
        var l = []; YT.ready = function (f) { if (YT.loaded) f(); else l.push(f) }; window.onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++)try { l[i]() } catch (e$0) { } }; YT.setConfig = function (c) { for (var k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k] }; var a = document.createElement("script"); a.type = "text/javascript"; a.id = "www-widgetapi-script"; a.src = scriptUrl; a.async = true; var c = document.currentScript; if (c) { var n = c.nonce || c.getAttribute("nonce"); if (n) a.setAttribute("nonce", n) } var b =
            document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b)
    })()
};

var player;
var iframe = document.querySelectorAll('.player')

function onYouTubePlayerAPIReady() {

    iframe.forEach(element => {
        const playerProperties = {
            dataId: element.getAttribute('data-identity'),
            dataHeight: element.getAttribute('data-height'),
            dataWidth: element.getAttribute('data-width'),
            dataMute: element.getAttribute('data-mute'),
            dataControls: element.getAttribute('data-controls'),
            dataAutoplay: element.getAttribute('data-autoplay'),
            dataLoop: element.getAttribute('data-loop'),
            dataInline: element.getAttribute('data-inline'),
            dataPlaylist: element.getAttribute('data-playlist'),
            dataModestBranding: element.getAttribute('data-modest'),
            dataRel: element.getAttribute('data-rel'),
            dataFs: element.getAttribute('data-fs'),
        }

        player = new YT.Player(element, {
            height: Object.values(playerProperties)[1],
            width: Object.values(playerProperties)[2],
            videoId: Object.values(playerProperties)[0],
            playerVars: {
                mute: Object.values(playerProperties)[3],
                controls: Object.values(playerProperties)[4],
                autoplay: Object.values(playerProperties)[5],
                loop: Object.values(playerProperties)[6],
                playsinline: Object.values(playerProperties)[7],
                playlist: Object.values(playerProperties)[8],
                modestbranding: Object.values(playerProperties)[9],
                rel: Object.values(playerProperties)[10],
                fs: Object.values(playerProperties)[11],
            },
        }
        );
    });
}