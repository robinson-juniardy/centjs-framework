#!/usr/bin/env node

const { execSync } = require("child_process");

const runCmd = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCmd = `git clone --depth 1 https://github.com/robinson-juniardy/centjs-framework.git ${repoName}`;
const installDepsCmd = `cd ${repoName} && npm install`;

console.log(`generate CentJS ${repoName} project`);
const checkout = runCmd(gitCheckoutCmd);
if (!checkout) process.exit(-1);

console.log(`installing CentJS dependencies for ${repoName}`);
const installedDeps = runCmd(installDepsCmd);
if (!installedDeps) process.exit(-1);

console.log(
  "Congratulations! You are ready. run the following commands to start"
);
console.log(`cd ${repoName} && npm run dev`);
