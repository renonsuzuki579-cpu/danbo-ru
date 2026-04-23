// 箱のデータ（これをどんどん追加していけます）
const boxes = [
    { name: "ネコポス用ダンボール", l: 31, w: 22.6, h: 3, price: "コンビニ等" },
    { name: "ゆうパケット用ダンボール", l: 34, w: 23, h: 3, price: "コンビニ等" },
    { name: "クロネコボックス6号", l: 27, w: 20, h: 13, price: "140円" },
    { name: "ゆうパック箱(小)", l: 26, w: 18.5, h: 15.5, price: "100円" },
    // 画像のデータをここに追加していく
];

function judge() {
    const itemL = parseFloat(document.getElementById('length').value);
    const itemW = parseFloat(document.getElementById('width').value);
    const itemH = parseFloat(document.getElementById('height').value);

    // 商品が入る箱を探す
    let recommendedBox = boxes.find(box => 
        (itemL <= box.l && itemW <= box.w && itemH <= box.h)
    );

    let resultHTML = "";
    if (recommendedBox) {
        resultHTML = `
            <div class="result-item">
                <strong>おすすめの箱：</strong><br>
                ${recommendedBox.name}<br>
                価格：${recommendedBox.price}
            </div>
        `;
    } else {
        resultHTML = "該当する既製品の箱がありません。";
    }
    // ...（ここに送料計算も合わせる）
}