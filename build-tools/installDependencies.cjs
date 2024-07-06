const { writeFileSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');

const projectRoot = join(__dirname, '..');
const { main, dependencies } = require(join(projectRoot, 'package.json'));
const newPackageJson = {
    main: main,
    dependencies: dependencies
};

const newPackagePath = join(__dirname, 'package.json');

async function installDependencies() {
    console.log('Installing dependencies...');
    writeFileSync(newPackagePath, JSON.stringify(newPackageJson, null, 2), 'utf8');
    exec('npm install', { cwd: join(__dirname) }, (error, stdout, stderr) => {
        if (error) {
            throw new Error(`Error installing dependencies: ${error.message}`);
        }
        if (stderr) {
            throw new Error(`Error in install output: ${stderr}`);
        }
        
        console.log('Dependencies installed successfully:');
        console.log(dependencies);
        console.log('');
    });
}

module.exports = { installDependencies };