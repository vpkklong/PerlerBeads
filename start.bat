@echo off
chcp 65001 >nul
title 拼豆工坊本地服务器
cd /d "%~dp0"

echo ============================================
echo   拼豆工坊 正在启动本地服务器...
echo   地址: http://localhost:5173
echo   关闭本窗口即可停止服务。
echo ============================================
echo.

start "" http://localhost:5173

where python >nul 2>nul
if %errorlevel%==0 (
    python -m http.server 5173
    goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
    py -m http.server 5173
    goto :eof
)

where node >nul 2>nul
if %errorlevel%==0 (
    npx --yes serve -l 5173
    goto :eof
)

echo 未检测到 Python 或 Node，请先安装其一后重试。
pause
