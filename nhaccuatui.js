# Copyright：Langkhach270389

var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1)
{
obj.data.VIPExpire= "06/09/2999 00:00:00";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
