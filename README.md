# レビュワーアプリ

#### オンライン開発合宿 vol.10 参加作品

開発者

- [u-Hoshi](https://github.com/u-Hoshi)
- [koki-sys](https://github.com/koki-sys)

## スライド

https://docs.google.com/presentation/d/1CcoQUzq0tkz1O4pXufvh18f-rnHaJIoV5Aa9_qDCq9Y/edit?usp=sharing

## きっかけ

業務などでプルリクエスト(マージリクエスト)を出すたびに、毎回誰にレビューをお願いするか悩んでいました。なぜなら先輩からは「誰に頼んでもいい」と言われてましたが、

- 誰かにコードレビューが集中していないか
- お願いして嫌な顔をされるかもしれない
  という不安を抱えてました。

一見すれば大した問題ではないですが、日々のストレスが長期的に大きなマイナスになる可能性もあります。

これらを解決したいと思い今回このアプリを開発しました。

## 機能

機能は以下の通りです。

- ルーレットでレビュワーを決める機能
- 認証機能
- グループ作成機能
- グループ参加機能
- プロフィール機能

## 開発構成図

![archtecture drawio](https://user-images.githubusercontent.com/56116874/138695308-344a6689-8dc6-4b1c-afb6-c208dc7ba800.png)

今回のハッカソンには「チーム開発を促進するアプリケーション」の他に「技術的な挑戦」というテーマがありました。だから今回は技術的な挑戦として GraphQL とその周辺ライブラリを使用しました。

## 感想

- ちょっとした手間がストレスになるの同感
- これ気軽になったら頼みたいわ
- ランダムにレビュワー決まるのは精神的に楽
  などの感想を頂きました。

---

**以下開発者用 README**

## 開発サーバの起動

```
$ yarn install
$ yarn start
```

### デザイン

Figma：https://www.figma.com/file/nD4xqurn09eDkJy5Y3H34O/レビュワーを決めるアプリ?node-id=19%3A7

## Git 運用ルール

### 目的

- お互いのコードを打ち消し合わないような運用にする
- master ブランチを複数人で編集しない
- それぞれが今何をやってるのかわかるようにする

### 基本

今回は GitHub Flow を用いる

- master : リリースブランチ
  - 基本的にここにコミットはしない
  - GitHub 側から README をいじった時などここにコミットされる可能性がある
    - 複数人でコミットしあうことがないように  
      コミュニケーションを取りつつやること
- トピックブランチ
  - feature/xxx

（ブランチ名はスネークケースでもキャメルケースでも可）
スネークケース：`array_change_key_case`

キャメルケース：`thisIsAnExsample`

### ブランチの切り方

```
master
 └トピックブランチ(feature/xxx)
```

- master が最上位
  - トピックブランチのマージコミットが並ぶ（はず）
  - ここからトピックブランチをきる
- トピックブランチでのみ開発する
  - ブランチ名と作業が一致するように
  - こまめにコミットしよう
    - 先延ばしにすると後で地獄を見る可能性が...

### master オペレーション

1. master を最新にする（pull でも fetch&rebase でも）
2. トピックブランチをチェックアウト
3. master ブランチを rebase!!!
4. master の最新から自分のトピックブランチが伸びていることを確認  
   違っていたらなんかおかしいから相談しよう
5. コンフリクトした時はひとりで悩まず誰かを呼んでいっしょに解消 ここで直しておくと merge 時にコンフリクトしないので安心

### コミットメッセージ

- 日本語で OK
- なにをやったのかわかるように
  - ブランチ名で何してるかわかればざっくばらんでも ok
  - OK：Bookmark ボタンを追加・アイコン位置調整
  - NG：no change・pull できない・commit・change posterlist

### 6 つのルール

- 【ルール 1】master ブランチは常にデプロイ可能である
- 【ルール 2】作業用ブランチを master から作成する（例：feature/xxx）
- 【ルール 3】作業用ブランチを定期的にプッシュする
- 【ルール 4】プルリクエストを活用する
- 【ルール 5】プルリクエストが承認されたら master へマージする
- 【ルール 6】master へのマージが完了したらデプロイを行う
