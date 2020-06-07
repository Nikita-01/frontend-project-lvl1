#!/usr/bin/env node

import { gcd, quest, question } from "../src/games/brain-gcd.js";
import { brainGames } from "../src/index.js";

brainGames(question, quest, gcd);