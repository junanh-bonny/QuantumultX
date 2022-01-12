/*
CaiYun Weather (ColorWeather) unlock Vip
https://apps.apple.com/jp/app/%E5%BD%A9%E4%BA%91%E5%A4%A9%E6%B0%94/id847764912

QX 1.0.0:
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js

MitM = biz.caiyunapp.com
*/


// dãy(array) có tên _0xe0e0 chứa các string được mã hoá 
var _0xe0e0=[
"\x62\x6F\x64\x79", // vị trí 0, string sau khi được giải mã: body
"\x70\x61\x72\x73\x65", // 1: parse
"\x72\x65\x73\x75\x6C\x74", // 2: result
"\x69\x73\x5F\x76\x69\x70", // 3: is_vip
"\x73\x74\x72\x69\x6E\x67\x69\x66\x79", // 4: stringify
"\x77\x74", // 5: wt
"\x76\x69\x70", // 6: vip
"\x65\x6e\x61\x62\x6c\x65\x64", // 7: enabled
"\x73\x76\x69\x70\x5f\x65\x78\x70\x69\x72\x65\x64\x5f\x61\x74", // 8: svip_expired_at
"\x76\x69\x70\x5f\x74\x79\x70\x65" // 9: vip_type
];


// sau khi giải mã ta có array hoàn chỉnh như sau
var _0xe0e0=[
"body",
"parse",
"result",
"is_vip",
"stringify",
"wt",
"vip",
"enabled",
"svip_enabled_at",
"vip_type"
];

// ở phần script sẽ gọi các string nằm trong dãy bằng cách gọi [dãy[vị trí]]
var body=$response[_0xe0e0[0]];
// ví dụ ở đây [_0xe0e0[0] là body, khi ghép lại ta được
var body=$response.body
var obj=JSON[_0xe0e0[1]](body);
obj[_0xe0e0[2]][_0xe0e0[3]]= true;
obj[_0xe0e0[2]][_0xe0e0[8]]= 4096483190;
obj[_0xe0e0[2]][_0xe0e0[9]]= "s";
obj[_0xe0e0[2]][_0xe0e0[5]][_0xe0e0[6]][_0xe0e0[7]]= true;
obj[_0xe0e0[2]][_0xe0e0[5]][_0xe0e0[6]][_0xe0e0[8]]= 4096483190;
body= JSON[_0xe0e0[4]](obj);
$done({body})
// và đây lf script hoàn chỉnh sau khi hoàn tất

var body = $response.body;
var obj = JSON.parse(body);
obj.result.is_vip = true;
obj.result.svip_enabled_at = 4096483190;
obj.result.vip_type = "s";
obj.result.wt.vip.enabled = true;
obj.result.wt.vip.svip_enabled_at = 4096483190;
body = JSON.stringify(obj);
$done({body});
