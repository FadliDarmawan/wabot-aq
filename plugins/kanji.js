let fetch = require("node-fetch")
let handler = async(m, { conn, text }) => {
	if (!text) return m.reply ("Masukkan Kanji!")
 try {
 	let res = await fetch("https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(text))
     let json = await res.json()
     let { 
kanji, 
grade, 
stroke_count, 
meanings, 
kun_readings, 
on_readings, 
name_readings, 
jlpt, 
unicode, 
heisig_en 
} = json

let pess = `
Kanji: ${kanji}
Arti: ${meanings}
Kun Reading: ${kun_readings}
On Reading: ${on_readings}
Name Reading: ${name_readings}
Grade: ${grade}
Stroke: ${stroke_count}
JLPT: ${jlpt}
Unicode: ${unicode}
Heisig En: ${heisig_en}
`.trim ()
    conn.reply(m.chat, pess, m)
    }catch (e){
    	m.reply("Error")
    console.log (e)
    }
 }


handler.command = /^(kanji)$/i
handler.tags = ['internet']
handler.help = ['kanji <kanji>']

module.exports = handler