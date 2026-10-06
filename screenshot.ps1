Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$ScreenBounds = [Windows.Forms.SystemInformation]::VirtualScreen
$Bitmap = New-Object System.Drawing.Bitmap $ScreenBounds.Width, $ScreenBounds.Height
$Graphics = [System.Drawing.Graphics]::FromImage($Bitmap)
$Graphics.CopyFromScreen($ScreenBounds.Location, [System.Drawing.Point]::Empty, $ScreenBounds.Size)
$Bitmap.Save("C:\Users\logic-unit\Desktop\hulm revamp through anti\screenshot.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$Graphics.Dispose()
$Bitmap.Dispose()
Write-Host "Screenshot saved!"
