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
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.answers = yield this.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Project name:',
                    default: 'nextjs-project',
                },
                // Add more questions here
            ]);
        });
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
