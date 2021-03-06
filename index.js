const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const Crawler = require('crawler');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 830,
        'minWidth': 830,
        'minHeight': 400
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
}

// Create window on ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});
