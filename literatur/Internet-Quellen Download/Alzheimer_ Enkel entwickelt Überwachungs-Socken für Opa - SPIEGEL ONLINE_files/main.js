function begin() {
    activateCTA(),
    startTime=tw.ticker.time,
    currentTime=startTime,
    tw.delayedCall(d, function() {
        tw.ticker.addEventListener("tick", frameTick, this, !0, 1)
    }
    ),
    d=0,
    tw.to(bannerContainer, .2, {
        autoAlpha: 1, delay: d
    }
    ),
    tw.to(bg, .2, {
        autoAlpha: 1, delay: d
    }
    ),
    d+=0;
    var e=.4,
    t=.3,
    a=2.2,
    l=Quad.easeOut,
    n=Quad.easeIn;
    tw.set(device2, {
        autoAlpha: 1
    }
    ),
    tw.to(headline1, e, {
        x: 0, autoAlpha: 1, ease: l, delay: d
    }
    ),
    tw.to(device2, e, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    d+=e/2+1.4,
    tw.to(device3, e/2, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    d+=e/2+.8,
    tw.to(device4, e/2, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    d+=e/2+.8,
    tw.to(headline1, t, {
        x: -xOffset, autoAlpha: 0, ease: n, overwrite: 0, delay: d
    }
    ),
    d+=t,
    tw.to(headline2, e, {
        x: 0, autoAlpha: 1, ease: l, delay: d
    }
    ),
    tw.delayedCall(d, function() {
        tw.set(device2, {
            autoAlpha: 0
        }
        ), tw.set(device3, {
            autoAlpha: 0
        }
        )
    }
    ),
    tw.to(device4, e, {
        autoAlpha: 0, ease: l, delay: d
    }
    ),
    d+=a,
    tw.to(headline2, t, {
        x: -xOffset, autoAlpha: 0, ease: n, overwrite: 0, delay: d
    }
    ),
    d+=t,
    tw.to(headline3, e, {
        x: 0, autoAlpha: 1, ease: l, delay: d
    }
    ),
    tw.to(device5, e, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    d+=a,
    tw.to(headline3, t, {
        x: -xOffset, autoAlpha: 0, ease: n, overwrite: 0, delay: d
    }
    ),
    d+=t,
    tw.to(headline4, e, {
        x: 0, autoAlpha: 1, ease: l, delay: d
    }
    ),
    tw.to(device6, e, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    d+=a,
    tw.to(headline4, t, {
        x: -xOffset, autoAlpha: 0, ease: n, overwrite: 0, delay: d
    }
    ),
    d+=t,
    tw.to(headline5, e, {
        x: 0, autoAlpha: 1, ease: l, delay: d
    }
    ),
    tw.to(device7, e, {
        autoAlpha: 1, ease: l, delay: d
    }
    ),
    // d+=e/2,
    // tw.to(price, e, {
    //     x: 0, autoAlpha: 1, ease: l, delay: d
    // }
    // ),
    d+=e,
    tw.to(newflag, .4, {
        autoAlpha: 1, scale: 1, transformOrigin:"0% 100%", delay: d
    }
    ),
    tw.delayedCall(d, function() {
        print(d)
    }
    )
}

function activateCTA() {
    bannerContainer.onmouseover=function() {
        print(ctaBacking),
        tw.to(ctaBacking, .2, {
            fill: "#00a6b2"
        }
        )
    }
    ,
    bannerContainer.onmouseout=function() {
        tw.to(ctaBacking, .5, {
            fill: "#ee3d6f", ease: Quad.easeInOut
        }
        )
    }
}

function frameTick(e) {
    prevTime=currentTime,
    currentTime=tw.ticker.time,
    deltaTime=currentTime-prevTime,
    time+=deltaTime
}

function print(e) {
    console.log(e)
}

CSSPlugin.defaultForce3D=!0;
var main=this,
tw,
bannerContainer,
headline1,
headline2,
headline3,
headline4,
headline5,

newflag,
logo,
ctaBacking,
ctaBackingHold,
ctaText,
time=0,
prevTime=0,
startTime,
currentTime,
deltaTime,
i,
j,
d,
bg,
backgroundColors=["#f3d4d1", //Pink//Frame4
"#cbbdc8", //Purple  //Frame1
"#b4b6b5", //Grey  //Frame2
"#c2d1e0", //blue  //Frame3
"#747474", //Black  //Frame5
"#9ed5ce", //Teal  //Frame6
"#cbbdc8"], //Purple  //Frame7
sizeDatas= {
    s300x250: {
        newFlagTO: "25% 22%"
    }
    ,
    s300x600: {
        newFlagTO: "185px 204px"
    }
    ,
    s728x90: {
        newFlagTO: "371px 20px"
    }
    ,
    s970x250: {
        newFlagTO: "464px 45px"
    }
}

,
sizeData=sizeDatas["s"+sizeType],
xOffset=80;
window.onload=function() {
    for(tw=TweenLite, bannerContainer=document.getElementById("banner-container"), bg=document.getElementById("bg"), headline1=document.getElementById("headline1"), price=document.getElementById("price"), headline2=document.getElementById("headline2"), headline3=document.getElementById("headline3"), headline4=document.getElementById("headline4"), headline5=document.getElementById("headline5"), newflag=document.getElementById("newflag"), logo=document.getElementById("logo"), ctaBackingHold=document.getElementById("cta-backing-hold-"+sizeType), ctaBacking=document.getElementById("cta-backing-"+sizeType), ctaText=document.getElementById("cta-text"), i=1;
    7>=i;
    i++) {
        var e=document.getElementById("device"+i);
        main["device"+i]=e,
        tw.set(e, {
            backgroundColor: backgroundColors[i-1], autoAlpha: 0
        }
        )
    }
    for(i=1;
    5>=i;
    i++)tw.set(main["headline"+i], {
        x: xOffset, autoAlpha: 0
    }
    );
    tw.set(device1, {
        autoAlpha: 1
    }
    ),
    
    tw.set(logo, {
        autoAlpha: 1
    }
    ),
    tw.set(ctaBackingHold, {
        autoAlpha: 1, display: "block"
    }
    ),
    tw.set(ctaBacking, {
        autoAlpha: 1, display: "block"
    }
    ),
    tw.set(ctaText, {
        autoAlpha: 1, display: "block"
    }
    ),
    tw.set(price, {
        autoAlpha: 1, display: "block"
    }
    ),
    tw.set(newflag, {
        autoAlpha: 0, transformOrigin:"0% 100%", scale: .6
    }
    ),
    activateCTA(),
    begin()
}

;