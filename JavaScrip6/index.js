<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="index.css">
  <script src="index.js"></script>
  <meta charset="UTF-8">
  <title>JavaScriptの練習サイト</title>
</head>
<body>
  <header>
    <div class="heading">
      <h1 class="title">TECH HEADER</h1>
    </div>
    <div class="navbar">
      <ul class="nav-lists">
        <li class="list-status">
          現在のリスト；
          <span id="current-list">選択されていません</span>
        </li>
        <li class="background-red" id="lists">リスト
        </li>
        <li>カリキュラム変更</li>
      </ul>
      <ul class="show-lists hidden" id="pull-down">
        <li class="pull-down-list">リスト1</li>
        <li class="pull-down-list">リスト2</li>
        <li class="pull-down-list">リスト3</li>
        <li class="pull-down-list">リスト4</li>
      </ul>
    </div>
  </header>
  <div class="contents"></div>
</body>
</html>