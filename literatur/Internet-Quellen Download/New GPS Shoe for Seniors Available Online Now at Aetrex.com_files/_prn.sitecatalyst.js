define(['jquery'], function($) {
    return function prnSiteCatalyst() {
        var isErrorPage = serverJSONObj.isErrorPage;
        var isFincontent = serverJSONObj.isFincontent;
        var newsreleaseType = serverJSONObj.newsreleaseType;
        if (isErrorPage) {
            s.pageName = "404-Not Found";
            s.channel = "PRN Other";
            s.prop2 = "unknown_page";
        } else {
            if (typeof isFincontent === 'undefined' || isFincontent === 'false') {
                s.pageName = serverJSONObj.spageName;
                s.server = serverJSONObj.sserver;
                s.channel = serverJSONObj.schannel;
                s.pageType = serverJSONObj.spageType;
                s.prop23 = serverJSONObj.sprop23;
                s.prop45 = serverJSONObj.sprop45;
                s.prop28 = serverJSONObj.sprop28;
                s.prop26 = serverJSONObj.sprop26;
                s.prop5 = serverJSONObj.sprop5;
                s.prop6 = serverJSONObj.sprop6;
                s.prop7 = serverJSONObj.sprop7;
                s.prop9 = serverJSONObj.sprop9;
                s.prop10 = serverJSONObj.sprop10;
                s.prop11 = serverJSONObj.sprop11;
                s.prop12 = serverJSONObj.sprop12;
                s.prop13 = serverJSONObj.sprop13;
                s.prop14 = serverJSONObj.sprop14;
                s.prop15 = serverJSONObj.sprop15;
                s.prop16 = serverJSONObj.sprop16;
                s.prop19 = serverJSONObj.sprop19;
                s.prop20 = serverJSONObj.sprop20;
                s.prop35 = serverJSONObj.sprop35;
                s.prop36 = serverJSONObj.newsreleaseType;
                s.prop37 = serverJSONObj.sprop37;
                s.prop39 = serverJSONObj.sprop39;
                s.prop40 = serverJSONObj.sprop40;
                s.prop46 = serverJSONObj.sprop46;
                s.prop47 = serverJSONObj.sprop47;
                s.prop2 = serverJSONObj.sprop2;
                s.prop50 = serverJSONObj.sprop50;
                s.prop52 = serverJSONObj.sprop52;
                s.prop53 = serverJSONObj.sprop53;
                s.prop54 = serverJSONObj.sprop54;
                s.prop55 = serverJSONObj.sprop55;
                s.prop56 = serverJSONObj.sprop56;
                s.prop57 = serverJSONObj.sprop57;
                s.prop58 = serverJSONObj.sprop58;
                s.prop59 = serverJSONObj.sprop59;
                s.prop61 = serverJSONObj.sprop61;
                s.prop62 = serverJSONObj.sprop62;
                s.prop63 = serverJSONObj.sprop63;
                s.prop64 = serverJSONObj.sprop64;
                s.prop65 = serverJSONObj.sprop65;
                s.prop66 = serverJSONObj.sprop66;
                s.prop67 = serverJSONObj.sprop67;
                s.prop68 = serverJSONObj.sprop68;
                s.prop74 = serverJSONObj.sprop74;
                /* Conversion Variables */
                s.campaign = serverJSONObj.campaign;
                s.state = serverJSONObj.sstate;
                s.zip = serverJSONObj.szip;
            }
        }
        s.events = serverJSONObj.events;
        s.products = serverJSONObj.sproducts;
        s.purchaseID = serverJSONObj.spurchaseID;
        s.eVar2 = serverJSONObj.seVar2;
        s.eVar3 = serverJSONObj.seVar3;
        s.eVar5 = serverJSONObj.seVar5;
        s.eVar6 = serverJSONObj.seVar6;
        s.eVar7 = serverJSONObj.seVar7;
        s.eVar17 = serverJSONObj.seVar17;
        s.eVar18 = serverJSONObj.seVar18;
        s.eVar19 = serverJSONObj.seVar19;
        s.eVar10 = serverJSONObj.seVar10;
        s.eVar42 = serverJSONObj.seVar42;
        s.eVar43 = serverJSONObj.seVar43;
        s.eVar44 = serverJSONObj.seVar44;
        s.eVar45 = serverJSONObj.seVar45;
        s.eVar46 = serverJSONObj.seVar46;
        s.eVar31 = serverJSONObj.seVar31;
        s.eVar32 = serverJSONObj.seVar32;
        s.eVar33 = serverJSONObj.seVar33;
        s.eVar34 = serverJSONObj.seVar34;
        s.eVar35 = serverJSONObj.seVar35;
        s.eVar40 = serverJSONObj.seVar40;
        s.eVar50 = serverJSONObj.seVar50;
        s.eVar74 = serverJSONObj.seVar74;
        if (serverJSONObj.seVar2 && serverJSONObj.seVar2 != "") {
            //var cookieVal = readCookie('prncom_schF');
            s.eVar27 = s.eVar2;
        }
        var s_code=s.t();if(s_code)document.write(s_code);
    }
});
