global.rootPath = __dirname;
global.isDev = process.env.NODE_ENV === 'development';

const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({transparent: true, width: 800, height: 800});
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    if (isDev) mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
