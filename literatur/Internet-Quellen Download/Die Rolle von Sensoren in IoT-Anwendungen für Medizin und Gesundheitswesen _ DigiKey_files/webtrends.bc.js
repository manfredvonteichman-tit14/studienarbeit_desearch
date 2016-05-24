/*global Webtrends,videojs,isReady_,on,error_,muted,paused,isFillscreen,duration,obj,currentTime,utag_data*/

/**
 * Created by clarkj on 12/29/2015.
 * Customized for DigiKey SOW 3933
 * Customized to pick up Digi-Key utag data
 */


/*
 * Requirements
 *
 *  Brightcove - new Player (vidoejs v4.2)
 *
 * ---------------------------------------------------------------------------------------------------
 ** NOTE: the playerId must be set to reflect that the developer used for the site.
 * ---------------------------------------------------------------------------------------------------
 * Configuration Options
 *
 *  load: 			load event tracking valid values {true:false} default true
 *  loadMeta: 	    loaded meta data event tracking valid values {true:false} default false
 *  pause: 		    pause/resume event tracking valid values {true:false} default true
 *  quartile: 	    quartile event tracking valid values {true:false} default true
 *  beacon: 		beacon tracking valid values {true:false} default true
 *  seek: 			seek event tracking valid values {true:false} default true
 *  beaconRate:     the number of seconds between beacons in seconds values {0-65,000} default 60
 *  pctInc: 		percentage increments for quartile tracking defaule 25
 *  volume: 		volume event and level tracking valid values {true:false} default true
 *  bins: 			bin range for duration tracking in seconds. valid values [0-65000 {default 15})
 *  dcsid: 		    override dcsid
 *  playerId:       the 'id' attribute of the player in the markup.  Default is "[id^='vjs_video']:not([id$='_api'])"
 *  transformCallback:  adds in a transform so the data can be customized before sending (standard Webtrends transform)
 *  trackCallback:  callback function to override standard multiTrack call
 *  nameCallback:   callback for custom video name function
 *  preProcess :    callback to pre-preocess the data before its sent to the tracking call
 *  beaconType:     the type of beaconing - auto: for streaming will use the beaconCurve, and for fix duration the beacon rate
 *  postMessage:    flag to send data via postMessage instead of the tracking call -- default = false
 *  beaconType      auto - for stream media use the beacon curve, curve - always use curve, other values use the beacon ratel
 *  fixed:          uses the beacon duration  for all
 *  beaconCurve: an array of value to use for curvilinear beaconing.  The default table looks like:
 *  {
 *      60:10,
 *      120:20,
 *      300:30,
 *      420:45,
 *      600:60,
 *      1800:150
 *  }
 *
 *
 *  Parameters generated
 *  clip_n: 				clip name
 *  clip_id: 				clip identifier
 *  clip_secs: 				playhead positon in seconds
 *  clip_mins: 				playhead positon in minutes
 *  clip_ct: 				clip content (mp4,mov,avi,...)
 *  clip_perc: 				percentage played
 *  clip_ev: 				event identifier
 *  clip_duration: 		    clips duration
 *  clip_t: 				player media type
 *  clip_player: 			clip player name
 *  clip_vol: 				clip volume level (0 - 100)
 *  clip_res: 				clip fesolugion hxw
 *  clip_player_res: 	    player resolution hxw
 *  clip_duration_n: 	    clip duration bin
 *  clip_tv: 				clip tag version
 *  clip_mode: 				streaming or fixed duration
 *  player_id               BrightCove id for the player
 *  player_playlist_id      BrightCove playlist id
 *  clip_video_id           Brightcove Video id;
 *  clip_accountId          BrightCove account Id;
 *  dl: 					event type 41 - load, 40 for event
 *  clip_tag_*              meta data from BrighCove tag meta attribute
 *
 *
 *
 *
 *  Mod History
 *  v1.0.0BETA    CLARK     Created    02/15/2016
 *  V1.01 CLARK Added tag attribute from bc meta data
 *  V1.01 CLARK Added tag attribute from bc meta data
 *
 *  Implementation example
 *  plugins:{
 *      bc:{src:"webtrends.bc.js",beaconRate:45,load:false,playerId:"[id^='vjs_video']:not([id$='_api'])"},
 *  }
 *
 *
 *
 */


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(w(){Q 1U=[],8={1j:a,2h:j,P:a,2I:a,2g:a,22:\'2d\',19:a,13:a,1e:30,1v:25,1S:a,G:15,1l:a,1b:9,g:"[Z^=\'3l\']:2r([Z$=\'3k\'])",26:9,1K:9,1R:w(m){m.3.6.3j=m.3.6.1c;m.3.6.3m=m.3.6.1d;7(m.3.6.1Z!==v){m.3.6.3n=m.3.6.1Z}m.3.6.1Z=9;m.3.6.1Y=9;m.3.6.24=9;m.3.6.1c=9;m.3.6.1D=9;m.3.6.3q=m.3.6.1d;m.3.6.3p=m.3.6.1c;7(14!==v){7(14.29!==v){m.3.6.3o=14.29;m.3.6.3i=14.29}7(14.2y!==v){m.3.6.3b=14.2y}}},2E:w(d,o){Q n;T(n=o.u.S-2;n>0;n-=2){1F(o.u[n]){f\'6.k\':1F(o.u[n+1]){f\'2P\':o.u.y(\'6.18\',"39");b;f\'2n\':o.u.y(\'6.18\',"38");b;f\'2H\':o.u.y(\'6.18\',"3c");b;f\'27\':o.u.y(\'6.18\',"3d");b;f\'2L\':o.u.y(\'6.18\',"3g");b;f\'2t\':o.u.y(\'6.18\',"3f");b}b}}o.u.y(\'6.3e\',\'3r\');o.u.y(\'6.3s\',\'2e\');o.u.y(\'2j.3G\',\'3F.3E.3H\');o.u.y(\'2j.3I\',\'3L/37.3K\');o.u.y(\'6.3J\',\'3D\');o.u.y(\'6.3C\',\'3w\')},1V:{21:10,3v:20,3u:30,3t:45,3x:21,3y:3B},1X:j,E:j},2J=w(){O.3={6:{1d:9,2B:9,Y:9,1h:9,2M:9,z:9,k:9,1w:9,2G:\'3A\',3z:"2e 3M",2T:9,2o:9,2Q:9,36:9,33:9,34:9,2s:"1.0.1",1u:"35",2F:9,1Y:9,24:9,1c:9,1D:9,2C:41},r:0,17:0,12:0,1r:-1,K:0,U:j,B:9,2V:9,16:j,1m:j,V:0,1I:j,1B:9,1x:j,1n:j,1s:j}},D=w(4,1g,g){Q e=1Q.2W(g),c=1f(g).1B(),l=j,A=c.A(),1t,1q,R,23,q,1o,F=[],1a,1M,1N,n;7(8.E){4.3.6.2s+="E"}7(A&&4.3.B&&4.3.B>0){4.3.6.z=J.L((A/4.3.B)*C)}H{4.3.6.z=9}1F(1g){f\'I\':7(4.3.r===\'I\'||!4.3.U||4.3.1s||4.3.K>0){b}7(!4.3.1n&&c.2v){D(4,\'1L\',g)}7(4.3.r===\'P\'||4.3.r===\'2Z\'){7(8.P){4.3.6.k=\'2H\';l=a;4.3.r=\'I\'}}H{4.3.6.k=\'2P\';4.3.U=a;l=a;4.3.r=\'I\';4.3.17=0;4.3.12=0;4.3.6.z=\'0\';4.3.6.Y=9;4.3.6.1h=9;4.3.6.2Q=c.2Y()+"x"+c.2X();4.3.K=31}4.3.16=a;b;f\'2D\':f\'2R\':f\'1L\':q=c.32;7(q===v){b}1o=c.2U();7(c.2m()){4.3.6.2M=c.2m()}7(1p c.2u===\'3Y\'){4.3.6.2G=c.2u.4z()}4.3.6.2B=q.Z;4.3.6.1Y=1o[\'3-1B\'];7(!8.E){4.3.6.2F=1f.4y;4.3.6.24=1o[\'3-4A-Z\'];4.3.6.1c=q.Z;4.3.6.1D=q.4B}7(q.1J!==v){4.3.6.1w=J.L(q.1J*C)/C;4.3.B=q.1J}H{4.3.6.1w=9;4.3.B=9}7(!4.3.B){4.3.6.1u=\'4D\';4.3.6.1w=9;4.3.B=9}4.3.V=8.1e;4.3.6.1d=q.2S!==v?q.2S:q.2O.11(\'/\')[q.2O.11(\'/\').S-1].11(\'.\')[0];7(1p 8.1K===\'w\'){4.3.6.1d=8.1K(c)}7(8.G&&4.3.B&&4.3.B>0){R=J.L((4.3.B+8.G)/8.G);4.3.6.2c=(R-1)*8.G+\'-\'+R*8.G}1P{7(q.F!==v&&q.F.S>0){T(n=0;n<q.F.S;n++){1M=q.F[n].11(\'=\')[0];1N=q.F[n].11(\'=\').S>1?q.F[n].11(\'=\')[1]:"0";4.3.6[\'4C\'+1M]=1N}}}1O(2b){}4.3.1x=c.X();7(!4.3.1m){D(4,\'1j\',g)}H{4.3.U=a}4.3.1n=a;4.3.1s=j;7(8.2h){l=a;4.3.6.k=\'4x\'}b;f\'P\':7(4.3.K>0){3N}7(4.3.6.z>4r){D(4,\'1i\',g)}H{7(!4.3.U||!4.3.16||!(4.3.r!==\'4q\'||4.3.r!==\'2A\')){b}7(8.P){l=a}4.3.r=1g;4.3.6.k=\'2n\'}b;f\'2K\':f\'1i\':4.3.r=1g;D(4,\'1y\',g);7(4.3.6.k!==\'27\'){l=a}4.3.6.k=\'27\';4.3.6.z=C;4.3.16=j;4.3.U=j;4.3.1n=j;b;f\'1H\':l=a;4.3.6.k=\'4F \';4.3.6.k+=c.4s.4t;b;f\'1y\':f\'1T\':7(4.3.K>0){4.3.K-=1}23=(J.L(A*C)/C)-4.3.6.Y;7(J.4v(23)>5){D(4,\'19\',g)}4.3.6.Y=J.L(A*C)/C;7(!8.E){4.3.6.1h=J.L((A/21)*C)/C}7(8.2I){7(4.3.6.z>=4.3.12+8.1v){4.3.6.z=J.L(4.3.6.z/8.1v)*8.1v;4.3.12=4.3.6.z;4.3.6.k=\'2f\';l=a;b}7(4.3.r===\'1i\'&&4.3.12!==C){4.3.6.z=C;4.3.12=4.3.6.z;4.3.6.k=\'2f\';l=a}}7(8.2g&&!8.E){1P{7((8.22.2a()===\'2d\'&&4.3.6.1u!==9&&4.3.6.1u.2a()==="4L")||8.22===\'4K\'){1t=8.1e;T(1q 1A 8.1V){7(A<=1q){1t=8.1V[1q];b}}7(A===0){4.3.17=0}4.3.V=1t}H{4.3.V=8.1e}}1O(4H){4.3.V=8.1e}7(A>4.3.17+4.3.V){4.3.6.k=\'4I\';l=a;4.3.17+=4.3.V;b}}7(4.3.1r>0){4.3.1r-=1}7(4.3.1r===0){4.3.6.k=\'4o\';l=a}7(4.3.r===\'1k\'){4.3.6.k=\'1i\';4.3.6.Y=\'0\';7(!8.E){4.3.6.1h=\'0\'}4.3.6.z=9;l=j;4.3.r=\'1k\'}7(8.G&&4.3.B>0){R=J.L((4.3.B+8.G)/8.G);4.3.6.2c=(R-1)*8.G+\'-\'+R*8.G}7(c.1G()!==4.3.1I){D(4,\'13\',g)}7(!4.3.16&&!c.3X()){D(4,\'I\',g)}7(4.3.1x!==c.X()&&c.42()>0){4.3.1x=c.X();7(c.X()){D(4,\'1l\',g)}H{D(4,\'2N\',g)}}7(c.1S()!==v&&!8.E){4.3.6.2o=c.1S()*C}b;f\'19\':7(A===0&&4.3.r===\'I\'){4.3.6.Y=\'0\';7(!8.E){4.3.6.1h=\'0\'}4.3.6.z=9;l=j;4.3.r=\'1k\';4.3.1n=j;4.3.1s=a;4.3.16=j}7(A===0&&4.3.r!==\'I\'){4.3.r=\'46\';b}4.3.17=A;7(4.3.r!==\'1k\'&&8.19&&4.3.K===0&&A!==0){4.3.6.k=\'2L\';l=a;4.3.K=3W}4.3.r=1g;b;f\'1W\':7(8.1j){4.3.1m=j;l=j}b;f\'1j\':7(8.1j&&!4.3.1m){4.3.6.k=\'2t\';l=a}4.3.1m=a;4.3.U=a;b;f\'1l\':7(8.1l&&c.X()&&!8.E){4.3.6.k=\'3P\';l=a}b;f\'2N\':7(8.1l&&!c.X()&&!8.E){4.3.6.k=\'3R\';l=a}b;f\'13\':7(8.13&&!8.E){7(c.1G()){4.3.6.k=\'3U\'}H{4.3.6.k=\'47\'}4.3.1I=c.1G();l=a}b;4i:b}7(l){7(1p 8.1R===\'w\'){8.1R(4)}T(1a 1A 4.3.6){F.y(\'6.\'+1a);F.y(4.3.6[1a]==="9"?\'\':4.3.6[1a])}1U.y({4l:O,u:F,4m:8.2E,3:4.3.6,4:4.3,4h:e});7(8.1X){2q.4g.1X([F],"*")}7(1p 8.26===\'w\'){8.26(O)}H 7(1E!==v){1E.4b(1U.4a())}}4.3.6.2C=40},2p=w(g){Q W={\'2A\':{h:\'4d\'},\'P\':{h:\'P\'},\'I\':{h:\'I\'},\'2K\':{h:\'1k\'},\'13\':{h:\'13\'},\'4w\':{h:\'4e\'},\'1i\':{h:\'4f\'},\'4c\':{h:\'49\'},\'1W\':{h:\'1W\'},\'2D\':{h:\'4n\'},\'2w\':{h:\'2w\'},\'2x\':{h:\'2x\'},\'1T\':{h:\'1T\'},\'4k\':{h:\'4j\'},\'19\':{h:\'48\'},\'3T\':{h:\'3S\'},\'1H\':{h:\'1H\'},\'2R\':{h:\'3O\'},\'1y\':{h:\'1y\'}};1P{1f(g).3Q(w(){Q s=3V 2J(),1C=O,N;s.3.1B=O;T(N 1A W){7(W[N].h!==9){(w(N,W,g,s,1C){1C.44(W[N].h,w(){D(s,N,g)})}(N,W,g,s,1C))}}7(1f(g).2v){D(s,\'1L\',g)}})}1O(2b){}},28=w(M){43(w(){Q 1z=1Q.2l(8.g),n;7(2q.1f!==v&&1Q.2l(8.g+\':2r([3-2i="4p"])\').S>0){T(n=0;n<1z.S;n++){1z[n].3Z("3-2i","4G");2p(1z[n].Z)}}H{7(M==="4J"||M-->0){28(M)}}},4E)},2k=w(t,p){Q i,M=4u;T(i 1A 8){7(p!==v&&p[i]!==v){8[i]=p[i]}}7(O.1b!==v){O.1b=p.1b||t.1b}7(8.2z!==v){M=8.2z}28(M)};1E.3a(\'3h\',2k)}());',62,296,'|||data|states||WT|if|config|null|true|break|obj|||case|playerId|v4||false|clip_ev|clipTrack|state||||mediaData|_state|||argsa|undefined|function||push|clip_perc|currentTime|_duration|100|bc_callback|basic|tags|bins|else|play|Math|_seekSettle|floor|pollTimeOut|action|this|pause|var|bn|length|for|_loaded|_myBeaconRate|eventBinds|isFullscreen|clip_secs|id||split|_lastQuartile|mute|utag_data||_start|_lastBeacon|z_event_type|seek|tag|dcsid|clip_video_id|clip_n|beaconRate|videojs|ev|clip_mins|complete|load|ended|fullscreen|_sentLoad|_isValidMeta|playerdata|typeof|btime|_volSettle|_waitMeta|beaconAtInterval|clip_mode|pctInc|clip_duration|_fullScreen|timeupdate|players|in|player|myPlayer|clip_accountId|Webtrends|switch|muted|error|_isMuted|duration|nameCallback|meta2|tagName|tagValue|catch|try|document|preProcess|volume|progress|cache|beaconCurve|loadstart|postMessage|player_id|z_clip_tag_supplierid||60|beaconType|delta|player_playlist_id||trackCallback|Complete|waitForPlayer|page_site|toLowerCase|ignore|clip_durration_n|auto|Brightcove|Quartile|beacon|loadMeta|wt|DCS|Init|querySelectorAll|currentType|Pause|clip_vol|player_bind|window|not|clip_tv|Load|techName_|isReady_|loadedalldata|resize|page_language|pollTime|begin|clip_id|dl|loadstart3|transformCallback|clip_player_ver|clip_t|Resume|quartile|H5v_states|end|Seek|clip_ct|fullscreenexit|src|Play|clip_res|meta|name|clip_provider|options|_timer|getElementById|width|height|stop||55|mediainfo|clip_q|clip_duration_n|FixedDuration|clip_player_res|video|mediaStop|mediaBegin|registerPlugin|z_lang|mediaPlay|mediaComplete|cg_n|playerLoad|mediaSeek|bc|z_site_id|z_video_id|_api|vjs_video|z_en_title|z_supplier_id|site|z_page_id|ti|Video|cg_s|420|300|120|BC|600|1800|clip_player|Flash|150|z_page_sub_type|VI|digikey|www|dcssip|com|dcsuri|z_page_type|html|brightcove|vjs|return|loadedmetadata|Fullscreen|ready|Fullscreenexit|onBeforeSeek|beforeSeek|Muted|new|50|paused|string|setAttribute|||readyState|setTimeout|on||Ended|UnMuted|onSeek|loadelldata|pop|multiTrack|loadalldata|onBegin|onUnmute|onLastSecond|parent|videoEle|default|waiting|wait|element|transform|loadeddata|Volume|ytBound|start|97|error_|type|200|abs|unmute|Meta|VERSION|toUpperCase|playlist|account_id|z_clip_tag_|Stream|500|Error|Bound|err|Beacon|infinite|curve|stream'.split('|'),0,{}))
