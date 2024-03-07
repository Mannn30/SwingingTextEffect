// 在页面加载完成后运行init函数
window.onload = init;

function init() {
    // 获取canvas元素和上下文
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // 设置canvas宽度和高度
    var canvasWidth = canvas.width = 400;
    var canvasHeight = canvas.height = 200;

    // 设置文字样式
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";

    // 文字内容
    var text = "Swinging Text";

    // 初始角度
    var angle = 0;

    // 摆动幅度
    var swingAmplitude = 20;

    // 摆动频率
    var swingFrequency = 0.05;

    // 文字绘制函数
    function drawText() {
        // 清空画布
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // 计算当前摆动角度
        var deltaAngle = Math.sin(angle) * swingAmplitude;

        // 绘制文字
        ctx.fillText(text, canvasWidth / 2 - ctx.measureText(text).width / 2 + deltaAngle, canvasHeight / 2);

        // 更新角度
        angle += swingFrequency;

        // 每隔一段时间重绘一次，实现动画效果
        requestAnimationFrame(drawText);
    }

    // 开始绘制文字
    drawText();
}
