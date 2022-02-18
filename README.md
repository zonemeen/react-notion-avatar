<div align="center">
    <h1>React Notion Avatar</h1>
    <img src="https://cdn.jsdelivr.net/gh/zonemeen/static@master/img/example.gif" alt="imagewall" />

[简体中文](./README-CN.md)
</div>

## Assets

- Designer: [@Felix Wong](https://www.producthunt.com/@felix12777) on ProductHunt
- Pack of illustrations: [Noto avatar](https://abstractlab.gumroad.com/l/noto-avatar)

## Installation

```sh
npm install react-notion-avatar
```

or

```sh
yarn add react-notion-avatar
```

## Usage

1. Import the component.
    ```js
    import NotionAvatar from 'react-notion-avatar'
    ```
2. Set the config attribute, so that you can always rendering a same avatar with the configuration.
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
    
    `tip`: config is an Object, please check the **Attributes** below for what attributes can be passed in.
    
    `Note`: If you don't set the config attribute, component will generate a random avatar.

3. Render the component with specific width / height and configuration.
    ```jsx
    <NotionAvatar style={{ width: '6rem', height: '6rem' }} config={config} />
    ```
    or
    
    ```jsx
    <NotionAvatar className="className" config={config} />
    ```
    or
     ```jsx
    <NotionAvatar />
     ```

## Attributes

The Attributes can be passed into config

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

or as React props

| key               | type    | default  | tips                              |
| ----------------- | ------- | -------- |---------------------------------- |
| `className`       | string  |          | Only for React Props              |
| `style`           | object  |          | Only for React Props              |
| `shape`           | string  | 'circle' | Only for React Props              |
| `bgColor`         | string  |          | Only for React Props              |

## Development

1. Clone the repo:
    ```sh
    $ git clone git@github.com:zonemeen/react-notion-avatar.git
    $ cd react-notion-avatar
    ```
2. Install dependencies:
    ```sh
    $ yarn
    ```
    Or
    ```sh
    $ npm install
    ```
3. Start the server for the example:
    ```sh
    $ yarn dev
    ```
    Or
    ```sh
    $ npm run dev
    ```
4. Open the browser to reivew the example:
    ```sh
    $ open http://localhost:8080
    ```
5. Edit the files inside [src](/src).

## License

Released under [MIT](/LICENSE) by [@zonemeen](https://github.com/zonemeen).