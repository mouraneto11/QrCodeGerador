import QRCode from "qrcode";



export default class qrCodeService {

    constructor(){}

    async gerarQrCode(param: any){
        var QrCodeBase64 = null
        try {
            QrCodeBase64 = await QRCode.toDataURL(param)
          } catch (err) {
            console.error(err)
          }
        return QrCodeBase64;
    }
    async gerarQrCodeImg(param: any){
      var QrCodeImg = null
      try {
          QrCodeImg = await QRCode.toFile('file.png',param)
        } catch (err) {
          console.error(err)
        }
      return QrCodeImg;
  }


}