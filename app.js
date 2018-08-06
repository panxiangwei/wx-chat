//app.js
import IMWebSocket from "./modules/im-sdk/im-web-socket";

App({
    globalData: {
        userInfo: {},
        friendsId: [],
        currentSocketAction: 1,//Socket获取信息状态 1:获取聊天列表信息，2获取会话内容
    },
    getIMWebSocket() {
        return this.imWebSocket;
    },
    onLaunch() {
        this.imWebSocket = new IMWebSocket();
        this.imWebSocket.createSocket();

    },
    onHide() {
        // this.imWebSocket.closeSocket();
    },
    onShow() {
    }
});