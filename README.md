# **fake-ip**
![Alt](../fake-ip/src/assets/logo_x4.png "Title")

*See [fakeip.xyz][2] for demo*
<br><br>

## **Intro**
This project represents an Angular application which has simple methods for fake IP detection. If you are more interested in the fingerprinting part of the application, then check the /app/fingerprinting directory which has corresponding components and services.

The main idea behind this solution is to detect anomalies in IP address related data. We first detect user IP by using the most simple method - HTTP headers, get coordinates, and timezone values based on this IP and then try to detect mismatches by using advanced methods. IP address anomalies are the following:
- WebRTC public IP mismatch
- System & Local Timezones mismatch
- Geolocation API coordinates mismatch

If a user has any of these anomalies the Application will show a corresponding warning.

## **HOWTO**
1. Install [Node.js and npm][1]
2. Run `npm install` in the project root directory
3. Run `ng serve` to start the Angular application


## **Used resources & materials**
1. [GeoJS][3] to get IP data from HTTP headers
2. [Geolocation API Specification][4]
3. [WebRTC API][5]




[1]: https://nodejs.org/en/download/
[2]: https://fakeip.xyz/
[3]: https://www.geojs.io/
[4]: https://w3c.github.io/geolocation-api/
[5]: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API