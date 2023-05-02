@echo off
echo.
set name=test
set vid=mp4
set sub=vtt
set d=8500ms
set command=ffmpeg -i %name%.%vid% -c:a copy -c:v libx264 -vf subtitles=%name%.%sub% -t %d% %name%-burn.%vid%
echo %cd%^>%command%
%command%
set command=ffplay %name%-burn.%vid%
echo %cd%^>%command%
%command%
pause