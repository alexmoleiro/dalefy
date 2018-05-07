# Dalefy.com
Share things with your friends.

**Made with Reactjs, Redux and Google Drive**
Enjoy it here

http://dalefy.s3-website-eu-west-1.amazonaws.com/

# How to upload a json to Google Drive
https://gist.github.com/csusbdt/4525042
```
 var appState = {
           number: 12,
           text: 'hello'
         };
 var base64Data = btoa(JSON.stringify(appState));
 ```
 # Full code
```
  function insertFile() {
         const boundary = '-------314159265358979323846264';
         const delimiter = "\r\n--" + boundary + "\r\n";
         const close_delim = "\r\n--" + boundary + "--";
         var appState = {
           number: 12,
           text: 'hello'
         };
         var fileName = 'csusbdt-drive-example-app-state.txt';
         var contentType = 'application/json';
         var metadata = {
           'title': fileName,
           'mimeType': contentType
         };
         var base64Data = btoa(JSON.stringify(appState));
         var multipartRequestBody =
             delimiter +
             'Content-Type: application/json\r\n\r\n' +
             JSON.stringify(metadata) +
             delimiter +
             'Content-Type: ' + contentType + '\r\n' +
             'Content-Transfer-Encoding: base64\r\n' +
             '\r\n' +
             base64Data +
             close_delim;
         var request = gapi.client.request({
             'path': '/upload/drive/v2/files',
             'method': 'POST',
             'params': {'uploadType': 'multipart'},
             'headers': {
               'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
             },
             'body': multipartRequestBody});
         request.execute(function(arg) {
           console.log(arg);
         });
       }
```
 # How to upload a file using Xhr
```
 const uri = "https://www.googleapis.com/upload/drive/v3/files";
 export const UploadFilePromise = (token, file) => {
     return new Promise((resolve, reject) => {
         const xhr = new XMLHttpRequest();
         let fd = new FormData();
         xhr.open("POST", uri, true);
         xhr.setRequestHeader("authorization", "Bearer " + token);
         xhr.onload = () => {
             resolve(xhr.responseText)
         };
         fd.append('params', '{"name":"hola"}');
         fd.append('myFile', file);
         xhr.send(fd);
         // xhr.onerror = () => { reject(xhr.statusText) }
     })
 };
 ```
 
 # Multiple query
         // 'q': "trashed=false and mimeType contains 'image'",
