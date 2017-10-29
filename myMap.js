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

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Apho_fBsREzpr_3XF00IG0TFAznxtp2mTE_6asHkHJTsylYXrt0lmavrW8ED0dvl'
    });
    map_manager.map = map;
    
    for (var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), 
                                         { icon: 'https://chenchen2018.github.io/pokemongo-frontend/pushpins/' + map_item["pokemon_id"] + '.png',
    });
        map.entities.push(pushpin);
    }
}
