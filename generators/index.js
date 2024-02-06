"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
module.exports = class extends yeoman_generator_1.default {
    initializing() {
        // Initial setup
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            // Ask user questions here if any
        });
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
        this.fs.copyTpl(this.templatePath('custom-homepage.tsx'), this.destinationPath('pages/index.tsx'), {} // Context for templating
        );
        this.fs.copyTpl(this.templatePath('global.css'), this.destinationPath('styles/global.css'), {} // Context for templating
        );
    }
    install() {
        // Install dependencies
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false,
        });
    }
    end() {
        // Final setup or messages
        this.log('Your Next.js project is ready!');
    }
};
