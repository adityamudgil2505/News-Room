const url = require('url');
const path = require('path');
const electron = require('electron');
const {app, BrowserWindow, Menu, Tray}=electron;
const iconPath = path.join(__dirname, 'logo.png');
let win;
function createWindow(){
  win = new BrowserWindow({show:false, height:650, width:1100, frame:false, resizable:false, webPreferences: {
    nodeIntegration: true
    }});
  win.loadURL(url.format({
    pathname:path.join(__dirname, '/src/index.html'),
    protocol: 'file',
    slashes: true
  }));
  // win.webContents.openDevTools();
  win.on('closed', ()=> win=null);
  win.once('ready-to-show', ()=>{
    win.show();
  })
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