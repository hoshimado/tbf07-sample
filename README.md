# １章：Vue.jsのCDN版からVue-CLI版へ移行

## §２：Vue-CLI 環境を導⼊

導入前の「Azureを前提としたExpressの導入」は、以下の付録のサンプルコードを参照ください（
※Vue-CLIの利用で、Expressの導入は必須ではありませんが、配置のフォルダ構造の都合でExpress側のpackage.jsonにVueを記録したいので、このようにします）。

* [appendix-azure-express-mocha](https://github.com/hoshimado/tbf07-sample/tree/appendix-azure-express-mocha)

「リスト1.4 UnitTest を選択」では、次のように
「Unit Testing」を**明示的に選択する**ことを忘れないでください。

```
Vue CLI v3.11.0
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 (*) Linter / Formatter
>(*) Unit Testing
 ( ) E2E Testing                                            
```

