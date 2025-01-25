#!/usr/bin/env node

import { Command } from "commander";
import * as path from 'path';
import fs from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import { fileURLToPath } from 'url';
import ora from "ora";
import { exec } from "child_process"; 
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execPromise = promisify(exec); 
let currentProjectDir: string | null = null;

const handleExit = async () => {
    try {
        if (currentProjectDir && await fs.pathExists(currentProjectDir)) {
            try {
                await fs.remove(currentProjectDir);
                console.log(chalk.yellow('✖ Project setup cancelled. Temporary files have been removed.'));
            } catch (removeError) {
                console.error(chalk.red('⚠ Error: Could not fully remove project directory.'), removeError);
                try {
                    await fs.emptyDir(currentProjectDir);
                    console.log(chalk.yellow('⚠ Project directory has been emptied.'));
                } catch (emptyError) {
                    console.error(chalk.red('✖ Critical: Unable to clean up project directory.'), emptyError);
                }
            }
        } else {
            console.log(chalk.yellow('✖ Project setup cancelled.'));
        }
    } catch (error) {
        console.error(chalk.red('✖ Unexpected error during project cancellation:'), error);
    }
    process.exit(0);
};

const fetchTemplate = async (selectedFramework: string, selectedTemplate: string, projectDir: string, projectName: string) => {
    const templateDir = path.resolve(__dirname, `../templates/${selectedFramework}/${selectedTemplate}`);

    if (!fs.existsSync(templateDir)) {
        console.log(chalk.red(`✖ Error: Template "${selectedTemplate}" not found.`));
        process.exit(1);
    }

    const copySpinner = ora({
        text: "Scaffolding your project...",
        spinner: "dots",
        color: "blue"
    }).start();

    try {
        await fs.copy(templateDir, projectDir);

        await updatePackageJson(projectDir, projectName, selectedFramework, selectedTemplate);

        copySpinner.succeed(chalk.green('Project template created successfully'));
        await installDependencies(projectDir);
        console.log(chalk.green('✔ Project setup complete!'));
        console.log(chalk.cyan(`\n🚀 Next steps:`));
        console.log(chalk.gray(`   cd ${path.basename(projectDir)}`));
        console.log(chalk.gray(`   npm run dev`));
    } catch (error) {
        copySpinner.fail(chalk.red('✖ Project template creation failed'));
        console.error(chalk.red('Detailed error:'), error);
        process.exit(1);
    }
};

const installDependencies = async (projectDir: string) => {
    try {
        const npmSpinner = ora({
            text: "Installing project dependencies...",
            spinner: "dots",
            color: "green"
        }).start();
        
        await execPromise('npm install', { cwd: projectDir });
        npmSpinner.succeed(chalk.green('Dependencies installed successfully'));
    } catch (error) {
        console.error(chalk.red('✖ Dependency installation failed:'), error);
        process.exit(1);
    }
};


const updatePackageJson = async (projectDir: string, projectName: string, selectedFramework: string, selectedTemplate: string) => {
    const packageJsonPath = path.join(projectDir, 'package.json');
    
    try {

        const packageJson = await fs.readJson(packageJsonPath);

        

        packageJson.name = projectName;
        packageJson.description = `A ${selectedFramework} project created with tempMan template: ${selectedTemplate}`;
        

        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    } catch (error) {
        console.error(chalk.red('✖ Error updating package.json:'), error);

    }
};




async function main() {
    process.on("SIGINT", handleExit);
    process.on("SIGTERM", handleExit);

    const program = new Command()
        .name("create-tempMan")
        .description("Quickly scaffold new project templates")
        .version("1.0.0", "-v, --version", "Display version")
        .argument('[project-name]', "Name for your new project")
        .action(async (projectName?: string) => {
            projectName = projectName || (await inquirer.prompt([
                {
                    type: "input",
                    name: "inputProjectName",
                    message: "📝 Project name:",
                    default: "my-tempMan-project",
                    validate: (input) => {
                        if (!/^[a-z0-9-]+$/.test(input)) {
                            return "Project name must be lowercase, contain only letters, numbers, and hyphens";
                        }
                        return true;
                    }
                },
            ]))?.inputProjectName;

            currentProjectDir = path.resolve(process.cwd(), projectName as string);

            if (fs.existsSync(currentProjectDir)) {
                console.log(chalk.red(`✖ Error: Directory "${projectName}" already exists.`));
                process.exit(1);
            }

            const frameworkDir = path.resolve(__dirname, "../templates");
            const frameworks = fs.readdirSync(frameworkDir);

            if (frameworks.length === 0) {
                console.log(chalk.red('✖ No project templates available.'));
                process.exit(1);
            }

            const { selectedFramework }: any = await inquirer.prompt([
                {
                    type: "list",
                    name: "selectedFramework",
                    message: "🔧 Select framework:",
                    choices: frameworks
                }
            ]);

            const templateDir = path.resolve(__dirname, `../templates/${selectedFramework}`);
            const templates = fs.readdirSync(templateDir);

            if (templates.length === 0) {
                console.log(chalk.red("✖ No templates found for this framework."));
                process.exit(1);
            }

            const { selectedTemplate }: any = await inquirer.prompt([
                {
                    type: "list",
                    name: "selectedTemplate",
                    message: "📦 Choose template:",
                    choices: templates
                }
            ]);

            await fetchTemplate(selectedFramework, selectedTemplate, currentProjectDir,projectName as string);
        });

    program.parse(process.argv);
}

main();