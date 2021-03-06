const url = require('url');
const path = require('path');
const fs = require('fs');
const electron = require('electron');
const { app, BrowserWindow, Menu, Tray, ipcMain, shell, clipboard, Notification }=electron;

const env = process.env.NODE_ENV || 'development';
var fileName = __dirname + '/userConfig.json';
var accountFileName = __dirname + '/userAccount.json';
var file = fs.readFileSync(fileName);
var accountFile = fs.readFileSync(accountFileName);

var notifTitle="";

// const iconPath = path.join(__dirname, 'logo.png');
let win;
function createWindow(){
  win = new BrowserWindow({show:false, height:650, width:1100, titleBarStyle: 'hiddenInset', resizable:false, webPreferences: {
    nodeIntegration: true,
    webSecurity: false
    }});
  win.setFullScreenable(true);

// ------------- IN Production/Publishing/Deployment stage ----------------
  // win.loadURL(url.format({
  //   pathname:path.join(__dirname, '/dist/ngApp/index.html'),
  //   protocol: 'file',
  //   slashes: true
  // }));  

// -------------------------- IN Development stage ------------------------
  win.loadURL('http://localhost:4200')



  win.webContents.openDevTools();
  win.on('closed', ()=> win=null);
  win.once('ready-to-show', ()=>{
    win.show();
  })  
}
app.on('ready', createWindow);
  file = JSON.parse(file);
  accountFile = JSON.parse(accountFile);
// app.on('ready', ()=>{
//   new Tray(iconPath);
// });

// For Mac
app.on('window-all-closed', ()=>{
  if(process.platform!=='darwin'){
    app.quit();
  }
});

// app.setLoginItemSettings({
//   openAtLogin: true,
//   openAsHidden: true
// })

app.on('activate', ()=>{
  if(win===null){
    createWindow();
  }
})

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
    if(yourBrowserWindow.isFocused()==false && accountFile.prevNotif[0]!=notif.body){
      let obj = accountFile;
      obj.prevNotif.unshift(notif.body);
      if(obj.prevNotif.length>10){
        obj.prevNotif.pop();
      }
      new Notification(notif).show();
      fs.writeFile(accountFileName, JSON.stringify(obj, null, 2), function (err) {
      });
    }
  })
  ipcMain.on("getUserAccount", (event)=>{
    var obj=[];
    obj=accountFile;
    event.returnValue=obj;
  })

  ipcMain.on("saveAccountDetails", (event, arg)=>{
    accountFile=arg;
    fs.writeFile(accountFileName, JSON.stringify(arg, null, 2), function (err) {
    });
  })