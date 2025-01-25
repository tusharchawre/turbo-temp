#!/usr/bin/env node

import { Command } from "commander";
import * as path from 'path'
import fs from "fs-extra"
import chalk from "chalk";
import inquirer from "inquirer";
import { fileURLToPath } from 'url';
import ora from "ora"

process.on("SIGINT", ()=> process.exit(0))
process.on("SIGTERM", ()=> process.exit(0))


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const fetchTemplate = async (selectedFramework: string , selectedTemplate: string , projectDir: string) => {

    // const frameworkDir = path.resolve(__dirname, `../../templates/${selectedFramework}`)

    // const templatePath = path.join(frameworkDir, selectedTemplate)

    // console.log(templatePath)

    const templateDir = path.resolve(__dirname , `../../templates/${selectedFramework}/${selectedTemplate}`)

    if(!fs.existsSync(templateDir)){
        console.log(chalk.red(`Template "${selectedTemplate}" does not exist.`))
        process.exit(1)
    }

    const spinner = ora("Creating your template...").start()
    fs.copySync(templateDir, projectDir)

    spinner.succeed()

    console.log(chalk.green("Template was sucessfully created"))

    process.exit(0)
}


async function main() {



    const program = new Command()
    .name("create-tempMan")
    .description("Create project templates")
    .version(
        "1.0.0",
        "-v , --version",
        "display the version number"
    )
    .argument('[project-name]', "Name of the project to be created.")
    .action(async (projectName?: string)=> {

        projectName = projectName || (await (async () => {
            const { inputProjectName }: any = await inquirer.prompt([
                {
                    type: "input",
                    name: "inputProjectName",
                    message: "Enter the project name:",
                    default: "my-tempMan-project", // Default value
                },
            ]);
            return inputProjectName;
        })());

        
        const projectDir = path.resolve(process.cwd(), projectName as string);

        if(fs.existsSync(projectDir)){
            console.log(chalk.red(`Directory "${projectName}" already exists.`))
            process.exit(1);
        }

        const frameworkDir = path.resolve(__dirname, "../../templates");
        const framework = fs.readdirSync(frameworkDir);

        if(framework.length === 0){
            console.log(chalk.red('No framework available in the framework directory.'))
            process.exit(1)
        }

        const { selectedFramework } : any = await inquirer.prompt([
            {
                type: "list",
                name: "selectedFramework",
                message: "Select the framework to use:",
                choices: framework
            }
        ])

        const templateDir = path.resolve(__dirname , `../../templates/${selectedFramework}`)
        const template = fs.readdirSync(templateDir)

        if(template.length === 0){
            console.log(chalk.red("No templates available in this framework."))
            process.exit(1)
        }

        const {selectedTemplate} : any = await inquirer.prompt([
            {
                type: "list",
                name: "selectedTemplate",
                message: "Select the templates you want to use:",
                choices: template
            }
        ])


        await fetchTemplate(selectedFramework, selectedTemplate, projectDir)

    })

    program.parse(process.argv)


}

main()