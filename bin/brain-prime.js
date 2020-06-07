#!/usr/bin/env node

import { isPrime, quest, question } from "../src/games/brain-prime.js";
import { brainGames } from "../src/index.js";

brainGames(question, quest, isPrime);