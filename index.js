const util = require('util');
const vm = require('vm');

const sandbox = {
    animal: 'cat',
    count: 2,
    log: console.log
};

const script = new vm.Script('count += 1; name = "kitty";log("sdcs")');

const context = new vm.createContext(sandbox);
for (let i = 0; i < 10; ++i) {
    script.runInContext(context);
}

console.log(util.inspect(sandbox));
