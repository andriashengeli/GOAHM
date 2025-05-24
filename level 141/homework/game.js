
import mainCharacter from './characters.js';

// Import named constants with new names
import { warrior as tank, healer as support } from './characters.js';

// Log the party lineup
console.log(`Party: ${mainCharacter} (Main), ${tank} (Tank), ${support} (Support)`);