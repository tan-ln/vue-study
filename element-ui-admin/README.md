# markdown 编辑器

## 安装 SimpleMDE、showdown、
markdown 编辑器插件 `npm install simplemde --save`
使用：

    ```js
    // 引入
    import SimpleMDE from "simplemde";
    import "simplemde/dist/simplemde.min.css";

    const simplemde = new SimpleMDE();
    simplemde.value("这句话将会出现在编辑器中");
    ```
html 转换库 `npm install showdown` 

    ```js
    import('showdown').then(showdown => {
        const convert = new showdown.Converter()
        this.html = convert.makeHtml(this.content)
    })
    ```

 ## codemirror 代码编辑器 代码高亮
 