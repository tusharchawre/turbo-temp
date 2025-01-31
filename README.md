# Turbo-Temp

🚀 **Turbo-Temp** is your go-to CLI tool for scaffolding project templates efficiently from a monorepo. It allows developers to pick a framework, select a template, and instantly set up a fully-functional project—all with one command.

## Features

- 🌟 **Dynamic Frameworks**: Choose from multiple frameworks available in your monorepo.
- ⚡ **Template Selection**: Pick specific templates for each framework.
- 🛠️ **Ready to Use**: Automatically installs dependencies after setup.
- 📁 **Customizable**: Easily add new templates to the monorepo.
- 🤖 **Developer-Friendly**: Built with TypeScript and optimized for modern workflows.

## Getting Started

Follow these steps to set up a project using **Turbo-Temp**.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

Run the following command to use Turbo-Temp via `npx`:

```bash
npx create-turbo-tpl@latest
```

Alternatively, you can install it globally:

```bash
npm install -g create-turbo-tpl
```

### Usage

Run the CLI tool to create a project:

```bash
npx create-turbo-tpl@latest <project-name>
```

#### Example:

```bash
npx create-turbo-tpl@latest my-new-project
```

If you omit `<project-name>`, it will default to `my-turbo-project`. You can customize the name during the interactive setup process.

### Interactive Setup

1. Choose a framework (e.g., React, Next.js, Vue, etc.).
2. Select a template from the available options.
3. Sit back as Turbo-Temp:
   - Creates the project directory
   - Copies the selected template
   - Installs all required dependencies

### Adding New Templates

To add new templates, simply:

1. Navigate to the `templates` folder in your monorepo.
2. Add your new framework as a subdirectory (if it doesn't exist).
3. Add your template inside the framework's folder.

Folder structure example:

```
templates/
├── react/
│   ├── basic-template/
│   └── advanced-template/
├── nextjs/
│   ├── starter-template/
│   └── e-commerce-template/
```

### Commands

```bash
# Check the version
npx create-turbo-tpl@latest -v

# Display help
npx create-turbo-tpl@latest --help
```

## Development

### Local Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/turbo-temp.git
```

2. Navigate to the CLI package:

```bash
cd turbo-temp/packages/cli
```

3. Install dependencies:

```bash
pnpm install
```

4. Build the CLI:

```bash
pnpm build
```

5. Run the CLI locally:

```bash
pnpm dev <project-name>
```

### Testing

You can test the CLI by running:

```bash
npm limk
create-turbo-tpl <project-name>
```

## Contributing

We welcome contributions to Turbo-Temp! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request with a detailed description of your changes.


## Support

If you encounter any issues or have questions, feel free to:

- Open an issue on GitHub
---

🌟 **Star this repo** if you find it useful!
