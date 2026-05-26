const TICKET = "6AF89DA4E2103AE383549D6BB890ABE5";

let url = $request.url;

// 替换 ticket
if (/[?&]ticket=/.test(url)) {
  url = url.replace(/([?&]ticket=)[^&]*/i, `$1${TICKET}`);
} else {
  url += (url.indexOf("?") >= 0 ? "&" : "?") + `ticket=${TICKET}`;
}

$done({ url });