const url = require('url');
const path = require('path');
const fs = require('fs');
const electron = require('electron');
const {app, BrowserWindow, Menu, Tray, ipcMain}=electron;

var fileName = './userConfig.json';
var file = fs.readFileSync(fileName);

// const iconPath = path.join(__dirname, 'logo.png');
let win;
function createWindow(){
  win = new BrowserWindow({show:false, height:650, width:1100, titleBarStyle: 'hiddenInset', resizable:false, webPreferences: {
    nodeIntegration: true
    }});
  win.loadURL(url.format({
    pathname:path.join(__dirname, '/dist/ngApp/index.html'),
    protocol: 'file',
    slashes: true
  }));
  win.webContents.openDevTools();
  win.on('closed', ()=> win=null);
  win.once('ready-to-show', ()=>{
    win.show();
  })
  file = JSON.parse(file);
}
app.on('ready', createWindow);
// app.on('ready', ()=>{
//   new Tray(iconPath);
// });

// For Mac
app.on('window-all-closed', ()=>{
  if(process.platform!=='darwin'){
    app.quit();
  }
});

app.on('activate', ()=>{
  if(win===null){
    createWindow();
  }
})
// ipcMain.on('getFiles', (event, arg) => {
//   const files = fs.readdirSync(`${__dirname}/${userConfig.json}`);
//   win.webContents.send('getFilesResponse', files)
// })

// This function will open the file and save the api key
ipcMain.on('setAPIKey', (event, arg) => {  
  file.apiKey = arg;
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  });
})

ipcMain.on('setLang', (event, arg) => {
  file.lang = arg;
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  });
})

ipcMain.on('setCountry', (event, arg) => {
  file.country = arg;
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  });
})

ipcMain.on('fetchDetails', (event, arg) => {
  var obj=[];
  obj = file;
  event.returnValue = obj;
})

ipcMain.on("addToBookmark", (event, arg)=>{
  console.log(arg);
  console.log(typeof(file.bookmark));
  file.bookmark.unshift(arg);
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  });
})

ipcMain.on("removeFromBookmark", (event, arg)=>{
  file.bookmark = file.bookmark.filter(function(item){
    return item.publishedAt !== arg;
  });
  fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  });
})