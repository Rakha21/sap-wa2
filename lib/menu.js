const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:

- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.

🗡️ *OWNER BOT* : 0821-3874-6029
🗡️ *INSTAGRAM* : https://www.instagram.com/_rakha_21_

Jangan Lupa Coly🔪.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
🗡️=====[ *FunkY - BOT* ]=====🗡️

Hallo ${pushname} beb:*
Berikut adalah beberapa fitur yang ada pada bot ini!🔪

>════[ Creator 🛠️ ]════<
🍁 *${prefix}sticker*
🍁 *${prefix}stickergif*
🍁 *${prefix}stickergiphy*
🍁 *${prefix}sticker nobg*
🍁 *${prefix}meme*
🍁 *${prefix}quotemaker*
🍁 *${prefix}nulis*

>════[ Islam 🧕👳‍♂️ ]════<
🍁 *${prefix}infosurah*
🍁 *${prefix}surah*
🍁 *${prefix}tafsir*
🍁 *${prefix}alaudio*
🍁 *${prefix}jsolat*
🍁 *${prefix}listsurah*

>════[ 18+ 🔞 ]════<
🍁 *${prefix}nekopoi*

>════[ Download 🎬 ]════<
🍁 *${prefix}instagram*
🍁 *${prefix}ytmp3*
🍁 *${prefix}ytmp4*

>════[ GABUT ♻️ ]════<
🍁 *${prefix}artinama*
🍁 *${prefix}cekjodoh*

>════[ Search Any 🔍 ]════<
🍁 *${prefix}images*
🍁 *${prefix}sreddit*
🍁 *${prefix}resep*
🍁 *${prefix}stalkig*
🍁 *${prefix}wiki*
🍁 *${prefix}cuaca*
🍁 *${prefix}chord*
🍁 *${prefix}lirik*
🍁 *${prefix}ss*
🍁 *${prefix}play*
🍁 *${prefix}whatanime*

>════[ Random Teks 💬 ]════<
🍁 *${prefix}fakta*
🍁 *${prefix}pantun*
🍁 *${prefix}katabijak*
🍁 *${prefix}quote*

>════[ Random Images 📸 ]════<
🍁 *${prefix}anime*
🍁 *${prefix}kpop*
🍁 *${prefix}memes*

>════[ Fun Menu (Group) 🔱 ]════<
🍁 *${prefix}simisimi*
🍁 *${prefix}katakasar*
🍁 *${prefix}klasmen*

>════[ Lain-lain 💠 ]════<
🍁 *${prefix}tts*
🍁 *${prefix}translate*
🍁 *${prefix}resi*
🍁 *${prefix}shortlink*
🍁 *${prefix}ping*
🍁 *${prefix}bapakfont*
🍁 *${prefix}covidindo*
🍁 *${prefix}ceklokasi*

>════[ Tentang Bot 🤖 ]════<
🍁 *${prefix}tnc*
🍁 *${prefix}donasi*
🍁 *${prefix}join*
🍁 *${prefix}ownerbot*
🍁 *${prefix}botstatus*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

>════[ Owner Bot 🤖 ]════<
🍁 *${prefix}ban* - banned
🍁 *${prefix}bc* - promosi
🍁 *${prefix}leaveall* - keluar semua grup
🍁 *${prefix}clearall* - hapus semua chat

🗡️ *BOT AKTIF* : KALO DI AKTIFKAN
🗡️ *GUNAKAN BOT DENGAN BIJAK!*

TETAPLAH BERNAFAS!`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ >════[ *Admin Group Only* ]════< ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

🍁 *${prefix}add*
🍁 *${prefix}kick* @tag
🍁 *${prefix}promote* @tag
🍁 *${prefix}demote* @tag
🍁 *${prefix}tagall*
🍁 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ >════[ *Owner Group Only* ]════< ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
🍁 *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

🔥 *GOPAY,DANA,PULSA*         : 0821-3874-6029
🔥 *FOLLOW IG*                 : _rakha_21_

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
