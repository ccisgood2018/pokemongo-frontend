var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'Apho_fBsREzpr_3XF00IG0TFAznxtp2mTE_6asHkHJTsylYXrt0lmavrW8ED0dvl'
});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: '/pushpins/1.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);
