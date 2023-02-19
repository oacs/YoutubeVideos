import { makeProject } from '@motion-canvas/core/lib';
import './global.css';
import example from './scenes/intro?scene';

export default makeProject({
  scenes: [example],
  background: '#141414',
});
