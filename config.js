const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039435413";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_39_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNvc29GWWxzK2k5TFgxZ2tnaVpleFM4SE00ZFVNeGlKWXZ4MHhKNzgxdE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJHSVJqSVkxVFlhMFdiZW5mdFcxTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzdjZTI0YWEtNDgzZS00MTM2LWIwNDUtMGQzYzdiNjkwZDczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTM1LFxuICAgICAgMjQzLFxuICAgICAgMTkyLFxuICAgICAgOTEsXG4gICAgICAyMDAsXG4gICAgICAxNDQsXG4gICAgICAxMjcsXG4gICAgICA0MCxcbiAgICAgIDIwMCxcbiAgICAgIDE4NyxcbiAgICAgIDEzOCxcbiAgICAgIDY3LFxuICAgICAgMTk2LFxuICAgICAgMTQ3LFxuICAgICAgMjI4LFxuICAgICAgNzUsXG4gICAgICA3OCxcbiAgICAgIDE5MixcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDEzNixcbiAgICAgIDg3LFxuICAgICAgMTc2LFxuICAgICAgMTE5LFxuICAgICAgMTksXG4gICAgICA2MixcbiAgICAgIDEwMCxcbiAgICAgIDIxMCxcbiAgICAgIDk4LFxuICAgICAgMTM1LFxuICAgICAgMTI5LFxuICAgICAgMjA5LFxuICAgICAgMjMxLFxuICAgICAgMjE4LFxuICAgICAgNCxcbiAgICAgIDExMixcbiAgICAgIDE1MyxcbiAgICAgIDE3NyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTDNHWDZIWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzOTQzNTQxMzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRhdmlkIENoaW5hemFcIixcbiAgICBcImxpZFwiOiBcIjE5ODc5MjYyODQwNDM5NDoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRG8yRmtRbStPYXVBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllvY1BRUkgwdGtodXFidUpER3FjOHJ3YWFZNEk1SUMwMkh5Y1BMQ0w0eTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1FkcnpESDF5RVp5SDdnUE1lbTAwU3lyU0hZbVdhOElPdjlQbk84UWhtdHZ0ck9mSVV6QTNKcm5ieStNQmJ0RTJwK2hNNUhNdlVucytNRklTQUo0QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWNuMVdrUUFxWGRaU0tjSkFKVjUyZkw1bjI4N015S1JUTU5VNUR6SkdnUkpVUkhWRGdweG1tYjVXN3AwMnEweDhhQ21kNHhjSjkya2VJUy8xcWRmQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzOTQzNTQxMzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0OTE5MzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
