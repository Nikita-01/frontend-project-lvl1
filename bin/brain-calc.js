#!/usr/bin/env node

import { calculator, quest, question } from "../src/games/brain-calc.js";
import { brainGames } from "../src/index.js";

brainGames(question, quest, calculator);
