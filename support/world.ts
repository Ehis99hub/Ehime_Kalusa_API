import { setWorldConstructor, World } from '@cucumber/cucumber';

class CustomWorld extends World {
    constructor(options: any) {
        super(options);
        // Initialize your custom world properties here
    }
}

setWorldConstructor(CustomWorld);