from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    def send_error(self, code, message=None):
        """Serve a custom 404 error page."""
        if code == 404:
            self.send_response(code)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(b"<head><script>location.herf = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'</script></head>")
        else:
            super().send_error(code, message)

    def end_headers(self):
        """Disable caching by modifying headers."""
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == "__main__":
    server_address = ('', 80)  # Serve on all addresses, port 8000
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print("Serving on port 80...")
    httpd.serve_forever()
