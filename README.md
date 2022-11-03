# **identification**

<div align="center">
<br>
 <a href="https://www.npmjs.com/package/i.d"><img src="https://img.shields.io/npm/v/i.d.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/i.d"><img src="https://img.shields.io/npm/dt/i.d.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
  </p>
</div>

identification is a simple and powerful to generate (id) steely and secure numberID or stringID (URL-friendly)
The generation depends on a complex algorithm that relies on information, date and process to generate steely.

- very secure
- very simple
- powerful
- url-friendly
- support numberID and stringID
- [Installation](#installation)
- [Example](#example)
  - [numberID](#example)
  - [stringID](#example)

# **Installation**

```sh-session
npm install i.d
yarn add i.d
```

# **Example**

```js
const id = require("i.d");
//numberID
id(); //61091571643284237851 (default length 20)
//stringID
id(true); //u4AG6-Np2u40JE7T2fS0g4AFSF4g068Yg3N (default length 35) sign "-" is not fixed, it moves randomly
```

## Links

- [Twiter](https://twitter.com/onlyarth)
- [Github](https://github.com/4i8)

## License

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
