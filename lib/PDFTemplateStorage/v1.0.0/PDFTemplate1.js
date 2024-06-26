//Class Work Only with Kendo
class PDFTemplates {
    templates = [
        {
            name: 'Demo1',
            imgLink: 'https://cdn.jsdelivr.net/gh/aggressorcorp/CDN-For-Use/Demo1.jpg'
        }
    ];
    constructor() {
       
    }
    
    getTemlplate(name = null){
        let buffer = [];
        if(name){
            this.templates.forEach(temp => {
                if(temp.name === name){
                    return {
                        name: temp.name,
                        imgLink: temp.imgLink,
                        html: this.getHTMLString(temp.name)
                    }
                }
            })
        } else {
            this.templates.forEach(temp => {
                buffer.push({
                    name: temp.name,
                    imgLink: temp.imgLink,
                    html: this.getHTMLString(temp.name)
                })
            })
            if(buffer.length > 0){
                return buffer
            } else {
                return { storage: false }
            }
        }
    }

    getHTMLString(type) {
        let tpl = {
            'Demo1': `<div id="body">
            <!--1240x1770 px-->
            <table id="header">
                <tbody>
                    <tr>
                        <td colspan="3" align="left">
                            <img src="{tplLogoLink}" width="200px">
                        </td>
                        <td style="width: 200px;"></td>
                        <td align="right" style="width: 200px;">
                            <h2>{tplName}</h2>
                        </td>
                    </tr>
                    <tr style="height: 25px;">
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td class="property">{tplDate}</td>
                        <td align="right" class="value">{valDate}</td>
                    </tr>
                </tbody>
            </table>
            <div style="max-width: 1240px; min-width: 1000px; width: 100%;text-align: center; margin: 30px 0">
                <h3>{tplCentralTitle}</h3>
            </div>
            <div style="max-width: 1240px; min-width: 1000px; width: 100%;text-align: center; margin: 30px 0">
                <h4>{valRange}</h4>
            </div>
            <div style="max-width: 1240px; min-width: 1000px; width: 100%;text-align: left; margin: 30px 0">
                <h4>{valAccountData}</h4>
            </div>
            
            <table id="result">
                <thead>
                    <tr>
                        {tplFields}
                    </tr>
                </thead>
                <tbody>
                    {dataOutput}
                </tbody>
            </table>
            {valAdditional}
            <style>
                @import url('https://fonts.cdnfonts.com/css/inter');
                @import url('https://fonts.cdnfonts.com/css/nexa-bold');
                #body{
                    padding: 20px;
                    box-sizing: border-box;
                }#body > * {
                    padding: 0;
                    margin: 0;
                    font-family: Inter;
                }#header{
                    max-width: 1240px;
                    min-width: 1000px;
                    width: 100%;
                }.value {
                    color: black;
                    font-weight: 600;
                }.property {
                    color: #77a10c;
                    font-weight: 300;
                }#result {
                    max-width: 1240px; 
                    min-width: 1000px;
                    width: 100%;
                    border-collapse: collapse;
                }#result thead tr *{
                    font-weight: 400;
                    height: 30px;
                    background-color: rgb(224, 224, 224);
                }#result thead tr :first-child {
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                }#result thead tr :last-child {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                }</style></div>`
        }
        return tpl?.[type]
    }
}
