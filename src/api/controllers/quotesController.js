const themes=require('../../themes/themes');

const getQuote = (req, res, next) => {

    try {
        const theme=themes[req.query.theme ? req.query.theme : "default"];
        const svg = `<svg width="100%" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                            <g class="layer">
                            <title>Layer 1</title>
                            <rect fill="#${theme.bg_color}" height="103" id="svg_1" opacity="0.85" stroke="#${theme.bg_color}" stroke-width="1" width="502.00002" x="73.00001" y="30"/>
                            <text x="165" y="90" font-family="Verdana" font-size="35" fill="#${theme.title_color}">"This is a sample quote"</text>
                            </g>
                        </svg>`;
          res.setHeader("Content-Type", "image/svg+xml");
          res.send(svg);
    } catch (error) {
        res.send({
            "quote":"error"
        });
    }

}

module.exports = {
    getQuote
}