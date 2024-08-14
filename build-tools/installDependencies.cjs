const { writeFile, pathExists } = require('fs-extra');
const { join } = require('path');
const { exec } = require('child_process');

const projectRoot = join(__dirname, '..');
const { main, dependencies } = require(join(projectRoot, 'package.json'));
const newPackageJson = {
    main: main,
    dependencies: dependencies
};

const newPackagePath = join(__dirname, 'package.json');
const nodeModulesPath = join(__dirname, 'node_modules');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function detectNodeModulesAndPackage() {
    while (true) {
        
        try {
            const nodeModulesExists = await pathExists(nodeModulesPath);
            const packageJsonExists = await pathExists(newPackagePath);
            if (nodeModulesExists && packageJsonExists) {
                break;
            } else {
                await sleep(1000)
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}

async function installDependencies() {
    console.log('Installing dependencies...');
    writeFile(newPackagePath, JSON.stringify(newPackageJson, null, 2), 'utf8');
    exec('npm install', { cwd: join(__dirname) }, (error, stdout, stderr) => {
        if (error) {
            throw new Error(`Error installing dependencies: ${error.message}`);
        }
        if (stderr && !stderr.includes('deprecated')) {
            throw new Error(`Error in install output: ${stderr}`);
        }
    });

    await detectNodeModulesAndPackage();
    console.log('Dependencies installed successfully:');
    console.log(dependencies);
    console.log('');
}

module.exports = { installDependencies };