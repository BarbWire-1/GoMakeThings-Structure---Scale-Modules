/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

import { createTreasure, showLoot, lootListeners } from './src/loot.js'
import './src/roll-dice.js';

createTreasure();
showLoot();
lootListeners();