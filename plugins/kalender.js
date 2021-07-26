const uploadImage = require('../lib/uploadImage')
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'upload/reply foto dengan caption #kalender'
  let media = await q.download()
  let url = await uploadImage(media)
  await conn.sendFile(m.chat, global.API('zeks', '/api/calender', { image: url }, 'apikey'), 'kalender.jpg', 'Calendar maker', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['kalender']
handler.tags = ['maker']

handler.command = /^kalender$/i

module.exports = handler