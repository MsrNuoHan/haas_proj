// 示例：动态添加历史信息
const historyList = document.getElementById('history-list');
const addHistoryItem = (message) => {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    historyList.appendChild(listItem);
};

addHistoryItem('启动监控系统');
addHistoryItem('关闭灯具1');
addHistoryItem('报警器触发');

$.get("http://127.0.0.1:8080/api/v1/node/val", "devId=haasTCP", function (val) {
    console.log("没有转换", val);
    var data = JSON.parse(val);
    console.log("转换后", data);

})
var isLightOn = false; // 初始状态为灯灭
var btn1 = document.getElementsByTagName("button")[12];

btn1.onclick = function () {
    isLightOn = !isLightOn; // 切换灯的状态

    var devId = "haasTCP"; // 替换为实际的设备ID
    var nodeId = "led1"; // 替换为实际的节点ID
    var value = isLightOn ? "1" : "0"; // 根据状态设置值
    $.ajax({
        url: "http://127.0.0.1:8080/api/v1/node/val",
        type: "put",
        dataType: "json",
        data: JSON.stringify({
            "DevId": devId,
            "NodeId": nodeId,
            "Val": value

        }),
        success: function (res) {
            console.log(res.Message);
        }
    });
}

var isBuzzerOn = false; // 初始状态为蜂鸣器关闭
var btn2 = document.getElementsByTagName("button")[10]; // 假设这是控制蜂鸣器的按钮

btn2.onclick = function () {
    isBuzzerOn = !isBuzzerOn; // 切换蜂鸣器的状态

    var devId = "hassTCP"; // 替换为实际的设备ID
    var nodeId = "beep"; // 替换为实际的节点ID
    var value = isBuzzerOn ? "1" : "0"; // 根据状态设置值
    $.ajax({
        url: "http://127.0.0.1:8080/api/v1/node/val",
        type: "put",
        dataType: "json",
        data: JSON.stringify({
            "DevId": devId,
            "NodeId": nodeId,
            "Val": value
        }),
        success: function (res) {
            console.log(res.Message);
        }
    });
}



