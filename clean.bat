@echo off
echo 🔴 Stopping Node processes...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM nodejs.exe >nul 2>&1

echo ⏳ Waiting for processes to close...
timeout /t 3 /nobreak >nul

echo 🧹 Removing .next folder...
rmdir /s /q .next 2>nul

echo 🧹 Removing cache...
rmdir /s /q node_modules\.cache 2>nul

echo ✅ Clean complete!
echo 🚀 Run: npm run dev -- --webpack
pause