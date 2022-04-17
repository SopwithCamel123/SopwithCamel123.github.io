/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 19.12095321675278,
        y: 19.12095321675278
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.random(-230, 0), this.random(-170, 170));
    this.direction = this.random(1, 360);
    while (true) {
      this.move(7);
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.direction = 180 - (this.direction - 90) + 90;
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        if (this.stage.vars.oneWay == 1) {
          this.goto(this.x + 30, this.y);
        } else {
          this.direction = 180 - (this.direction - 90) + 90;
          this.goto(this.x + -10, this.y);
        }
      }
      if (this.stage.vars.restart == 1) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.stage.vars.oneWay = 0;
    this.visible = false;
    this.goto(-250, -190);
    this.stage.vars.restart = 1;
    yield* this.wait(0.5);
    this.stage.vars.restart = 0;
    this.size = 30;
    for (let i = 0; i < 60; i++) {
      this.createClone();
      yield;
    }
  }
}
