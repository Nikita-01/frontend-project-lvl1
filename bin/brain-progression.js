#!/usr/bin/env node

import { progression, quest, question } from "../src/games/brain-progression.js";
import { brainGames } from "../src/index.js";

brainGames(question, quest, progression);