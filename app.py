from http.server import SimpleHTTPRequestHandler, HTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def send_header(self, keyword, value):
        if keyword.lower() == "cache-control":
            value = "no-store, no-cache, must-revalidate, max-age=0"
        super().send_header(keyword, value)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

server_address = ('', 80)
httpd = HTTPServer(server_address, NoCacheHandler)
print("Serving on port 8000 with no cache...")
httpd.serve_forever()
