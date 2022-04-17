import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -240,
    y: -180,
    direction: 152.00000000000003,
    costumeNumber: 1,
    size: 30,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 13,
    y: 4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: 101,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: 229,
    y: -138,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
