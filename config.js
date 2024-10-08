const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Put Your Session Id Here
SESSION_ID: process.env.SESSION_ID || "WNdFmAJL#QOmROfHgIqieYhvwq8aQBOQBM99wW5rqaKvSOc6920c",
OWNER_NUMBER: '923165123719@s.whatsapp.net',
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/IfaDdJf.jpeg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi UD MD Is Online Now 💻\n*💻 Owner* - Um4r Rehman\n\n*💻 Owner Number* -923165123719\n\n_Type .menu to get the command menu._",
//Add Your Own Sudo Number
SUDO_NB: process.env.SUDO_NB || "923165123719",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
//Edit Bot Mode Private Or Public
MODE: process.env.MODE || "public",
//Edit Auto Voice Send true Or false
AUTO_VOICE: "true",
ELEVENLABS_API_KEY: 'sk_4669df1ac80b92a39528954725c4ff916fbfc7e3a4d75b22',
// OMDB API Key
OMDB_API_KEY: 'd15d38e2'
};
