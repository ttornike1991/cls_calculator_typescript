# cls_calculator_typescript
simple calculator write in type script


If there will be any red alerts in terminal when installing and running typescript commands on  windows you have to "Set-ExecutionPolicy RemoteSigned"  run that command


after installing Node in your system commands you have to run :
 1. npm init -y  initialize 
 2. npm i -g typescript  install
 3. tsc -v  check version
 4. tsc .\index.ts   convert index.ts to index.js
 5. npm i --save readline-sync    install readline-sync library 
 6. npm  i --save @types/readline-sync  define type of readline
 7. node .\index.js   print output of index.js
 
 
auto compilation from filename.ts  to filename.js :
  tsc -w .\filename.ts
 
 
