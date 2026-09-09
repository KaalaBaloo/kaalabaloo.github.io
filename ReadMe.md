# kaalabaloo.github.io

Portfolio of Myriam Collada (Kaala Baloo).

Static site, no build step. Open `index.html`, or serve the folder:

```bash
python -m http.server 8137
```

## Structure

| Path | What it holds |
| --- | --- |
| `index.html` | The whole page |
| `css/IndexStyle.css` | Custom properties first, then components |
| `js/index.js` | Scroll reveal for the decorative art |
| `media/images/` | Original artwork at full resolution |
| `media/images/web/` | Resized WebP copies, the versions the page loads |
| `media/documents/` | CV |

## Notes
The stylesheet and script are linked with a `?v=` version number. Need to change version after editing file, otherwise returning visitors keep the old copy from their cache and the page renders with old style.
