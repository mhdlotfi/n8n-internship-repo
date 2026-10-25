from pathlib import Path
import re

ROOT = Path(__file__).parent
html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "styles.css").read_text(encoding="utf-8")
js = (ROOT / "script.js").read_text(encoding="utf-8")

assert '<!doctype html>' in html.lower()
assert 'lang="fa"' in html
assert 'id="login-form"' in html
assert 'id="email"' in html and 'type="email"' in html
assert 'id="password"' in html and 'type="password"' in html
assert 'styles.css' in html and 'script.js' in html
assert 'grid-template-columns' in css
assert 'addEventListener' in js
assert 'validate' in js
assert re.search(r"minlength=\"6\"", html)

print("Login page checks passed.")
