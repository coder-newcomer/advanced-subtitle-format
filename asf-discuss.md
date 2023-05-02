# USF Discussion & QnA

Here is the result of discussion and QnA about remaking concept of USF Format Specification:

QnA | Discussion
:- | :-
Q: | **Why is suppossed to be a *Subtitle Project Format?***
A: | Because **Subtitle Format must be simple**, the goal of this is to make a **Project File** for *advanced subtitling* (customized style, positioning, effect, etc.), then compile or convert to the available supported Subtitle Format (currently targetting **WebVTT** and **ASS**) but keep appliying that *advanced subtitling* to supported style (properties, or tags) as the target file. And not intended as **Standalone Subtitle Format**, but still possible. More likely `typescript` and `javascript`
Q: | **Why `xml` based?**
A: | USF2 follow the previous version of specification (USF) which using `xml`. Also as configuration file (or whatever), `xml` is a great choice as their flexiblility of data type for USF2 specification
Q: | **Why MIME type of USF2 is rather `text/xml+usf` or `application/xml+usf`?**
A: | MIME type is optional, just for file open behavior. But as USF is `xml` based, the MIME type is also following `xml` MIME type for both `text` and `application` with `usf` suffix (`text/xml+usf` or `application/xml+usf`) as is a kind of text and used by application.
Q: | **Question?**
A: | Answer

---

<style>
  .i {
    cursor: help;
    user-select: none;
  }
</style>

## WebVTT CSS style compatibility table

Style | <span title="Google Chrome, and any chromiuim based release">Chrome</span> | <span title="Mozilla Firefox, and it's based programs">Firefox</span> | VLC | <span title="Media Player Classic">MPC</span> | KMPlayer
:- | :-: | :-: | :-: | :-: | :-:
background-color | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
background-image<span class="i" title="Only support gradient"> :information_source:</span> | :heavy_check_mark: | :heavy_check_mark: |  |  |
color | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
font-family<span class="i" title='Always use quote on "font-family" name, non-browser player may cannot parse it. Named value (eg: monospace) doesn&apos;t supported on non-browser'> :information_source:</span> | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
font-size | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
font-stretch | :heavy_check_mark: | :heavy_check_mark: | <span class="i" title='This still can be done with font-family name (eg: "Roboto Condensed")'>:information_source:</span> |  |
font-style | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
font-weight | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
line-height | :heavy_check_mark: | :heavy_check_mark: | <span class="i" title="New line space, margin, or position can interchange this">:information_source:</span> |  |
opacity | :heavy_check_mark: | :heavy_check_mark: | <span class="i" title="Color style can do this, use hex #RRGGBBAA, rgba(), hsla(), or hwba() but don't use percentage">:information_source:</span> |  |
outline-color [:information_source:](#notes "See notes below") | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |
outline-style | :heavy_check_mark: | :heavy_check_mark: |  |  |
outline-width | :heavy_check_mark: | :heavy_check_mark: |  |  |
ruby-position<span class="i" title="Haven't been observed"> :information_source:</span> | - | - | - |  |
text-combine-upright<span class="i" title="Haven't been observed"> :information_source:</span> | - | - | - |  |
text-decoration-color | :heavy_check_mark: | :heavy_check_mark: |  |  |
text-decoration-line<span class="i" title="Only support underline and line-through (strikethrough)"> :information_source:</span> | :heavy_check_mark: | :heavy_check_mark: | <span class="i" title="Use inline <u> tag instead, only that supported"> :information_source:</span> |  |
text-decoration-style | :heavy_check_mark: | :heavy_check_mark: |  |  |
text-decoration-thickness | :heavy_check_mark: | :heavy_check_mark: |  |  |
text-shadow | :heavy_check_mark: | :heavy_check_mark: | <span class="i" title="ASS had this feature called shadow"> :information_source:</span> |  |

Unfortunely, IE and MPV (also FFmpeg based) doesn't support WebVTT Style at all, also some media player may doesn't support it too even they are support WebVTT subtitle. Because it may intended as general subtitling only, and if style blocks is exist in the subtitle, they can't parse it and nothing to show (it might be a parse error). But they may still support inline tags style like `<b>`, `<i>`, `<u>`, or `<font>`, etc.

>FFmpeg have fully support for ASS (with it's libass), so it's playable through MPV and also possible to burn in to the video with `subtitles` or `ass` filtergraph. You may prefer to convert it to ASS before for non-browser compatibility or you may want to burn in the subtitle with the style flawlessly.

Windows Media Player is still *mysterious* about embedding subtitle (and the supported format), but general subtitle is supposed to be supported (like SubRip `.srt`, or DVDVob subtitle).

### Notes

>**About `outline`**\
`outline` behave differently both in browser and non-browser (currently VLC). In browser, `outline` apply the outline of text background (or a.k.a opaque box). While in non-browser, `outline` apply the outline of text (as same as CSS `text-stroke` as well, but limited to color only).\
\
In browser, you need to specify `outline-color` and `outline-style` at once (you may prefer to use single `outline` instead) to show (`outline-width` is unnecessary except you need it, the default is 1px). While in non-browser, you need to specify `outline-color` only since it's only support that style.\
\
There is no tricks or fixes todo for now because this is a whole different behavior from both player. You may wanna see [gallery](gallery.md#usf-gallery) or try it yourself.

>**Coloring in non-browser**\
In non-browser, always use complete hex value (#RRGGBB or #RRGGBBAA) for any color style and don't use the simplified value (#RGB), otherwise no color will changed (skipped style, the player haven't use this technology yet).\
\
If you are using `rgba()`, `hsla()`, or `hwba()`, don't use percentage for alpha value but use the **real value**. For example:\
☒ `color: rgba(92 128 196 / 50%);`\
☑ `color: rgba(92 128 196 / 0.5);`

✔✖✘☑☒ - Use emoji later okay?

---

## ASS and WebVTT similarities

ASS and WebVTT are both the most popular and featured subtitle format this day, WebVTT is for web and ASS is for movie or anime (usually burned in). So i decided to put all the feature same in both format as possible when converted.

This will explain all the similar style features and tags which available from both format.

### Styles

USF | WebVTT | ASS
:-: | :-: | :-:
||

### Tags
