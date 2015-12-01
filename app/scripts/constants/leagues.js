angular.module('fotbollskalendernWebApp').constant('Leagues', [
        {
            name: 'Premier league',
            url: 'http://api.football-data.org/v1/soccerseasons/398/fixtures',
            table: 'http://api.football-data.org/v1/soccerseasons/398/leagueTable'
        },
        {
            name: 'La liga',
            url: 'http://api.football-data.org/v1/soccerseasons/399/fixtures',
            table: 'http://api.football-data.org/v1/soccerseasons/399/leagueTable'
        },
        {
            name: 'Bundesliga',
            url: 'http://api.football-data.org/v1/soccerseasons/394/fixtures',
            table: 'http://api.football-data.org/v1/soccerseasons/394/leagueTable'
        },
        {
            name: 'Serie A',
            url: 'http://api.football-data.org/v1/soccerseasons/401/fixtures',
            table: 'http://api.football-data.org/v1/soccerseasons/401/leagueTable'
        },
        {
            name: 'Franskaligan',
            url: 'http://api.football-data.org/v1/soccerseasons/396/fixtures',
            table: 'http://api.football-data.org/v1/soccerseasons/396/leagueTable'
        }
    ]);
