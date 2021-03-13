            // var iosLinkUrl = "https://apps.apple.com/cn/app/%E5%BE%AE%E8%A7%86%E5%BA%97/id1536307468" // 微视店 app store 下载地址
            var iosLinkUrl = "https://itunes.apple.com/cn/app/%E5%BE%AE%E8%A7%86%E5%BA%97/id1536307468"
            var androidLinkurl = "https://app.mi.com/details?id=uni.UNI8B58A22&ref=search" //

            var u = navigator.userAgent, isAndroid, isIOS

            window.onload = function() {
                init()
            }

            function init() {
                isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端
                isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

                var link = isIOS ? iosLinkUrl : androidLinkurl

                $('a').attr('href', link)
            }
 
    