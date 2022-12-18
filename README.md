
# Customizable iFrame Player API from Attr

This project was written with the aim of providing comprehensive management of Youtube iFrame Player API published by Google over data-attr.




## Installation

Clone the repository as per the instruction below.

```bash
  git clone https://github.com/barisalby/youtubeAttributeAPI.git
  cd youtubeAttributeAPI
```
Include the relevant files in your project.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YoutubeAttributeAPI</title>
    <link rel="stylesheet" href="dist/css/noWrap.css" type="text/css">
</head>
<body>
    
    <script src="dist/js/api.js"></script>
</body>
</html>
```
or import noWrap.css directly into your main style file as follows.
```bash
  @import "noWrap.css";
```
Use the following line of HTML to call a simple iFrame on the DOM.

```bash
  <div class="player"></div>
```
Now let's define a play ID for this iFrame that is called into the DOM.
```bash
  <div class="player" data-identity="<YOUR-VIDEO-ID>"></div>
```

## Attribute Reference

#### Example with attribute.

```bash
    <div class="player" 
        data-identity="muDpH2Ty2tg"
        data-height="300"
        data-width="100%"
        data-inline="1"
        data-autoplay="0"
        data-loop="1" 
        data-mute="0" 
        data-controls="1">
    
        #document

    </div>
```
if you want use 16/9 mode you should be add ".nowrap" class in ".player" classList.

#### All Properties

| Parameter | useOfAttr     | Definition     | Obligation               |
| :-------- | :------- | :------- | :------------------------- |
| `<VIDEO_ID>` | `data-identity=""` | Contains the unique video ID to play.  | **Required** |
| `<VIDEO_HEIGHT>` | `data-height=""` | Height  | Not required if the nowrap class is used. |
| `<VIDEO_WIDTH>` | `data-width=""` | Width | **Required** |
| `<VIDEO_MUTE>` | `data-mute=""` | Mute | Default value is "0" |
| `<VIDEO_CONTROLS>` | `data-controls=""` | Controller  | Default value is "1" |
| `<VIDEO_AUTOPLAY>` | `data-autoplay=""` | Autoplay  | Default value is "0" |
| `<VIDEO_LOOP>` | `data-loop=""` | Loop  | The value in *data-playlist must be the same as the video ID for the loop feature to work. |
| `<VIDEO_PLAYSINLINE>` | `data-inline=""` | Inline on Player  | Default value is "1" |
| `<VIDEO_PLAYLIST>` | `data-playlist=""` | Video Playlist | Remove completely if not used. |
| `<VIDEO_MODESTBRANDING>` | `data-modest=""` | Must be enabled for for-profit embedding.  | Default value is "0" |
| `<VIDEO_REL>` | `data-rel=""` | Remote server resource attachment.  | Default value is "0" |
| `<VIDEO_FS>` | `data-fs=""` | Toggles the state of the full screen button. | Default value is "1" |


## Demo

Here you can access the preview and detailed instruction page.

[See Demo](https://barisalbayrak.net/youtubeAttributeAPI)
