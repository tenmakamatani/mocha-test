# mocha-test

mochaを使ったテストの練習です

## How to run
```
$ git clone https://github.com/tenmakamatani/mocha-test.git
$ cd mocha-test
$ yarn install
$ yarn test
```

And you can manipulate test results.
If you edit test/test.js as follows,
```test.js
assert.equal(returnIfGreaterThan0(0), false);
                ⬇︎
assert.equal(returnIfGreaterThan0(0), true);
```
You can see an error occurs.