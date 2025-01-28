import ora from "ora";
import { promisify } from "util";
import { exec } from "child_process";
import chalk from "chalk";

const execPromise = promisify(exec);

export const installDependencies = async (
  projectDir: string,
  selectedFramework: string,
) => {
  try {
    const packageManager = selectedFramework === "Turborepo" ? "pnpm" : "npm";
    const installSpinner = ora({
      text: `Installing dependencies with ${packageManager}...`,
      spinner: "dots",
      color: "green",
    }).start();

    await execPromise(`${packageManager} install`, { cwd: projectDir });
    installSpinner.succeed(chalk.green("Dependencies installed successfully"));
  } catch (error) {
    console.error(
      chalk.red(`✖ Dependency installation failed for ${selectedFramework}:`),
      error,
    );
    process.exit(1);
  }
};
