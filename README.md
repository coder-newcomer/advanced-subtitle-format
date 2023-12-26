<style>*{font-family:Source Sans Pro, system-ui}</style>

# Advanced Subtitle Format (ASF)

**Advanced Subtitle Format (ASF)** is subtitle format with advanced support of styling, positioning, effect, animation, and many more. It's intended for ***Subtitle Project*** actually, but can be also a **Standalone Subtitle** format (if there is a supported player for it).

## Introduction

**ASF** is *inspired* by the **Universal Subtitle Format (USF)**, which formerly developed by [CoreCodec](http://usf.CoreCodec.com/) and have been unmaintained since 2010<sup>[\[?\]](http://google.com/search?q=usf "Need References")</sup>. For now, ASF is intended as **Subtitle Project** that has specific styling, positioning, effects, animation, and other independent formats that can be converted to the other <i style="cursor: help;" title="The currently available playable subtitle format by the player">playable</i> formats<sup>[&downarrow;](#target-formats "See below")</sup> (using ASFConvert) but keep the specific styling, positioning, effects, animation, and other independent formats as close to the target format as possible (so it's still playable).

The goal of this format is to solve the conflict with the other formats, which have different formats for every styling, positioning, effects, animation, and more from the specific target format that are actually the same or can be displayed as the same as possible. (This can also be done by the ASFConvert tool)

> See also: [USF Specs](docs/TitleVision%20-%20USF%20specs.txt)

## Target Format

How ASF targetting others format? Good question! We need to do some several research about the specific targetted format before. The targetted subtitle formats is the subtitle format which is popular enough so many people use it and available in most player which support it.

So after a little workaround we have several player which popular enough and have subtitle support for it. (See [here](player))

After that, we actually still confuse what the target formats will be used. For this case, we need a subtitle format **that have specific style support**, and if possible must be **text based** for it.

And we decided (for now, not later) to choose **`ass`**, `smi`, `ttml`, **`vtt`** as target formats for converting.

## Getting Started

You may want to see [format specification](specs) to start writing ASF document with reserved syntax and format. This project is still raw, so enjoy.

```javascript
const fs = require('fs');
console.log('Should I tell ya?);
```

---

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

---

Copyright &copy; 2023 coder-newcomer - This project using [MIT](blob/main/LICENSE) license
