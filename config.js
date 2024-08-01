const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255612094405";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_38_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBcmJUU3RwazNVQytYQVI4bmozRzBNMktkTlRxT0EwZW5ISFNCK2d1UXdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQTm01VHkzZlNucVBMTTJjVW5lMlFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5NjY3Mjc2LTZhNTAtNDYyMS1iNDQ2LTgyN2Q0MWRkYmUxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDk1LFxuICAgICAgOTMsXG4gICAgICAxMDgsXG4gICAgICA4OSxcbiAgICAgIDE4NixcbiAgICAgIDk1LFxuICAgICAgMjA3LFxuICAgICAgMTM4LFxuICAgICAgMTU1LFxuICAgICAgNCxcbiAgICAgIDIzNixcbiAgICAgIDI4LFxuICAgICAgMjI4LFxuICAgICAgMjM0LFxuICAgICAgMjE2LFxuICAgICAgMTcyLFxuICAgICAgMjQyLFxuICAgICAgMyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxMDMsXG4gICAgICAxOSxcbiAgICAgIDQyLFxuICAgICAgODksXG4gICAgICAxNCxcbiAgICAgIDI0NSxcbiAgICAgIDIwMCxcbiAgICAgIDEyNCxcbiAgICAgIDgsXG4gICAgICA2MyxcbiAgICAgIDEwNyxcbiAgICAgIDc0LFxuICAgICAgMTEwLFxuICAgICAgMTEwLFxuICAgICAgMTY3LFxuICAgICAgMjQ3LFxuICAgICAgMTAyLFxuICAgICAgMSxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRE1XN0VUNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjEyMDk0NDA1OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyNjU1NzA5MDIyNTQ6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0w4cmNNREVLTCtuclFHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPUUlkSzVUMUJvNHRtRDRBTTVYcnJpMEg4RUg3eTNiR1ZGOGEveUhOQVNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpKSDMxOW93c2drYzVLREVjNVcxLy9vNks4QVFSQzJNNHhlTXc2VnUvdWJybisvd0w2UXBhdnp5bERIYi9EOWxyZmZTSE9QREVEWktZZUJYUk16bUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhZaEptNy9QRkdZNzRWSjRwWnhlSytwTUtQRTJXRVllbXlnRTZNMHVDMVB2dCtLNzlnVWhKWjF3RzE5WktqdnNuQmRLREhOMXA5ZmRXQnZsbFNYeWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxMjA5NDQwNTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNzIzMjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
