#!/usr/bin/env node
import gameStart from '../src/index.js';
import { rules, questionAndAnswer } from '../games/brain-calc.js';

gameStart(rules, questionAndAnswer);
