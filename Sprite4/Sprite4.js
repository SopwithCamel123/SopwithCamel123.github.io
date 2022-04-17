/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 55.25,
        y: 25.25
      }),
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 87.25,
        y: 81.25
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Start");
  }

  *whenIReceiveStart() {
    this.size = 100;
    this.costume = "costume1";
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.goto(229, -138);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.size = 200;
    this.costume = "costume2";
    this.goto(0, 0);
  }
}
