#!/usr/bin/env node

import { Command } from "commander";
import * as path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import { fetchTemplate } from "./utils/fetchTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let currentProjectDir: string | null = null;

const handleExit = async () => {
  try {
    if (currentProjectDir && (await fs.pathExists(currentProjectDir))) {
      try {
        await fs.remove(currentProjectDir);
        console.log(
          chalk.yellow(
            "✖ Project setup cancelled. Temporary files have been removed.",
          ),
        );
      } catch (removeError) {
        console.error(
          chalk.red("⚠ Error: Could not fully remove project directory."),
          removeError,
        );
        try {
          await fs.emptyDir(currentProjectDir);
          console.log(chalk.yellow("⚠ Project directory has been emptied."));
        } catch (emptyError) {
          console.error(
            chalk.red("✖ Critical: Unable to clean up project directory."),
            emptyError,
          );
        }
      }
    } else {
      console.log(chalk.yellow("✖ Project setup cancelled."));
    }
  } catch (error) {
    console.error(
      chalk.red("✖ Unexpected error during project cancellation:"),
      error,
    );
  }
  process.exit(0);
};

async function main() {
  process.on("SIGINT", handleExit);
  process.on("SIGTERM", handleExit);

  const program = new Command()
    .name("create-turbo-tpl")
    .description("Quickly scaffold new project templates")
    .version("1.0.0", "-v, --version", "Display version")
    .argument("[project-name]", "Name for your new project")
    .action(async (projectName?: string) => {
      projectName =
        projectName ||
        (
          await inquirer.prompt([
            {
              type: "input",
              name: "inputProjectName",
              message: "📝 Project name:",
              default: "my-turbo-tpl-project",
              validate: (input) => {
                if (!/^[a-z0-9-]+$/.test(input)) {
                  return "Project name must be lowercase, contain only letters, numbers, and hyphens";
                }
                return true;
              },
            },
          ])
        )?.inputProjectName;

      currentProjectDir = path.resolve(process.cwd(), projectName as string);

      if (fs.existsSync(currentProjectDir)) {
        console.log(
          chalk.red(`✖ Error: Directory "${projectName}" already exists.`),
        );
        process.exit(1);
      }

      const frameworkDir = path.resolve(__dirname, "../templates");
      const frameworks = fs.readdirSync(frameworkDir);

      if (frameworks.length === 0) {
        console.log(chalk.red("✖ No project templates available."));
        process.exit(1);
      }

      const { selectedFramework }: any = await inquirer.prompt([
        {
          type: "list",
          name: "selectedFramework",
          message: "🔧 Select framework:",
          choices: frameworks,
        },
      ]);

      const templateDir = path.resolve(
        __dirname,
        `../templates/${selectedFramework}`,
      );
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
          choices: templates,
        },
      ]);

      await fetchTemplate(
        selectedFramework,
        selectedTemplate,
        currentProjectDir,
        projectName as string,
      );
    });

  program.parse(process.argv);
}

main();
