<template id="Article">
  <div class="app">
    <article class="article" v-for="article of articleList">
      <div class="row meta-row">
        <span class="block hot">{{article.hot}}</span>
        <span class="block author">{{article.author}}</span>
        <span class="block time">{{article.time}}</span>
        <span class="block tag">{{article.tag}}</span>
      </div>
      <div class="row title-row">
        <p class="title">{{article.title}}</p>
      </div>
      <div class="row action-row">
        <div class="block stars">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPkNBQ0Y5MUY0LTc2RUItNDFENS1CRjZELTdCNTBGNUY4NjUwNTwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHk9IjU0IiB3aWR0aD0iNjAiIGhlaWdodD0iMjUiIHJ4PSIxIi8+PG1hc2sgaWQ9ImIiIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyNSIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkgLTU2KSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIHN0cm9rZT0iI0VERUVFRiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0xOS4wNSA2Mi43OTdjLS4yMDgtLjI2OC0xLjc3Ni0yLjE4OC0zLjYyOS0xLjcyNS0uNjYyLjE2NS0xLjQzOS40NC0yLjAwOSAxLjQ2My0yLjE4IDMuOTEzIDQuOTY1IDguOTgzIDUuNjE1IDkuNDMzVjcybC4wMjMtLjAxNi4wMjMuMDE2di0uMDMyYy42NS0uNDUgNy43OTUtNS41MiA1LjYxNS05LjQzMy0uNTctMS4wMjMtMS4zNDctMS4yOTgtMi4wMDktMS40NjMtMS44NTMtLjQ2My0zLjQyIDEuNDU3LTMuNjI5IDEuNzI1eiIgZmlsbD0iI0IyQkFDMiIvPjwvZz48L3N2Zz4="
            alt=""> {{article.stars}}
        </div>
        <div class="block comments">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPjc1MzFEREU0LTZCMzgtNDI4Ny04QTJBLUY2ODVGMDgzNUFGQzwvdGl0bGU+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjU5IiB5PSI1NCIgd2lkdGg9IjU0IiBoZWlnaHQ9IjI1IiByeD0iMSIvPjxtYXNrIGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTQiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OCAtNTYpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik03MiA2MXY4LjAzOGg0LjQ0NEw4MS4xMTEgNzJ2LTIuOTYySDg0VjYxeiIvPjx1c2Ugc3Ryb2tlPSIjRURFRUVGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg=="
            alt=""> {{article.comments}}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    props: {
      articleList: Array
    }
  };

</script>
<style lang="stylus" scoped>
  .article {
    margin: 10px;
    padding: 10px;
    border-bottom: 1px solid #edeeef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .row {
      display: flex;
      flex-direction: row;
      vertical-align: middle;
      align-items: center;

      .block {
        color: #909090;
        font-size: 0.7rem;
      }

      .hot {
        color: red;
      }

      .title {
        font-weight: bold;
      }
    }

    .meta-row .block::after {
      content: '\B7';
      margin: 0 0.4em;
      color: #b2bac2;
    }

    .action-row .block {
      display: flex;
      border: 1px solid #edeeef;
      vertical-align: middle;
      align-items: center;
      padding: 0 8px;
      color: #B2BAC5;
    }

    .action-row .block:nth-child(1) {
      border-right: none;
    }
  }

</style>
