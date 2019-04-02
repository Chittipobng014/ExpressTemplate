const child_process = require("child_process");
const robot = require("robotjs");

// import * as child_process from "child_process";
// import * as robot from "robotjs";

// const spawn = child_process.spawn;
// const spawn = require("child_process").spawn;
// const cli = require("../../utils/cli");
// export {};

// declare const require: (path: string) => any;

// const spawn = child_process.spawn;

(function() {
  var oldSpawn = child_process.spawn;
  function newSpawn() {
    console.log("spawn called");
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  child_process.spawn = newSpawn;
})();

// const run = (command, options = {}) => {
//   console.log("RUN");
//   console.log({ command });
//   console.log({ options });
//   const results = execSync(command, options).toString();
//   console.log({ results });
//   return results;
// };

const php = params => {
  return exec(`php ${params.join(" ")}`);
};

const run = (commands, options = {}) => {
  const _commands = commands.split(" ");
  return run2(_commands[0], _commands.splice(1), options);
};

const run2 = (command, params, options = {}) => {
  return new Promise((res, rej) => {
    // const _commands = commands.split(" ");
    // const task = spawn(_commands[0], _commands.splice(1), options);
    const task = child_process.spawn(command, params, options);
    const responses = [];
    task.stdout.on("data", function(data) {
      responses.push(data.toString());
      process.stdout.write(data.toString());
    });
    task.stderr.on("data", function(data) {
      process.stderr.write(data.toString());
    });
    task.on("exit", function(code, signal) {
      console.log(
        `child process '${command}' '${params}' exited with code '${code}' and signal '${signal}'`
      );
      // console.log(responses);
      res({ code, signal, response: responses.join("") });
    });
  });
};

const run3 = (command, params, options = {}) => {
  const result = child_process.spawnSync(command, params, options);
  console.log({ result });
  console.log("output", result.output.toString());
  console.log("stdout", result.stdout.toString());
  console.log("stderr", result.stderr.toString());
  return result.stdout.toString();
};

// const run = (commands, options = {}) => {
//   return new Promise((res, rej) => {
//     const _commands = commands.split(" ");
//     const task = spawn(_commands[0], _commands.splice(1), options);
//     let response = "";
//     task.stdout.on("data", function (data) {
//       response += data.toString("utf8");
//       process.stdout.write(data.toString("utf8"));
//     });
//     task.stderr.on("data", function (data) {
//       process.stderr.write(data.toString("utf8"));
//     });
//     task.on("exit", function (code, signal) {
//       console.log(
//         `child process '${commands}' exited with code '${code}' and signal '${signal}'`
//       );
//       res({ code, signal, response });
//     });
//   });
// };

const sleep = async t => await new Promise(r => setTimeout(r, t));

const _pbcopy = text => {
  var proc = child_process.spawn("pbcopy");
  proc.stdin.write(text);
  proc.stdin.end();
};

const keyTap = (key, modifier) => {
  if (modifier) {
    robot.keyTap(key, modifier);
  } else {
    robot.keyTap(key);
  }
};

const type = command => {
  command.split("").map(key => {
    switch (key) {
      case "~":
        keyTap("`", ["shift"]);
        break;
      case "!":
        keyTap("1", ["shift"]);
        break;
      case "@":
        keyTap("2", ["shift"]);
        break;
      case "#":
        keyTap("3", ["shift"]);
        break;
      case "$":
        keyTap("4", ["shift"]);
        break;
      case "%":
        keyTap("5", ["shift"]);
        break;
      case "^":
        keyTap("6", ["shift"]);
        break;
      case "&":
        keyTap("7", ["shift"]);
        break;
      case "*":
        keyTap("8", ["shift"]);
        break;
      case "(":
        keyTap("9", ["shift"]);
        break;
      case ")":
        keyTap("0", ["shift"]);
        break;
      case "_":
        keyTap("-", ["shift"]);
        break;
      case "+":
        keyTap("=", ["shift"]);
        break;
      case "{":
        keyTap("[", ["shift"]);
        break;
      case "}":
        keyTap("]", ["shift"]);
        break;
      case "<":
        keyTap(",", ["shift"]);
        break;
      case ">":
        keyTap(".", ["shift"]);
        break;
      case "?":
        keyTap("/", ["shift"]);
        break;
      case ":":
        keyTap(";", ["shift"]);
        break;
      case '"':
        keyTap("'", ["shift"]);
        break;
      default:
        if (/[A-Z]/.test(key)) {
          keyTap(key.toLowerCase(), ["shift"]);
        } else {
          keyTap(key);
        }
        break;
    }
  });
};

const typeString = command => {
  robot.typeString(command);
};

const upload = async () => {
  console.log("uploading...");
  const { code, signal, response } = await run(
    `curl -F files=@/Users/bchoii/Downloads/printer.zip https://asd:asd@drive.kidoapps.com/upload`
  );
  return "https://asd:asd@drive.kidoapps.com/" + JSON.parse(response)[0].path;
};

const runInTerminal = async commands => {
  run("open -a Terminal");
  await sleep(500);
  keyTap("n", ["command"]);
  // keyTap("t", ["command"]);
  await sleep(500);

  _pbcopy(commands);
  await sleep(500);
  keyTap("v", ["command"]);
  keyTap("enter");
};

module.exports = {
  run,
  // run2,
  runInTerminal,
  sleep,
  _pbcopy,
  keyTap,
  type,
  typeString,
  upload,
};

const main = async () => {
  console.log("Start.");
  var result = run("pwd");
  console.log({ result });
  console.log("Done.");
};

if (require.main === module) {
  main();
}
