var map_manager = {
    "map": null,
    "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id": 12,
        "expire": 1509294548,
        "longitude": -73.45,
        "latitude": 40.75
    },
    {
        "pokemon_id": 2,
        "expire": 1509294548,
        "longitude": -73.46,
        "latitude": 40.75
    }
]

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
    refresh_pokemon();
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
