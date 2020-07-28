F1::

Loop{
ImageSearch vx,vy, 0,0, A_ScreenWidth,A_ScreenHeight, *100 test.png
if ErrorLevel = 0
{
MouseClick, left, %vx%,%vy%,
MsgBox, `n찾은 좌표: %vx%`, %vy%
}
if ErrorLevel = 1
{
MsgBox, Error
}
Sleep, 5000
}
return

F2::pause
F3::ExitApp
