import Generator from 'yeoman-generator';

module.exports = class extends Generator {
  private answers: any; // Type accordingly

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: 'nextjs-project',
      },
      // Add more questions here
    ]);
  }

  writing() {
    this.log('Generating Next.js project in TypeScript with Tailwind CSS...');
    // Your logic to scaffold the project
  }

  install() {
    this.log('Installing dependencies...');
    // Your logic to install dependencies
  }
};
