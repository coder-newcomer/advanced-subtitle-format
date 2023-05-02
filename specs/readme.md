<style>h1,h2,h3,h4,h5,h6,p,li,label{font-family:Source Sans Pro,system-ui}pre{padding: 12px !important; font-size: 12px !important;}</style>

# ASF Format Specification

ASF file is XML based subtitle format, it choosen because its **flexible** (support of data, including attributes), **readable** (both for machine and human), **structured** (root and child nodes hiearchy), and **popular** (XML is general and popular format for properties or configuration purpose, so many engine and tools can parse it).

ASF document are structured with `ASFDocument` root element as parent node with 3 child element as sub-parrent nodes, which is `metadata`, `styles`, and `subtitles`. And its contains their specific element represents the element itself, as shown below:

- [XML Declaration](#xml-declaration)
- [ASFSubtitles](#asfsubtitles)
  - [Metadata]()
    - [Title]()
    - [Author]()
    - [Software]()
    - [Language]()
    - [Date]()
    - [Comments]()
  - [Styles]()
    - [Style]()
      - [Font]()
      - [Position]()
      - [Effect]()
  - [Subtitles]()
    - [Subtitle]()
      - [Text]()

## XML Declaration

Well-formed XML document must have XML Declaration, as ASF is XML based. Even its wont affecting parsing process, but its recommended.

```xml
<?xml version="1.0" encoding="utf-8"?>
```

>**Note:**\
XML Declaration must be **in the most top** of any XML document before any element (including comment), or parsing process will be **fail** since is not a well-formed XML document.

## ASFSubtitles

The `<ASFSubtitles>` element represents the root (top-level element) of an ASF document, so its also referred to as the root element. All other elements must be descendants of this element.

```xml
<?xml version="1.0" encoding="utf-8"?>
<ASFSubtitles version="2.0">
  ...
</ASFSubtitles>
```

---

### See Also

- Sub-parrent nodes: [Metadata](), [Styles](), & [Subtitles]()
- ASF document [example]()
- Being a [good subtitler](http://google.com/search?q=How+to+be+a+good+subtitle+creator)

---

Copyright &copy; 2023 coder-newcomer - This project using [MIT](../blob/main/LICENSE) license
