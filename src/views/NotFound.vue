<template>
  <div id="page">
    <img src="../assets/404.png" />
    <p>Page not found.</p>
    <p>ページが見つかりません。</p>
    <p>Seite nicht gefunden.</p>
    <p>Page introuvable.</p>
    <p>페이지를 찾을 수 없습니다.</p>
    <p>Página no encontrada.</p>
    <p>Página não encontrada.</p>
    <p>Страница не найдена.</p>
    <p>未找到页面。</p>
    <p>找不到頁面。</p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss">
#page {
  width: 100%;
  align-items: flex-start;
  margin-top: 20vh;

  img {
    margin-bottom: 100px;
    max-width: 90%;
  }
}
</style>
