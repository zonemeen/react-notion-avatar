<div align="center">
    <h1>React Notion Avatar</h1>
    <img src='https://cdn.jsdelivr.net/gh/zonemeen/static@master/img/example.gif' alt='imagewall' />

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
   import NotionAvatar, { getRandomConfig } from 'react-notion-avatar'
   ```
2. Set the required config attribute, so that you can always rendering a same avatar with the configuration.

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

   or generate a random config

   ```js
   const config = getRandomConfig()
   ```

   `tip`: config is an Object, please check the **Attributes** below for what attributes can be passed in.

3. Render the component with specific width / height and configuration.

   ```jsx
   <NotionAvatar style={{ width: '6rem', height: '6rem' }} config={config} />
   ```

   or

   ```jsx
   <NotionAvatar
     className="className"
     bgColor="#debaba"
     shape="square"
     config={config}
   />
   ```

## Attributes

The Attributes can be passed into config

| key         | type   | default | accept |
| ----------- | ------ | ------- | ------ |
| `face`      | number |         | 0~11   |
| `eye`       | number |         | 0~14   |
| `eyebrow`   | number |         | 0~16   |
| `glass`     | number |         | 0~13   |
| `hair`      | number |         | 0~58   |
| `mouth`     | number |         | 0~20   |
| `nose`      | number |         | 0~14   |
| `accessory` | number | 0       | 0~13   |
| `beard`     | number | 0       | 0~17   |
| `detail`    | number | 0       | 0~14   |

or as React props

| key         | type   | default  | options                              | tips                 |
| ----------- | ------ | -------- | ------------------------------------ | -------------------- |
| `className` | string |          |                                      | Only for React Props |
| `style`     | object |          |                                      | Only for React Props |
| `shape`     | string | 'circle' | 'circle' , 'rounded' , 'square'      | Only for React Props |
| `bgColor`   | string |          | Hexadecimal , RGB , HSL , Predefined | Only for React Props |

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
   $ yarn start
   ```
   Or
   ```sh
   $ npm run start
   ```
4. Open the browser to reivew the example:
   ```sh
   $ open http://localhost:8080
   ```
5. Edit the files inside [src](/src).

## License

Released under [MIT](/LICENSE) by [@zonemeen](https://github.com/zonemeen).
