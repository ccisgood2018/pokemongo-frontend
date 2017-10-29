var map_manager = {
    "map": null,
    "map_items": []
}

function query_pokemon_data() {
    var bounds = map_manager.map.getBounds();
    var apigClient = apigClientFactory.newClient();
    var params = {
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest()
    };
    apigClient.mapPokemonGet(params, {}, {})
        .then(function(result){
            map_manager.map_items = result.data;
        }).catch( function(result){
            console.log(result);
        });
}

function get_count_down_from_timestamp(expire) {
    var now_time = new Date().getTime() / 1000;
    var time_left = expire - now_time;
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}
    

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Apho_fBsREzpr_3XF00IG0TFAznxtp2mTE_6asHkHJTsylYXrt0lmavrW8ED0dvl'
    });
    map_manager.map = map;
    query_pokemon_data();
    window.setInterval(refresh_pokemon, 1000);
}

function refresh_pokemon() {
    // 1. prepare pushpins
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var icon_url = 'https://chenchen2018.github.io/pokemongo-frontend/pushpins/' + map_item["pokemon_id"] + '.png';
        var count_down = get_count_down_from_timestamp(map_item["expire"]);
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude = map_item["latitude"], longitude = map_item["longitude"]),
                                         {title: count_down, 
                                          icon: icon_url});
        pushpins.push(pushpin);
    }
    layer.add(pushpins);
    
    // 2. remove old pushpins
    map_manager.map.layers.clear();
    // 3. add new pushpins
    map_manager.map.layers.insert(layer);
}
