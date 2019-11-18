# 4章：ExpressをWebAPIサーバーとしてTDDする

ローカルへ取得して展開後に、初回は次のコマンドを実行して
必要なモジュールをインストールすることを、忘れずに実行してください。

* `cli-vue`フォルダ配下へ移動して、`npm install`を実行
* 元フォルダへ移動して、`npm install`を実行

具体的なコマンドは、展開先のルートフォルダ（※`server.js`が置かれたフォルダ）に位置しているとして、次になります。

```
cd cli-vue
npm install
cd ..
npm install
```

また、Azureへアップロードする前に、Vueのトランスパイルを忘れずに実行してください。

```
cd cli-vue
npm run build
```


