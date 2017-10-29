function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Apho_fBsREzpr_3XF00IG0TFAznxtp2mTE_6asHkHJTsylYXrt0lmavrW8ED0dvl'
    });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), 
                                             { icon: 'https://github.com/chenchen2018/pokemongo-frontend/tree/master/pushpins',
        });
    map.entities.push(pushpin);
}
