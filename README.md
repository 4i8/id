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
//in stringID, sign [".","_"][random] is not fixed, it moves randomly in the string to make it more secure

unidque(); //stringID (default length 35)
//=> IyJ0g7gy92hwy0yz6IyVzyh2aVIyg3yXA_J

unidque(20); //stringID with 20 characters, (minimum:20 maximum:200)
//=> f02Y10Y7v.9Kj6kqYvK6

unidque(true); //numberID (default length 35)
// => 80743258371438287065918637835813207

unidque(20, true); //numberID with 20 digits, (minimum:20 maximum:200)
//=> 64195268060178376012
```

## Links

- [Twiter](https://twitter.com/onlyarth)
- [Github](https://github.com/4i8)

## License

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
