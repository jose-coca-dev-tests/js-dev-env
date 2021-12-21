export default function getBaseUrl() {
  let productionApiURL = '/'; // this should be replaced by your production API url
  let prm = getQueryStringParameterByName('useMockApi');
  if(prm)
    prm = prm.toLowerCase();
  return prm === "true" ? 'http://localhost:3001/' : productionApiURL;
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
