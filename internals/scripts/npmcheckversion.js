const exec = require('child_process').exec;
exec('npm -v', (err, stdout) => {
  if (err) throw err;
  if (parseFloat(stdout) < 3) {
    throw new Error('[ERROR: React Boilerplate] You need npm version @>=3');
    // process.exit(1); // Unreachable code
  }
});
