import Generator = require('yeoman-generator')
import { green } from 'chalk'
import yosay = require('yosay')
import { exec } from 'child_process'

interface Answers {
  answer1: string
}

interface Arguments {
  name: string
  arg1: string
  arg2: string
  argRest: string[]
  option1: boolean
  option2: string
}

module.exports = class extends Generator<Arguments> {
  answers: Answers
  constructor(args, opts: Arguments) {
    super(args, opts)

    this.argument("name", { type: String, required: false, default: 'nextjs-project', description: 'Project name' })
    this.argument("arg1", { type: String, required: false, default: 'arg1default', description: 'Argument 1' })
    this.argument("arg2", { type: String, required: false, default: 'arg2default', description: 'Argument 2' })
    this.argument("argRest", { type: Array, required: false, default: [], description: 'Rest arguments' })

    this.option("option1", { type: Boolean, default: false, description: 'Option 1', alias: 'o' })
    this.option("option2", { type: String, default: 'opt2default', description: 'Option 2', alias: 'p' })
  }

  async prompting() {
    this.log(yosay(`Welcome to  ${green('TS')} generator !`))

    const prompts: Generator.Question[] = [
      {
        type: 'confirm',
        name: 'answer1',
        message: 'Would you like to enable this option?',
        default: true
      }
    ]

    this.answers = await this.prompt<Answers>(prompts)
  }

  writing() {
    const templateData = {
      ...this.answers,
      ...this.options
    }
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath(`${this.options.name}/dummyfile.txt`),
      templateData
    )
    const repoName = this.options.name || 'nextjs-project';
    this.spawnCommandSync('npx', [
      'create-next-app@latest',
      repoName,
      '--use-yarn',
      '--eslint',
      '--tailwind',
      '--ts',
      '--src-dir',
      '--no-app',
      '--import-alias',
      '@/*',
    ]);
  }

  async install() {
    // this.log.info('Installing yarn packages');
    // await exec(`yarn install --cwd ${this.destinationPath()}/${this.options.name}`);
    // console.log('Nothing to install')
  }
}
