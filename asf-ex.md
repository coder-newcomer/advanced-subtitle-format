# Universal Subtitle Format 2

New format for subtitling, this one is suppossed to be a *Subtitle Project Format* and not being intended as standalone subtitle (like Subrip `.srt` or WebVTT `.vtt`), or might could be.

I remake the concept and file format specification to be more advanced to subtitling project, here we go...

## Introduction

"The goal of the Universal Subtitle Format (USF) is to create a new format
taking the best of currently available subtitles formats.", as come from previous specification.

But now i just expanded it to more advanced than before. There is still no engine parser, or library, or player that can play video with USF2 subtitle *yet* (Note: VLC support USF). That's why USF2 **isn't standalone subtitle**. Or *haven't be*, but might could be in the future.

What is available now is USF2Convert from me that can convert USF2 subtitle and keep the styling format as possible as supported to desired target subtitle format. Currently targeting **WebVTT** and **ASS**, as these subtitle format support advanced styling with their own format.

## USF2 files

USF2 file is `xml` based subtitle format which contains `metadata`, `styles`, and `subtitles`, which contain their specific content with different purpose. (See [structure](#structure))

The file format is `.usf`, other file format is `.zsf` which is a zipped USF file contain the `usf` file and some embedded file that will be displayed on the video on the fly. (See [embedding files](http://google.co/search?q=embedding+file+ass))

>**Considered:**\
The MIME type of USF2 is rather `text/xml+usf` or `application/xml+usf`, following how `xml` do. And `application/zfs` for zipped version

## Structure

The important point of the USF2 structure is:

1. **Readability**, both for engine and human. As is `xml` based, the syntax is **CLEAR** and no more funky looks for human (when manually edit), also for engine who used it, rather it's media player or something else such as [Subtitle Editor](http://google.com/search?q=subtitle+editor). `xml` is general and popular format for configuration and many tools can parse it.

2. **Structured**, every each element of subtitle is placed on it's own structured hiearchy position depends on their role or function. Made it more tidied up, understandable, and easy to learn, just edit it like HTML.

3. **Flexible**, it's `xml` based made it support every type of data, multi-line support, advanced and fully customizable style for each text of subtitle.

USF2 structure and format specification are based from the previous version of USF, but with some modification and extended format feature. Here is:

### XML ^Attributes

For standarization and file information (encoding)

```xml
<?xml version="1.0" encoding="utf-8"?>
```

---

### USFSubtitles (Root)

The `<USFSubtitles>` element represents the root (top-level element) of an USF document, so it is also referred to as the root element. All other elements must be descendants of this element.

Attributes | Description
:-- | :--
`version` | Specifies the version of the USF Document Type Definition that governs the current document.

Example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<USFSubtitles version="2.0">
  ...
</USFSubtitles>
```

---

### Metadata (optional)

The `<metadata>` element represents metadata. This used as informational purpose and will not show on the video or affect the subtitle contents. Metadata section should be placed on the most top element inside the `<USFSubtitles>` element, and can contain the following items:

- `<title>` represents the title of the subtitle, video, or the name of the *subtitle project*
- `<version>` represents the release version or revision of the subtitle
- `<author>` represents the authority information of the subtitle, the attribute `type` contains the type of the authority. Accept `script`, `translator`, `editor`, or `timer`.
  - `<name>` represents the name of the subtitle author(s) or creator(s)
  - `<email>` represents the email of the subtitle author(s) or creator(s)
  - `<url>` represents the URL or link to the author(s) desired websites or homepage
  - `<note>` represents the author(s) notes, rather from or to the author(s) itself
- `<software>` represents the software used to make this subtitle
- `<language>` represents the language label of this subtitle, the attribute `code` contains a single "language tag" in the format defined in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646 "https://datatracker.ietf.org/doc/html/rfc5646")
- `<date>` represents the last modified date of this subtitle, the date use the international standard date (ISO8601) format `[YYYY-MM-DD]`
  - `YYYY` : Four digits year
  - `MM` : Two-digit month (01=January, etc.)
  - `DD` : Two-digit day of month (01 through 31)\
  Example: `2021-11-09`
- `<comments>` represents a comment to this subtitle, this can contain any comments or notes, non-standard elements, or software related data

> **Note:**\
The `<author>` `type` attribute is unnecessary, except the subtitle is edited by a group or more than one person which have different kind of editing role.\
\
`script` is the original author(s) of the subtitle, or rather *leader* of the *subtitle project*\
`translator` is the person who translate the subtitle contents from another to current language\
`editor` is the person who edits the subtitle, typically whoever took the raw translation and turned it into idiomatic translation and reworded for readability.\
`timer` is the person who set the timings of each subtitle text

All of the items is optional, so filled it as necessary. Here is the example:

```xml
<USFSubtitles version="2.0">
  <metadata>
    <title>Overflow Subtitle Indonesia by coder-newcomer</title>
    <version>1.8</version>
    <author type="script">
      <name>Aluphie</name>
      <note>Recheck again before publishing</note>
    </author>
    <author type="timer">
      <name>Faptaliti</name>
    </author>
    <author type="editor">
      <name>coder-newcomer</name>
      <email>coder-newcomer@gmail.com</email>
      <url>http://github.com/profile/code-newcomer</url>
    </author>
    <software>Aegisub 3.2.2</software>
    <language code="id">Indonesia</language>
    <date>2020-02-21</date>
    <comment>
    Need to fix some timings
    </comment>
  </metadata>
  ...
</USFSubtitles>
```

---

### Styles

The `<style>` element define the appearance and position of subtitles. All styles used by the script are defined on the `<style>` element and placed inside the parent element `<styles>` as container. Style can be overridden by control codes or tags in the subtitle text. (See inline style)

>**Warning:**\
In ASS, any of the the settings in the Style can be overridden by control codes `{\codes[value]}` in the subtitle text, except **shadow/outline type** and **depth**.

>**Note:**\
Not all CSS properties for WebVTT `::cue` supported by the most player, see the [compatibility table](usf-discuss.md#webvtt-css-properties-compatibility-table)

Here is the example:

```xml
<USFSubtitles version="2.0">
  ...
  <styles>
    <style name="Default">
      <font face="Arial" size="30pt" />
    </style>
    <style name="All Supported format">
      <font
        family="Comic Sans MS, Trebuchet MS, system-ui"
        size="45pt"
        style="condensed bold italic"
        decoration="underline overline line-through blue dashed 1px" />
    </style>
  </styles>
  ...
</USFSubtitles>
```

Let's inspect the style
