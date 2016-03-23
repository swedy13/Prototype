/* Meteor.call('getGame', function(error, results) {
   var summonerId = summonerId;
   var games      = results.data.games;

   // Schema
   var gameId     = games.gameId;
   var invalid    = games.invalid;
   var gameMode   = games.gameMode;
   var gameType   = games.gameType;
   var subType    = games.subType;
   var mapId      = games.mapId;
   var teamId     = games.teamId;
   var championId = games.championId;
   var spell1     = games.spell1;
   var spell2     = games.spell2;
   var level      = games.level;
   var ipEarned   = games.ipEarned;
   var createDate = games.createDate;
   
   var fellowPlayers = [];
   (function getFellows() {
   for (var i = 0; i < games.length; i++) {
   fellowPlayers.push(games[i].fellowPlayers);
   }
   })();
   // summonerId defined above
   // teamId defined above
   // chapmionId defined above

   function getStats(statName) {
   var stat  = 'games[i].stats.' + statName;
   
   for (var i = 0; i < games.length; i++) {
   eval(statName).push(eval(stat));
   }
   }
   var inGameLevel = [];
   var goldEarned = [];
   var numDeaths = [];
   var turretsKilled = [];
   var minionsKilled = [];
   var championsKilled = [];
   var goldSpent = [];
   var totalDamageDealt = [];
   var totalDamageTaken = [];
   var killingSprees = [];
   var largestKillingSpree = [];
   var team = [];
   var win = [];
   var largestMultiKill = [];
   var physicalDamageDealtPlayer = [];
   var magicDamageDealtPlayer = [];
   var physicalDamageTaken = [];
   var magicDamageTaken = [];
   var timePlayed = [];
   var totalHeal = [];
   var totalUnitsHealed = [];
   var assists = [];
   var item0 = [];
   var item1 = [];
   var item2 = [];
   var item3 = [];
   var item4 = [];
   var item5 = [];
   var item6 = [];
   var magicDamageDealtToChampions = [];
   var physicalDamageDealtToChampions = [];
   var totalDamageDealtToChampions = [];
   var trueDamageTaken = [];
   var totalTimeCrowdControlDealt = [];
   var bountyLevel = [];

   getStats('win');

   var wins = win.filter(function(i) {
   return i;
   }).length;
   var losses = win.length - wins;
   var winRate = (wins / win.length) * 100;
   });
 */
















/* {
   summonerId: summonerId,
   games: [
   {
   gameId: gameId,
   invalid: invalid,
   gameMode: gameMode,
   gameType: gameType,
   subType: subType,
   mapId: mapId,
   teamId: teamId,
   championId: championId,
   spell1: spell1,
   spell2: spell2,
   level: level,
   ipEarned: ipEarned,
   createDate: createDate,
   fellowPlayers: [
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   { summonerId: summonerId,teamId: teamId,championId: championId },
   ],
   stats: {
   level: level,
   goldEarned: goldEarned,
   numDeaths: numDeaths,
   turretsKilled: turretsKilled,
   minionsKilled: minionsKilled,
   championsKilled: championsKilled,
   goldSpent: goldSpent,
   totalDamageDealt: totalDamageDealt,
   totalDamageTaken: totalDamageTaken,
   killingSprees: killingSprees,
   largestKillingSpree: largestKillingSpree,
   team: team,
   win: win,
   largestMultiKill: largestMultiKill,
   physicalDamageDealtPlayer: physicalDamageDealtPlayer,
   magicDamageDealtPlayer: magicDamageDealtPlayer,
   physicalDamageTaken: physicalDamageTaken,
   magicDamageTaken: magicDamageTaken,
   timePlayed: timePlayed,
   totalHeal: totalHeal,
   totalUnitsHealed: totalUnitsHealed,
   assists: assists,
   item0: item0,
   item1: item1,
   item2: item2,
   item3: item3,
   item4: item4,
   item5: item5,
   item6: item6,
   magicDamageDealtToChampions: magicDamageDealtToChampions,
   physicalDamageDealtToChampions: physicalDamageDealtToChampions,
   totalDamageDealtToChampions: totalDamageDealtToChampions,
   trueDamageTaken: trueDamageTaken,
   totalTimeCrowdControlDealt: totalTimeCrowdControlDealt,
   bountyLevel: bountyLevel
   }
   }
   } */








