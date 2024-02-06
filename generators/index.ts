import Generator from 'yeoman-generator';

module.exports = class extends Generator {
  private answers: any; // Type accordingly

  initializing() {
    // Initial setup
  }

  async prompting() {
    // Ask user questions here if any
  }

  writing() {
    // Scaffolding Next.js project
    this.spawnCommandSync('npx', ['create-next-app@latest', this.options.name || 'nextjs-project']);

    // Navigate into the project directory
    const projectDir = `${process.cwd()}/${this.options.name || 'nextjs-project'}`;
    process.chdir(projectDir);

    // Set up TypeScript
    this.spawnCommandSync('npm', ['install', '--save-dev', 'typescript', '@types/react', '@types/node']);
    this.spawnCommandSync('touch', ['tsconfig.json']);

    // Set up Tailwind CSS
    this.spawnCommandSync('npm', ['install', '-D', 'tailwindcss', 'postcss', 'autoprefixer']);
    this.spawnCommandSync('npx', ['tailwindcss', 'init', '-p']);

    // Add custom homepage and global.css
    // this.fs.copyTpl(
    //   this.templatePath('custom-homepage.tsx'),
    //   this.destinationPath('pages/index.tsx'),
    //   {} // Context for templating
    // );
    // this.fs.copyTpl(
    //   this.templatePath('global.css'),
    //   this.destinationPath('styles/global.css'),
    //   {} // Context for templating
    // );
  }

  install() {
    // Install dependencies
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
    });
  }

  end() {
    // Final setup or messages
    this.log('Your Next.js project is ready!');
  }
};
