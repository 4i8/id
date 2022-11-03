module.exports = /**
 *
 * @param string returns a stringID if is false returns a numberID
 */ function (string = false) {
  let merge = false; //if commuity wants to merge this into the main function i will do in next update
  let settings = {
    letters: 50,
    numbers: 10,
    symbols: {
      string:
        "!@#$foJ(HFJ+#H#HNDFlnfA'f.'.f's.f'.'.'s.d'skfohjIOGDufvsfvu';nkskbfbafnaOnonbadbwrS/F^%^&*_+=",
      count: 10,
    },
  };
  let chars = {
    numbers: "0123456789",
    letters: [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
    ][Math.floor(Math.random() * 2)],
    symbols: settings.symbols.string,
  };
  let idCode = "";
  let idCodeLength = settings.numbers;
  let idCodeChars = chars.numbers;
  for (let i = 0; i < idCodeLength; i++) {
    idCode += idCodeChars.charAt(
      Math.floor(Math.random() * idCodeChars.length)
    );
  }
  let idCodeLetters = "";
  let idCodeLettersLength = settings.letters;
  let idCodeLettersChars = chars.letters;
  for (let i = 0; i < idCodeLettersLength; i++) {
    idCodeLetters += idCodeLettersChars.charAt(
      Math.floor(Math.random() * idCodeLettersChars.length)
    );
  }
  let idCodeSymbols = "";
  let idCodeSymbolsLength = settings.symbols.count;
  let idCodeSymbolsChars = chars.symbols;
  for (let i = 0; i < idCodeSymbolsLength; i++) {
    idCodeSymbols += idCodeSymbolsChars.charAt(
      Math.floor(Math.random() * idCodeSymbolsChars.length)
    );
  }
  if (!settings.symbols.turn) {
    idCodeSymbols = "";
  }
  let idCodeArray = [
    Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4),
    `${[new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
      .sort(() => Math.random() - 0.5)
      .reverse()
      .join("")}`,
    idCode,
    `${[idCodeLetters, idCodeLetters.split("").reverse().join("")]
      .sort(() => Math.random() - 0.5)
      .join("")}`,
    require("os")
      .type()
      .split("")
      .sort(() => Math.random() - 0.5)
      .reverse()
      .join(""),
    idCodeSymbols,
    new Date().getMilliseconds(),
  ];
  let idCodeRandom = [
    idCodeArray.sort(() => Math.random() - 0.5).join(""),
    idCodeArray
      .sort(() => Math.random() - 0.5)
      .reverse()
      .join(""),
  ];
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let convert = "1234567890"
    .split("")
    .map((e) => {
      return {
        [e]: [
          letters[Math.floor(Math.random() * 26)].toLowerCase(),
          letters[Math.floor(Math.random() * 26)],
        ][Math.floor(Math.random() * 2)],
      };
    })
    .reduce((a, b) => {
      return { ...a, ...b };
    }, {});
  const id = (
    process.pid.toString().substring(0, 4) +
    process
      .uptime()
      .toString()
      .replace(/[^a-zA-Z0-9]/g, "")
      .substring(0, 4) +
    (
      new Date().toLocaleString("en-us", { month: "long" }) +
      new Date().toLocaleString("en-us", { weekday: "long" })
    )
      .split("")
      .reverse()
      .sort(() => Math.random() - 0.5)
      .map((e) => e.charCodeAt())
      .join("")
      .substring(0, 3) +
    [
      [
        Math.floor(Math.random() * (100000 - 100000 + 1)) + 100000,
        [
          idCodeRandom[
            Math.floor(Math.random() * idCodeRandom.length)
          ].toLowerCase(),
          idCodeRandom[
            Math.floor(Math.random() * idCodeRandom.length)
          ].toUpperCase(),
        ][Math.floor(Math.random() * 2)]
          .split("")
          .map((e) => e.charCodeAt())
          .join(""),
        new Date().getTime(),
        (new Date().getSeconds() * 60 * 1000).toString() +
          new Date().getTime().toString(),
      ]
        .sort(() => Math.random() - 0.5)
        .join(""),
      [
        Math.floor(Math.random() * (100000 - 100000 + 1)) + 100000,
        [
          idCodeRandom[
            Math.floor(Math.random() * idCodeRandom.length)
          ].toLowerCase(),
          idCodeRandom[
            Math.floor(Math.random() * idCodeRandom.length)
          ].toUpperCase(),
        ][Math.floor(Math.random() * 2)]
          .split("")
          .map((e) => e.charCodeAt())
          .join(""),
        new Date().getTime(),
        (new Date().getSeconds() * 60 * 1000).toString() +
          new Date().getTime().toString(),
      ]
        .sort(() => Math.random() - 0.5)
        .join("")
        .split("")
        .reverse()
        .join(""),
    ][Math.floor(Math.random() * 2)]
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
  )
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
    .replace(/,/g, "");
  let idCodeString = (
    (merge ? merge : "") +
    (new Date().getSeconds() * 60 * 1000).toString() +
    new Date()
      .getTime()
      .toString()
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
      .substring(0, 7) +
    (
      process
        .uptime()
        .toString()
        .replace(/[^a-zA-Z0-9]/g, "")
        .substring(0, 5) + id
    )
      .split("")
      .map((e) => convert[e])
      .join("")
  )
    .substring(0, 34)
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
    .replace(/(.)\1+/g, (m) => {
      let items = letters
        .concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
        .filter((e) => e !== m.split("")[0])
        .sort(() => Math.random() - 0.5);
      let out = "";
      for (let i = 0; i < m.length; i++) {
        out += items[i];
      }
      return out;
    })
    .replace(/,/g, "");
  let idCodeSign =
    Math.floor(Math.random() * (idCodeString.length - 2 + 1)) + 1;
  return string
    ? idCodeString.substring(0, idCodeSign) +
        "-" +
        idCodeString.substring(idCodeSign, idCodeString.length)
    : (
        (merge ? merge : "") +
        process
          .uptime()
          .toString()
          .replace(/[^a-zA-Z0-9]/g, "")
          .substring(0, 5) +
        id
      )
        .substring(0, 20)
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
        .replace(/(.)\1+/g, (m) => {
          let items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
            .filter((e) => e !== m.split("")[0])
            .sort(() => Math.random() - 0.5);
          let out = "";
          for (let i = 0; i < m.length; i++) {
            out += items[i];
          }
          return out;
        })
        .replace(/,/g, "");
};
