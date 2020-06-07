#!/usr/bin/env node

import { isEven, quest, question } from "../src/games/brain-even.js";
import { brainGames } from "../src/index.js";

brainGames(question, quest, isEven);
