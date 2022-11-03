# **Unique IDentifier**

<div align="center">
<br>
 <a href="https://www.npmjs.com/package/unidque"><img src="https://img.shields.io/npm/v/unidque.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/unidque"><img src="https://img.shields.io/npm/dt/unidque.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
  </p>
</div>

Unique IDentifier is a simple and powerful to generate (id) steely and secure numberID or stringID (URL-friendly)
The generation depends on a complex algorithm that relies on information, date and process to generate steely.

- secure
- simple
- powerful
- url-friendly
- support numberID and stringID
- trustable
- [Installation](#installation)
- [Example](#example)
  - [numberID](#example)
  - [stringID](#example)

# **Installation**

```sh-session
npm install unidque
yarn add unidque
```

# **Example**

```js
const unidque = require("unidque");
//in stringID, sign "-" is not fixed, it moves randomly in the string to make it more secure

unidque(); //numberID (default length 20)
//=> 60398565876098435679

unidque(10); //numberID with 10 digits, (minimum:10 maximum:200)
//=> 5749831230

unidque(true); //stringID (default length 35)
// => 8rL9F0jL1LB0DX2L0-R0Lrh0p90rNC0M2r4

unidque(20, true); //stringID with 10 digits, (minimum:20 maximum:200)
//=> 5ia0x052062x2671-x09
```

## Links

- [Twiter](https://twitter.com/onlyarth)
- [Github](https://github.com/4i8)

## License

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
