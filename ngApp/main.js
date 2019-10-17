const url = require('url');
const path = require('path');
const fs = require('fs');
const electron = require('electron');
const { app, BrowserWindow, Menu, Tray, ipcMain, shell, clipboard, Notification }=electron;
// const Notification = require('electron-native-notification');

var fileName = __dirname + '/userConfig.json';
var accountFileName = __dirname + '/userAccount.json';
var file = fs.readFileSync(fileName);

var notifTitle="";

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
}
app.on('ready', createWindow);
  file = JSON.parse(file); 
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

ipcMain.on('setCategory', (event, arg) => {
  file.category = arg;
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

ipcMain.on("addToRecent", (event, arg)=>{
  console.log(arg);
  let isDuplicate=0;
  let i=0;
  for(i=0; i<file.recent.length; i++){
    if(arg.publishedAt == file.recent[i].publishedAt){
      isDuplicate=1; break;
    }
  }
  if(isDuplicate==0){
    if(file.recent.length>=15){ file.recent.pop();}
    file.recent.unshift(arg);
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
    });
  }  
  else{
    file.recent.splice(i, 1);
    file.recent.unshift(arg);
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
    });
  }  
})
  ipcMain.on("openBrowser", (event, arg)=>{
    shell.openExternal(arg);
  })
  
  ipcMain.on("copyContentToClipboard", (event, arg)=>{
    clipboard.writeText(arg);
  })

  ipcMain.on("notify", (event, arg)=>{
    let iconAddress = path.join(__dirname, 'src/assets/img/Icon.png');
    const notif={
      title: arg.source,
      body: arg.body,
      icon: iconAddress
    };
    const [yourBrowserWindow] = BrowserWindow.getAllWindows();
    console.log(yourBrowserWindow.isFocused());
    if(yourBrowserWindow.isFocused()==false && notifTitle!=notif.title){
      notifTitle=notif.title;
      new Notification(notif).show();
    }
  })
  ipcMain.on("getUserAccount", (event)=>{
    var accountFile = fs.readFileSync(accountFileName);
    accountFile = JSON.parse(accountFile);
    var obj=[];
    obj=accountFile;
    console.log(obj.date);
    event.returnValue=obj;
  })

  ipcMain.on("saveAccountDetails", (event, arg)=>{
    var accountFile = fs.readFileSync(accountFileName);
    accountFile = JSON.parse(accountFile);
    fs.writeFile(accountFileName, JSON.stringify(arg, null, 2), function (err) {
    });
  })