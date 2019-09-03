const {app, BrowserWindow} = require('electron');
let win;

function createWindow(){
  win = new BrowserWindow({
    width: 500, 
    height: 550,
    show: false
  });
  // win.loadURL('http://github.com');
  win.loadURL(`file://${__dirname}/dist-web/index.html`)
  win.once('ready-to-show', win.show);
  win.on('closed', ()=> win=null);  
}

app.on('ready', createWindow);
app.on('window-all-closed',()=>{
  if(process.platform!=='darwin'){  app.quit();}
})
app.on('activate', function(){
  if(win===null){ createWindow();};
});