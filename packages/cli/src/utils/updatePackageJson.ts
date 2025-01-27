import path from "path";
import fs from "fs-extra";
import chalk from "chalk";

export const updatePackageJson = async (
    projectDir: string,
    projectName: string,
    selectedFramework: string,
    selectedTemplate: string,
  ) => {
    const packageJsonPath = path.join(projectDir, "package.json");
  
    try {
      const packageJson = await fs.readJson(packageJsonPath);
  
      packageJson.name = projectName;
      packageJson.description = `A ${selectedFramework} project created with tempMan template: ${selectedTemplate}`;
  
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    } catch (error) {
      console.error(chalk.red("✖ Error updating package.json:"), error);
    }
  };
  