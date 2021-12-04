// GUN DEFINITIONS
const combineStats = function(arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12]
    };
  } catch (err) {
    console.log(err);
    console.log("A Erro has been found!"),
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,

    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9
  };
  return args => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  swarm: [18, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  rail: [18, 1.4, 0.1, 1, 1, 0.75, 1, 0.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  ac_ninja: [0.5, 0.1, 1, 1, 1, 1, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [
    1.8,
    0.75,
    0.5,
    0.8,
    0.9,
    0.6,
    1.2,
    1.1,
    1,
    0.8,
    1.3,
    1,
    1.25
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */

  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  jump: [1, 5, 0.5, 1, 2, 0.1, 0.1, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1
  ],
  spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  flame: [0.1, 0.00001, 1.7, 1, 0.7, 0.7, 1, 3, 0.8, 1, 1, 3.5, 1],
  flame: [0.1, 0.00001, 1.7, 1, 0.7, 0.7, 1, 3, 0.8, 1, 1, 3.5, 1],
  opspeed: [1, 1, 1, 1, 1, 1, 1, 9, 1.3, 1, 1, 1, 1],
  big2: [1, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1,
    0.25,
    1.5,
    1.2,
    1.35,
    0.25,
    1.25,
    0.8,
    0.65,
    1,
    1.5,
    1.5,
    1.2
  ],
  machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  autodrone: [
    1,
    1,
    1,
    1,
    1.25,
    1.15,
    1,
    1,
    0.85,
    99999999999999999999999999999999999999999999999999999999999999999,
    1,
    1,
    1.1
  ],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  eliteship: [1, 1, 1, 0.65, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  range: [1, 1, 1, 1, 0.6, 0.6, 0.8, 3, 0.7, 5, 1, 1, 1],
  fallenoverlord: [0.5, 1, 1, 0.65, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  big: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfbig: [1, 1, 1, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  smoll: [1, 1, 1, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  maxrecoil: [0.1, 0, 1, 1, 1, 1, 1, 32, 1, 1, 1, 1, 1],
  dominator: [8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  boostdom: [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  maxreload: [2, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  nospeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  omega: [1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  fake: [1, 1, 1, 1, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
  protectorswarmX:     [0.5,  0.000001, 1,      1,      100,    1,      1,      3,      1,     0.5,     5,      1,      10], 
  gunnerdom: [1, 0.000001, 1, 1, 1, 1, 0.5, 1, 1, 1, 5, 1, 1],
  boostdom: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  anti: [0.5, 0.000001, 1, 1, 1, 999, 999, 10, 1, 1, 5, 1, 1]
};

const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2
  },
  FOOD: {
    LEVEL: -1
  }
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.greenpentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3
  },
  LABEL: "Pentagon",
  VALUE: 2400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.greentriangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2
  },
  LABEL: "Triangle",
  VALUE: 2400,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 33 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.greensquare = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1
  },
  LABEL: "Square",
  VALUE: 2400,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 20
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0
  },
  DRAW_HEALTH: false
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
/***exports.obstacle = {//standart 
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  SHAPE: 8,
  LABEL: "Rock",

  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};***/
exports.obstacle = {//pumkin
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  SHAPE: 8,
  LABEL: "Rock",

  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 2,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};
    exports.babyObstacle = {
        PARENT: [exports.obstacle],
        SIZE: 25,
        SHAPE: -7,
        LABEL: "Gravel",
    };

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.bullet_sharp = {
  LABEL: "Bullet",
  TYPE: "bullet",
  SHAPE: [[-1.5,-0.4996],[-1,-1.01],[0.497,-0.88],[2.008,0],[0.497,0.857],[-1,1],[-1.5,0.5],[0,0.3004],[-1.514,0],[0,-0.301]],
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.poisonEffect = {
  LABEL: "Poison",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  COLOR: 11,
  SIZE: 5,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 10,
    DENSITY: 1.25,
    HEALTH: 2,
    DAMAGE: 0,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.growbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "grow"
};
exports.growbullet2 = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "grow2"
};

//ghost bullet or poison thing
exports.ghbullet = {
  PARENT: [exports.bullet],
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0 * wepHealthFactor,
    DAMAGE: 0 * wepDamageFactor,
    PUSHABILITY: 0
  },
  SHAPE: [
    [-0.45, -0.9],
    [0, -1],
    [0.25, -0.97],
    [0.5, -0.87],
    [0.708, -0.708],
    [0.87, -0.5],
    [0.97, -0.25],
    [1, 0],
    [0.97, 0.25],
    [0.87, 0.5],
    [0.708, 0.708],
    [0.5, 0.87],
    [0.25, 0.97],
    [0, 1],
    [-0.45, 0.9],
    [-0.8, 0.7],
    [-1.3, 0.3],
    [-1.8, 0],
    [-1.3, -0.3],
    [-0.8, -0.7]
  ]
};
exports.poisonbullet = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  POISON_TO_APPLY: 0,
  POISON: true,
  SHOWPOISON: true
};
exports.flame = {
  LABEL: "Flame",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: 4,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.55 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.raileffect = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 0.5,
    RANGE: 20,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.schild = {
  LABEL: "schild",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: 2,
  BODY: {
    PENETRATION: 3,
    SPEED: 0.00000000001,
    RANGE: 180,
    DENSITY: 1.25,
    HEALTH: 0.55 * wepHealthFactor,
    DAMAGE: 6 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.MISSEL = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [
    [1.79, 0.58],
    [0.32, 0.65],
    [0.15, 0.9],
    [-0.06, 0.9],
    [-0.01, 0.59],
    [-0.79, 0.55],
    [-0.79, 0.03],
    [-0.52, 0.03],
    [0.02, -0.02],
    [-0.04, -0.42],
    [0.18, -0.48],
    [0.31, -0.05],
    [1.8, -0.035],
    [2.024, 0.18],
    [2.41, 0.36],
    [2.02, 0.45]
  ],
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};

exports.hepullet = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  TYPE: "bullet",
  BODY: {
    DAMAGE: -1000 * wepDamageFactor
  }
};
exports.bullet03 = {
  LABEL: "",
  SIZE: 64,
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 20,
    SPEED: 0.4,
    RANGE: 80,
    DENSITY: 20,
    HEALTH: 45 * wepHealthFactor,
    DAMAGE: 20 * wepDamageFactor,
    PUSHABILITY: 0
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};

exports.bullet02 = {
  LABEL: "",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,

  BODY: {
    PENETRATION: 999,
    SPEED: 99999,
    RANGE: 210,

    DENSITY: 9999,
    HEALTH: 9999 * wepHealthFactor,
    DAMAGE: 9999 * wepDamageFactor,
    PUSHABILITY: 0
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};

exports.bullet022 = {
  LABEL: "",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,

  BODY: {
    PENETRATION: 999,
    SPEED: 0.1,
    RANGE: 210,

    DENSITY: 9999,
    HEALTH: 9999 * wepHealthFactor,
    DAMAGE: 9999 * wepDamageFactor,
    PUSHABILITY: 0
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};

exports.lazerbeam = {
  LABEL: "",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: 4,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm"
};

exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};

exports.swarm3 = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["hangOutNearMaster"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};

exports.drone2 = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.swarm2 = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 100,
    DAMAGE: 2,
    SPEED: 6,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: false,
  BUFF_VS_FOOD: true
};

exports.ac_swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: [
    [0, -1.4],
    [0.4, -0.4],
    [1.4, 0],
    [0.4, 0.4],
    [0, 1.4],
    [-0.4, 0.4],
    [-1.4, -0.004],
    [-0.464, -0.312],
    [-0.09, -0.274],
    [-0.25, -0.16],
    [-0.316, 0.004],
    [-0.28, 0.198],
    [-0.137, 0.34],
    [0.083, 0.373],
    [0.273, 0.29],
    [0.35, 0.09],
    [0.313, -0.13],
    [0.156, -0.26],
    [-0.09, -0.274],
    [-0.466, -0.31]
  ],
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "spin"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer"
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true
};
exports.autobullet = {
  PARENT: [exports.swarm],
  SHAPE: 0,
  AI: { FARMER: true },
  INDEPENDENT: true
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5
  }
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 120
  }
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};

exports.motherdrone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 4.2,
    PUSHABILITY: 0.9,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 3.25 * wepDamageFactor,
    SPEED: 4.5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};

exports.op_drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 1000 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 9,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 1.5
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};

exports.no_necro = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: false,
  HITS_OWN_TYPE: "hard",
  BODY: {
    DAMAGE: 12,
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};
exports.autodrone = {
  PARENT: [exports.no_necro],
  SHAPE: 3,
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};

exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};

exports.trapper_bullet = {
  PARENT: [exports.bullet],
  LABEL: "Trapper-Maker",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
         POSITION: [9, 13, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }, }, {
      POSITION: [14, 6, 1, 0, -4, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.norecoil
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 4, 0, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.norecoil
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};

exports.missile1 = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster

      }
    }
  ]
};

exports.twismissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  CONTROLLERS: ["fastspin"],
  FACING_TYPE: "autospin",
  BODY: {
    RANGE: 120,
    SPEED: 12
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, -90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};

exports.bullet04 = {
  PARENT: [exports.bullet02],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 60
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.anni, g.maxreload]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [0, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.anni, g.maxreload]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.boostmissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
        AUTOFIRE:true
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
        AUTOFIRE:true
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
        AUTOFIRE:true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
        AUTOFIRE:true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
        AUTOFIRE:true
      }
    }
  ]
};
exports.railbullet = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [1, 6, 1, 0, 2, -90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.slow, g.rail, g.norecoil]),
        TYPE: [exports.raileffect, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [1, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.slow, g.rail, g.norecoil]),
        TYPE: [exports.raileffect, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.celestial_missel = {
  PARENT: [exports.missile],
  SHAPE: 0,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [9, 13, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [9, 13, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  SHAPE: [
    [1.79, 0.58],
    [0.32, 0.65],
    [0.15, 0.9],
    [-0.06, 0.9],
    [-0.01, 0.59],
    [-0.79, 0.55],
    [-0.79, 0.03],
    [-0.52, 0.03],
    [0.02, -0.02],
    [-0.04, -0.42],
    [0.18, -0.48],
    [0.31, -0.05],
    [1.8, -0.035],
    [2.03, 0.18],
    [2.4, 0.31],
    [2.02, 0.38]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 0, 0, -2.72, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [10, 5, 0.8, 0, -2.72, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};

exports.buildergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
   POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};

exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.auto3gun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, -4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }
  ]
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.spraygun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 1.5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  23,     7,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.weak, g.mach, g.norecoil]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  12,    10,     1.4,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.weak, g.norecoil]),
                        TYPE: exports.bullet,
            }, }
    ],
};
    exports.opRAIL = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
      GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  30,     10,      -2,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic,  g.protectorswarmX]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  20,    8,    1,    0,     0,      0,      0,   ], 
                                 },   {
                    POSITION: [  13,    8,    1,    0,     0,      0,      0,   ], 
                             },   {
                    POSITION: [  34,    3,    1,    0,     5.5,      0,      0,   ],   
                            },   {
                    POSITION: [  34,    3,    1,    0,     -5.5,   0,      0,  ]
                }, 
        ],
    }; 
exports.trigun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 1.5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    }
  ]
};
exports.anti_tank_2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 0.0000001
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [17, 5, 1, 0, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.anti]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 5, 1, 0, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.anti]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.anti]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 9, -1.8, 6, 0, 0, 0]
    }
  ]
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.octogun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.assasingun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.planergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [13, 8.5, 1, 8, 0, 0, 0],
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }, {
      POSITION: [5, 12, 1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }, 
    }
  ]
};
exports.hivegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
      
    }
  ]
};
exports.mggun = {
  PARENT: [exports.genericTank],
  LABEL: "Mg",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  BODY: {
    FOV: 2,
  },
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 7, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.morespeed,
          g.weak,
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.flankgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.shotgungun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};
exports.growgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 12, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 14, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.huntgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.huntgun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 20, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.overgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.trigun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  BODY: {
    FOV: 0.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.trigun3 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  BODY: {
    FOV: 0.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ POSITION: [
        18,
        8,
        1,
        0,
        0,
        0,
        0
      ],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.twingun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.protectorswarmX, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.protectorswarmX, g.norecoil]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.Railergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, 30, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.railbullet
      }
    },
    {
      POSITION: [1, 8, 1, 25, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 20, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 15, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 10, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 5, 0, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, 5.5, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, -5.5, 0, 0]
    }
  ]
};
exports.ACgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.ACgun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.norecoil]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.elite_Destroyer_turret = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
        AUTOFIRE: true,
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
        AUTOFIRE: true,
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
        AUTOFIRE: true,
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 5 }]
    }
  ]
};
exports.elite_Sprayer_turret = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,

  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spraygun, { COLOR: 12 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spraygun, { COLOR: 12 }]
    }
  ]
};
exports.annigun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hybridgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.cargun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 5,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

exports.twisgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 14,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15.5, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.destroy,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.twismissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.skimgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 14,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.destroy,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.sidegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 14,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
  POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound, g.hunter, g.sidewind, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.misslergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.sidewind,
          g.pound,
          g.pound,
          g.pound,
          g.destroy,
          g.norecoil
        ]),
        TYPE: exports.celestial_missel,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      POSITION: [10, 11, 1.4, 8, 0, 0, 0]
    }
  ]
};
exports.triplegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bigauto1gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.crgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 17,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.swarm
      }
    }
  ]
};

exports.crgun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 4,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

exports.machgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block
      }
    }
  ]
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.jumpBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true
};

exports.mausBody = {
  LABEL: "",
  COLOR: 9,
  SHAPE: [[-1.19, -1.01], [2, -0.98], [2.01, 1.034], [-1.19, 1]],
  INDEPENDENT: true
};
exports.circle = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 0,
  INDEPENDENT: true
};
exports.developerBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 9,
  INDEPENDENT: true
};

exports.smasherBody2 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};

exports.Celestialbody12 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 6,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 9,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.misslergun]
    }
  ]
};

exports.Celestialbody22 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 6,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 26, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 77, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 129, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 231, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 282, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 333, 180, 0],
      TYPE: [exports.cargun]
    }
  ]
};

exports.Celestialbody32 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 6,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.triplegun]
    }
  ]
};
exports.Celestialbody1 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody2 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 4,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.hivegun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.hivegun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.hivegun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.hivegun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.hivegun]
    }
  ]
};

exports.Celestialbody15 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 12,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 30, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 60, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 120, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 240, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 300, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 4, 1.4, 8, 0, 330, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody25 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 9,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.skimgun]
    }
  ]
};

exports.Celestialbody35 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 26, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 77, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 129, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 231, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 282, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 333, 180, 0],
      TYPE: [exports.cargun]
    }
  ]
};

exports.Celestialbody45 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 35, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 110, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 252, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 325, 180, 0],
      TYPE: [exports.triplegun]
    }
  ]
};

exports.Celestialbody13 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 1,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody17 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody18 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.cargun ]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.cargun]
    }
  ]
};

exports.Celestialbody28 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.triplegun]
    }
  ]
};

exports.Celestialbody19 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 37,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody29 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 37,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.Railergun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.Railergun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.Railergun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.Railergun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.Railergun]
    }
  ]
};

exports.Celestialbody110 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 23,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody210 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 23,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.huntgun2]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.huntgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.huntgun2]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.huntgun2]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.huntgun2]
    }
  ]
};

exports.Celestialbody211 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 24,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.growgun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.growgun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.growgun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.growgun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.growgun]
    }
  ]
};

exports.Celestialbody111 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 24,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody112 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 20,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody212 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 20,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.skimgun]
    }
  ]
};

exports.Celestialbody113 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 18,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody213 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 18,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.twisgun]
    }
  ]
};

exports.Celestialbody114 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 38,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody214 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 38,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.mggun]
    }
  ]
};

exports.Celestialbody115 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 39,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.misslergun]
    }
  ]
};

exports.Celestialbody215 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 39,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.mggun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.mggun]
    }
  ]
};

exports.EL_Celestialbody11 = {
  LABEL: "",
  CONTROLLERS: ["reversespin",  "nearestDifferentMaster",
    "mapAltToFire",
    ],
  BODY: {
    FOV: 2,
  },
  PARENT: [exports.genericTank],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 25,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 26, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 77, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 129, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 231, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 282, 180, 0],
      TYPE: [exports.shotgungun]
    },
    {
      POSITION: [5, 9, 0, 333, 180, 0],
      TYPE: [exports.shotgungun]
    }
  ]
};

exports.EL_Celestialbody21 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody27 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.sidegun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.sidegun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.sidegun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.sidegun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.sidegun]
    }
  ]
};

exports.Celestialbody23 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 1,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.auto4gun]
    }
  ]
};

exports.Celestialbody216 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 4,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 35, 180, 0],
      TYPE: [exports.crgun]
    },
    {
      POSITION: [7, 9, 0, 110, 180, 0],
      TYPE: [exports.crgun]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun]
    },
    {
      POSITION: [7, 9, 0, 252, 180, 0],
      TYPE: [exports.crgun]
    },
    {
      POSITION: [7, 9, 0, 325, 180, 0],
      TYPE: [exports.crgun]
    }
  ]
};


exports.Celestialbody116 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 4,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9, 0, 26, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 77, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 129, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 180, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 231, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 282, 180, 0],
      TYPE: [exports.crgun2]
    },
    {
      POSITION: [7, 9, 0, 333, 180, 0],
      TYPE: [exports.crgun2]
    }
  ]
};

exports.Celestialbody14 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni,
          g.fallenoverlord,
          g.smoll,
          g.norecoil
        ]),
        TYPE: exports.autodrone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody24 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.skimgun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.skimgun]
    }
  ]
};

exports.Celestialbody16 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 37,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 7, 1.4, 8, 0, 26, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 77, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 129, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 231, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 282, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 7, 1.4, 8, 0, 333, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.smoll,
          g.anni,
          g.norecoil
        ]),
        TYPE: exports.autosunchip,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};

exports.Celestialbody26 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 37,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 9, 0, 35, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 110, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 180, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 252, 180, 0],
      TYPE: [exports.twisgun]
    },
    {
      POSITION: [9, 9, 0, 325, 180, 0],
      TYPE: [exports.twisgun]
    }
  ]
};


exports.SKbody = {
  LABEL: "",
  CONTROLLERS: ["spin", "nearestDifferentMaster", "minion", "canRepel"
    ],
  BODY: {
    FOV: 2,
  },
  PARENT: [exports.genericTank],
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 25,
  SHAPE: 4,
  INDEPENDENT: false,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 7, 5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
       POSITION: [8, 7, 5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    
    }
  ]
};


exports.SKbody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin", "nearestDifferentMaster", "minion", "canRepel"
    ],
  BODY: {
    FOV: 2,
  },
  PARENT: [exports.genericTank],
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 25,
  SHAPE: 4,
  INDEPENDENT: false,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    
    }
  ]
};


exports.DKbody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  BODY: {
    FOV: 2,
  },
  PARENT: [exports.genericTank],
  COLOR: 40,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 25,
  SHAPE: 9,
  INDEPENDENT: false,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 7, 5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [5, 7, 5, 45, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [5, 7, 5, -45, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [5, 7, 5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
       POSITION: [5, 7, 5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [5, 7, 5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [5, 7, 5, 225, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [5, 7, 5, -225, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    
    }
  ]
};


exports.Nbody = {
  LABEL: "",
  COLOR: 40,
  SHAPE: "M -2 1 V -1 h 4 V 1",
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2.5, 5, 5, -90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
       POSITION: [2.5, 5, 0, -90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
      POSITION: [2.5, 5, -5, 90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
       POSITION: [2.5, 5, 0, 90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
       POSITION: [4.5, 21, 0, 0, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
       POSITION: [4.5, 3, 0, 0, 360, 1],
      TYPE: [exports.hybridgun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
               POSITION: [5.5, 14, 0, 0, 360, 1],
      TYPE: [exports.octogun, { INDEPENDENT: false, COLOR: 41 }]
    
    
    }
  ]
};


exports.Nbody2 = {
  LABEL: "",
  COLOR: 41,
  SHAPE: 4,
  INDEPENDENT: true,
    TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
     
       POSITION: [3.5, 6, 0, 45, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
       POSITION: [3.5, 6, 0, -45, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
    }, {
               POSITION: [4.5, 0, 0, 0, 360, 1],
      TYPE: [exports.octogun, { INDEPENDENT: false, COLOR: 40 }]
        },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: [exports.buildergun, { COLOR: 35 }]
      },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: [exports.buildergun, { COLOR: 35 }]
    
    
    }
  ]
};
exports.pumkin_body = {
  LABEL: "",
  COLOR: 39,
  SHAPE: [[-1,-1],[-0.01,-0.5],[0.977,-0.194],[0.98,0.204],[0,0.507],[-1,1]],
  INDEPENDENT: true
};
exports.snowbody = {
  PARENT: [exports.genericTank],
  SHAPE: 7,
  LABEL: "",
  COLOR: 12,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8, 1, 6, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
        AUTOFIRE: true,
      }
    },
    {
      POSITION: [5, 8, 1, 6, 0, -26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
        AUTOFIRE: true,
     
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.annigun, { INDEPENDENT: false, COLOR: 5 }]
    }
  ]
};

exports.gunBody = {
  LABEL: "",
  COLOR: 18,
  SHAPE: 4,
  INDEPENDENT: true
};

exports.gunBody = {
  LABEL: "",
  COLOR: 18,
  SHAPE: 4,
  INDEPENDENT: true
};

exports.gunBody2 = {
  LABEL: "",
  COLOR: 18,
  SHAPE: 3,
  INDEPENDENT: true
};

exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true
};

exports.healSign = {
  PARENT: [exports.genericTank],
  COLOR: 12,
  LABEL: "",
  SHAPE: [
    [0.2, -0.8],
    [0.2, -0.196],
    [0.8, -0.196],
    [0.8, 0.2],
    [0.204, 0.2],
    [0.2, 0.8],
    [-0.2, 0.8],
    [-0.2, 0.2],
    [-0.8, 0.2],
    [-0.807, -0.2],
    [-0.2, -0.2],
    [-0.2, -0.8]
  ],
  BODY: {
    FOV: 3,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ]
  }
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],

  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true
};
exports.megasmashBody2 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],

  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.dominationBody2 = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 9,
  INDEPENDENT: true
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody2
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

        exports.baseProtectorX = {
            PARENT: [exports.genericTank],
            LABEL: 'Base',
            NAME: 'Mega Base',
            SIZE: 150,
            DAMAGE_CLASS: 0,
            ACCEPTS_SCORE: false,
            SKILL: skillSet({ 
                rld: 1,
                dam: 1,
                pen: 1,
                spd: 1,
                str: 1,
            }),
            BODY: { // def
                SPEED: 0,
                HEALTH: 10000, 
                DAMAGE: 10, 
                PENETRATION: 0.25, 
                SHIELD: 1000,
                REGEN: 100,
                FOV: 1,
                PUSHABILITY: 0,
                HETERO: 0,
            },
            //CONTROLLERS: ['nearestDifferentMaster'],
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
                          }, {
                POSITION: [  14,     6,      -2,      20,    190, 0], 
                    TYPE: [exports.opRAIL, { COLOR: 10, }],
                        }, {
                POSITION: [  14,     6,      -2,     -20,    190, 0], 
                    TYPE: [exports.opRAIL, { COLOR: 10, }],
                          
                        },
            ],
            GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     315,     0,   ], }, {
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     315,     0,   ], }, 
            ],
        };

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};

exports.SK_minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  SHAPE: 4,
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 7, 5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
       POSITION: [8, 7, 5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }
  ]
};
exports.overminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  MAX_CHILDREN: 4,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.overminion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 10000,
    SHIELD: 500,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 120,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  MAX_CHILDREN: 4,
  SHAPE: 15,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.triminion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.trapminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 13, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true
      }
    }
  ]
};

exports.machminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.machminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.triminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.triminion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.poundminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.twin_minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bossminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  SHAPE: 4,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    ACCEPT_SCORE: true,
    VALUE: 1000,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};

exports.ac_minion = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 10,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 4800,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        WAIT_TO_CYCLE: true,
        AUTOSPIN: true,
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.ac_minion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 10,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 4800,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        WAIT_TO_CYCLE: true,
        AUTOSPIN: true,
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [17, 9, 1, 0, -5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        WAIT_TO_CYCLE: true,
        AUTOSPIN: true,
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.ninja_minion = {
  PARENT: [exports.genericTank],
  LABEL: "NINJA",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 555,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: false
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25.5, 8, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.ac_ninja_minion = {
  PARENT: [exports.genericTank],
  LABEL: "NINJA CLOSER",
  CAN_GO_OUTSIDE_ROOM: false,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: true,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 9999999,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  AI: {
    BLIND: false
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "minion",
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
    "hangOutNearMaster",
    "mapTargetToGoal"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25.5, 8, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach, g.gunner, g.ac_ninja]),
        TYPE: exports.ac_swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret
    }
  ]
};
exports.eltur = {
  LABEL: "EL-Turret",
  PARENT: [exports.trap],
  SHAPE: 4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  CHILDREM: 5,
  BODY: {
    FOV: base.FOV * 2
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.pound,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.hypermissile
      }
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0]
    }
  ]
};
exports.skimboss = {
  PARENT: [exports.genericTank],
  LABEL: "elite skimmer",
  SIZE: 30,
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200
  },
  SHAPE: 3,
  COLOR: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret
    }
  ]
};

function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.grow != null) {
    turret.grow = options.size;
  }
  if (options.grow2 != null) {
    turret.grow2 = options.size2;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent
      }
    ]
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}

exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.pbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Poison Basic",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.lowpower]),
        TYPE: exports.poisonbullet
      }
    }
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.ghbullet
    }
  ]
};

exports.basic2 = {
  PARENT: [exports.genericTank],
  LABEL: "Page 2",
  RESET_UPGRADES: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.bta = {
  PARENT: [exports.genericTank],
  LABEL: "BETA-TESTER A",
  RESET_UPGRADES: true,
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.st = {
  PARENT: [exports.genericTank],
  LABEL: "Senior Tester",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "TESTBED",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.doms = {
  PARENT: [exports.genericTank],
  LABEL: "doms",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.misc = {
  PARENT: [exports.genericTank],
  LABEL: "Misc",
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.developer = {
  PARENT: [exports.genericTank],
  LABEL: "DEVELOPER",
  SIZE: 30,
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  FACING_TYPE: "autospin",
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20
  },
  SHAPE: 9,

  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.developerBody
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.annigun, { INDEPENDENT: true, COLOR: 16 }]
    }
  ]
};
exports.BETA = {
  PARENT: [exports.genericTank],
  LABEL: "BETA-TANKS[MAY NOT ADD]",
  SIZE: 30,
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  FACING_TYPE: "autospin",
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20
  },
  SHAPE: 9,

  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.developerBody
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.annigun, { INDEPENDENT: true, COLOR: 16 }]
    }
  ]
};

exports.arena_closer_tiers = {
  PARENT: [exports.genericTank],
  LABEL: "AC.TIERS",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 6.9, -1.8, 6.5, 0, 0, 0.1]
    }
  ]
};

exports.bosses = {
  PARENT: [exports.genericTank],
  LABEL: "BOSSES",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  MAX_CHILDREN: 2,
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};

exports.bosses2 = {
  PARENT: [exports.genericTank],
  LABEL: "page 2",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  MAX_CHILDREN: 2,
  LEVEL: 45,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};

exports.bosses3 = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial-page",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  MAX_CHILDREN: 2,
  LEVEL: 45,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};

exports.bosses5 = {
  PARENT: [exports.genericTank],
  LABEL: "Page 2",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  MAX_CHILDREN: 2,
  LEVEL: 45,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};

exports.bosses4 = {
  PARENT: [exports.genericTank],
  LABEL: "EL-Celestial-page",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  MAX_CHILDREN: 2,
  LEVEL: 45,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};

exports.ninja = {
  PARENT: [exports.genericTank],
  LABEL: "NINJA",
  //CONTROLLERS: ['nearestDifferentMaster'],
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25.5, 8, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [0, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.big, g.factory, g.mach]),
        TYPE: exports.ninja_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.RPG = {
  PARENT: [exports.genericTank],
  LABEL: "RPG",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.snake
      }
    }
  ]
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.protectortwin = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 99,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: [999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9, ],
  BODY: {
    HEALTH: 3000,
    REGEN: 1.5,
    SHIELD: 500
  },
  COLOR: 16,
  SHAPE: 4,
  SIZE: 240,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 8, -1.8, 0, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.twingun2, { INDEPENDENT: true, COLOR: 10 }]
    }
  ]
};
exports.grower = {
  PARENT: [exports.genericTank],
  LABEL: "Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 12, 1, 18, 0, 0, 0]
    }
  ]
};
exports.grower2 = {
  PARENT: [exports.genericTank],
  LABEL: "Giga Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 12, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 14, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.grower3 = {
  PARENT: [exports.genericTank],
  LABEL: "twin Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 5, 1, 8, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 5, 1, 8, -3, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 14, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.grower4 = {
  PARENT: [exports.genericTank],
  LABEL: "twin giga Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 7, 1, 8, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 7, 1, 8, -5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 16, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 16, 1, 8, 0, 0, 0]
    }
  ]
};
exports.grower5 = {
  PARENT: [exports.genericTank],
  LABEL: "triple Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 5, 1, 8, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 5, 1, 8, -3, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [22, 5, 1, 8, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 14, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.grower6 = {
  PARENT: [exports.genericTank],
  LABEL: "triple mega Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 5, 1, 8, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 5, 1, 8, -3, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [22, 7, 1, 8, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 14, 1, 18, 0, 0, 0]
    },
    {
      POSITION: [5.5, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.grower7 = {
  PARENT: [exports.genericTank],
  LABEL: "Flank-Grower",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 8, 1, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [19, 8, 1, 8, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [5.5, 12, 1, 18, 0, 0, 0]
    },{
      POSITION: [5.5, 12, 1, 18, 0, 120, 0]
    }, {
      POSITION: [5.5, 12, 1, 18, 0, -120, 0]
    }
  ]
};
exports.unknown = {
  PARENT: [exports.genericTank],
  INVISIBLE: [1, 1],
  LABEL: "Spectator",
  BODY: {
    FOV: 5,
    REGEN: 1,
    HEALTH: 1000
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 1, 0, 0, 0, 0, 0]
    }
  ]
};
exports.air = {
  PARENT: [exports.genericTank],
  LABEL: "air screw",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, -3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 9, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.RAIL = {
  PARENT: [exports.genericTank],
  LABEL: "Railgun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 10, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.single,
          g.single,
          g.single,
          g.pound
        ]),
        TYPE: exports.railbullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, 5.5, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, -5.5, 0, 0]
    }
  ]
};

exports.RAIL1 = {
  PARENT: [exports.genericTank],
  LABEL: "Railer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, 30, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.railbullet
      }
    },
    {
      POSITION: [1, 8, 1, 25, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 20, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 15, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 10, 0, 0, 0]
    },
    {
      POSITION: [1, 8, 1, 5, 0, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, 5.5, 0, 0]
    },
    {
      POSITION: [34, 3, 1, 0, -5.5, 0, 0]
    }
  ]
};
exports.sentiel = {
  PARENT: [exports.genericTank],
  LABEL: "Sentiel",
  MAX_CHILDREN: 2,
  SHAPE: 4,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [12, 8, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.over]),
        TYPE: exports.drone,
        LABEL: "Guided"
      }
    }
  ]
};

let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,

  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.jumpsmash = {
  PARENT: [exports.genericTank],
  LABEL: "jump-Smasher",
  DANGER: 6,

  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.jump, g.jump]),
        TYPE: exports.bullet
      }, },
        ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.jumpBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.jumpsmash2 = {
  PARENT: [exports.genericTank],
  LABEL: "Me Speedy BOI",
  DANGER: 6,
  SKILL: [0,0,0,0,0,0,0,99999999999999999999999,0,0],
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.jump, g.jump, g.jump, g.op]),
        TYPE: exports.bullet
      }, },
        ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: false,
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody
    }
  ]
};

exports.Land = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  DANGER: 7,
  INVISIBLE: [0.09, 0.05],
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [21, 0, 0, 90, 360, 0],
      TYPE: exports.smasherBody2
    }
  ]
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.ptwin = {
  PARENT: [exports.genericTank],
  LABEL: "Poison Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.poisonbullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.poisonbullet
      }
    }
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.ghbullet
    }
  ]
};

exports.food = {
  PARENT: [exports.genericTank],
  LABEL: "food shooter",
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.pentagon
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.square
      }
    }
  ]
};

exports.twin_closer = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Closer",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  SIZE: 50,
  NAME: "Arena Closer",

  BODY: {
    SPEED: 10,
    HEALTH: 999999999999999999999999999999999999999,
    DAMAGE: 9999,
    SHIELD: 999999999999999999999999999999
  },
  COLOR: 35,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast
        ]),
        TYPE: exports.bullet02
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.triple_closer = {
  PARENT: [exports.genericTank],
  LABEL: "Triplet Closer",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  SIZE: 50,
  NAME: "Arena Closer",

  BODY: {
    SPEED: 10,
    HEALTH: 999999999999999999999999999999999999999,
    DAMAGE: 9999,
    SHIELD: 999999999999999999999999999999
  },
  COLOR: 35,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast
        ]),
        TYPE: exports.bullet02
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast
        ]),
        TYPE: exports.bullet02
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.heal = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  DESITY: base.DENSITY * -9999999,
  BODY: {
    SHIELD: base.SHIELD * 1000,
    REGEN: base.REGEN * 250,
    HEALTH: base.HEALTH * 1000,
    DAMAGE: base.DAMAGE * -1000
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.hepullet
      }
    }
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: exports.healSign
    }
  ]
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.wierd_closer = {
  PARENT: [exports.genericTank],
  LABEL: "Flame closer",
  BODY: {
    FOV: 2,
    HEALTH: 999999999999999999,
    DAMAGE: 99999,
    SHIELD: 999999999999999999
  },
  SIZE: 100,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 0.1, -99, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.flame,
          g.big2,
          g.big2,
          g.big2,
          g.opspeed
        ]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [15, 12, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flame, g.opspeed]),
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.penta_ac = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Closer",
  NAME: "Arena Closer",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  DANGER: 6,
  COLOR: 35,
  BODY: {
    SPEED: base.SPEED * 0.85,
    SPEED: 5,
    HEALTH: 99999999999999,
    DAMAGE: 100,
    SHIELD: 999999999999999999
  },

  SIZE: 70,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet04
      }
    },
    {
      POSITION: [10, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet04
      }
    },
    {
      POSITION: [13, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet04
      }
    },
    {
      POSITION: [13, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet04
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet04
      }
    }
  ]
};
exports.arenacloser3 = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Closer",
  VALUE: 2400000,
  GOES_THROUGH_WALLS: true,

  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 999999999999999999999999999999999999999999999999,
    DAMAGE: 9,
    SHIELD: 999999999999999999999999999999999999999999999999,
    FOV: 59
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 35,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "mapTargetToGoal"
  ],
  SIZE: 80,
  NAME: "Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet022
      }
    },
    {
      POSITION: [10, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet022
      }
    },
    {
      POSITION: [13, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet022
      }
    },
    {
      POSITION: [13, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet022
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet022
      }
    }
  ]
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "Dual",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.makre = {
  PARENT: [exports.genericTank],
  LABEL: "Makre X I",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
        }, }, {
         POSITION: [15, 10, 1, 0, 0, 0, 0],
    
      }
  ]
};

exports.makre2 = {
  PARENT: [exports.genericTank],
  LABEL: "Makre X II",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 4.5, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
        }, }, {
          POSITION: [24, 4.5, 1, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
        }, }, {
         POSITION: [15, 13, 1, 0, 0, 0, 0],
    
      }
  ]
};

exports.makre3 = {
  PARENT: [exports.genericTank],
  LABEL: "Makre X III",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 4.5, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
        }, }, {
          POSITION: [24, 4.5, 1, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
            }, }, {
          POSITION: [26, 4.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound]),
        TYPE: exports.bullet_sharp
        }, }, {
         POSITION: [15, 13, 1, 0, 0, 0, 0],
    
      }
  ]
};

exports.homer = {
  PARENT: [exports.genericTank],
  LABEL: "homing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet
      }
    }
  ]
};

exports.homer3 = {
  PARENT: [exports.genericTank],
  LABEL: "triple homer",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 5, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet
      }
    },
    {
      POSITION: [18, 5, -2.5, 0, -2, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet
      }
    },
    {
      POSITION: [18, 5, -2.5, 0, 2, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet
      }
    }
  ]
};

exports.twinsniper = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 8.5, 1, 0, -5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.triplesniper = {
  PARENT: [exports.genericTank],
  LABEL: "Triplet Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 8.5, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [26, 8.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ak47 = {
  PARENT: [exports.genericTank],
  LABEL: "AK47",
  RESET_UPGRADES: true,
  INVISIBLE: [0, 0],
  ALPHA: 1,
  SHAPE:
    "m 7.93294,0.3852 c -0.0125,-0.025 -0.01,-0.2325 -0.01,-0.2325 l -0.0025,-0.105 -0.1025,0.0025 -0.095,0.2025 -0.095,0.145 c 0,0 -0.37496,0.0082 -0.535,0.005 -0.25,-0.005 -0.3925,-0.1425 -0.3925,-0.1425 l -0.0075,-0.095 -0.815,-0.005 c 0,0 0.005,-0.035 -0.015,-0.04 -0.02,-0.005 -0.99,-0.0025 -0.99,-0.0025 l -0.015,-0.0325 c 0,0 -0.1625,0 -0.2025,0.0025 -0.04,0.0025 -0.0875,0.055 -0.12,0.06 -0.0325,0.005 -0.1125,0.0025 -0.1125,0.0025 L 4.42044,0.0127 4.29794,0.0102 c 0,0 -0.005,0.05 0,0.115 -0.215,0 -1.80008,0.0032 -1.8775,0.0075 -0.045,0.0025 -0.09184,0.0296 -0.11302,0.05188 -0.02356,0.02476 -0.03814,0.06458 -0.03948,0.08562 -0.0675,0.005 -0.0825,0.0175 -0.12,0.055 -0.0375,0.0375 -0.03,0.125 -0.03,0.125 0,0 -0.57478,0.07816 -0.625,0.08 -0.16482,0.00598 -0.1125,-0.07 -0.3025,-0.05 -0.1014,0.01066 -1.09,0.125 -1.115,0.125 -0.025,0 -0.08438,0.01132 -0.0625,0.075 0.08812,0.25652 0.11084,0.58902 0.1025,0.69 -0.01078,0.13054 0.4025,-0.06 0.9225,-0.215 0.52,-0.155 1.095,-0.37 1.095,-0.37 0,0 0.05824,0.03246 0.0875,0.1025 0.02988,0.07156 0.0225,0.1575 0.0225,0.1575 0,0 -0.19,0.445 -0.24,0.52 -0.05,0.075 0.03,0.08 0.03,0.08 l 0.34,0.0925 c 0.035,0.00836 0.05582,-0.0025 0.06582,-0.03832 0.01532,-0.05488 0.02336,-0.27168 0.06336,-0.33168 0.04,-0.06 0.2175,-0.2675 0.2175,-0.2675 h 0.75832 l -0.00082,-0.31168 c 0,0 0.0025,0.01168 0.04914,0.005 0,0.80296 0.67824,1.48692 0.89502,1.59918 0.05768,0.02988 0.075,-0.005 0.09,-0.0325 0.015,-0.0275 0.18832,-0.30664 0.215,-0.36 0.02666,-0.05332 0.05332,-0.07332 -0.02668,-0.12664 C 4.0857,1.46426 4.10294,0.7702 4.10294,0.7702 c 0,0 0.285,-0.005 0.3175,-0.0025 0.0325,0.0025 0.13982,0.09734 0.1975,0.0975 0.23206,0.00074 0.2725,-0.1125 0.4475,-0.115 0.08006,-0.00114 0.9275,0 0.9275,0 v -0.1475 l 2.0025,0.0025 0.0025,-0.1975 c 0,0 -0.0525,0.0025 -0.065,-0.0225 z m -5.17634,0.66116 0.00134,-0.25164 0.5175,0.0025 c -0.02058,0.00796 0.0225,0.245 0.0225,0.245 l -0.54134,0.00414 z",
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 1.5, 1, 50, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.power,
          g.doublereload,
          g.doublereload,
          g.power
        ]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.autoass = makeAuto(exports.assassin, "");

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pound, g.hunter, g.sidewind, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};

exports.base_drone = {
  PARENT: [exports.genericTank],
  LABEL: "base",
  STAT_NAMES: statnames.drone,
  INVISIBLE: [1, 1],
  DANGER: 5,
  ACCEPTS_SCORE: false,
  BODY: {
    HEALTH: 10000,
    REGEN: 9999999,
    PUSHABILITY: 0,
    ACCELERATION: base.ACCEL * 0.75,
    FOV: 4
  },
  MAX_CHILDREN: 12,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.norecoil]),
        TYPE: exports.op_drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }]
    }
  ]
};

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.drone_keeper = {
  PARENT: [exports.genericTank],
  LABEL: "Drone-Keeper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -20, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 4,
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 20, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 4,
      }, }, {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overlooker = {
  PARENT: [exports.genericTank],
  LABEL: "Overlooker",
  DANGER: 9,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.4
  },
  MAX_CHILDREN: 12,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  NAME: "Mothership",
  SIZE: 32,
  SHAPE: 16,
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
    HEALTH: 48000
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.mothership_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  NAME: "Mothership",
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 32,
  VALUE: 100000000,
  SHAPE: 16,
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
    HEALTH: 48000
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.fallen_mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Mothership",
  NAME: "Fallen Mothership",
  SIZE: 40,
  SHAPE: 16,
  VALUE: 100000,
  DANGER: 7,
  COLOR: 18,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
    HEALTH: 48000
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
        TYPE: exports.autodrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 4, 1, 8, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
        TYPE: exports.motherdrone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.autodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2
      }
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autotrapper = makeAuto(exports.trapper);
exports.gunnertrap = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "gunnertrap",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }, }, {
          POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.tri_trapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Tri-trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }, }, {
         POSITION: [5, 8, 1, 8, 0, 120, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
        }, }, {
         POSITION: [5, 8, 1, 8, 0, -120, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.trapisc = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Trapisc",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      
        POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.lowpower]),
        TYPE: exports.bullet
        }, }, {
      POSITION: [6, 8, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [3, 8, 1.8, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      
      }
    }
  ]
};

exports.trapiscle = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Trapiscle",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      
        POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.lowpower]),
        TYPE: exports.bullet
        }, }, {
      POSITION: [6, 12, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1.4, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.hexatrap, g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.trapper_maker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "trapper Maker",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
       POSITION: [4, 8, -1.4, 17, 0, 0, 0]
    },
    {
      POSITION: [5, 8, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap,
          g.hexatrap,
          g.morespeed,]),
        TYPE: exports.trapper_bullet,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.xaripza = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Xaripza",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
       POSITION: [4, 8, -1.8, 17, 0, 0, 0]
    },
    {
      POSITION: [5, 8, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.8, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap,
          g.hexatrap,
          g.morespeed,]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autoover = makeAuto(exports.overseer, "");


function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.ac_ninja = {
  MAX_CHILDREN: 50,
  PARENT: [exports.genericTank],
  SIZE: 80,
  LABEL: "NINJA CLOSER",
  DANGER: 6,
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25.5, 8, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach, g.gunner, g.ac_ninja]),
        TYPE: exports.ac_swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [2, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.ac_ninja_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 4,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.guardin = {
  PARENT: [exports.genericTank],
  LABEL: "Guardin",
  DANGER: 6,
  COLOR: 5,
  NAME: "GURADIAN",
  MAX_CHILDREN: 28,
  SIZE: 24,
  SHAPE: 3,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    HEALTH: 1400,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 15, 1.4, 7, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.mach, g.stream]),
        TYPE: exports.swarm2,
        STAT_CALCULATOR: gunCalcNames.swarm2
      }
    }
  ]
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ]
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.destroyer = {
  PARENT: [exports.genericTank],
  LABEL: "Destroyer",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 11, 1.2, 7, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sub = {
  PARENT: [exports.genericTank],
  LABEL: "Submarine",
  INVISIBLE: [0.009, 0.009],
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
         }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
        }
    },
    {
       POSITION: [8.5, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      
      }
    }
  ]
};
exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ]
};

exports.baby_fac = {
  PARENT: [exports.genericTank],
  LABEL: "spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.fallenoverlord_ai = {
  PARENT: [exports.genericTank],
  LABEL: "fallen overlord",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  DANGER: 5,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: base.FOV * 1.5,
    HEALTH: 140,
    AUTOSPIN: true,

    DAMAGE: 30,
    SHIELD: 60
  },
  MAX_CHILDREN: 28,
  SIZE: 25,
  COLOR: 18,
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.fallenoverlord = {
  PARENT: [exports.genericTank],
  LABEL: "fallen overlord",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  DANGER: 5,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: base.FOV * 1.5,
    HEALTH: 140,
    AUTOSPIN: true,

    DAMAGE: 30,
    SHIELD: 60
  },
  MAX_CHILDREN: 28,
  SIZE: 25,
  COLOR: 18,
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.fallendirector = {
  PARENT: [exports.genericTank],
  LABEL: "fallen director",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  DANGER: 5,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: base.FOV * 1.5,
    HEALTH: 140,
    AUTOSPIN: true,

    DAMAGE: 30,
    SHIELD: 60
  },
  MAX_CHILDREN: 28,
  SIZE: 25,
  COLOR: 18,
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 8, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }, }, {
         POSITION: [6, 8, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 8, 1.2, 8, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.stream, g.fallenoverlord]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
    TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 9, 0, -5, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -120, 190, 0],
      TYPE: exports.auto3gun
 
    }
  ]
};

exports.dominator03 = {
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  DAMAGE_CLASS: 0,
  TYPE: "dominator",
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7000,
    DAMAGE: 5,
    PENETRATION: 0.25,
    SHIELD: 100,

    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  SIZE: 64,
  //CONTROLLERS: ['nearestDifferentMaster'],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 10, 1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.dominator]),
        TYPE: exports.bullet03
      }
    }
  ]
};

exports.dominator04 = {
  TYPE: "dominator",
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  DAMAGE_CLASS: 0,
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,

    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  MAX_CHILDREN: 12,
  SIZE: 64,
  FACING_TYPE: "autospin",
  //CONTROLLERS: ['nearestDifferentMaster'],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 7, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 7, 1.2, 8, 0, -225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak, g.norecoil]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.dominator02 = {
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  TYPE: "dominator",
  DAMAGE_CLASS: 0,
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,
    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  SIZE: 64,
  //CONTROLLERS: ['nearestDifferentMaster'],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.dominator]),

        TYPE: exports.bullet03
      }
    },
    {
      POSITION: [5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.dominator01 = {
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  TYPE: "dominator",
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  SIZE: 64,
  DAMAGE_CLASS: 0,
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,
    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [17, 5, 1, 0, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 5, 1, 0, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 9, -1.8, 6, 0, 0, 0]
    }
  ]
};
exports.dominator05 = {
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  TYPE: "dominator",
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  SIZE: 64,
  DAMAGE_CLASS: 0,
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,
    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.single,
          g.norecoil
        ]),
        TYPE: exports.growbullet2
      }
    },
    {
      POSITION: [6, 7, -1.8, 6, 0, 0, 0]
    },
    {
      POSITION: [2, 6, 1, 12, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 15, 0, 0, 0]
    }
  ]
};
exports.dominator06 = {
  PARENT: [exports.genericTank],
  LABEL: "dominator",
  TYPE: "dominator",
  CONTROLLERS: ["nearestDifferentMaster", "canRepel"],
  SIZE: 64,
  DAMAGE_CLASS: 0,
  DANGER: 99,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,
    FOV: 1.6,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.single,
          g.boostdom,
          g.norecoil
        ]),
        TYPE: exports.boostmissile
      }
    },
    {
      POSITION: [6, 7, -1.8, 6, 0, 0, 0]
       },
    {
      POSITION: [3, 6.5, -1.4, 15, 0, 0, 0]
  },
    {
      POSITION: [3, 7, 1.8, 12, 0, 0, 0]
     
    }
  ]
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.mind = {
  PARENT: [exports.genericTank],
  LABEL: "Hive mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfbig]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.twinmind = {
  PARENT: [exports.genericTank],
  LABEL: "Twin mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfbig]),
        TYPE: exports.twinminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.poundmind = {
  PARENT: [exports.genericTank],
  LABEL: "Pounder mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 2,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.poundminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        AUTOFIRE: true
      }
    }
  ]
};
exports.trimind = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-angle  mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.triminion,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.machmind = {
  PARENT: [exports.genericTank],
  LABEL: "Mach mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfbig]),
        TYPE: exports.machminion,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.trapmind = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 13, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfbig]),
        TYPE: exports.trapminion,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.twinmind = {
  PARENT: [exports.genericTank],
  LABEL: "Twin mind",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.circle
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfbig]),
        TYPE: exports.twinminion,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};

exports.AC_FAC = {
  PARENT: [exports.genericTank],
  LABEL: "ARENA CLOSER SUMMONER",
  DANGER: 7,
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 4,
    HEALTH: 99999999999999999
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [2, 99, 1, -9000, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.mach]),
        TYPE: exports.ac_minion,
        MAX_CHILDREN: 6,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 99, 1, -9000, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.mach]),
        TYPE: exports.ac_minion2,
        MAX_CHILDREN: 6,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};

exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.flamer = {
  PARENT: [exports.genericTank],
  LABEL: "Flamer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [12, 10, 1.4, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.mach,
          g.doublereload,
          g.stream,
          g.stream
        ]),
        TYPE: exports.flame
      }
    },
    {
      POSITION: [10, 10, 1, 6.5, 0, 0, 0]
    }
  ]
};

exports.twin_machine = {
  PARENT: [exports.genericTank],
  LABEL: "Twin machine",

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1.4, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 6, 1.4, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.alligator = {
  PARENT: [exports.genericTank],
  LABEL: "ALLIGATOR",

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1.4, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 6, 1.4, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.alligator = makeAuto(exports.twin_machine, "ALLIGATOR", {
  type: exports.machgun,
  size: 12
});
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dev_spray = {
  PARENT: [exports.genericTank],
  LABEL: "Dev ",
  SIZE: 150,
  LEVEL: 200,
  COLOR: 4,
  NAME: "Dev ",
  BODY: {
    HEALTH: 4800,
    SHIELD: 1000
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.op,
          g.mach,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.test = {
  PARENT: [exports.genericTank],
  LABEL: "fantasy tank",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [8, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.duomini = {
  PARENT: [exports.genericTank],
  LABEL: "Dual-Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 5.5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }, },  {
      POSITION: [22, 8, 1, 0, -5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.335],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.669],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.duostream = {
  PARENT: [exports.genericTank],
  LABEL: "Dual-Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 5.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 5.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 5.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }, }, {
          POSITION: [25, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, -5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, -5.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, -5.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.op = {
  PARENT: [exports.genericTank],
  LABEL: "KATUSCHKA",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.snake
      }
    },
    {
      POSITION: [17, 8, 1, 0, 3, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.snake
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.snake
      }
    },
    {
      POSITION: [17, 8, 1, 0, -3, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.snake
      }
    },
    {
      POSITION: [17, 8, 1, 0, -5.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.snake
      }
    }
  ]
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hybridmini = makeHybrid(exports.mini, "");
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.old_ac = {
  PARENT: [exports.genericTank],
  NAME: "Arena Closer",
  BODY: {
    DANGER: 5,
    HEALTH: 400,
    DAMAGE: 999,
    SHIELD: 100
  },
  COLOR: 13,
  SIZE: 30,
  LABEL: "old ARENA CLOSER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.mach,
          g.stream,
          g.stream,
          g.nail,
          g.op
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.auto_closer = {
  PARENT: [exports.genericTank],
  NAME: "Arena Closer",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 9999,
    DAMAGE: 9999,
    SHIELD: 9999
  },
  COLOR: 35,
  SIZE: 40,
  LABEL: "ARENA CLOSER ",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.auto_closer = makeAuto(exports.auto_closer, "Arena Closr Ception", {
  type: exports.ACgun,
  size: 12
});
exports.AC = {
  NAME: "Arena Closer",
  PARENT: [exports.genericTank],
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  COLOR: 35,
  SIZE: 40,
  LABEL: "ARENA CLOSER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.OCTO_AC = {
  NAME: "Arena Closer",
  PARENT: [exports.genericTank],
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  COLOR: 35,
  SIZE: 100,
  LABEL: "ARENA CLOSER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
      }, }, {  
        POSITION: [14, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
         }, }, {  
        POSITION: [14, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
         }, }, {  
        POSITION: [14, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
         }, }, {  
        POSITION: [14, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
         }, }, {  
        POSITION: [14, 8, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
         }, }, {  
        POSITION: [14, 8, 1, 0, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
          }, }, {  
        POSITION: [14, 8, 1, 0, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.AC_CLOSE = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Killer",
  VALUE: 2400000,
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 999999999999999999999999999999999999999999999999,
    DAMAGE: 9,
    SHIELD: 999999999999999999999999999999999999999999999999,
    FOV: 5
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 35,
  SIZE: 40,
  NAME: "Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, -300, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.arenaclosed = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Killer",
  VALUE: 2400000,
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 999999999999999999999999999999999999999999999999,
    DAMAGE: 9,
    SHIELD: 999999999999999999999999999999999999999999999999,
    FOV: 5
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 35,
  SIZE: 40,
  NAME: "Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, -300, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, -157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [14, 10, 1, -300, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.AC_TEAM = {
  NAME: "Arena Closer",
  PARENT: [exports.genericTank],
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999,
    FOV: 1
  },
  COLOR: 35,
  SIZE: 40,
  LABEL: "ARENA CLOSER TEAM",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [19, 0, 25, 0, 190, 0],
      TYPE: [exports.AC, { COLOR: 35 }]
    },
    {
      POSITION: [19, 0, -25, 0, 190, 0],
      TYPE: [exports.AC, { COLOR: 35 }]
    }
  ],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet02
      }
    }
  ]
};

exports.omega_AC = {
  NAME: "Arena Closer OMEGA CLEANER",
  PARENT: [exports.genericTank],
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  COLOR: 35,
  SIZE: 210,
  LABEL: "ARENA CLOSER OMEGA CLEANER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.omega, g.nail, g.mach]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.fallen_ac = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  VALUE: 2400000,
  RESET_UPGRADES: true,
  BROADCAST_MESSAGE: "congrutolation´s you killed a fallen Arena Closer!",
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 100,
    DAMAGE: 9,
    FOV: 5
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 16,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 40,
  NAME: "Fallen Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.single]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.arenacloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  VALUE: 2400000,
  RESET_UPGRADES: true,
  GOES_THROUGH_WALLS: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 999999999999999999999999999999999999999999999999,
    DAMAGE: 9,
    SHIELD: 999999999999999999999999999999999999999999999999,
    FOV: 5
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 35,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "mapTargetToGoal"
  ],
  SIZE: 40,
  NAME: "Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.arenacloser2 = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Closer",
  VALUE: 2400000,
  GOES_THROUGH_WALLS: true,

  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 999999999999999999999999999999999999999999999999,
    DAMAGE: 9,
    SHIELD: 999999999999999999999999999999999999999999999999,
    FOV: 5
  },
  CAN_BE_ON_LEADERBOARD: false,
  COLOR: 35,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "mapTargetToGoal"
  ],
  SIZE: 64,
  NAME: "Arena Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 8, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.MACH_AC = {
  PARENT: [exports.genericTank],
  SKILL: [9, 9, 9, 9, 9, 9, 9, 8, 9, 9],
  BODY: {
    DANGER: 5,
    HEALTH: 99999999999999999999,
    DAMAGE: 9999,
    SHIELD: 9999999999999999
  },
  COLOR: 35,
  SIZE: 50,
  LABEL: "MACHINE CLOSER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner]),
        TYPE: exports.bullet02
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet02
      }
    }
  ]
};
exports.MEGA_MINI = {
  PARENT: [exports.genericTank],
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  BODY: {
    ACCERLERATION: base.ACCEL * 0.75
  },
  LABEL: "MEGA MINIGUN",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22.0, 8.0, 0, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.lazer = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCERLERATION: base.ACCEL * 0.75
  },
  LABEL: "LAZER",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [41.0, 8.0, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [39.0, 8.0, 0, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [37.0, 8.0, 0, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [35.0, 8.0, 0, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [33.0, 8.0, 0, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [31.0, 8.0, 0, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [29.0, 8.0, 0, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [27.0, 8.0, 0, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [25.0, 8.0, 0, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [23.0, 8.0, 0, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [21.0, 8.0, 0, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [19.0, 8.0, 0, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    },
    {
      POSITION: [17.0, 8.0, 0, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini, g.stream]),
        TYPE: exports.lazerbeam
      }
    }
  ]
};

exports.jr_closer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  SIZE: 14,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Jr. ARENA CLOSER",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.anni
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.exploder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Exploder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.Tiger = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Tiger I",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X Y     ANGLE   DELAY */
      POSITION: [25, 6, 1, 0, 0, 0, 0],
       }, { 
       POSITION: [18, 7, 1, 0, 0, 0, 0],
   
    }, {
       POSITION: [15, 8, 1, 0, 0, 0, 0],
   
    }, {
      POSITION: [7, 11, 1.2, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.Tiger2 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Tiger II",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X Y     ANGLE   DELAY */
      POSITION: [31, 6, 1, 0, 0, 0, 0],
       }, { 
       POSITION: [24, 7, 1, 0, 0, 0, 0],
   
    }, {
       POSITION: [18, 8, 1, 0, 0, 0, 0],
   
    }, {
      POSITION: [7, 11, 1.2, 31, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 16 }]
    }
  ]
};

exports.mach2 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "machine gun mk2",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, -3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 9, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.mega_anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "MEGA ANNIHLATOR",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 10, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 5, 5, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak, g.range, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 0, 0, 5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak, g.range, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 0, 0, -5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak, g.range, g.norecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 5, 0, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.range], g.norecoil),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "Hive Shooter",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hybrid = makeHybrid(exports.exploder, "Hybrid");
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block
      }
    }
  ]
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0]
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0]
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0]
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0]
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block
      }
    }
  ]
};

exports.howitzer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Howitzer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 5, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 5, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [25, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.pound,
          g.arty,
          g.destroy
        ]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.twist = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15.5, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.destroy,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.twismissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.launch = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Launcher",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim
        ]),
        TYPE: exports.missile1,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
};
exports.spread_script = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot script",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, 0, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, 0, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, 0, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 0, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 0, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 0, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
};
exports.spread_script1 = {
  PARENT: [exports.genericTank],
  LABEL: "Multi shooter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    },
    {
      POSITION: [13, 4, 1, 0, -0.8, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, 0, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, 0, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, 0, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 0, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 0, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 0, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 0, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 0, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    }
  ]
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Hepta-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  },
  "Hexa-Trapper"
);

exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.tri_script = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle-script",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.wierd = {
  PARENT: [exports.genericTank],
  LABEL: "Wierd random tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.F22 = {
  PARENT: [exports.genericTank],
  LABEL: "F-22 raptor",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
    SPEED: base.SPEED + 2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.doublereload,
          g.nospeed
        ]),
        TYPE: exports.schild,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.doublereload,
          g.nospeed
        ]),
        TYPE: exports.schild,
        LABEL: "Side"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.arras_panzer = {
  PARENT: [exports.genericTank],
  LABEL: "TEST",
  MAX_CHILDREN: 15,
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [5, 3, 2, 8, 3, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.over]),
        TYPE: exports.drone
      }
    },
    {
      POSITION: [5, 3, 2, 8, -3, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.over]),
        TYPE: exports.drone
      }
    }
  ],

  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 17 }]
    }
  ]
};

exports.fallen_booster_ai = {
  PARENT: [exports.genericTank],
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "canRepel",
    "mapTargetToGoal"
  ],
  LABEL: "Fallen booster",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    HEALTH: 140,
    DAMAGE: 30,
    SHIELD: 60
  },
  DANGER: 7,
  SIZE: 25,
  COLOR: 18,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.fallen_booster = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen booster",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  BODY: {
    HEALTH: 140,
    DAMAGE: 30,
    SHIELD: 60
  },
  DANGER: 7,
  SIZE: 25,
  COLOR: 18,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.booster_closer = {
  PARENT: [exports.genericTank],
  LABEL: "Booster Closer",
  SKILL: [99999999999999999999, 9, 9, 9, 9, 9, 9, 9, 8, 9],
  BODY: {
    HEALTH: 99999999999999999999999999999999999999999999999999999,
    DAMAGE: 99999,
    SHIELD: 99999999999999999999999,
    SPEED: 25
  },
  DANGER: 7,
  SIZE: 150,
  COLOR: 35,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.stream,
          g.stream,
          g.nail,
          g.mach,
          g.fast,
          g.op
        ]),
        TYPE: exports.bullet02,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.knight = {
  PARENT: [exports.genericTank],
  LABEL: "Knight",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 9, 1.4, 19, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [0, 10, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.schild,
        LABEL: "schild"
      }
    },
    {
      POSITION: [18, 9, -1, 0, 0, 0, 0]
    },
    {
      POSITION: [18, 3, -2, 0, 5.5, 0, 0]
    },
    {
      POSITION: [18, 3, -2, 0, -5.5, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.surfer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.steahlbomber = {
  PARENT: [exports.genericTank],
  LABEL: "Steahl Bomber",
  INVISIBLE: [0.09, 0.05],
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bomberspawn = {
  PARENT: [exports.genericTank],
  LABEL: "Boom-Maker",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [4.5, 10, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 180, 0]
    }
  ]
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED
};
exports.autoboost = makeAuto(exports.booster);
exports.autoboost.BODY = {
  SPEED: base.SPEED
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};

exports.auto3_2 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3-2",
  DANGER: 6,
  SHAPE: 3,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.flankgun, { INDEPENDENT: false, COLOR: 16 }]
    
    }
  ]
};

exports.tool_set = {
  PARENT: [exports.genericTank],
  LABEL: "Tool-set",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.skimmer
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.spray
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.gunner
    }
  ]
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun
    }
  ]
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.tritrap = {
  LABEL: "",
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun
    }
  ]
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun
    }
  ]
};

exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.summoner_ai = {
  PARENT: [exports.genericTank],
  LABEL: "SUMMONER",
  NAME: "SUMMONER",
  COLOR: 35,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 25,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.5
  },
  SHAPE: 4,
  MAX_CHILDREN: 24,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 8, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};

exports.summoner = {
  PARENT: [exports.genericTank],
  LABEL: "SUMMONER",
  VALUE: 2400,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  SIZE: 25,
  COLOR: 35,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.5
  },
  SHAPE: 4,
  MAX_CHILDREN: 28,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Guard",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

// UPGRADE PATHS
exports.testbed.UPGRADES_TIER_1 = [
  exports.developer,
  exports.basic,
  exports.shotgun2,
  exports.hybridmini,
  exports.obstacle,
  exports.ak47,
  exports.food,
  exports.tri_script
];

exports.sentiel;
exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.machine,
  exports.pound,
  exports.flank,
  exports.director,
  exports.trapper,
  exports.grower,
  exports.makre,
  exports.basic2
];
exports.makre.UPGRADES_TIER_1 = [
  exports.makre2
];
exports.makre2.UPGRADES_TIER_1 = [
  exports.makre3
];
exports.basic2.UPGRADES_TIER_3 = [
  exports.basic,
  exports.homer,
  exports.mind,
  exports.unknown
];
exports.pbasic.UPGRADES_TIER_3 = [exports.ptwin];
exports.mind.UPGRADES_TIER_1 = [
  exports.twinmind,
  exports.poundmind,
  exports.machmind,
  exports.trapmind
];
exports.grower.UPGRADES_TIER_1 = [exports.grower2, exports.grower3];
exports.grower2.UPGRADES_TIER_2 = [exports.grower4];
exports.grower3.UPGRADES_TIER_2 = [exports.grower4];
exports.grower3.UPGRADES_TIER_2 = [exports.grower5, exports.grower7];
exports.grower5.UPGRADES_TIER_2 = [exports.grower6];
exports.basic2.UPGRADES_TIER_2 = [exports.single];

exports.developer.UPGRADES_TIER_1 = [
  exports.doms,
  exports.bosses,
  exports.arena_closer_tiers,
  exports.mothership,
  exports.fallen_mothership,
  exports.baseProtector,
  exports.misc,
  exports.BETA,
  exports.dev_spray,
  exports.unknown
];

exports.doms.UPGRADES_TIER_1 = [
  exports.dominator01,
  exports.dominator02,
  exports.dominator03,
  exports.dominator04,
  exports.dominator05,
  exports.dominator06
];
exports.bta.UPGRADES_TIER_1 = [
  exports.dominator04,
  exports.dominator05,
  exports.dominator06,
  exports.dominator03,
  exports.dominator02,
  exports.dominator01,
  exports.bosses,
  exports.baseProtector,
  exports.BETA,
  exports.misc,
  exports.unknown
];
exports.st.UPGRADES_TIER_1 = [
  exports.dominator04,
  exports.dominator05,
  exports.dominator06,
  exports.dominator03,
  exports.dominator02,
  exports.dominator01,
  exports.bosses,
  exports.baseProtector,
  exports.BETA,
  exports.misc,
  exports.AC,
  exports.unknown,
  exports.bta
];
exports.misc.UPGRADES_TIER_1 = [
  exports.bta,
  exports.ak47,
  exports.food,
  exports.tri_script,
  exports.spread_script,
  exports.base_drone,
  exports.mothership,
  exports.fallen_mothership,
  exports.F22,
  exports.wierd,
  exports.unknown,
  exports.jumpsmash2
];
exports.BETA.UPGRADES_TIER_1 = [
  exports.MEGA_MINI,
  exports.RAIL,
  exports.twinsniper,
  exports.triplesniper
];
exports.bosses.UPGRADES_TIER_1 = [
  exports.skimboss,
  exports.summoner,
  exports.fallenoverlord,
  exports.fallendirector,
  exports.fallen_booster,
  exports.guardin
];
exports.arena_closer_tiers.UPGRADES_TIER_1 = [
  exports.twin_closer,
  exports.triple_closer,
  exports.old_ac,
  exports.AC,
  exports.penta_ac,
  exports.wierd_closer,
  exports.booster_closer,
  exports.auto_closer,
  exports.AC_FAC,
  exports.omega_AC,
  exports.MACH_AC,
  exports.AC_TEAM,
  exports.ac_ninja,
  exports.AC_CLOSE,
  exports.OCTO_AC
];

exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.smash.UPGRADES_TIER_3 = [
  exports.jumpsmash,
  exports.megasmash,
  exports.spike,
  exports.autosmash,
  exports.Land,
  exports.weirdspike
];
exports.homer.UPGRADES_TIER_2 = [exports.homer3];
exports.twin.UPGRADES_TIER_2 = [
  exports.dual, 
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa,
  exports.twin_machine,
  exports.air
];
exports.twin_machine.UPGRADES_TIER_2 = [exports.dual, exports.alligator, exports.duomini];
exports.twin.UPGRADES_TIER_3 = [exports.triple];
exports.tri_trapper.UPGRADES_TIER_3 = [exports.hexatrap];
exports.trapper.UPGRADES_TIER_3 = [
  exports.overtrap,
  exports.gunnertrap,
  exports.tri_trapper,
  exports.minitrap,
exports.trapper_maker,
exports.xaripza,
exports.trapisc,
  exports.autotrapper
];
exports.trapisc.UPGRADES_TIER_2 = [exports.trapiscle, exports.xaripza, exports.trapper_maker];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner
];

exports.sniper.UPGRADES_TIER_2 = [
  exports.twinsniper,
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.builder,
  exports.heal,
  exports.ninja,
  exports.RAIL1,
  exports.rifle
];
exports.twinsniper.UPGRADES_TIER_2 = [exports.triplesniper];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
exports.RAIL1.UPGRADES_TIER_3 = [exports.RAIL];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer
];

exports.machine.UPGRADES_TIER_2 = [
  exports.mini,
  exports.mach2,
  exports.gunner,
  exports.twin_machine,
  exports.flamer
];
exports.pound.UPGRADES_TIER_2 = [exports.exploder, exports.artillery];
exports.machine.UPGRADES_TIER_3 = [exports.spray, exports.test];
exports.single.UPGRADES_TIER_3 = [exports.sentiel, exports.air];
exports.exploder.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.shotgun2,
  exports.jr_closer,
  exports.launch,
  exports.Tiger
];
exports.Tiger.UPGRADES_TIER_3 = [
  exports.Tiger2
];
exports.launch.UPGRADES_TIER_3 = [
  exports.hiveshooter,
  exports.RPG,
  exports.sidewind,
  exports.skimmer,
  exports.twist
];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
];

exports.mortar.UPGRADES_TIER_3 = [exports.howitzer];
exports.spread.UPGRADES_TIER_3 = [exports.spread_script1];
exports.mini.UPGRADES_TIER_3 = [exports.duomini, exports.stream, exports.nailgun];
exports.duomini.UPGRADES_TIER_3 = [exports.duostream];
exports.stream.UPGRADES_TIER_3 = [exports.lazer];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap
];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri
];
exports.fighter.UPGRADES_TIER_3 = [exports.knight];
exports.bomber.UPGRADES_TIER_3 = [exports.steahlbomber, exports.bomberspawn];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.auto3_2,
  exports.heavy3,
  exports.auto4,
  exports.tool_set
];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.fortress,
  exports.bomber
];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer
];
exports.director.UPGRADES_TIER_3 = [exports.baby_fac];
exports.baby_fac.UPGRADES_TIER_3 = [exports.factory];
exports.overseer.UPGRADES_TIER_3 = [
  exports.master,
  exports.overlord,
  exports.drone_keeper
];
exports.overlord.UPGRADES_TIER_3 = [
  exports.overlooker
];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.sub,
  exports.destroyer,
  exports.carrier,
  exports.battleship,
  exports.fortress
];
// tier 4

exports.anni.UPGRADES_TIER_1 = [exports.mega_anni];
exports.bosses2.UPGRADES_TIER_1 = [exports.bosses];
exports.bosses3.UPGRADES_TIER_1 = [exports.bosses];
exports.bosses5.UPGRADES_TIER_1 = [exports.bosses3];
exports.bosses4.UPGRADES_TIER_1 = [exports.bosses3];
exports.RPG.UPGRADES_TIER_1 = [exports.op];
exports.booster.UPGRADES_TIER_1 = [exports.surfer, exports.arras_panzer, exports.autoboost, exports.fighter];
exports.autotri.UPGRADES_TIER_1 = [exports.arras_panzer, exports.autoboost, exports.fighter, exports.booster];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];
            
    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.crasher2 = {
  TYPE: "crusher",
  LABEL: "Crusher",
  COLOR: 14,
  SHAPE: [
    [-0.994, -0.993],
    [0.5, -1],
    [1.198, -0.4],
    [1.197, 0.593],
    [0.5, 1],
    [-1, 0.97],
    [0.006, -0.01]
  ],
  SIZE: 10,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 5,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 2,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.heavy3gun,
  size: 12
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapTurret,
  size: 12
});

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!"
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true }
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_splitter = {
  PARENT: [exports.elite],
 LABEL: "Elite splitter",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 5 }]
    }, {
      POSITION: [15, 14.5, 0, 60, 0, 0],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [15, 14.5, 0, -60, 0, 0],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [15, 14.5, 0, 180, 0, 0],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: false, COLOR: 5 }]
    }
  ]
};
exports.l_elite = {
  PARENT: [exports.elite],
  BODY:{FOV: 1.5,},
  SIZE: 70,
 LABEL: "Legendary Elite Ultima",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: false, COLOR: 5 }]
    }, {
      POSITION: [15, 14, 0, 60, 0, 0],
      TYPE: [exports.elite_Sprayer_turret, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [15, 14, 0, -60, 0, 0],
      TYPE: [exports.elite_Sprayer_turret, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [15, 14, 0, 180, 0, 0],
      TYPE: [exports.elite_Sprayer_turret, { INDEPENDENT: false, COLOR: 5 }]
    }
  ]
};

exports.elite_battelship = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7.5, 0.6, 6, 8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, -8, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, 8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, -8, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, 8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, -8, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 7.5, 0.6, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.pound, g.eliteship]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 8, 0, 115, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [6, 8, 0, -115, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [6, 8, 0, 3, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 5 }]
    }
  ]
};

exports.elite_KILLER = {
  PARENT: [exports.elite],
  LABEL: "ELITE KILLER ",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 0, 8, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [5, 10, 5, -140, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 5, 98, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 0, 10, -90, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 12 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 12 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 12 }]
    }
  ]
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun]
    }
  ]
};

exports.gunship = {
  PARENT: [exports.genericTank],
  LABEL: "Gun-ship",
  SHAPE: 4,
  COLOR: 18,
  LEVEL: 200,
  SIZE: 40,
  BODY: {
    FOV: 2,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 18, 90, 180, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [11, 8, -18, 90, 180, 0],
      TYPE: exports.auto4gun
    },
    { POSITION: [11, 8, 18, -90, 180, 0], TYPE: exports.auto4gun },
    {
      POSITION: [11, 8, -18, -90, 180, 0],
      TYPE: exports.auto4gun
    },
    { POSITION: [11, 8, 36, 90, 180, 0], TYPE: exports.bigauto1gun },
    {
      POSITION: [11, 8, -36, 90, 180, 0],
      TYPE: exports.bigauto1gun
    },
    { POSITION: [11, 8, 36, -90, 180, 0], TYPE: exports.bigauto1gun },
    {
      POSITION: [11, 8, -36, -90, 180, 0],
      TYPE: exports.bigauto1gun
    },
    {
      POSITION: [11, 8, 0, -90, 180, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [11, 8, 0, 90, 180, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [20, 18, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, -18, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, 36, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, -36, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [13, 50, 0, 0, 360, 0],
      TYPE: exports.gunBody2
    },
    {
      POSITION: [13, 50, 0, 180, 360, 0],
      TYPE: exports.gunBody2
    },
    {
      POSITION: [4, 8, 8, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -8, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 8, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -8, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 26, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -26, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 26, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -26, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, -52, 0, 0, 360, 1],
      TYPE: [exports.hybridgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, 52, 0, 0, 360, 1],
      TYPE: [exports.hybridgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, -36, 0, 0, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, 36, 0, 0, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, 18, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, -18, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.gunship_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Gun-ship",
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SHAPE: 4,
  COLOR: 18,
  LEVEL: 200,
  SIZE: 40,
  BODY: {
    FOV: 2,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 18, 90, 180, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [11, 8, -18, 90, 180, 0],
      TYPE: exports.auto4gun
    },
    { POSITION: [11, 8, 18, -90, 180, 0], TYPE: exports.auto4gun },
    {
      POSITION: [11, 8, -18, -90, 180, 0],
      TYPE: exports.auto4gun
    },
    { POSITION: [11, 8, 36, 90, 180, 0], TYPE: exports.bigauto1gun },
    {
      POSITION: [11, 8, -36, 90, 180, 0],
      TYPE: exports.bigauto1gun
    },
    { POSITION: [11, 8, 36, -90, 180, 0], TYPE: exports.bigauto1gun },
    {
      POSITION: [11, 8, -36, -90, 180, 0],
      TYPE: exports.bigauto1gun
    },
    {
      POSITION: [11, 8, 0, -90, 180, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [11, 8, 0, 90, 180, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [20, 18, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, -18, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, 36, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [20, -36, 0, 0, 360, 0],
      TYPE: exports.gunBody
    },
    {
      POSITION: [13, 50, 0, 0, 360, 0],
      TYPE: exports.gunBody2
    },
    {
      POSITION: [13, 50, 0, 180, 360, 0],
      TYPE: exports.gunBody2
    },
    {
      POSITION: [4, 8, 8, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -8, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 8, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -8, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 26, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -26, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, 26, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [4, 8, -26, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, -52, 0, 0, 360, 1],
      TYPE: [exports.hybridgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, 52, 0, 0, 360, 1],
      TYPE: [exports.hybridgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, -36, 0, 0, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [10, 36, 0, 0, 360, 1],
      TYPE: [exports.bigauto1gun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, 18, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, -18, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};
exports.anti_tank = {
  PARENT: [exports.genericTank],
  LABEL: "anti-tank-machine gun",
  SIZE: 32,
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,

    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [17, 5, 1, 0, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 5, 1, 0, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 9, -1.8, 6, 0, 0, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [14, 0, 15, 0, 0, 0],
      TYPE: [exports.obstacle]
    },
    {
      POSITION: [14, 0, -15, 0, 0, 0],
      TYPE: [exports.obstacle]
    },
    {
      POSITION: [18, 0, 25, 0, 360, 0],
      TYPE: [exports.anti_tank_2]
    },
    {
      POSITION: [18, 0, -25, 0, 360, 0],
      TYPE: [exports.anti_tank_2]
    }
  ]
};
exports.anti_tank3 = {
  PARENT: [exports.genericTank],
  LABEL: "anti-tank-machine gun",
  SIZE: 32,
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 7500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 100,

    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [17, 5, 1, 0, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 5, 1, 0, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.gunnerdom]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 9, -1.8, 6, 0, 0, 0]
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [14, 0, 15, 0, 0, 0],
      TYPE: [exports.obstacle]
    },
    {
      POSITION: [14, 0, -15, 0, 0, 0],
      TYPE: [exports.obstacle]
    },
    {
      POSITION: [18, 0, 25, 0, 360, 0],
      TYPE: [exports.anti_tank_2]
    },
    {
      POSITION: [18, 0, -25, 0, 360, 0],
      TYPE: [exports.anti_tank_2]
    }
  ]
};

exports.Celestial_enternal = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 12,
  COLOR: 6,
  LEVEL: 200,
  SIZE: 100,
  BODY: {
    FOV: 1.3,
    HEALTH: 480000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 270, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 240, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 210, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 150, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 120, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 90, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 60, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 30, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 0, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody12]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody22]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody32]
    },
    {
      POSITION: [5, 9, 0, -90, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, -60, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, -30, 180, 0],
      TYPE: [exports.trapTurret]
    }
  ]
};

exports.Celestial_rkrake = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 15,
  COLOR: 9,
  VALUE: 100000000,
  LEVEL: 9900,
  SIZE: 130,
  BODY: {
    FOV: 1.3,
    HEALTH: 4800000000,
    SHIELD: 8000000,

    DAMAGE: 350000
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 9, 0, 10, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 34, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 58, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 82, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 106, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 130, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 154, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 178, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 202, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 226, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 250, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 274, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 298, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 322, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 346, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody15]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody25]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody35]
    },
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody45]
    }
  ]
};

exports.Celestial_freja = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 1,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody13]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody23]
    }
  ]
};

exports.Celestial_paladin = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 1,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody1]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody2]
    }
  ]
};

exports.Celestial_zavollista = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 4,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody116]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody216]
    }
  ]
};

exports.Celestial_xrazugs = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 38,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody114]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody214]
    }
  ]
};

exports.Celestial_traxzu = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 39,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody115]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody215]
    }
  ]
};

exports.EL_Celestial_elkroco = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 17,
  LEVEL: 200,
  SIZE: 70,
  BODY: {
    FOV: 1.3,
    HEALTH: 50000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.EL_Celestialbody11]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.EL_Celestialbody21]
    }
  ]
};

exports.Celestial_telarus = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 24,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody111]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody211]
    }
  ]
};

exports.Celestial_palkija = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 20,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody112]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody212]
    }
  ]
};

exports.Celestial_niše = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 18,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody113]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody213]
    }
  ]
};

exports.Celestial_melkia = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 5,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody17]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody27]
    }
  ]
};

exports.Celestial_lekrica = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 37,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody19]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody29]
    }
  ]
};

exports.Celestial_eltika = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 9,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody18]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody28]
    }
  ]
};

exports.Celestial_zapgus = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 23,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody110]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody210]
    }
  ]
};

exports.Celestial_zaphkiel = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 2,
  LEVEL: 200,
  SIZE: 100,
  BODY: {
    FOV: 1.3,
    HEALTH: 4800,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody14]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody24]
    }
  ]
};

exports.Celestial_theia = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  SHAPE: 9,
  COLOR: 37,
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 4800,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody16]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody26]
    }
  ]
};

exports.Celestial_enternal_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Enternal",
  SHAPE: 12,
  COLOR: 6,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 100,
  BODY: {
    FOV: 1.3,
    HEALTH: 480000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 270, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 240, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 210, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 150, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 120, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 90, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 60, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 30, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 0, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody12]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody22]
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody32]
    },
    {
      POSITION: [5, 9, 0, -90, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, -60, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, -30, 180, 0],
      TYPE: [exports.trapTurret]
    }
  ]
};

exports.Celestial_rkrake_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Rkrake",
  SHAPE: 15,
  COLOR: 9,
  VALUE: 100000000,
  LEVEL: 9900,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 130,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 8000,

    DAMAGE: 350
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 9, 0, 10, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 34, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 58, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 82, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 106, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 130, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 154, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 178, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 202, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 226, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 250, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 274, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 298, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 322, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [4, 9, 0, 346, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody15]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody25]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody35]
    },
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody45]
    }
  ]
};

exports.Celestial_freja_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Freja",
  SHAPE: 9,
  COLOR: 1,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody13]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody23]
    }
  ]
};

exports.Celestial_telarus_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Telarus",
  SHAPE: 9,
  COLOR: 24,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody111]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody211]
    }
  ]
};

exports.Celestial_palkija_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Palkija",
  SHAPE: 9,
  COLOR: 20,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody112]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody212]
    }
  ]
};

exports.Celestial_niše_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Niše",
  SHAPE: 9,
  COLOR: 18,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody113]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody213]
    }
  ]
};

exports.Celestial_melkia_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Melkia",
  SHAPE: 9,
  COLOR: 5,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody17]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody27]
    }
  ]
};

exports.Celestial_lekrica_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Lekrica",
  SHAPE: 9,
  COLOR: 37,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody19]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody29]
    }
  ]
};

exports.Celestial_eltika_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Eltika",
  SHAPE: 9,
  COLOR: 9,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody18]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody28]
    }
  ]
};

exports.Celestial_zapgus_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Zapgus",
  SHAPE: 9,
  COLOR: 23,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  LEVEL: 200,
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 48000,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody110]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody210]
    }
  ]
};

exports.Celestial_zaphkiel_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Zaphkiel",
  SHAPE: 9,
  COLOR: 2,
  LEVEL: 200,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  SIZE: 60,
  BODY: {
    FOV: 1.3,
    HEALTH: 4800,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody14]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody24]
    }
  ]
};

exports.Celestial_theia_ai = {
  PARENT: [exports.genericTank],
  LABEL: "Celestial",
  NAME: "Theia",
  SHAPE: 9,
  COLOR: 37,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  LEVEL: 200,
  SIZE: 100,
  BODY: {
    FOV: 1.3,
    HEALTH: 4800,
    SHIELD: 800,

    DAMAGE: 35
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 9, 0, 260, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 219, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 180, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 300, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 339, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 380, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 420, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 459, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [6, 9, 0, 500, 180, 0],
      TYPE: [exports.trapTurret]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody16]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody26]
    }
  ]
};

exports.elite_sprayer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    }
  ]
};

exports.lag = {
  LABEL: "Lag-test",
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.wierd, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.wierd, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.wierd, { COLOR: 5 }]
    }
  ]
};

exports.elite_ultimate = {
  PARENT: [exports.elite],
  LABEL: "ULTIMATE ELITE",
  SIZE: 50,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 6, -5, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [10, 6, -5, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [10, 6, -5, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    { POSITION: [10, 6, 5, 180, 190, 0], TYPE: [exports.spray, { COLOR: 5 }] },
    {
      POSITION: [10, 6, 5, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [10, 6, 5, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [5, 4, 0, 60, 360, 1],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [5, 4, 0, -60, 360, 1],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [5, 4, 0, 180, 360, 1],
      TYPE: [exports.elite_Destroyer_turret, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_octo = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.octo, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.octo, { COLOR: 5 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.octo, { COLOR: 5 }]
    }
  ]
};
exports.elite_octo = makeAuto(exports.elite_octo, "[Object´s Object]");
exports.CHEATER = {
  PARENT: [exports.genericTank],
  LABEL: "MULTI BOX TOOL",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 32, 0, -60, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, 60, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, 120, 360, 0],
      TYPE: [exports.sniper, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, -120, 360, 0],
      TYPE: [exports.sniper, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, 90, 360, 0],
      TYPE: [exports.stream, { COLOR: 5 }]
    },
    {
      POSITION: [18, 32, 0, -90, 360, 0],
      TYPE: [exports.stream, { COLOR: 5 }]
    }
  ]
};

exports.EMKD_1 = {
  PARENT: [exports.elite],
  LABEL: "Emkd-1",
  COLOR: 18,
  SHAPE: 10,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, 5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 4, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [8, -4, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [6, 9, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 36, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 72, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 108, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 144, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -36, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -72, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -108, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [6, 9, 0, -144, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};

exports.EMKD_2 = {
  PARENT: [exports.elite],
  LABEL: "Emkd-2",
  COLOR: 18,
  SHAPE: 12,
  SIZE: 40,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, 5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 4, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [8, -4, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};

exports.EMKD_3 = {
  PARENT: [exports.elite],
  LABEL: "Emkd-3",
  MAX_CHILDREN: 2,
  COLOR: 18,
  SHAPE: 12,
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 0.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bossminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 0, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, 5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 4, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [8, -4, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};

exports.EMKD_4 = {
  PARENT: [exports.elite],
  LABEL: "Emkd-4",
  MAX_CHILDREN: 3,
  COLOR: 18,
  SHAPE: 15,
  SIZE: 50,
  BODY: {
    HEALTH: 40000,
    REGEN: 5,
    SHIELD: 200
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 0.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bossminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 0, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, 5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 4, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [8, -4, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.auto3gun2
    }
  ]
};

exports.EMKD_5 = {
  PARENT: [exports.elite],
  LABEL: "Emkd-5",
  MAX_CHILDREN: 3,
  COLOR: 18,
  SHAPE: 15,
  SIZE: 50,
  BODY: {
    HEALTH: 40000,
    REGEN: 5,
    SHIELD: 200
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 0.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.bossminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 0, 0, 0, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 6, 5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 0, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, 5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 6, -5, 180, 360, 1],
      TYPE: [exports.machgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 4, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 5, 0, -90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 5, 0, 90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 7, 0, -135, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 7, 0, 135, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [8, -4, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.cargun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.auto3gun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.auto3gun2
    }
  ]
};

exports.BK_1_AI = {
  PARENT: [exports.miniboss],
  LABEL: "BK-1",
  VALUE: 150000,
  BODY: {
    FOV: 99999999999999,
    SPEED: base.SPEED * 0.25,
    HEALTH: 5000,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: "Front"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    }
  ]
};

exports.BK_1 = {
  PARENT: [exports.genericTank],
  LABEL: "BK-1",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 3,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [14, 4, 1, 0, 0, -150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    }
  ]
};

exports.BK_2 = {
  PARENT: [exports.genericTank],
  LABEL: "BK-2",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 4,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.trigun2
    }
  ]
};

exports.BK_3 = {
  PARENT: [exports.genericTank],
  LABEL: "BK-3",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 4,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.trigun2
    }
  ]
};

exports.BK_4 = {
  PARENT: [exports.genericTank],
  LABEL: "BK-4",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 4,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.trigun2
    }
  ]
};

exports.BK_5 = {
  PARENT: [exports.genericTank],
  LABEL: "BK-5",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 4,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.triminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.trigun3, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.trigun2
    },
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody32]
    }
  ]
};

exports.OVK_1 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-1",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 50,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_2 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-2",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 50,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.crgun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_3 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-3",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 50,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_4 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-4",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 60,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_5 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-5",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 60,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [5, 2.5, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 180, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_6 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-6",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 65,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [5, 2.5, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 180, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, 45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, -45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, -225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, 225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, 45, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, -45, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, -225, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, 225, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.OVK_7 = {
  PARENT: [exports.genericTank],
  LABEL: "OVK-7",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 18,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 65,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [5, 2.5, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, 180, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */

      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, 45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, -45, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, -225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 5, 0, 225, 360, 1],
      TYPE: [exports.cargun, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, 45, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, -45, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, -225, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    },
    {
      POSITION: [3, 8, 0, 225, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
};

exports.ACK_1 = {
  PARENT: [exports.genericTank],
  LABEL: "ACK-1",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 99999999999999999999999999999999999,
    SHIELD: base.SHIELD * 99999999999999999999999999999999999,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 3,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.ACgun
    }
  ]
};

exports.ACK_2 = {
  PARENT: [exports.genericTank],
  LABEL: "ACK-2",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 99999999999999999999999999999999999,
    SHIELD: base.SHIELD * 99999999999999999999999999999999999,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 3,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.ACgun
    }
  ]
};

exports.ACK_3 = {
  PARENT: [exports.genericTank],
  LABEL: "ACK-3",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 99999999999999999999999999999999999,
    SHIELD: base.SHIELD * 99999999999999999999999999999999999,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 3,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.ac_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 4, 1, 1, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big, g.big]),
        TYPE: exports.ac_minion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.ACgun
    }
  ]
};

exports.ACK_4 = {
  PARENT: [exports.genericTank],
  LABEL: "ACK-4",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 99999999999999999999999999999999999,
    SHIELD: base.SHIELD * 99999999999999999999999999999999999,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 3,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.ac_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 4, 1, 1, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big, g.big]),
        TYPE: exports.ac_minion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 4, 1, 1, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big, g.big, g.big2]),
        TYPE: exports.ac_ninja_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.ACgun
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.ACgun
    }
  ]
};

exports.ACK_5 = {
  PARENT: [exports.genericTank],
  LABEL: "ACK-5",
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 99999999999999999999999999999999999,
    SHIELD: base.SHIELD * 99999999999999999999999999999999999,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  COLOR: 3,
  SHAPE: 12,
  FACING_TYPE: "autospin",
  SIZE: 45,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.ac_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 4, 1, 1, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big, g.big]),
        TYPE: exports.ac_minion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [2, 4, 1, 1, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big, g.big, g.big2]),
        TYPE: exports.ac_ninja_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 6, 0, 0, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, 180, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -30, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -60, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -90, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -120, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [3, 6, 0, -150, 360, 1],
      TYPE: [exports.ACgun2, { INDEPENDENT: true, COLOR: 16 }]
    },
    {
      POSITION: [5, 9, 0, 0, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 30, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 60, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 90, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 120, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 150, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, 180, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, -150, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, -120, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, -90, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, -60, 190, 0],
      TYPE: exports.ACgun2
    },
    {
      POSITION: [5, 9, 0, -30, 190, 0],
      TYPE: exports.ACgun2
    }
  ]
};


exports.SK_1 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-1",
  SHAPE: 4,
  COLOR: 35,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }
  ]
};


exports.SK_2 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-2",
  SHAPE: 4,
  COLOR: 35,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [14, 6, 0, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 35 }]
    }
  ]
};


exports.SK_3 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-3",
  SHAPE: 4,
  SIZE: 30,
  COLOR: 35,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 7, 5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 0, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, -90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
       POSITION: [8, 7, 5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, -5, 90, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    },
    {
      POSITION: [8, 7, 5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
      },
    {
      POSITION: [8, 7, -5, 180, 190, 0],
      TYPE: [exports.auto3gun, { COLOR: 35 }]
    }, {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.SK_1, { INDEPENDENT: false, COLOR: 35 }]
      }, {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 17 }]
    }
  ]
};


exports.SK_4 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-4",
  SHAPE: 4,
  SIZE: 45,
  COLOR: 35,
    GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 5, 1.4, 8, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: [exports.SK_3, { INDEPENDENT: false, COLOR: 35 }]
      }, {
      POSITION: [2, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 17 }]
    }
  ]
};


exports.SK_5 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-5",
  SHAPE: 4,
  SIZE: 70,
  COLOR: 35,
    GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 5, 1.4, 8, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.SKbody,  { INDEPENDENT: false, COLOR: 35 }]
      }, {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.SKbody2, { INDEPENDENT: false, COLOR: 35 }]
        }, {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: [exports.SK_2, { INDEPENDENT: false, COLOR: 35 }]
    }
  ]
};


exports.SK_6 = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "SK-6",
  SHAPE: 4,
  SIZE: 90,
  COLOR: 35,
    GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 5, 1.4, 8, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }, }, {
        POSITION: [2, 5, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.SKbody,  { INDEPENDENT: false, COLOR: 35 }]
      }, {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.SKbody2, { INDEPENDENT: false, COLOR: 35 }]
        }, {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: [exports.SK_3, { INDEPENDENT: false, COLOR: 35 }]
    }
  ]
};
exports.summonerX = {
  PARENT: [exports.summoner],
  AI: { NO_LEAD: false },
  LABEL: "SummonerX",
  SHAPE: 4,
  SIZE: 90,
  COLOR: 35,
    GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 5, 1.4, 8, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
        
      }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, 5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
         }
    },
    {
      POSITION: [3, 5, 1.4, 8, -5, -90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.no_necro,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        MAX_CHILDREN: 3,
      }, }, ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
         POSITION: [4, 5, 0, 0, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
           }, {
         POSITION: [4, 5, 0, 90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
           }, {
         POSITION: [4, 5, 0, -90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
             }, {
         POSITION: [4, 5, 0, 180, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
    }
  ]
};

exports.Dark_matter = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Dark Matter",
  SHAPE: 8,
  SIZE: 90,
  COLOR: 40,
    GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [2, 5, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
          }, }, {
        POSITION: [2, 5, 1, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.SK_minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      MAX_CHILDREN: 1,
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.DKbody
    }, {
    POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.DKbody
      }, {
    POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.DKbody
      }, {
         POSITION: [2, 9, 0, 0, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 9, 0, 22.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, -22.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, 45, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, -45.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, 67.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, -67.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, 90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, -90, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, 112.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, -112.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 9, 0, 135, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 9, 0, -135, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 9, 0, 157.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 9, 0, -157.5, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 9, 0, -180, 360, 1],
      TYPE: [exports.mggun, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, 0, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, 22.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, -22.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, 45, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, -45.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, 67.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, -67.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, 90, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, -90, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, 112.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, -112.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, {  
         POSITION: [2, 7, 0, 135, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, -135, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, 157.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, -157.5, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
               }, { 
         POSITION: [2, 7, 0, -180, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 35 }]
                }, {
         POSITION: [4, 5, 0, 0, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
           }, {
         POSITION: [4, 5, 0, 45, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
           }, {
         POSITION: [4, 5, 0, -45, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
             }, {
         POSITION: [4, 5, 0, -90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
                }, {
         POSITION: [4, 5, 0, 90, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
                   }, {
         POSITION: [4, 5, 0, 135, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
                     }, {
         POSITION: [4, 5, 0, -135, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
               }, {
         POSITION: [4, 5, 0, 180, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
      }, {
         POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: [exports.Railergun, { INDEPENDENT: false, COLOR: 35 }]
    }
  ]
};


exports.Nightmare = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  LABEL: "Nightmare",
  SHAPE: 7,
  SIZE: 90,
  COLOR: 40,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      
      POSITION: [10.5, 26.2, 0, 26, 360, 0],
      TYPE: exports.Nbody2
    }, {
  POSITION: [10.5, 26.2, 0, 76, 360, 0],
      TYPE: exports.Nbody2
      }, {
  POSITION: [10.5, 26.2, 0, 129, 360, 0],
      TYPE: exports.Nbody2
        }, {
  POSITION: [10.5, 26.2, 0, 180, 360, 0],
      TYPE: exports.Nbody2
    }, {
  POSITION: [10.5, 26.2, 0, 231, 360, 0],
      TYPE: exports.Nbody2
       }, {
  POSITION: [10.5, 26.2, 0, 282, 360, 0],
      TYPE: exports.Nbody2
          }, {
  POSITION: [10.5, 26.2, 0, 333, 360, 0],
      TYPE: exports.Nbody2
            }, {
              POSITION: [9.5, 12, 0, 26, 360, 0],
      TYPE: exports.Nbody
    }, {
  POSITION: [9.5, 12, 0, 76, 360, 0],
      TYPE: exports.Nbody
      }, {
  POSITION: [9.5, 12, 0, 129, 360, 0],
      TYPE: exports.Nbody
        }, {
  POSITION: [9.5, 12, 0, 180, 360, 0],
      TYPE: exports.Nbody
    }, {
  POSITION: [9.5, 12, 0, 231, 360, 0],
      TYPE: exports.Nbody
       }, {
  POSITION: [9.5, 12, 0, 282, 360, 0],
      TYPE: exports.Nbody
          }, {
  POSITION: [9.5, 12, 0, 333, 360, 0],
      TYPE: exports.Nbody
          }, {
         POSITION: [2.5, 8, 0, 26, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 26, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 26, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                    }, {
         POSITION: [2.5, 8, 0, 76, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 76, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 76, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                    }, {
         POSITION: [2.5, 8, 0, 129, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 129, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 129, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                    }, {
         POSITION: [2.5, 8, 0, 180, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 180, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 180, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                           }, {
         POSITION: [2.5, 8, 0, 231, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 231, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 231, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                    }, {
         POSITION: [2.5, 8, 0, 282, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 282, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 282, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                    }, {
         POSITION: [2.5, 8, 0, 333, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 40 }]
               }, {
         POSITION: [2.5, 8, 3, 333, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                  }, {
         POSITION: [2.5, 8, -3, 333, 360, 1],
      TYPE: [exports.assasingun, { INDEPENDENT: false, COLOR: 41 }]
                              }, {
         POSITION: [2.5, 5, 0, 26, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 26, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 26, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                             }, {
         POSITION: [2.5, 5, 0, 76, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                               }, {
         POSITION: [2.5, 5, -3, 76, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 76, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                              }, {
         POSITION: [2.5, 5, 0, 129, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 129, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 129, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                              }, {
         POSITION: [2.5, 5, 0, 180, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 180, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 180, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                                  }, {
         POSITION: [2.5, 5, 0, 231, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 231, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 231, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                            }, {
         POSITION: [2.5, 5, 0, 282, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 282, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 282, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                    }, {
         POSITION: [2.5, 5, 0, 333, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 41 }]
                       }, {
         POSITION: [2.5, 5, -3, 333, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                          }, {
         POSITION: [2.5, 5, 3, 333, 360, 1],
      TYPE: [exports.planergun, { INDEPENDENT: false, COLOR: 40 }]
                            }, {
         POSITION: [4.5, 0, 0, 0, 360, 1],
      TYPE: [exports.octogun, { INDEPENDENT: false, COLOR: 35 }]
                        
    }
  ]
};

exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret
      }
    ]
  };
})();

exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  GIVE_KILL_MESSAGE: false,
  VALUE: 24580,
  SKILL: skillSet({
    rld: 1,
    dam: 0.5,
    pen: 1,
    spd: 1,
  }),
  BODY: {
    SIZE: 10,
    LEVEL: 45
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth"
  ],
  AI: { STRAFE: true }
};


exports.testbed.UPGRADES_TIER_1.push(exports.CHEATER);
exports.developer.UPGRADES_TIER_1.push(exports.anti_tank);
exports.bosses.UPGRADES_TIER_1.push(exports.elite_sprayer, exports.elite_KILLER, exports.elite_destroyer, exports.elite_gunner, exports.elite_battelship, exports.elite_octo, exports.palisade, exports.bosses2, exports.bosses3);
exports.bosses2.UPGRADES_TIER_1.push(exports.elite_splitter, exports.elite_ultimate, exports.l_elite, exports.EMKD_1, exports.gunship, exports.BK_1, exports.ACK_1, exports.OVK_1, exports.SK_1, exports.Dark_matter, exports.Nightmare, exports.summonerX);
exports.bosses3.UPGRADES_TIER_1.push(exports.bosses4);
exports.EMKD_1.UPGRADES_TIER_2 = [exports.EMKD_2];
exports.EMKD_2.UPGRADES_TIER_2 = [exports.EMKD_3];
exports.EMKD_3.UPGRADES_TIER_2 = [exports.EMKD_4];
exports.EMKD_4.UPGRADES_TIER_2 = [exports.EMKD_5];
exports.OVK_1.UPGRADES_TIER_2 = [exports.OVK_2];
exports.OVK_2.UPGRADES_TIER_2 = [exports.OVK_3];
exports.OVK_3.UPGRADES_TIER_2 = [exports.OVK_4];
exports.OVK_4.UPGRADES_TIER_2 = [exports.OVK_5];
exports.OVK_5.UPGRADES_TIER_2 = [exports.OVK_6];
exports.OVK_6.UPGRADES_TIER_2 = [exports.OVK_7];
exports.ACK_1.UPGRADES_TIER_2 = [exports.ACK_2];
exports.ACK_2.UPGRADES_TIER_2 = [exports.ACK_3];
exports.ACK_3.UPGRADES_TIER_2 = [exports.ACK_4];
exports.ACK_4.UPGRADES_TIER_2 = [exports.ACK_5];
exports.BK_1.UPGRADES_TIER_2 = [exports.BK_2];
exports.BK_2.UPGRADES_TIER_2 = [exports.BK_3];
exports.BK_3.UPGRADES_TIER_2 = [exports.BK_4];
exports.BK_4.UPGRADES_TIER_2 = [exports.BK_5];
exports.SK_1.UPGRADES_TIER_2 = [exports.SK_2];
exports.SK_2.UPGRADES_TIER_2 = [exports.SK_3];
exports.SK_3.UPGRADES_TIER_2 = [exports.SK_4];
exports.SK_4.UPGRADES_TIER_2 = [exports.SK_5];
exports.SK_5.UPGRADES_TIER_2 = [exports.SK_6];
exports.bosses4.UPGRADES_TIER_1.push(exports.EL_Celestial_elkroco);
exports.bosses3.UPGRADES_TIER_1.push(exports.Celestial_enternal, exports.Celestial_rkrake, exports.Celestial_freja, exports.Celestial_zaphkiel, exports.Celestial_theia, exports.Celestial_paladin, exports.Celestial_melkia, exports.Celestial_eltika, exports.Celestial_lekrica, exports.Celestial_zapgus, exports.Celestial_telarus, exports.Celestial_palkija, exports.bosses5);
exports.bosses5.UPGRADES_TIER_1.push(exports.Celestial_niše, exports.Celestial_xrazugs, exports.Celestial_traxzu, exports.Celestial_zavollista);
exports.developer.UPGRADES_TIER_1.push(exports.lag);
