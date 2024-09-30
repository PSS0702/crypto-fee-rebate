import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';  // 백엔드 서버 URL

class SocketService {
  socket;

  connect() {
    this.socket = io(SOCKET_URL);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
}

export default new SocketService();
