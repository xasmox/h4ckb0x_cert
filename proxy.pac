function FindProxyForURL(url, host)
{
// variable strings to return
 var proxy_yes = "PROXY 45.10.24.253:3128";
 var proxy_no = "DIRECT";
 var resolved_ip = dnsResolve(host);
 
// If a specific URL needs to bypass the proxy then send traffic direct.
 if (shExpMatch(url, "*.domain.local*")) { return proxy_no; }
 if (shExpMatch(url, "*.dmshm.local*")) { return proxy_no; }
 if (shExpMatch(url, "*rms.domain.com.au*")) { return proxy_no; }
 if (shExpMatch(url, "*.domain.net.au*")) { return proxy_no; }
 if (shExpMatch(url, "*.box")) { return proxy_no; }
 if (shExpMatch(url, "*.local")) { return proxy_no; }
 if (shExpMatch(url, "*.ip")) { return proxy_no; }
 
// If a specific IP to bypass proxy then send traffic direct.
  if (isInNet(resolved_ip, "10.0.0.0",  "255.0.0.0")) { return proxy_no; }
  if (isInNet(resolved_ip, "192.168.178.0",  "255.255.255.0")) { return proxy_no; }
  if (isInNet(resolved_ip, "192.168.2.0",  "255.255.255.0")) { return proxy_no; }
  if (isInNet(resolved_ip, "192.168.1.0",  "255.255.255.0")) { return proxy_no; }
 
// If the source IP is in VIC then send traffic via the proxy
 // if (isInNet(myIpAddress(), "10.3.0.0", "255.255.0.0"))return proxy_yes;
 
// If the source IP is in NSW then send traffic via the proxy
 // if (isInNet(myIpAddress(), "10.2.0.0", "255.255.0.0"))return proxy_yes;
 
// Route all Trafic Over Proxy - Default
 return proxy_yes;
 
// If the proxy fails or the request doesn't meet any of the above criteria then send the traffic direct - Try-Error
 elsereturn "DIRECT";
}
