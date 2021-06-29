let fetch = require('node-fetch')
const fs = require('fs')
    let res = await fetch('https://api.waifu.pics/sfw/neko')
    let pic = await res.json()

conn.sendFile(m.chat,pic.url,'test','neko',m,false,{ thumbnail : fs.readFileSync('./src/vio.png')} )
handler.help = ['neko']
handler.tags = ['internet']

handler.command = /^(neko)$/i
module.export = handler