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

Colours, spacing and type sizes are custom properties at the top of the
stylesheet. Change them there rather than in the component rules.

Type sizes use `clamp()` in `rem`, so they scale with the viewport and
still respond to the reader's browser font size.

Headings look for `LostSignal` first and fall back to Space Grotesk.
Adding an `@font-face` for `LostSignal` switches it over with no other
change.

Images in `media/images/web/` are generated from the originals. After
adding artwork, resize to about 700px on the long edge and save as WebP
at quality 82.
