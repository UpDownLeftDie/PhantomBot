!function(){function n(n,t,e){var r;for(r in n)if(e>-1){if(n[r][e]==t)return!0}else if(n[r]==t)return!0;return!1}function t(n){return $.inidb.exists("visited",n)}function e(n){var t;return $.inidb.exists("followed",n)?!0:(t=$.twitch.GetUserFollowsChannel($.username.resolve(n.toLowerCase()),$.channelName),200==t.getInt("_http")?!0:!1)}function r(){return F}function i(n){return null==n||void 0==n?0:typeof n.length instanceof java.lang.String?(typeof n.length).equalsIgnoreCase("number")?n.length:n.length:"number"==typeof n.length?n.length:n.length}function a(n){if($.consoleLn("[CHAT] "+n),$.channel){if(n.substr(0,1).equals("."))return void $.channel.say(n);$.getIniDbBoolean("settings","response_@chat")&&($.getIniDbBoolean("settings","response_action")&&!n.substr(0,2).equals("/w")?$.channel.say("/me "+n):$.channel.say(n))}}function o(){return parseInt(java.lang.System.currentTimeMillis())}function u(n){return 0==n?n:($.random=new java.security.SecureRandom,Math.abs($.random.nextInt())%n)}function s(n,t){return n==t?n:$.rand(t)+n}function g(n){return null==n?null:n[$.randRange(0,n.length-1)]}function l(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),r=n[t];n[t]=n[e],n[e]=r}return n}function c(n,t){return Math.floor(Math.random()*(t-n+1)+n)}function d(n,t){if(n==t)return n;try{var e,r=Packages.com.gmt2001.HttpRequest,i=Packages.java.util.HashMap,a=Packages.org.json.JSONObject,o=new a("{}"),u=new a("{}"),s=new i(1),g=$.rand(65535);if(s.put("Content-Type","application/json-rpc"),u.put("apiKey","0d710311-5840-45dd-be83-82904de87c5d").put("n",1).put("min",n).put("max",t).put("replacement",!0).put("base",10),o.put("jsonrpc","2.0").put("method","generateIntegers").put("params",u).put("id",g),e=r.getData(r.RequestType.GET,"https://api.random.org/json-rpc/1/invoke",o.toString(),s),e.success){var l=new a(e.content).getJSONObject("result").getJSONObject("random").getJSONArray("data");if(l.length()>0)return l.getInt(0)}else 0==e.httpCode?$.logError("misc.js",478,"Failed to use random.org: "+e.exception):$.logError("misc.js",480,"Failed to use random.org: HTTP"+e.httpCode+" "+e.content)}catch(c){$.logError("misc.js",484,"Failed to use random.org: "+c)}return $.randRange(n,t)}function f(n){return null==n?null:n[$.trueRand(n.length-1)]}function b(n){return $.trueRandRange(0,n)}function p(n,t,e){return t>n&&n>e}function h(n){var t=["th","st","nd","rd"],e=n%100;return n+(t[(e-20)%10]||t[e]||t[0])}function m(n,t){return Math.ceil(n/t*100)}function I(n,t,e){return $.inidb.exists(n,t)?"true"==$.inidb.get(n,t):e}function S(n,t,e){return $.inidb.exists(n,t)?"true"==$.inidb.get(n,t):($.inidb.set(n,t,e.toString()),e)}function v(n,t,e){$.inidb.set(n,t,e.toString())}function y(n,t,e){return $.inidb.exists(n,t)?$.inidb.get(n,t):e}function j(n,t,e){return $.inidb.exists(n,t)?$.inidb.get(n,t):($.inidb.set(n,t,e),e)}function R(n,t,e){return $.inidb.exists(n,t)?parseInt($.inidb.get(n,t)):e}function x(n,t,e){return $.inidb.exists(n,t)?parseInt($.inidb.get(n,t)):($.inidb.set(n,t,e.toString()),e)}function w(n,t,e){return $.inidb.exists(n,t)?parseFloat($.inidb.get(n,t)):e}function D(n,t,e){return $.inidb.exists(n,t)?parseFloat($.inidb.get(n,t)):($.inidb.set(n,t,e.toString()),e)}var F="";$.list={contains:n},$.user={isKnown:t,isFollower:e},$.arrayShuffle=l,$.getCurrentHostTarget=r,$.getIniDbBoolean=I,$.getIniDbString=y,$.getIniDbNumber=R,$.getIniDbFloat=w,$.getSetIniDbBoolean=S,$.getSetIniDbString=j,$.getSetIniDbNumber=x,$.getSetIniDbFloat=D,$.getOrdinal=h,$.getPercentage=m,$.outOfRange=p,$.rand=u,$.randElement=g,$.randInterval=c,$.randRange=s,$.say=a,$.setIniDbBoolean=v,$.strlen=i,$.systemTime=o,$.trueRand=b,$.trueRandElement=f,$.trueRandRange=d}();
