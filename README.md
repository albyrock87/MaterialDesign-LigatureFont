> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is just a build script for ligature-based web fonts.

> For the standard webfont, see the [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont) distribution.

# Material Design Icons - Ligature Font builder

Ligature font builder for [Material Design Icons](https://materialdesignicons.com).

```
git clone https://github.com/pauln/MaterialDesign-LigatureFont.git
cd MaterialDesign-LigatureFont
npm install

# If you don't already have grunt-cli installed:
npm install -g grunt-cli

grunt
```

By default, this will generate fonts in `build/fonts` which support both the regular glyphs/codepoints AND ligatures.  If you'd rather have smaller font files at the expense of the regular codepoints, uncomment the following line in `Gruntfile.js` before running `grunt`:

```
					//ligaturesOnly: true,
```

Note that this will result in the generated CSS inserting the glyph names / ligatures instead of the glyphs, so both ligatures and `icon_glyph-name` classes should still work.