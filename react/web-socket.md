WebSockets provide a full-duplex communication channel over a single, long-lived TCP connection. This makes them ideal for real-time applications such as chat apps, multiplayer games, collaborative platforms, and financial trading dashboards. Below is a comprehensive look at WebSockets, focusing on reconnection handling, authentication, and useful headers.

---

## 🌐 1. What are WebSockets?

WebSockets are a protocol standardized by the IETF as RFC 6455, enabling two-way communication between a client and a server over a single, persistent connection.

* **Initiation**: Starts with an HTTP request using the `Upgrade` header to request a protocol switch.
* **Persistence**: Once upgraded, the connection remains open, allowing for real-time data transfer without re-requesting data.
* **Low Overhead**: After the initial handshake, WebSockets reduce the overhead of HTTP by eliminating headers in each message.

### Example Handshake:

```
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

---

## 🔐 2. Authentication in WebSockets

Authentication needs to be done **before** the WebSocket connection is established because the protocol itself doesn’t natively support built-in authentication.

### Common Methods:

#### a. **Token-based Authentication (e.g., JWT)**

* **Step 1**: Client authenticates over HTTP and receives a JWT.
* **Step 2**: Include the JWT as a query parameter or a custom header during the WebSocket handshake.

**Example (Query parameter):**

```javascript
const ws = new WebSocket("wss://example.com/socket?token=YOUR_JWT");
```

**Example (Sec-WebSocket-Protocol header):**

```javascript
const ws = new WebSocket("wss://example.com/socket", ["jwt", "YOUR_JWT"]);
```

> Server-side must validate the JWT before accepting the connection.

#### b. **Cookie-based Sessions**

* Works if the session is already authenticated and cookies are sent with the WebSocket upgrade request.

🛑 **Security Note**: Always use `wss://` to avoid exposing credentials over insecure connections.

---

## 🔁 3. Handling Reconnection

WebSocket connections can drop due to network instability or server crashes. Implementing reconnection logic is essential for robust applications.

### Client-side Reconnection Strategy:

#### Basic Reconnection Logic:

```javascript
function connectWebSocket() {
    const socket = new WebSocket("wss://example.com/socket");

    socket.onopen = () => {
        console.log("Connected");
    };

    socket.onmessage = (event) => {
        console.log("Message:", event.data);
    };

    socket.onclose = (event) => {
        console.log(`Disconnected: ${event.reason}. Reconnecting in 5s...`);
        setTimeout(connectWebSocket, 5000);
    };

    socket.onerror = (error) => {
        console.error("WebSocket Error", error);
        socket.close();
    };
}

connectWebSocket();
```

#### Exponential Backoff:

To avoid overwhelming the server:

```javascript
let retries = 0;
function connectWithBackoff() {
    const socket = new WebSocket("wss://example.com/socket");
    socket.onclose = () => {
        retries++;
        const delay = Math.min(30000, 1000 * Math.pow(2, retries));
        setTimeout(connectWithBackoff, delay);
    };
    socket.onopen = () => {
        retries = 0; // Reset on success
    };
}
```

---

## 📦 4. Useful Headers in WebSocket Handshake

Since WebSocket connections are initiated via HTTP, you can use headers during the initial handshake to convey metadata:

### Common Headers:

| Header                                            | Purpose                            |
| ------------------------------------------------- | ---------------------------------- |
| `Sec-WebSocket-Protocol`                          | Subprotocols or token-based auth   |
| `Cookie`                                          | Session-based auth                 |
| `Origin`                                          | Used for CORS-like origin checking |
| `User-Agent`                                      | Identify client platform/version   |
| `X-Client-ID`                                     | Custom client identifiers          |
| `Authorization` (may be blocked by some browsers) | Not standard, use with caution     |

---

## 🔄 5. Maintaining Connection

To keep a WebSocket connection alive and detect dead connections:

### Ping/Pong:

* The server can send periodic **ping** frames.
* The client automatically replies with **pong** frames.
* If no pong is received within a timeout, the server may close the connection.

> Some libraries (e.g., `ws` in Node.js) allow you to manually handle ping/pong.

### Client-side Keepalive:

```javascript
setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'ping' }));
    }
}, 30000);
```

---

## 🛡 6. Security Considerations

* **Always use `wss://`** to encrypt traffic.
* **Sanitize inputs** to avoid injection attacks.
* **Rate limit and throttle** connections to prevent DoS.
* **Validate tokens** or session on every connection.
* **Use CORS-like checks** on `Origin` header.

---

## 🧰 7. Useful Tools & Libraries

### JavaScript:

* Native WebSocket API (`WebSocket`)
* `socket.io` (adds fallbacks, rooms, etc.)
* `reconnecting-websocket` (adds automatic reconnection)

### Node.js:

* `ws` (lightweight)
* `socket.io` (feature-rich)

### Python:

* `websockets`
* `FastAPI` with `WebSocket` support

---

## ✅ Summary

| Feature       | Implementation                      |
| ------------- | ----------------------------------- |
| **Auth**      | JWT (query/header), Cookie          |
| **Reconnect** | Retry logic, exponential backoff    |
| **Headers**   | Custom metadata, token delivery     |
| **Security**  | wss, origin check, input validation |
| **Keepalive** | Ping/pong or manual heartbeat       |

