const scripts = {
	1: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Spit",
		"params": [],
		"script": "o13754"
	},
	2: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Clense",
		"params": [],
		"script": "o17726"
	},
	3: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Grenade",
		"params": [],
		"script": "o1736"
	},
	4: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.SpitPool",
		"params": [],
		"script": "o4254"
	},
	5: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Medkit",
		"params": [],
		"script": "o4198"
	},
	6: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Rocket",
		"params": [],
		"script": "o5049"
	},
	7: {
		"name": "com.ninjakiwi.sas4.scripts.avatars.Assault",
		"params": [],
		"script": "o20757"
	},
	8: {
		"name": "com.ninjakiwi.sas4.scripts.avatars.Medic",
		"params": [],
		"script": "o10351"
	},
	9: {
		"name": "com.ninjakiwi.sas4.scripts.avatars.Heavy",
		"params": [],
		"script": "o1009"
	},
	11: {
		"name": "com.ninjakiwi.sas4.scripts.ScriptParamaterTypes",
		"params": [],
		"script": null
	},
	12: {
		"name": "com.ninjakiwi.sas4.scripts.ScriptParamaterOptionality",
		"params": [],
		"script": null
	},
	14: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Spitter",
		"params": [],
		"script": "o14541"
	},
	15: {
		"name": "scripts.ScriptParamaterOptionality",
		"params": [],
		"script": null
	},
	16: {
		"name": "scripts.ScriptParamaterTypes",
		"params": [],
		"script": null
	},
	18: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.SlowZombie",
		"params": [],
		"script": "o2623"
	},
	19: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.FasterZombie",
		"params": [],
		"script": "o7027"
	},
	20: {
		"name": "com.ninjakiwi.sas4.scripts.editor.EnemySpawn",
		"params": [],
		"script": null
	},
	21: {
		"name": "com.ninjakiwi.sas4.scripts.editor.AvatarSpawn",
		"params": [],
		"script": "o6603"
	},
	22: {
		"name": "com.ninjakiwi.sas4.scripts.editor.PhysicsGraph",
		"params": [],
		"script": null
	},
	23: {
		"name": "com.ninjakiwi.sas4.scripts.editor.AIPathGraph",
		"params": [],
		"script": null
	},
	24: {
		"name": "com.ninjakiwi.sas4.scripts.editor.Treasure",
		"params": [],
		"script": null
	},
	25: {
		"name": "com.ninjakiwi.sas4.scripts.editor.Door",
		"params": [],
		"script": null
	},
	26: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.FatZombie",
		"params": [],
		"script": "o3092"
	},
	27: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Worm",
		"params": [],
		"script": "o20015"
	},
	28: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.RunnerZombie",
		"params": [],
		"script": "o1764"
	},
	29: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.ShieldedZombie",
		"params": [],
		"script": "o18111"
	},
	31: {
		"name": "com.ninjakiwi.sas4.scripts.doors.Barrier",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "health base"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles hurt"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "enemies hurt"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 1,
				"name": "image to remove when open"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 1,
				"name": "image to remove when open(extra)"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 1,
				"name": "image to show when open(extra)"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "Event ID when open"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "Time before auto-open"
			},
			{
				"id": 14,
				"type": "boolean",
				"opt": 1,
				"name": "custom pods open"
			}
		],
		"script": "o17241"
	},
	32: {
		"name": "com.ninjakiwi.sas4.scripts.doors.TimedDoor",
		"params": [
			{
				"id": 9,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "barrier graph"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "imageL"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "imageL open"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 0,
				"name": "imageR"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "imageR open"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 0,
				"name": "open/close anim time"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "time till opens"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 0,
				"name": "health base"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles hurt"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "enemies hurt"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "image to remove when open"
			},
			{
				"id": 10,
				"type": "int",
				"opt": 1,
				"name": "spawn event ID"
			}
		],
		"script": "o9395"
	},
	33: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.SpawnType",
		"params": [
			{
				"id": 1,
				"type": "int",
				"opt": 0,
				"name": "Enemy Type (as per this script)"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "Enemy Count"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "Spawn Interval"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 1,
				"name": "Refill"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 1,
				"name": "Cant Walk"
			}
		],
		"script": "o6515"
	},
	34: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.ZombDroidServant",
		"params": [],
		"script": "o11259"
	},
	35: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.ZombDroidSoldier",
		"params": [],
		"script": "o2379"
	},
	36: {
		"name": "com.ninjakiwi.sas4.scripts.doors.StarTrekDoor",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "imageL"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "imageL open"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "imageR"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "imageR open"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 0,
				"name": "open/close time"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "door open trigger area"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "health base"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles hurt"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "enemies hurt"
			}
		],
		"script": "o67"
	},
	64: {
		"name": "com.ninjakiwi.sas4.scripts.physics.StaticWall",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics graph"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass thru"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "enemies pass thru"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 0,
				"name": "players pass thru"
			},
			{
				"id": 115,
				"type": "boolean",
				"opt": 0,
				"name": "survivors pass thru"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "ai soldiers pass thru"
			}
		],
		"script": "o13977"
	},
	67: {
		"name": "com.ninjakiwi.sas4.scripts.objects.Crate",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 14,
				"type": "boolean",
				"opt": 0,
				"name": "above player layer"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 0,
				"name": "health base (0 for invincible)"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles can hurt"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "enemies can target/hurt"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "moveable"
			},
			{
				"id": 12,
				"type": "float",
				"opt": 1,
				"name": "mass"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "linear dampening"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "friction"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "restitution"
			},
			{
				"id": 15,
				"type": "boolean",
				"opt": 1,
				"name": "fixed rotation"
			}
		],
		"script": "o16637"
	},
	69: {
		"name": "com.ninjakiwi.sas4.scripts.objects.Barrel",
		"params": [
			{
				"id": 14,
				"type": "float",
				"opt": 0,
				"name": "physical radius (px)"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 0,
				"name": "health base (0 for invincible)"
			},
			{
				"id": 17,
				"type": "boolean",
				"opt": 0,
				"name": "explodes"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 0,
				"name": "explosion radius (m)"
			},
			{
				"id": 16,
				"type": "float",
				"opt": 0,
				"name": "explosion damage"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles can hurt"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "enemies can target/hurt"
			},
			{
				"id": 18,
				"type": "boolean",
				"opt": 0,
				"name": "moveable"
			},
			{
				"id": 12,
				"type": "float",
				"opt": 1,
				"name": "mass"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "linear dampening"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "friction"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "restitution"
			}
		],
		"script": "o15905"
	},
	71: {
		"name": "com.ninjakiwi.sas4.scripts.extras.TheTimeKeeper",
		"params": [
			{
				"id": 1,
				"type": "float",
				"opt": 1,
				"name": "Max time"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 1,
				"name": "Counts down"
			}
		],
		"script": "o20894"
	},
	76: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.OnslaughtSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn position 1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn position 2"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "spawn position 3"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "spawn position 4"
			}
		],
		"script": "o5460"
	},
	77: {
		"name": "com.ninjakiwi.sas4.scripts.loot.AreaLoot",
		"params": [
			{
				"id": 1,
				"type": "float",
				"opt": 0,
				"name": "show time"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 1,
				"name": "spawn event id"
			}
		],
		"script": "o6009"
	},
	79: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Regurgitator",
		"params": [],
		"script": "o8363"
	},
	80: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.OnslaughtBossSpawner",
		"params": [],
		"script": "o5048"
	},
	81: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.SpewWorm",
		"params": [],
		"script": "o16609"
	},
	82: {
		"name": "com.ninjakiwi.sas4.scripts.objects.GlobalCrate",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "stat class"
			}
		],
		"script": "o6906"
	},
	83: {
		"name": "com.ninjakiwi.sas4.scripts.objects.GlobalBarrel",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "stat class"
			}
		],
		"script": "o16496"
	},
	84: {
		"name": "com.ninjakiwi.sas4.scripts.extras.RoofHider",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "roof to hide"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "hide area"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "extra roof to hide"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "fade in/out time"
			},
			{
				"id": 6,
				"type": "int",
				"opt": 1,
				"name": "spawn event ID"
			}
		],
		"script": "o8462"
	},
	85: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.BulletSponge",
		"params": [],
		"script": "o7901"
	},
	86: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.SpawnEncounter",
		"params": [
			{
				"id": 1,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (SlowZombie)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FasterZombie)"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Spitter)"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (RunnerZombie)"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FatZombie)"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ShieldedZombie)"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidServant)"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidSoldier)"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Worm)"
			},
			{
				"id": 19,
				"type": "int",
				"opt": 1,
				"name": "Closest Clamp"
			},
			{
				"id": 20,
				"type": "int",
				"opt": 1,
				"name": "Max Count"
			},
			{
				"id": 21,
				"type": "float",
				"opt": 1,
				"name": "Delay"
			},
			{
				"id": 22,
				"type": "boolean",
				"opt": 1,
				"name": "Passive"
			},
			{
				"id": 23,
				"type": "int",
				"opt": 1,
				"name": "event id"
			}
		],
		"script": "o9239"
	},
	87: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TriggeredAreaSpawner",
		"params": [
			{
				"id": 22,
				"type": "int",
				"opt": 0,
				"name": "spawner flag"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn trigger"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn area"
			},
			{
				"id": 23,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 1"
			},
			{
				"id": 26,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 1 top"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 2"
			},
			{
				"id": 27,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 2 top"
			},
			{
				"id": 25,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 3"
			},
			{
				"id": 28,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 3 top"
			},
			{
				"id": 20,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 21,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "close max"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "num slow zombies"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "num faster zombies"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "num spitters"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "num runners"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "num fat zombies"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "num shielded"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid servants"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid soldiers"
			},
			{
				"id": 19,
				"type": "float",
				"opt": 1,
				"name": "num worms"
			}
		],
		"script": "o16618"
	},
	88: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TimedAreaSpawner",
		"params": [
			{
				"id": 1,
				"type": "float",
				"opt": 0,
				"name": "spawn time (s)"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn area"
			},
			{
				"id": 20,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 21,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "close max"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "num slow zombies"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "num faster zombies"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "num spitters"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "num runners"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "num fat zombies"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "num shielded"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid servants"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid soldiers"
			},
			{
				"id": 19,
				"type": "float",
				"opt": 1,
				"name": "num worms"
			}
		],
		"script": "o10410"
	},
	91: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TriggeredWaveSpawner",
		"params": [
			{
				"id": 102,
				"type": "int",
				"opt": 0,
				"name": "spawner flag"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn trigger"
			},
			{
				"id": 100,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 101,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 111,
				"type": "short",
				"opt": 0,
				"name": "spawn position 1"
			},
			{
				"id": 112,
				"type": "short",
				"opt": 0,
				"name": "spawn position 2"
			},
			{
				"id": 113,
				"type": "short",
				"opt": 0,
				"name": "spawn position 3"
			},
			{
				"id": 114,
				"type": "short",
				"opt": 0,
				"name": "spawn position 4"
			},
			{
				"id": 115,
				"type": "short",
				"opt": 0,
				"name": "spawn position 5"
			},
			{
				"id": 116,
				"type": "short",
				"opt": 0,
				"name": "spawn position 6"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 1,
				"name": "WAVE ONE type"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE start time"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE length"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE zombie count"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE close max"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE spawn ramp"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "WAVE TWO type"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO start time"
			},
			{
				"id": 14,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO length"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO zombie count"
			},
			{
				"id": 16,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO close max"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO spawn ramp"
			},
			{
				"id": 22,
				"type": "int",
				"opt": 1,
				"name": "WAVE THREE type"
			},
			{
				"id": 23,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE start time"
			},
			{
				"id": 24,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE length"
			},
			{
				"id": 25,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE zombie count"
			},
			{
				"id": 26,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE close max"
			},
			{
				"id": 27,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE spawn ramp"
			},
			{
				"id": 32,
				"type": "int",
				"opt": 1,
				"name": "WAVE FOUR type"
			},
			{
				"id": 33,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR start time"
			},
			{
				"id": 34,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR length"
			},
			{
				"id": 35,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR zombie count"
			},
			{
				"id": 36,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR close max"
			},
			{
				"id": 37,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR spawn ramp"
			},
			{
				"id": 42,
				"type": "int",
				"opt": 1,
				"name": "WAVE FIVE type"
			},
			{
				"id": 43,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE start time"
			},
			{
				"id": 44,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE length"
			},
			{
				"id": 45,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE zombie count"
			},
			{
				"id": 46,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE close max"
			},
			{
				"id": 47,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE spawn ramp"
			}
		],
		"script": "o17782"
	},
	94: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TriggeredSpawnEncounter",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Trigger Zone"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (SlowZombie)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FasterZombie)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Spitter)"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (RunnerZombie)"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FatZombie)"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ShieldedZombie)"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidServant)"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidSoldier)"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Worm)"
			},
			{
				"id": 11,
				"type": "int",
				"opt": 1,
				"name": "Closest Clamp"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "Max Count"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "Delay"
			},
			{
				"id": 14,
				"type": "boolean",
				"opt": 1,
				"name": "passive"
			}
		],
		"script": "o6614"
	},
	95: {
		"name": "com.ninjakiwi.sas4.scripts.doors.KillEnemiesDoor",
		"params": [
			{
				"id": 12,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "barrier graph"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 0,
				"name": "enemy flag to check"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "projectiles pass through"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "image to remove when open"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "image fade time"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "open after time (0 = ignore)"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 1,
				"name": "trigger for character message"
			}
		],
		"script": "o8671"
	},
	96: {
		"name": "com.ninjakiwi.sas4.scripts.doors.PurgeDoor",
		"params": [
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "barrier graph"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "image1"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "image2"
			}
		],
		"script": "o4149"
	},
	97: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.EggBossSpawn",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn Points"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 1,
				"name": "spawn trigger"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 1,
				"name": "boss ID"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "activation trigger"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 1,
				"name": "attackTrigger trigger"
			}
		],
		"script": "o10429"
	},
	98: {
		"name": "com.ninjakiwi.sas4.scripts.extras.Teleporter",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "teleport trigger"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "teleport location"
			}
		],
		"script": "o15442"
	},
	100: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TriggeredContinuousSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Trigger Zone"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (SlowZombie)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FasterZombie)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Spitter)"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (RunnerZombie)"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FatZombie)"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ShieldedZombie)"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidServant)"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidSoldier)"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Worm)"
			},
			{
				"id": 11,
				"type": "int",
				"opt": 1,
				"name": "Closest Clamp"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "Max Count"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "Time Between Spawns"
			},
			{
				"id": 14,
				"type": "boolean",
				"opt": 1,
				"name": "Turn off on Boss Death"
			},
			{
				"id": 15,
				"type": "int",
				"opt": 1,
				"name": "Boss ID"
			}
		],
		"script": "o8107"
	},
	101: {
		"name": "com.ninjakiwi.sas4.scripts.doors.WaitForPlayersDoor",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "barrier graph"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "wait trigger"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "teleport positions"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "physics to add"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "image to animate on trigger"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "failsafe: player teleporter, enemy killer graph"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "Enemy Teleport Spot"
			}
		],
		"script": "o2303"
	},
	102: {
		"name": "com.ninjakiwi.sas4.scripts.extras.TheFatController",
		"params": [
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "carraige 1 area"
			},
			{
				"id": 36,
				"type": "short",
				"opt": 0,
				"name": "carraige 2 area"
			},
			{
				"id": 37,
				"type": "short",
				"opt": 0,
				"name": "carraige 3 area"
			},
			{
				"id": 38,
				"type": "short",
				"opt": 0,
				"name": "carraige 4 area"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "platform A"
			},
			{
				"id": 22,
				"type": "short",
				"opt": 0,
				"name": "platform A Shadow"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "platform B"
			},
			{
				"id": 23,
				"type": "short",
				"opt": 0,
				"name": "platform B Shadow"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "platform C1"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 0,
				"name": "platform C1 Shadow"
			},
			{
				"id": 16,
				"type": "short",
				"opt": 0,
				"name": "platform C2"
			},
			{
				"id": 25,
				"type": "short",
				"opt": 0,
				"name": "platform C2 Shadow"
			},
			{
				"id": 17,
				"type": "short",
				"opt": 0,
				"name": "platform D"
			},
			{
				"id": 26,
				"type": "short",
				"opt": 0,
				"name": "platform D Shadow"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "carraige roof 2"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 0,
				"name": "carraige roof 3"
			},
			{
				"id": 15,
				"type": "short",
				"opt": 0,
				"name": "carraige roof 4"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 18,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 19,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 20,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 21,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 28,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 27,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 34,
				"type": "short",
				"opt": 0,
				"name": "rails"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 30,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 31,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 32,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 33,
				"type": "short",
				"opt": 0,
				"name": "lights"
			},
			{
				"id": 35,
				"type": "short",
				"opt": 0,
				"name": "no blood stain area"
			}
		],
		"script": "o4079"
	},
	103: {
		"name": "com.ninjakiwi.sas4.scripts.doors.TrainDoor",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "door open trigger area"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 1,
				"name": "initially opens for player"
			}
		],
		"script": "o2829"
	},
	104: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.OnOffContinuousSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Trigger on Zone"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Trigger off Zone"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (SlowZombie)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FasterZombie)"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Spitter)"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (RunnerZombie)"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FatZombie)"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ShieldedZombie)"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidServant)"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidSoldier)"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Worm)"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "Closest Clamp"
			},
			{
				"id": 13,
				"type": "int",
				"opt": 1,
				"name": "Max Count"
			},
			{
				"id": 14,
				"type": "float",
				"opt": 1,
				"name": "Time Between Spawns"
			}
		],
		"script": "o8905"
	},
	105: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.ActivatedWaveSpawner",
		"params": [
			{
				"id": 10,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 0,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 1,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 101,
				"type": "short",
				"opt": 0,
				"name": "spawn position 1"
			},
			{
				"id": 102,
				"type": "short",
				"opt": 0,
				"name": "spawn position 2"
			},
			{
				"id": 103,
				"type": "short",
				"opt": 0,
				"name": "spawn position 3"
			},
			{
				"id": 104,
				"type": "short",
				"opt": 0,
				"name": "spawn position 4"
			},
			{
				"id": 105,
				"type": "short",
				"opt": 0,
				"name": "spawn position 5"
			},
			{
				"id": 106,
				"type": "short",
				"opt": 0,
				"name": "spawn position 6"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 1,
				"name": "WAVE ONE type"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE start time"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE length"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE zombie count"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE close max"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE spawn ramp"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "WAVE TWO type"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO start time"
			},
			{
				"id": 14,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO length"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO zombie count"
			},
			{
				"id": 16,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO close max"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO spawn ramp"
			},
			{
				"id": 22,
				"type": "int",
				"opt": 1,
				"name": "WAVE THREE type"
			},
			{
				"id": 23,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE start time"
			},
			{
				"id": 24,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE length"
			},
			{
				"id": 25,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE zombie count"
			},
			{
				"id": 26,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE close max"
			},
			{
				"id": 27,
				"type": "float",
				"opt": 1,
				"name": "WAVE THREE spawn ramp"
			},
			{
				"id": 32,
				"type": "int",
				"opt": 1,
				"name": "WAVE FOUR type"
			},
			{
				"id": 33,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR start time"
			},
			{
				"id": 34,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR length"
			},
			{
				"id": 35,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR zombie count"
			},
			{
				"id": 36,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR close max"
			},
			{
				"id": 37,
				"type": "float",
				"opt": 1,
				"name": "WAVE FOUR spawn ramp"
			},
			{
				"id": 42,
				"type": "int",
				"opt": 1,
				"name": "WAVE FIVE type"
			},
			{
				"id": 43,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE start time"
			},
			{
				"id": 44,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE length"
			},
			{
				"id": 45,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE zombie count"
			},
			{
				"id": 46,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE close max"
			},
			{
				"id": 47,
				"type": "float",
				"opt": 1,
				"name": "WAVE FIVE spawn ramp"
			}
		],
		"script": "o6384"
	},
	107: {
		"name": "com.ninjakiwi.sas4.scripts.extras.WaitForPlayersExit",
		"params": [
			{
				"id": 6,
				"type": "boolean",
				"opt": 1,
				"name": "Wait for boss killed"
			},
			{
				"id": 7,
				"type": "int",
				"opt": 1,
				"name": "boss ID"
			},
			{
				"id": 8,
				"type": "int",
				"opt": 1,
				"name": "minion ID"
			}
		],
		"script": "o20196"
	},
	108: {
		"name": "com.ninjakiwi.sas4.scripts.extras.AnimationDisplay",
		"params": [
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 11,
				"type": "UTF8",
				"opt": 0,
				"name": "animationID"
			},
			{
				"id": 12,
				"type": "boolean",
				"opt": 0,
				"name": "show Parts"
			},
			{
				"id": 13,
				"type": "boolean",
				"opt": 0,
				"name": "show Complete Animations"
			}
		],
		"script": "o266"
	},
	109: {
		"name": "com.ninjakiwi.sas4.scripts.victoryConditions.OnslaughtVictoryCondition",
		"params": [],
		"script": "o18962"
	},
	111: {
		"name": "com.ninjakiwi.sas4.scripts.doors.PowerOutDoor",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			}
		],
		"script": "o8155"
	},
	112: {
		"name": "com.ninjakiwi.sas4.scripts.extras.OnslaughtScriptsController",
		"params": [],
		"script": "o9549"
	},
	113: {
		"name": "com.ninjakiwi.sas4.scripts.extras.LabSecurityDoorSwitch",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "trigger"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			}
		],
		"script": "o5904"
	},
	114: {
		"name": "com.ninjakiwi.sas4.scripts.victoryConditions.VaccineVictoryCondition",
		"params": [
			{
				"id": 23,
				"type": "int",
				"opt": 0,
				"name": "mission time"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 2"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 3"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 4"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 5"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "vaccine pos 6"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "dropship start 1"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "dropship pos 1"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "dropship end 1"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "dropship start 2"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "dropship pos 2"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 0,
				"name": "dropship end 2"
			},
			{
				"id": 15,
				"type": "short",
				"opt": 0,
				"name": "dropship start 3"
			},
			{
				"id": 16,
				"type": "short",
				"opt": 0,
				"name": "dropship pos 3"
			},
			{
				"id": 17,
				"type": "short",
				"opt": 0,
				"name": "dropship end 3"
			},
			{
				"id": 18,
				"type": "short",
				"opt": 0,
				"name": "dropship start 4"
			},
			{
				"id": 19,
				"type": "short",
				"opt": 0,
				"name": "dropship pos 4"
			},
			{
				"id": 20,
				"type": "short",
				"opt": 0,
				"name": "dropship end 4"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "switch image"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "switch trigger"
			},
			{
				"id": 21,
				"type": "short",
				"opt": 0,
				"name": "dead guy trigger"
			},
			{
				"id": 22,
				"type": "short",
				"opt": 0,
				"name": "lab entrance trigger"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 0,
				"name": "terminal entrance trigger"
			}
		],
		"script": "o8201"
	},
	115: {
		"name": "com.ninjakiwi.sas4.scripts.doors.OnslaughtMainDoors",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image lower"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "image upper"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 0,
				"name": "health base"
			},
			{
				"id": 5,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			}
		],
		"script": "o8311"
	},
	117: {
		"name": "com.ninjakiwi.sas4.scripts.doors.SecurityDoor",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "door open trigger area"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 1,
				"name": "locked to start"
			}
		],
		"script": "o1861"
	},
	118: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.ActivatedAreaSpawner",
		"params": [
			{
				"id": 30,
				"type": "int",
				"opt": 0,
				"name": "spawner flag"
			},
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn area"
			},
			{
				"id": 23,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 1"
			},
			{
				"id": 26,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 1 top"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 2"
			},
			{
				"id": 27,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 2 top"
			},
			{
				"id": 25,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 3"
			},
			{
				"id": 28,
				"type": "short",
				"opt": 0,
				"name": "overflow spawn position 3 top"
			},
			{
				"id": 20,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 21,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "close max"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "num slow zombies"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "num faster zombies"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "num spitters"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "num runners"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "num fat zombies"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "num shielded"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid servants"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid soldiers"
			},
			{
				"id": 19,
				"type": "float",
				"opt": 1,
				"name": "num worms"
			}
		],
		"script": "o6335"
	},
	119: {
		"name": "com.ninjakiwi.sas4.scripts.doors.LabDoor",
		"params": [
			{
				"id": 6,
				"type": "UTF8",
				"opt": 1,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "open trigger area"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "delay before opening"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 1,
				"name": "roof to hide"
			}
		],
		"script": "o7507"
	},
	120: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.SurvivorSpawner",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn area"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "overflow hole"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "overflow top"
			}
		],
		"script": "o17421"
	},
	121: {
		"name": "com.ninjakiwi.sas4.scripts.victoryConditions.SurvivorsVictoryCondition",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "exit position"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "exit area"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "cave in base"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "cave in top"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "cave in trigger"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "cave in effects area"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "cave in physics"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "fence physics"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "fence art 1"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "fence art 2"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "fence art 3"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "fence art 4"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "fence art 5"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 0,
				"name": "fence art 6"
			},
			{
				"id": 15,
				"type": "short",
				"opt": 0,
				"name": "fence art 7"
			}
		],
		"script": "o15362"
	},
	122: {
		"name": "com.ninjakiwi.sas4.scripts.doors.SurvivorBarriers",
		"params": [
			{
				"id": 4,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "barrier image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "roof to hide"
			}
		],
		"script": "o6702"
	},
	126: {
		"name": "com.ninjakiwi.sas4.scripts.doors.DestroyableBarrier",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "image to hide/area of image"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "image to hide fade time"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "health"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 0,
				"name": "players hurt"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "enemies hurt"
			},
			{
				"id": 8,
				"type": "int",
				"opt": 1,
				"name": "spawn event ID"
			},
			{
				"id": 9,
				"type": "boolean",
				"opt": 1,
				"name": "use damage states (default: hit animation)"
			}
		],
		"script": "o4657"
	},
	128: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Repatitis",
		"params": [],
		"script": "o1481"
	},
	129: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.RepatitisJunior",
		"params": [],
		"script": "o19671"
	},
	130: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.EnemyRocket",
		"params": [],
		"script": "o5049"
	},
	131: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.FlameBall",
		"params": [],
		"script": "o8810"
	},
	132: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Wicker",
		"params": [],
		"script": "o2514"
	},
	133: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Devastator",
		"params": [],
		"script": "o13795"
	},
	134: {
		"name": "com.ninjakiwi.sas4.scripts.objects.MansionObject",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "health base (0 for invincible)"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 1,
				"name": "moveable"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "mass"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "linear dampening"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "friction"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "restitution"
			},
			{
				"id": 9,
				"type": "boolean",
				"opt": 1,
				"name": "fixed rotation"
			},
			{
				"id": 10,
				"type": "boolean",
				"opt": 1,
				"name": "play hit animation"
			},
			{
				"id": 11,
				"type": "UTF8",
				"opt": 1,
				"name": "destroy label"
			},
			{
				"id": 19,
				"type": "boolean",
				"opt": 1,
				"name": "loop destroyed"
			},
			{
				"id": 12,
				"type": "UTF8",
				"opt": 1,
				"name": "hit label"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "loot Chance"
			},
			{
				"id": 14,
				"type": "boolean",
				"opt": 1,
				"name": "show damage states"
			},
			{
				"id": 15,
				"type": "UTF8",
				"opt": 1,
				"name": "damage label"
			},
			{
				"id": 16,
				"type": "boolean",
				"opt": 1,
				"name": "explosive"
			},
			{
				"id": 17,
				"type": "boolean",
				"opt": 1,
				"name": "keep physics"
			},
			{
				"id": 18,
				"type": "boolean",
				"opt": 1,
				"name": "rotate to shot"
			},
			{
				"id": 20,
				"type": "boolean",
				"opt": 1,
				"name": "enemies hurt"
			},
			{
				"id": 21,
				"type": "int",
				"opt": 1,
				"name": "event id"
			},
			{
				"id": 22,
				"type": "UTF8",
				"opt": 1,
				"name": "name"
			},
			{
				"id": 23,
				"type": "int",
				"opt": 1,
				"name": "object type"
			}
		],
		"script": "o1765"
	},
	135: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Flame",
		"params": [],
		"script": "o5049"
	},
	136: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.FlameThrowerBullet",
		"params": [],
		"script": "o5049"
	},
	137: {
		"name": "com.ninjakiwi.sas4.scripts.display.AnimateNode",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Image to animate"
			},
			{
				"id": 2,
				"type": "UTF8",
				"opt": 0,
				"name": "loop label"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "stop on end frame"
			}
		],
		"script": "o7513"
	},
	138: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.SurvivorHunterSpawner",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn trigger"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "enemy path"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "enemy path 2"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 1,
				"name": "enemy path 3"
			}
		],
		"script": "o9190"
	},
	139: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.EnemyFlameThrowerBullet",
		"params": [],
		"script": "o5049"
	},
	140: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.EventTriggeredContSpawner",
		"params": [
			{
				"id": 1,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (SlowZombie)"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FasterZombie)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Spitter)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (RunnerZombie)"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (FatZombie)"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ShieldedZombie)"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidServant)"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (ZombDroidSoldier)"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "Enemy Count (Worm)"
			},
			{
				"id": 10,
				"type": "int",
				"opt": 1,
				"name": "Closest Clamp"
			},
			{
				"id": 11,
				"type": "int",
				"opt": 1,
				"name": "Max Count"
			},
			{
				"id": 12,
				"type": "float",
				"opt": 1,
				"name": "Time Between Spawns"
			},
			{
				"id": 13,
				"type": "boolean",
				"opt": 1,
				"name": "Turn off on Boss Death"
			},
			{
				"id": 14,
				"type": "int",
				"opt": 1,
				"name": "Boss ID"
			},
			{
				"id": 15,
				"type": "int",
				"opt": 1,
				"name": "special flag ID"
			},
			{
				"id": 18,
				"type": "boolean",
				"opt": 1,
				"name": "spawn first wave on trigger"
			}
		],
		"script": "o4994"
	},
	141: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.PurgeSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn trigger"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "starting difficulty"
			},
			{
				"id": 4,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			}
		],
		"script": "o19751"
	},
	142: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.ZombiePod",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "node"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "trigger graph"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "enemyType"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "spawn loot"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 1,
				"name": "explosive"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "time before hatch"
			},
			{
				"id": 8,
				"type": "int",
				"opt": 1,
				"name": "enemy special flag"
			}
		],
		"script": "o18843"
	},
	143: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.ActivatedBossSpawner",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 0,
				"name": "budget"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 1,
				"name": "trigger area"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "time"
			},
			{
				"id": 5,
				"type": "int",
				"opt": 1,
				"name": "special flag"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 1,
				"name": "spawn single boss"
			}
		],
		"script": "o9973"
	},
	144: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.Loaderbot",
		"params": [],
		"script": "o19775"
	},
	145: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.VIPMasterController",
		"params": [
			{
				"id": 121,
				"type": "short",
				"opt": 0,
				"name": "Victory Area 1"
			},
			{
				"id": 122,
				"type": "short",
				"opt": 0,
				"name": "Victory Area 2"
			},
			{
				"id": 123,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Base 1"
			},
			{
				"id": 124,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Roof 1"
			},
			{
				"id": 125,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Base 2"
			},
			{
				"id": 126,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Roof 2"
			},
			{
				"id": 127,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Trigger 1"
			},
			{
				"id": 128,
				"type": "short",
				"opt": 0,
				"name": "Gazebo Trigger 2"
			},
			{
				"id": 129,
				"type": "short",
				"opt": 0,
				"name": "Gate 1"
			},
			{
				"id": 130,
				"type": "short",
				"opt": 0,
				"name": "Gate 2"
			},
			{
				"id": 131,
				"type": "short",
				"opt": 0,
				"name": "Gate 1 physics"
			},
			{
				"id": 132,
				"type": "short",
				"opt": 0,
				"name": "Gate 2 physics"
			},
			{
				"id": 133,
				"type": "short",
				"opt": 0,
				"name": "Boss Trigger 1"
			},
			{
				"id": 134,
				"type": "short",
				"opt": 0,
				"name": "Boss Trigger 2"
			},
			{
				"id": 135,
				"type": "short",
				"opt": 0,
				"name": "Area 1 Spawn Points"
			},
			{
				"id": 136,
				"type": "short",
				"opt": 0,
				"name": "Area 2 Spawn Points"
			},
			{
				"id": 137,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 1 Door"
			},
			{
				"id": 138,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 1 Roof"
			},
			{
				"id": 139,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 2 Door"
			},
			{
				"id": 140,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 2 Roof"
			},
			{
				"id": 141,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 3 Door"
			},
			{
				"id": 142,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 3 Roof"
			},
			{
				"id": 143,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 4 Door"
			},
			{
				"id": 144,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 4 Roof"
			},
			{
				"id": 145,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 5 Door"
			},
			{
				"id": 146,
				"type": "short",
				"opt": 0,
				"name": "Secret Room 5 Roof"
			},
			{
				"id": 147,
				"type": "short",
				"opt": 0,
				"name": "Heli Locations Top"
			},
			{
				"id": 148,
				"type": "short",
				"opt": 0,
				"name": "Heli Locations Bottom"
			}
		],
		"script": "o11088"
	},
	146: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.PowerMasterController",
		"params": [
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Route 1 Button 1"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "Route 2 Button 1"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "Route 3 Button 1"
			},
			{
				"id": 17,
				"type": "short",
				"opt": 0,
				"name": "Route 4 Button 1"
			},
			{
				"id": 21,
				"type": "short",
				"opt": 0,
				"name": "centre Area"
			},
			{
				"id": 26,
				"type": "short",
				"opt": 0,
				"name": "Turret Spawn Positions"
			},
			{
				"id": 27,
				"type": "short",
				"opt": 0,
				"name": "Loader Bot Spawn Positions"
			},
			{
				"id": 28,
				"type": "short",
				"opt": 0,
				"name": "button 1"
			},
			{
				"id": 29,
				"type": "short",
				"opt": 0,
				"name": "button 2"
			},
			{
				"id": 30,
				"type": "short",
				"opt": 0,
				"name": "button 3"
			},
			{
				"id": 31,
				"type": "short",
				"opt": 0,
				"name": "button 4"
			},
			{
				"id": 32,
				"type": "short",
				"opt": 0,
				"name": "teleport points"
			}
		],
		"script": "o13503"
	},
	147: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Antidote",
		"params": [],
		"script": "o15166"
	},
	148: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.AerialBombardmentMarker",
		"params": [],
		"script": "o7887"
	},
	149: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.LastStandSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "path 1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "path 2"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "path 3"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "path 4"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "loot location 1"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "loot location 2"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "loot location 3"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "loot location 4"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "loot location 5"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "loot location 6"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "first barrier zone"
			}
		],
		"script": "o7649"
	},
	150: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.AcidPool",
		"params": [],
		"script": "o15095"
	},
	151: {
		"name": "com.ninjakiwi.sas4.scripts.objects.ParkBench",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			}
		],
		"script": "o13014"
	},
	152: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Bullet",
		"params": [],
		"script": "o5049"
	},
	153: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.PlaceHolderEnemy",
		"params": [],
		"script": "o726"
	},
	154: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.AerialBombardmentRocket",
		"params": [],
		"script": "o12340"
	},
	155: {
		"name": "com.ninjakiwi.sas4.scripts.doors.SurvivorSecretDoor",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "roof to hide"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 0,
				"name": "roof fade time"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 0,
				"name": "health"
			},
			{
				"id": 7,
				"type": "int",
				"opt": 0,
				"name": "loot reveal id"
			}
		],
		"script": "o15813"
	},
	156: {
		"name": "com.ninjakiwi.sas4.scripts.loot.DroppedLoot",
		"params": [],
		"script": "o13742"
	},
	157: {
		"name": "com.ninjakiwi.sas4.scripts.extras.RandomPathBlocker",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "physics1"
			},
			{
				"id": 3,
				"type": "UTF8",
				"opt": 0,
				"name": "Node Name 1"
			},
			{
				"id": 4,
				"type": "UTF8",
				"opt": 0,
				"name": "Node Name 1"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "image2"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "physics2"
			},
			{
				"id": 7,
				"type": "UTF8",
				"opt": 0,
				"name": "Node Name 1"
			},
			{
				"id": 8,
				"type": "UTF8",
				"opt": 0,
				"name": "Node Name 2"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 1,
				"name": "image3"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 1,
				"name": "physics3"
			},
			{
				"id": 11,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 1"
			},
			{
				"id": 12,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 2"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 1,
				"name": "image4"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 1,
				"name": "physics4"
			},
			{
				"id": 15,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 1"
			},
			{
				"id": 16,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 2"
			},
			{
				"id": 17,
				"type": "short",
				"opt": 1,
				"name": "image5"
			},
			{
				"id": 18,
				"type": "short",
				"opt": 1,
				"name": "physics5"
			},
			{
				"id": 19,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 1"
			},
			{
				"id": 20,
				"type": "UTF8",
				"opt": 1,
				"name": "Node Name 2"
			}
		],
		"script": "o18477"
	},
	158: {
		"name": "com.ninjakiwi.sas4.scripts.objects.CashRegister",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 1,
				"name": "cash multiplier"
			}
		],
		"script": "o2603"
	},
	159: {
		"name": "com.ninjakiwi.sas4.scripts.objects.TrashCan",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "type"
			}
		],
		"script": "o11105"
	},
	160: {
		"name": "com.ninjakiwi.sas4.scripts.objects.ExplodingCar",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "physics"
			}
		],
		"script": "o2242"
	},
	161: {
		"name": "com.ninjakiwi.sas4.scripts.objects.BulletReactionObject",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 0,
				"name": "use rectangle? (otherwise circle)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "x length (radius)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 0,
				"name": "y length"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "sensor only"
			}
		],
		"script": "o9931"
	},
	162: {
		"name": "com.ninjakiwi.sas4.scripts.objects.Chair",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 0,
				"name": "square chair? (otherwise circle)"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "width (radius)"
			}
		],
		"script": "o7307"
	},
	163: {
		"name": "com.ninjakiwi.sas4.scripts.extras.FlickeringLight",
		"params": [
			{
				"id": 0,
				"type": "short",
				"opt": 0,
				"name": "room area"
			},
			{
				"id": 1,
				"type": "float",
				"opt": 0,
				"name": "alpha amount"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 0,
				"name": "show min"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "show max"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 0,
				"name": "hide min"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 0,
				"name": "hide max"
			}
		],
		"script": "o6265"
	},
	164: {
		"name": "com.ninjakiwi.sas4.scripts.objects.SwatTruck",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "truck base asset"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "truck top asset"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "truck door asset"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "truck physics"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "pathing physics"
			}
		],
		"script": "o20402"
	},
	165: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.EventSpawner",
		"params": [
			{
				"id": 1,
				"type": "int",
				"opt": 0,
				"name": "spawn event id"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn points"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "close max"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "num slow zombies"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "num faster zombies"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "num spitters"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "num runners"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 1,
				"name": "num fat zombies"
			},
			{
				"id": 9,
				"type": "float",
				"opt": 1,
				"name": "num shielded"
			},
			{
				"id": 10,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid servants"
			},
			{
				"id": 11,
				"type": "float",
				"opt": 1,
				"name": "num zombdroid soldiers"
			},
			{
				"id": 12,
				"type": "float",
				"opt": 1,
				"name": "num worms"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "num spew worms"
			}
		],
		"script": "o16668"
	},
	166: {
		"name": "com.ninjakiwi.sas4.scripts.extras.PodsHudController",
		"params": [],
		"script": "o14779"
	},
	167: {
		"name": "com.ninjakiwi.sas4.scripts.extras.VIPDestroyableController",
		"params": [],
		"script": "o1136"
	},
	168: {
		"name": "com.ninjakiwi.sas4.scripts.physics.NoGoZone",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics"
			},
			{
				"id": 2,
				"type": "UTF8",
				"opt": 1,
				"name": "name"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 1,
				"name": "add zone later"
			}
		],
		"script": "o10948"
	},
	169: {
		"name": "com.ninjakiwi.sas4.scripts.objects.PowerOutSpawnHole",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "hole image"
			},
			{
				"id": 2,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "hole point"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "hole top image"
			}
		],
		"script": "o144"
	},
	170: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.Room",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "room area"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn points"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "door physics"
			}
		],
		"script": "o17805"
	},
	171: {
		"name": "com.ninjakiwi.sas4.scripts.extras.PowerOutDecals",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Image to animate"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 0,
				"name": "Lower Bound"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 0,
				"name": "Upper Bound"
			}
		],
		"script": "o1565"
	},
	172: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.VIPBossSpawner",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn points"
			}
		],
		"script": "o15535"
	},
	173: {
		"name": "com.ninjakiwi.sas4.scripts.extras.TriggerArea",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics"
			},
			{
				"id": 2,
				"type": "UTF8",
				"opt": 1,
				"name": "name"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 1,
				"name": "collision categories"
			}
		],
		"script": "o1642"
	},
	174: {
		"name": "com.ninjakiwi.sas4.scripts.extras.ChatRoomScript",
		"params": [],
		"script": "o2927"
	},
	177: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.TestSpawner",
		"params": [],
		"script": "o7988"
	},
	179: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.PlaceableMedikit",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 0,
				"name": "Heal Amount (eg 0.5 for 50%)"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 1,
				"name": "spawn event id"
			}
		],
		"script": "o4487"
	},
	180: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.RegurgPool",
		"params": [],
		"script": "o14198"
	},
	181: {
		"name": "com.ninjakiwi.sas4.scripts.extras.MessageTriggerScript",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "message ID"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "trigger ID"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 0,
				"name": "combot icon ID (-1 = players avatar)"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "wait Time"
			}
		],
		"script": "o5538"
	},
	182: {
		"name": "com.ninjakiwi.sas4.scripts.display.BlackPolygon",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "polygon graph"
			},
			{
				"id": 2,
				"type": "float",
				"opt": 0,
				"name": "z value (0 defaults to 100)"
			}
		],
		"script": "o6548"
	},
	183: {
		"name": "com.ninjakiwi.sas4.scripts.extras.PodsBurstAnim",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image"
			}
		],
		"script": "o5854"
	},
	184: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.RepatitisProjectile",
		"params": [],
		"script": "o10707"
	},
	185: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.GroundFire",
		"params": [],
		"script": "o432"
	},
	186: {
		"name": "com.ninjakiwi.sas4.scripts.extras.MpDebug",
		"params": [],
		"script": "o9383"
	},
	187: {
		"name": "com.ninjakiwi.sas4.scripts.enemies.ZombieMech",
		"params": [],
		"script": "o11918"
	},
	188: {
		"name": "com.ninjakiwi.sas4.scripts.extras.TriggeredAnimation",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "trigger box"
			}
		],
		"script": "o4130"
	},
	189: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.AlphaVirusModeData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 20,
				"type": "short",
				"opt": 0,
				"name": "virus pos 1"
			},
			{
				"id": 21,
				"type": "short",
				"opt": 1,
				"name": "virus pos 2"
			},
			{
				"id": 22,
				"type": "short",
				"opt": 1,
				"name": "virus pos 3"
			},
			{
				"id": 23,
				"type": "short",
				"opt": 1,
				"name": "virus pos 4"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 1,
				"name": "virus pos 5"
			},
			{
				"id": 25,
				"type": "short",
				"opt": 1,
				"name": "virus pos 6"
			},
			{
				"id": 26,
				"type": "short",
				"opt": 1,
				"name": "virus pos 7"
			},
			{
				"id": 27,
				"type": "short",
				"opt": 1,
				"name": "virus pos 8"
			},
			{
				"id": 28,
				"type": "short",
				"opt": 1,
				"name": "virus pos 9"
			},
			{
				"id": 29,
				"type": "short",
				"opt": 1,
				"name": "virus pos 10"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "enemy spawn pos 1"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 2"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 3"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 4"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 5"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 6"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 7"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 8"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 9"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 1,
				"name": "enemy spawn pos 10"
			}
		],
		"script": "o6617"
	},
	190: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.AlphaVirusMode",
		"params": [],
		"script": "o13606"
	},
	192: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.LastManStanding",
		"params": [],
		"script": "o3474"
	},
	194: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.Apocalypse",
		"params": [],
		"script": "o12468"
	},
	195: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.AlphaVirusSpawner",
		"params": [],
		"script": "o19602"
	},
	196: {
		"name": "com.ninjakiwi.sas4.scripts.objects.ZombieEggArena",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "size (0,1,2)"
			}
		],
		"script": "o19132"
	},
	197: {
		"name": "com.ninjakiwi.sas4.scripts.physics.GhostWall",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics graph"
			}
		],
		"script": "o19935"
	},
	198: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.LastManSpawner",
		"params": [],
		"script": "o15188"
	},
	199: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.RoomScript",
		"params": [
			{
				"id": 0,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "room area"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn points"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "door physics"
			}
		],
		"script": "o17805"
	},
	200: {
		"name": "com.ninjakiwi.sas4.scripts.objects.HVMSoldier",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "position"
			},
			{
				"id": 4,
				"type": "int",
				"opt": 0,
				"name": "spawns for player count"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "is captain"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "path to defensive position"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "ambo destroy position"
			}
		],
		"script": "o13538"
	},
	201: {
		"name": "com.ninjakiwi.sas4.scripts.victoryConditions.IceStationVictoryCondition",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "found captain trig"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "hvm soldier retreat point"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "captain trig 2"
			},
			{
				"id": 20,
				"type": "short",
				"opt": 0,
				"name": "speed up trigger"
			},
			{
				"id": 19,
				"type": "short",
				"opt": 0,
				"name": "avalanche trigger"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 14,
				"type": "short",
				"opt": 0,
				"name": "avalanche asset"
			},
			{
				"id": 15,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 16,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 17,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 18,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 22,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 23,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 24,
				"type": "short",
				"opt": 0,
				"name": "rock asset"
			},
			{
				"id": 21,
				"type": "short",
				"opt": 0,
				"name": "physics after avalanche"
			}
		],
		"script": "o13741"
	},
	202: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.IceStationSpawner",
		"params": [
			{
				"id": 13,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "spawn position 1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "spawn position 2"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "spawn position 3"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "spawn position 4"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "spawn position 5"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "spawn position 6"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "spawn position 7"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "spawn position 8"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "spawn position 9"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "spawn position 10"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "spawn position 11"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "spawn position 12"
			}
		],
		"script": "o15928"
	},
	203: {
		"name": "com.ninjakiwi.sas4.scripts.doors.RepairableBarrier",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 9,
				"type": "int",
				"opt": 0,
				"name": "stats group (hp,repair time etc)"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "physics barrier"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "image lower"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "image upper"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "repair asset and direction"
			}
		],
		"script": "o9251"
	},
	204: {
		"name": "com.ninjakiwi.sas4.scripts.objects.IceStationAmbo",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "truck"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "doors"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "shadow"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "physics upper"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "physics lower"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "destroyed image"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "medic anim"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "explosion positions"
			}
		],
		"script": "o16962"
	},
	205: {
		"name": "com.ninjakiwi.sas4.scripts.objects.IceStationTruck",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "body image"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "tray image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "door image"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "physics upper"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "physics lower"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "physics door"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "on the back trigger"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "squasher physics"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "path"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "reverse path"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "path continued"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "Enemy Only Physics"
			}
		],
		"script": "o8742"
	},
	206: {
		"name": "com.ninjakiwi.sas4.scripts.doors.IceStationGate",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "image lower"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "image upper"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "physics"
			}
		],
		"script": "o2830"
	},
	207: {
		"name": "com.ninjakiwi.sas4.scripts.doors.IceRoadBlockade",
		"params": [
			{
				"id": 9,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 8,
				"type": "float",
				"opt": 0,
				"name": "health"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "physics"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "explosion pos an asset"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "car 1"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "car 2"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "car 3"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "car 4"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "car 5"
			}
		],
		"script": "o7314"
	},
	218: {
		"name": "com.ninjakiwi.sas4.scripts.display.BloodTexture",
		"params": [],
		"script": "o15817"
	},
	219: {
		"name": "com.ninjakiwi.sas4.scripts.display.BloodTextureTrigger",
		"params": [],
		"script": "o3856"
	},
	220: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.BasicRocket",
		"params": [],
		"script": "o15897"
	},
	221: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.BasicFlameBullet",
		"params": [],
		"script": "o8715"
	},
	222: {
		"name": "com.ninjakiwi.sas4.scripts.gameModes.ApocalypseSpawner",
		"params": [],
		"script": "o2637"
	},
	223: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.Disc",
		"params": [],
		"script": "o5049"
	},
	224: {
		"name": "com.ninjakiwi.sas4.scripts.projectiles.FlameConeProj",
		"params": [],
		"script": "o18623"
	},
	225: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.OnslaughtNightmareSpawner",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "side spawn 1"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "side spawn 2"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "boss spawn"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "side 1 graphic"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "side 2 graphic"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "boss graphic"
			}
		],
		"script": "o1074"
	},
	226: {
		"name": "com.ninjakiwi.sas4.scripts.victoryConditions.MeltdownVictoryCondition",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "main door switch"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "main door trigger"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "computer switch"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "computer trigger"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "computer asset"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "boss wall smash 1"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "boss wall smash 2"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "boss wall smash 3"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "boss wall smash 4"
			},
			{
				"id": 10,
				"type": "short",
				"opt": 0,
				"name": "boss wall top 1"
			},
			{
				"id": 11,
				"type": "short",
				"opt": 0,
				"name": "boss wall top 2"
			},
			{
				"id": 12,
				"type": "short",
				"opt": 0,
				"name": "boss wall top 3"
			},
			{
				"id": 13,
				"type": "short",
				"opt": 0,
				"name": "boss wall top 4"
			}
		],
		"script": "o13502"
	},
	227: {
		"name": "com.ninjakiwi.sas4.scripts.doors.PhaseDoor",
		"params": [
			{
				"id": 4,
				"type": "int",
				"opt": 0,
				"name": "id"
			},
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "phase (0=always open)"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 0,
				"name": "locked until (9=always)"
			},
			{
				"id": 5,
				"type": "int",
				"opt": 0,
				"name": "size (0=small,1=big)"
			},
			{
				"id": 6,
				"type": "UTF8",
				"opt": 0,
				"name": "path con on unlock 1"
			},
			{
				"id": 7,
				"type": "UTF8",
				"opt": 0,
				"name": "path con on unlock 2"
			}
		],
		"script": "o15308"
	},
	228: {
		"name": "com.ninjakiwi.sas4.scripts.doors.MeltdownMainDoor",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "barrierL"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "barrierR"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "imageL"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "imageR"
			}
		],
		"script": "o7390"
	},
	229: {
		"name": "com.ninjakiwi.sas4.scripts.extras.MeltdownReactor",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "button image"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "button trigger"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "reactor image"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "reactor base"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "reactor top"
			}
		],
		"script": "o4177"
	},
	230: {
		"name": "com.ninjakiwi.sas4.scripts.extras.GasRoom",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "gas room overlay"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 1"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 2"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 3"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 4"
			},
			{
				"id": 7,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 5"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "gas pipe 6"
			}
		],
		"script": "o8467"
	},
	231: {
		"name": "com.ninjakiwi.sas4.scripts.extras.MeltdownRoom",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "room area"
			},
			{
				"id": 3,
				"type": "int",
				"opt": 0,
				"name": "door 1"
			},
			{
				"id": 4,
				"type": "int",
				"opt": 0,
				"name": "door 2"
			},
			{
				"id": 5,
				"type": "int",
				"opt": 0,
				"name": "door 3"
			},
			{
				"id": 6,
				"type": "int",
				"opt": 0,
				"name": "door 4"
			},
			{
				"id": 7,
				"type": "int",
				"opt": 0,
				"name": "door 5"
			},
			{
				"id": 8,
				"type": "int",
				"opt": 0,
				"name": "door 6"
			},
			{
				"id": 13,
				"type": "UTF8",
				"opt": 0,
				"name": "enemy spawner 1"
			},
			{
				"id": 14,
				"type": "UTF8",
				"opt": 0,
				"name": "enemy spawner 2"
			},
			{
				"id": 15,
				"type": "UTF8",
				"opt": 0,
				"name": "enemy spawner 3"
			},
			{
				"id": 16,
				"type": "UTF8",
				"opt": 0,
				"name": "enemy spawner 4"
			},
			{
				"id": 9,
				"type": "boolean",
				"opt": 0,
				"name": "is gas room?"
			},
			{
				"id": 10,
				"type": "int",
				"opt": 0,
				"name": "loot spawn 1"
			},
			{
				"id": 11,
				"type": "int",
				"opt": 0,
				"name": "loot spawn 2"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 0,
				"name": "medkit spawn"
			}
		],
		"script": "o15692"
	},
	232: {
		"name": "com.ninjakiwi.sas4.scripts.objects.DeskComputer",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "image"
			}
		],
		"script": "o11309"
	},
	233: {
		"name": "com.ninjakiwi.sas4.scripts.spawners.ActivatedWaveSpawnerTrim",
		"params": [
			{
				"id": 10,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 0,
				"type": "int",
				"opt": 0,
				"name": "spawn behavior"
			},
			{
				"id": 1,
				"type": "int",
				"opt": 0,
				"name": "special flag"
			},
			{
				"id": 101,
				"type": "short",
				"opt": 0,
				"name": "spawn position 1"
			},
			{
				"id": 102,
				"type": "short",
				"opt": 0,
				"name": "spawn position 2"
			},
			{
				"id": 103,
				"type": "short",
				"opt": 0,
				"name": "spawn position 3"
			},
			{
				"id": 901,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 1 bot"
			},
			{
				"id": 902,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 1 top"
			},
			{
				"id": 903,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 2 bot"
			},
			{
				"id": 904,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 2 top"
			},
			{
				"id": 905,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 3 bot"
			},
			{
				"id": 906,
				"type": "short",
				"opt": 0,
				"name": "spawn hole 3 top"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 1,
				"name": "WAVE ONE type"
			},
			{
				"id": 3,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE start time"
			},
			{
				"id": 4,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE length"
			},
			{
				"id": 5,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE zombie count"
			},
			{
				"id": 6,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE close max"
			},
			{
				"id": 7,
				"type": "float",
				"opt": 1,
				"name": "WAVE ONE spawn ramp"
			},
			{
				"id": 12,
				"type": "int",
				"opt": 1,
				"name": "WAVE TWO type"
			},
			{
				"id": 13,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO start time"
			},
			{
				"id": 14,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO length"
			},
			{
				"id": 15,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO zombie count"
			},
			{
				"id": 16,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO close max"
			},
			{
				"id": 17,
				"type": "float",
				"opt": 1,
				"name": "WAVE TWO spawn ramp"
			}
		],
		"script": "o2772"
	},
	234: {
		"name": "com.ninjakiwi.sas4.scripts.extras.DoomRoom",
		"params": [
			{
				"id": 30,
				"type": "UTF8",
				"opt": 0,
				"name": "name"
			},
			{
				"id": 31,
				"type": "short",
				"opt": 0,
				"name": "exit blocker"
			}
		],
		"script": "o5366"
	},
	235: {
		"name": "com.ninjakiwi.sas4.scripts.doors.FailSafeTeleportZone",
		"params": [],
		"script": "o5049"
	},
	236: {
		"name": "com.ninjakiwi.sas4.scripts.physics.FailSafeTeleportZone",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Failsafe Physics Graph"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 0,
				"name": "Concave Graph?"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "Teleport Players?"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 0,
				"name": "Is Teleport Location a Graph?"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "Player Teleport Location"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "Teleport Enemies?"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "Is Teleport Location a Graph?"
			},
			{
				"id": 8,
				"type": "short",
				"opt": 0,
				"name": "Enemy Teleport Location"
			},
			{
				"id": 9,
				"type": "boolean",
				"opt": 0,
				"name": "Ignore Dark Minions?"
			}
		],
		"script": "o7717"
	},
	237: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.ContractsMasterController",
		"params": [],
		"script": "o5049"
	},
	238: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractTypes.ContractAmmoRecovery",
		"params": [],
		"script": "o190"
	},
	239: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractAmmoRecoveryData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Ammo Pack Graph (Positions)"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "Retrieval Waypoint"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "Retrieval Graph (Sensor physics)"
			},
			{
				"id": 5,
				"type": "short",
				"opt": 0,
				"name": "Ammo Loot Spawn Graph (Positions)"
			}
		],
		"script": "o187"
	},
	240: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Enemy spawn positions (Graph)"
			}
		],
		"script": "o19639"
	},
	241: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractSupportWeaponsShipmentData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Pallet Spawn Graph (Positions)"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "Turret/Grenade Loot Spawn Graph (Positions)"
			},
			{
				"id": 4,
				"type": "short",
				"opt": 0,
				"name": "Loot Pickup Zone (Waypoint)"
			}
		],
		"script": "o4211"
	},
	242: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractTypes.ContractSupportWeaponsShipment",
		"params": [],
		"script": "o2795"
	},
	243: {
		"name": "com.ninjakiwi.sas4.scripts.loot.DropSpecificLoot",
		"params": [],
		"script": "o6555"
	},
	244: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractDataRetrievalData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Cash Loot Spawn Graph (Positions)"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "Loot Pickup Zone (Waypoint)"
			}
		],
		"script": "o6466"
	},
	245: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractTypes.ContractDataRetrieval",
		"params": [],
		"script": "o8147"
	},
	246: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractTypes.ContractEquipmentSalvage",
		"params": [],
		"script": "o13037"
	},
	247: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractEquipmentSalvageData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Loot Pickup Zone (Waypoint)"
			},
			{
				"id": 3,
				"type": "short",
				"opt": 0,
				"name": "Salvage Loot Spawn Graph (Positions)"
			}
		],
		"script": "o2012"
	},
	248: {
		"name": "com.ninjakiwi.sas4.scripts.display.ParallaxedAnimatedNode",
		"params": [],
		"script": "o5049"
	},
	249: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractTypes.ContractZombieHotspot",
		"params": [],
		"script": "o4416"
	},
	250: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractData.ContractZombieHotspotData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Script Name"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "Zombie Spawn Graph"
			}
		],
		"script": "o15401"
	},
	251: {
		"name": "com.ninjakiwi.sas4.scripts.display.StaticAnimatedNode",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Image to stick to avatars position"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "Animated sprite?"
			},
			{
				"id": 6,
				"type": "UTF8",
				"opt": 0,
				"name": "Loop label"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "Stop on end frame?"
			}
		],
		"script": "o14856"
	},
	252: {
		"name": "com.ninjakiwi.sas4.scripts.display.BlendModeNode",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Image Node"
			},
			{
				"id": 2,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Subtract"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Add"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Multiply"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Erase"
			},
			{
				"id": 6,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Normal"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Screen"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "Colour None"
			},
			{
				"id": 9,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Add PM"
			},
			{
				"id": 10,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Normal PM"
			},
			{
				"id": 11,
				"type": "boolean",
				"opt": 0,
				"name": "Colour Screen PM"
			}
		],
		"script": "o4074"
	},
	253: {
		"name": "com.ninjakiwi.sas4.scripts.contracts.contractScripts.TerminalData",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "Terminal Name"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Terminal Image"
			}
		],
		"script": "o7950"
	},
	254: {
		"name": "com.ninjakiwi.sas4.scripts.physics.FailSafeTeleportZoneNamed",
		"params": [
			{
				"id": 1,
				"type": "UTF8",
				"opt": 0,
				"name": "ScriptName"
			},
			{
				"id": 2,
				"type": "short",
				"opt": 0,
				"name": "Failsafe Physics Graph"
			},
			{
				"id": 3,
				"type": "boolean",
				"opt": 0,
				"name": "Concave Graph?"
			},
			{
				"id": 4,
				"type": "boolean",
				"opt": 0,
				"name": "Teleport Players?"
			},
			{
				"id": 5,
				"type": "boolean",
				"opt": 0,
				"name": "Is Teleport Location a Graph?"
			},
			{
				"id": 6,
				"type": "short",
				"opt": 0,
				"name": "Player Teleport Location"
			},
			{
				"id": 7,
				"type": "boolean",
				"opt": 0,
				"name": "Teleport Enemies?"
			},
			{
				"id": 8,
				"type": "boolean",
				"opt": 0,
				"name": "Is Teleport Location a Graph?"
			},
			{
				"id": 9,
				"type": "short",
				"opt": 0,
				"name": "Enemy Teleport Location"
			},
			{
				"id": 10,
				"type": "boolean",
				"opt": 0,
				"name": "Ignore Dark Minions?"
			}
		],
		"script": "o15830"
	},
	255: {
		"name": "com.ninjakiwi.sas4.scripts.loot.FestivalHolidayLootSpawn",
		"params": [
			{
				"id": 1,
				"type": "short",
				"opt": 0,
				"name": "Node Location"
			},
			{
				"id": 2,
				"type": "int",
				"opt": 0,
				"name": "Spawn Chance"
			}
		],
		"script": "o10909"
	}
};