"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "💫", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🌍𝐂𝐫𝐢𝐬𝐬 𝐌𝐝 𝑩𝒐𝒕 𝒊𝒔 𝒐𝒏𝒍𝒊𝒏𝒆 𝐀𝐥𝐥 𝐓𝐡𝐞 𝐓𝐢𝐦𝐞🌍* 🙏 \n\n ' + "𝑻𝒉𝒆 𝒃𝒐𝒕 𝒊𝒔 𝒄𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒘𝒐𝒓𝒌𝒊𝒏𝒈 𝒐𝒏 𝒂 𝒈𝒐𝒐𝒅 𝒔𝒑𝒆𝒆𝒅😉👍";
    let d = '                                                                           𝑯𝒆𝒂𝒍𝒕𝒉 𝒔𝒕𝒂𝒕𝒖𝒔✨';
    let varmess = z + d;
    var mp4 = 'https://files.catbox.moe/d8xfze.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

