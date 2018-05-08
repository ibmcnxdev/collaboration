(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    script.text = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","GTM-NMPBMN7");';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));

document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
    (function(d, noscript, iframe) {
        noscript = d.createElement('noscript');
        iframe = d.createElement('iframe');
        iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-NMPBMN7";
        iframe.height = "0";
        iframe.width = "0";
        iframe.style = "display:none;visibility:hidden";
        noscript.appendChild(iframe);
        var semtag = d.getElementById("semtagmenu");
        //d.getElementsByTagName('body')[0].appendChild(noscript);
        d.getElementsByTagName('body')[0].insertBefore(noscript, semtag);
        
    }(document));
});

