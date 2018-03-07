// Leaflet - Return to Map Center [Created and maintained by pwldp | https://github.com/pwldp/leaflet.viewcenter]
L.Control.ViewCenter = L.Control.extend({
    options: {
        position: 'bottomright',
        title: 'Return to Default Extent',
        forceSeparateButton: true,
        // declare home coordinates
        vcLatLng: [39.925, -74.539],
        vcZoom: 10
    },

    onAdd: function(map) {
        var className = 'leaflet-control-view-center glyphicon glyphicon-home',
            container;

        if (map.zoomControl && !this.options.forceSeparateButton) {
            container = map.zoomControl._container;
        } else {
            container = L.DomUtil.create('div', 'leaflet-bar');
        }

        this._createButton(this.options, className, container, this.setCenterView, map);

        return container;
    },

    _createButton: function(opts, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = opts.title;

        var zoom = opts.vcZoom || 6;

        L.DomEvent
            .addListener(link, 'click', L.DomEvent.stopPropagation)
            .addListener(link, 'click', L.DomEvent.preventDefault)
            .addListener(link, 'click', function() {
                context.setView(opts.vcLatLng, zoom);
            }, context);
        return link;
    }
});

L.control.viewcenter = function(options) {
    return new L.Control.ViewCenter(options);
};


// Project Logo Control
L.Control.ProjectLogo = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'Burlington County Highway Master Plan'
    },
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        // declare IMG path for project logo
        img.src = "img/project-logo-large.png";
        img.style.width = '230px';
        return img;
    },
    onRemove: function(map) {

    }
});

L.control.projectlogo = function(options) {
    return new L.Control.ProjectLogo(options);
}