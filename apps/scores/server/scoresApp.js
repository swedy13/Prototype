Meteor.methods({
  getGamesAPI: function() {
    this.unblock();

    try {
      var api = HTTP.get('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/24161654/recent?api_key=8474a04f-aa41-4b27-aa70-cf40ee0b5447');
    }
    catch (error) {
      throw new Meteor.Error(error.getMessage());
    }

    if (api.statusCode == 200) {
      // Saves game ID's for future lookup
      var games   = api.data.games;
      var date    = games.createdAt;
      var player  = api.data.summonerId;
      var user    = Meteor.users.findOne(this.userId);
      
      _.each(games, function(game) {
        if (LoLGameCollection.find({gameId: game.gameId}).count() == 0) {
          LoLGameCollection.insert({
            gameId: game,
            createdAt: date,
            summonerId: player,
            userId: user,
          });
          console.log('Added game #' + game.gameId + " to the database");
        }
        else {
          console.log('There is already an entry for game #' + game.gameId);
        }
      });
      
      // Returns the API
      return api.data;
    }
    else {
      throw new Meteor.Error('HTTP get status ' + api.statusCode);
    }
  }

  /* getChampionsAPI: function() {
     this.unblock();
     var api = HTTP.get('https://ddragon.leagueoflegends.com/cdn/6.5.1/data/en_US/champion.json');

     var id = api.data.chapmion;
     var name = api.data.
     } */
});
