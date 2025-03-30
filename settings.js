/*
  project_name : 𝐒⟁𝐒𝚫𝐊𝚰✞𝚳𝐃
  Version : 2.4.0
  Owner : ❖𝚸𝚪𝚯𝐅𝚵𝐒𝚯𝚪 𝚫𝚪𝐓𝗛𝐔𝐑✞𝐒⟁𝐒𝚫𝐊𝚰 
  Clone if you can😪


*/

//----------------------[ SASAKI_XMD ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your Jinwoo session id here; must start with SASAKI-XMD~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'SASAKI_SPARK' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '221768649590' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '❖𝚸𝚪𝚯𝐅𝚵𝐒𝚯𝚪 𝚫𝚪𝐓𝗛𝐔𝐑✞𝐒⟁𝐒𝚫𝐊𝚰' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "SASAKI" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "❖𝚸𝚪𝚯𝐅𝚵𝐒𝚯𝚪 𝚫𝚪𝐓𝗛𝐔𝐑✞𝐒⟁𝐒𝚫𝐊𝚰" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nigeria" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.youtube.com/@SASAKICOMPAGNIE"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𝐒⟁𝐒𝚫𝐊𝚰✞𝚳𝐃"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © 𝐒⟁𝐒𝚫𝐊𝚰✞𝚳𝐃 ᴜʟᴛʀᴀ', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😹😹🙆‍♂️

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝐒⟁𝐒𝚫𝐊𝚰 ]----------------------//