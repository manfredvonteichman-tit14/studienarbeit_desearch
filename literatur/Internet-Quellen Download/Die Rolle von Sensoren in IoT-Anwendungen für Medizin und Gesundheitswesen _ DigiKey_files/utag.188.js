//~~tv:20067.20150121
//~~tc: Bring template in-line with current standards and methodologies

//tealium universal tag - utag.sender.20067 ut4.0.201603281943, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{
  (function(id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev={'view':1};

      u.map={};
  u.extend=[function(a,b){ try{ if((typeof b['meta.wt.site']!='undefined'&&b['wt_use_udo'].toString().toLowerCase()=='false'.toLowerCase())){b['page_site']=b['meta.wt.site']} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_site'].toString().toLowerCase()=='GB'.toLowerCase()){b['page_site']='UK'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cp.cur'].toString().toLowerCase()=='CNY'.toLowerCase()){b['page_site']='ZZ'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['page_site']=b['page_site'].toUpperCase();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['cp.WRUID']!='undefined'){try{b['cp.WRUID']=b['cp.WRUID'].split('.')[0];}catch(e){}} } catch(e){ utag.DB(e) }  }];


    u.send=function(a,b){
      if(u.ev[a]||typeof u.ev.all!="undefined"){

        var c, d, e, f;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "qs_delim" : "?",
          "tag_type" : "script",
          "base_url" : "//www.digikey.com/webtrends.bc.js",
          "secure_base_url" : "",
          "static_params" : ""
        };

        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

        c=[];

        for (d in utag.loader.GV(u.map)) {
          if (typeof b[d] !== "undefined" && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (e[f] == "qsp_delim" || e[f] == "kvp_delim" || e[f] == "qs_delim" || e[f] == "base_url" || e[f] == "secure_base_url") {
                u.data[e[f]] = b[d];
              } else {
                // requires "kvp_delim" mapped first (if mapped)
                c.push(e[f] + u.data.kvp_delim + encodeURIComponent(b[d]));
              }
            }
          }
        }

        u.data.secure_base_url = u.data.secure_base_url || u.data.base_url;
        u.data.url = (location.protocol == "https:" ? u.data.secure_base_url : u.data.base_url);

        if(u.data.url.indexOf("http")!==0 && u.data.url.indexOf("/")!==0 ){
          u.data.url = location.protocol + "//" + u.data.url;
        }

        if (u.data.url.indexOf(u.data.qs_delim) < 0 && (c.length > 0 || u.data.static_params.length > 0)) {
          u.data.url += u.data.qs_delim
        }

        if (u.data.static_params) {
          if (c.length > 0) {
            u.data.url += u.data.static_params + u.data.qsp_delim;
          } else {
            u.data.url += u.data.static_params;
          }
        }

        u.loader({"type": u.data.tag_type, "src": u.data.url + c.join(u.data.qsp_delim), "loc": "script", "id": 'utag_188'});
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("188", "digikey.main"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
