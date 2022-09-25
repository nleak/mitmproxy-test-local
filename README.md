## Error

```
MITMProxy not running; starting up mitmproxy.
Loading script /Users/.../mitmproxy-test-local/node_modules/mitmproxy/scripts/proxy.py
in script /Users/.../mitmproxy-test-local/node_modules/mitmproxy/scripts/proxy.py: No module named 'websockets'
Proxy server listening at *:8080
/Users/.../mitmproxy-test-local/node_modules/mitmproxy/dist/index.js:345
                            throw new Error(`Unable to start mitmproxy: ${e}`);
```

Solve:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
node index.js
```
