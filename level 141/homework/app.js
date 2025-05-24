// Import everything as zoo (namespace import)
import * as zoo from './zoo.js';

// Import only 'parrot' separately
import { parrot } from './zoo.js';

// Log as described
console.log(zoo.default()); // "Welcome to the Zoo!"
console.log(zoo.lion);      // "🦁"
console.log(parrot);        // "🦜"