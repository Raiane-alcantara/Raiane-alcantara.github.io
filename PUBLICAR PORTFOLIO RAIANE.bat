@echo off
cd /d "%~dp0"
echo Publicando o portfolio da Raiane no GitHub...
echo.
git remote get-url origin >nul 2>&1
if errorlevel 1 (
  set /p USUARIO=Digite o nome de usuario do GitHub da Raiane e aperte Enter:
  call git remote add origin https://%%USUARIO%%@github.com/%%USUARIO%%/%%USUARIO%%.github.io.git
)
git add -A
git -c user.name="Raiane" -c user.email="raiane@users.noreply.github.com" commit -m "Atualiza portfolio" >nul 2>&1
git push -u origin main
echo.
for /f "delims=" %%u in ('git remote get-url origin') do set URL=%%u
echo Pronto. Em 1 a 3 minutos o site abre no endereco do repositorio:
echo %URL%
echo (troque github.com/USUARIO/USUARIO.github.io.git por https://USUARIO.github.io)
pause
