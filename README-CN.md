<div align="center">
    <h1>React Notion Avatar</h1>
    <img src="https://cdn.jsdelivr.net/gh/miqilin21/static@master/img/example.gif" alt="imagewall" />

[Read In English](./README.md)
</div>

## 设计资源

- 设计师: [@Felix Wong](https://www.producthunt.com/@felix12777) on ProductHunt
- 素材来源: [Noto avatar](https://abstractlab.gumroad.com/l/noto-avatar)

## 安装

```sh
npm install react-notion-avatar
```

or

```sh
yarn add react-notion-avatar
```

## 使用

1. 导入该组件。
    ```js
    import NotionAvatar from 'react-notion-avatar'
    ```
2. 设置config属性，这样你就可以固定用这个配置渲染同一个头像。
    ```js
    const config = {
        eye: 3,
        eyebrow: 3,
        face: 4,
        glass: 1,
        hair: 1,
        mouth: 2,
        nose: 3,
        accessory: 0,
        beard: 0,
        detail: 0,
    }
    ```
    
    `提示`: `config` 是一个对象，请查看下面的**属性**，了解有哪些属性可以被传入。
    
    `注意`: 如果你不设置 `config` 属性，组件将生成一个随机头像。

3. 以特定的宽度/高度和配置来渲染组件。
    ```jsx
    <NotionAvatar style={{ width: '6rem', height: '6rem' }} config={config} />
    ```
    或
    
    ```jsx
    <NotionAvatar className="className" config={config} />
    ```
    或
     ```jsx
    <NotionAvatar />
     ```

## 属性

以下这些属性可以被写入 `config` 中：

| key               | type    | default | accept    |
| ----------------- | ------- | ------- | --------- | 
| `face`            | number  |         |  0~10     |         
| `eye`             | number  |         |  0~10     |             
| `eyebrow`         | number  |         |  0~10     |                              
| `glass`           | number  |         |  0~10     |                            
| `hair`            | number  |         |  0~30     |                                    
| `mouth`           | number  |         |  0~10     |                                    
| `nose`            | number  |         |  0~10     |                                    
| `accessory`       | number  |   0     |  0~10     |                                    
| `beard`           | number  |   0     |  0~10     |                                    
| `detail`          | number  |   0     |  0~10     |                                    

或作为 `React props` 属性传入：

| key               | type    | tips                               |
| ----------------- | ------- | ---------------------------------- |
| `id`              | string  | Only for React Props               |
| `className`       | string  | Only for React Props               |
| `style`           | object  | Only for React Props               |

## 项目开发

1. 克隆项目至本地：
    ```sh
    $ git clone git@github.com:miqilin21/react-notion-avatar.git
    $ cd react-notion-avatar
    ```
2. 安装项目依赖：
    ```sh
    $ yarn
    ```
    或
    ```sh
    $ npm install
    ```
3. 运行项目：
    ```sh
    $ yarn dev
    ```
    或
    ```sh
    $ npm run dev
    ```
4. 打开浏览器预览：
    ```sh
    $ open http://localhost:8080
    ```
5. 编辑 [src](/src) 里面的文件。

## 许可证

由[@miqilin21](https://github.com/miqilin21)发布的基于[MIT](/LICENSE)协议许可证。