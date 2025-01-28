import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { updatePackageJson } from "./updatePackageJson.js";
import { installDependencies } from "./installDependencies.js";

export const fetchTemplate = async (
  selectedFramework: string,
  selectedTemplate: string,
  projectDir: string,
  projectName: string,
) => {
  const templateDir = path.resolve(
    __dirname,
    `../templates/${selectedFramework}/${selectedTemplate}`,
  );

  if (!fs.existsSync(templateDir)) {
    console.log(
      chalk.red(`✖ Error: Template "${selectedTemplate}" not found.`),
    );
    process.exit(1);
  }

  const copySpinner = ora({
    text: "Scaffolding your project...",
    spinner: "dots",
    color: "blue",
  }).start();

  try {
    await fs.copy(templateDir, projectDir);

    await updatePackageJson(
      projectDir,
      projectName,
      selectedFramework,
      selectedTemplate,
    );

    copySpinner.succeed(chalk.green("Project template created successfully"));
    await installDependencies(projectDir, selectedFramework);

    const nextStepsCommand =
      selectedFramework === "Turborepo" ? "pnpm run dev" : "npm run dev";
    console.log(chalk.green("✔ Project setup complete!"));
    console.log(chalk.cyan(`\n🚀 Next steps:`));
    console.log(chalk.gray(`   cd ${path.basename(projectDir)}`));
    console.log(chalk.gray(`   ${nextStepsCommand}`));
  } catch (error) {
    copySpinner.fail(chalk.red("✖ Project template creation failed"));
    console.error(chalk.red("Detailed error:"), error);
    process.exit(1);
  }
};
