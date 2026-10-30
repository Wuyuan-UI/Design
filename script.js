// ⚠️ 此文件已废弃，请勿在任何页面引用。goBtn 元素不存在，引用会报错。
// 点击按钮跳转到新页面
const goBtn = document.getElementById('goBtn');
const ntBog = document.getElementById('ntBog');

// 修复：元素不存在时不报错，存在才绑定
if (goBtn) {
    goBtn.addEventListener('click', function () {
        // 跳转到全新页面
        window.location.href = 'page2.html';
    });
}
if (ntBog) {
    ntBog.addEventListener('click', function () {
        // 跳转到全新页面
        window.location.href = 'page3.html';
    });
}