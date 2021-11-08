#!/usr/bin/env node
import gameStart from '../src/index.js';
import { rules, questionAndAnswer } from '../games/brain-even.js';

gameStart(rules, questionAndAnswer);
